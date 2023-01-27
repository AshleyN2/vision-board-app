const visionForm = document.getElementById('vision-form');
const visionInput = document.getElementById('vision-input'); 

// Handle form submission
visionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const vision = visionInput.value;
    visionInput.value = '';
    socket.emit('vision', vision);
});