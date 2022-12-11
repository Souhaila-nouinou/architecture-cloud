import { helloWorld } from './index';
import mySysInfo from './systemInfo';
import { Myserver } from './myServer';
import http from 'http';


// import syssysinfo from './systemInfo';

describe('typeScript test suite', () => {
  it('should return "Hello world!"', () => {
    expect.assertions(1);
    expect(helloWorld()).toBe('Hello world!');
  });
});

describe('this test makes sure that the sys info is the right url ', () =>{
  it('should return 200', async() => {
    http.get('http://localhost:8082/api/v1/sysinfo', 
    (results)=> { 
    const { statusCode } = results;
    expect(statusCode).toBe('200');
    })
  });
});

describe('this test makes sure that wrong url returns 404 ', () =>{
  it('should return 404', async() => {
    http.get('http://localhost:8082', 
    (results)=> { 
    const { statusCode } = results;
    expect(statusCode).toBe('404');
    })
  });
});

// describe('first test', () =>{


//   it('should return something ?', syssysinfo () => {
//     expect.assertions(1);
//     const data = await syssysinfo();
//     expect(data).toHaveProperty('cpu');

//   });


// });