function markAsDone(index) {
    const buttons = document.querySelectorAll('.progress-button');
    const currentButton = buttons[index];
    let canCheck = true;

    // Ensure all previous buttons are completed
    for (let i = 0; i < index; i++) {
        if (!buttons[i].classList.contains('completed')) {
            canCheck = false;
            break;
        }
    }

    if (!canCheck) {
        alert('Please complete previous tasks first.');
    } else {
        const total = buttons.length;
        let completed = 0;

        buttons.forEach((button, idx) => {
            const timelineContent = button.parentNode;
            if (idx <= index) {
                completed++;
                timelineContent.classList.add('completed');
                button.classList.add('completed');
                button.disabled = true;
            }
        });

        const percentage = (completed / total) * 100;
        const progressBar = document.getElementById('progress-bar');
        const progressPercentage = document.getElementById('progress-percentage');

        progressBar.style.width = percentage + '%';
        progressPercentage.textContent = percentage.toFixed(0) + '%';

        if (percentage === 100) {
            progressBar.style.background = 'green';
            displayCongratulationsMessage();
        } else {
            progressBar.style.background = '#ff5e57';
        }
    }
}

function displayCongratulationsMessage() {
    const message = document.getElementById('congratulations-message');
    message.classList.remove('hidden');
}
