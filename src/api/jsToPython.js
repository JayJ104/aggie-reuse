var exec  = require('child_process').exec;

// Function to execute the Python program
export default function runPythonProgram(callback) {
  exec('python ../Data/testImage.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python program: ${error}`);
      return;
    }
    callback(stdout);
    console.log(`Output from Python program: ${stdout}`);
  });
}
