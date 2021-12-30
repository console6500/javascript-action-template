// require the libraries for actions
const core = require('@actions/core');
const github = require('@actions/github');

// use an async function for the main tasks
async function main() {

    // use try+catch to manage any errors
    try {
        // const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN', { required: true });
        // const input_1 = core.getInput('input_1', { required: true });
        // core.setOutput('output_1', 'The value for the output');
        console.log('Hello, Universe!')
    } catch (error) {
        core.setFailed(error.message);
    }
}

// call the function
main();
