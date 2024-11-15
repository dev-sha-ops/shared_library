const core = require('@actions/core');

try {
    // Get the input value
    const inputValue = core.getInput('tags');

    // Validate that the input is a string
    if (typeof inputValue !== 'string' || inputValue.trim() === '') {
        throw new Error('The input must be a non-empty string.');
    }

    // Log the input value
    core.info(`Input value is valid: ${inputValue}`);

    // Set the output value
    core.setOutput('validated-input', inputValue);
} catch (error) {
    // Fail the action and print the error message
    core.setFailed(error.message);
}
