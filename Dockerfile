# image de départ
# FROM alpine:3.15
FROM alpine:3.15 as builder

# chemin de travail
WORKDIR /architecture-cloud

# installation des paquets système
#  RUN ...
# RUN echo 'we are running some # of cool things'
RUN apk add --update nodejs npm
RUN apk add --update npm


# CMD ["echo", "Hello test test"]
# ajout utilisateur node et groupe node
#RUN . .

# downgrade des privilèges
#  USER ...

# copie des fichiers du dépôt
COPY . .

# installation des dépendances avec npm
RUN npm install

# build avec npm
RUN npm run build

# exécution
#  CMD ...
#-------------------------------------------------

FROM alpine:3.15 as runner

WORKDIR /architecture-cloud

# installation des paquets système
RUN apk add --update nodejs

# creer utilisateur et groupe node / node
RUN addgroup -S node && adduser -S node -G node


# copie des fichiers du dépôt a partir de l'ancien build

COPY --from=builder --chown=node:node /architecture-cloud/node_modules node_modules
COPY --from=builder --chown=node:node /architecture-cloud/dist dist

#COPY --from=builder td1\architecture-cloud\src ./

USER node

#CMD ["node", "/architecture-cloud/src/systemInfo.js"] 
CMD ["node", "/architecture-cloud/dist/index.js"] 