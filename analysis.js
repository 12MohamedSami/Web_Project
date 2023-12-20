function toggleMessage() {
    var message = document.getElementById('hiddenMessage');
    message.style.display = (message.style.display === 'none' || message.style.display === '') ? 'block' : 'none';
}

const userName = prompt('What is your name?');

    // Display a greeting
    if (userName) {
    alert(`Hello, ${userName}! Welcome to Data Analysis Website.`);
    } else {
    alert('Hello, anonymous! Welcome to Data Analysis Website.');
    }

    const paragraphColors = ['darkred', 'darkblue', 'black'];
        let currentColorIndex = 0;

        function changeParagraphColors() {
            const paragraphs = document.querySelectorAll('p');

            paragraphs.forEach(paragraph => {
                paragraph.style.color = paragraphColors[currentColorIndex];
            });

            // Increment the color index or reset to 0 if reached the end
            currentColorIndex = (currentColorIndex + 1) % paragraphColors.length;
        }