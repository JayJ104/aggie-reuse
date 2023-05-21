import {PythonShell} from 'python-shell';

//let {PythonShell} = require('python-shell')


function runCode(){
  PythonShell.run('../../Data/testImage.py', null).then(messages=>{
    console.log('results: %j', results);
  });
};