function handleKeyDown(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('commandLine');
        const command = input.value;
        const outputDiv = document.getElementById('output');

        if (command === 'help') {
            outputDiv.innerHTML += '<p>Available commands: cv</p>';
        } else if (command === 'cv') {
            outputDiv.innerHTML += '<p>Your CV text goes here...</p>';
        } else {
            outputDiv.innerHTML += '<p>Command not found. Type "help" for available commands.</p>';
        }

        input.value = '';
    }
}
