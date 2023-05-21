const { exec } = require('child_process');

// Function to execute the Python program
export default function runPythonProgram(callback) {
  exec('python ../Data/testImage.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python program: ${error}`);
      return;
    }
    callback(stdout);
  });
}

// Trigger the Python program and receive the output
runPythonProgram((output) => {
  console.log(`Output from Python program: ${output}`);
});