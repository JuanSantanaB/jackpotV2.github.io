document.addEventListener('DOMContentLoaded', function() {
    // Array of questions
    const questions = [
        "Wat zou je met deze 5.5 jaar van je leven hebben willen doen als je deze niet op social media had doorgebracht?",
        "Wat denk je dat deze 5,5 jaar later op social media voor jou betekend zullen hebben of wat voor toevoeging aan je leven hebben gehad?",
        "Nu je weet hoelang je gedurende je hele leven op social media zal zitten, zal dit nog hetzelfde blijven en waarom?"
        // Add more questions as needed
    ];

    const questionsList = document.getElementById('questionsList');

    // Shuffle the questions array
    shuffleArray(questions);

    // Index to keep track of displayed questions
    let currentIndex = 0;

    // Display initial question
    displayNextQuestion();

    // Function to display the next question
    function displayNextQuestion() {
        // Check if all questions have been displayed
        if (currentIndex >= questions.length) {
            console.log("All questions have been displayed");
            return;
        }

        // Create a list item for the question
        const li = document.createElement('li');
        li.textContent = questions[currentIndex];

        // Append the question to the list
        questionsList.appendChild(li);

        // Fade in animation using GSAP
        gsap.from(li, { opacity: 0, duration: 1.5 });

        // Increment currentIndex
        currentIndex++;
    }

    // Function to shuffle the array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Add event listener to the button
    document.getElementById('returnButton').addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirect to the first page
    });
});
