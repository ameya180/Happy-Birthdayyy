// Function to calculate days left until the birthday
function updateCountdown() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 10, 30); // November 30
    const msInDay = 24 * 60 * 60 * 1000;

    // Adjust for next year if the birthday has passed this year
    if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    const daysLeft = Math.ceil((birthday - today) / msInDay);
    document.getElementById("countdown").innerText = `${daysLeft} Days to Go! 🎉`;
}

// Function to reveal the celebration message
function revealCelebrationMessage() {
    document.getElementById("celebration-message").classList.remove("hidden");
}

// Initialize the countdown on page load
updateCountdown();
