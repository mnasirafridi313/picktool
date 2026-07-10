document.addEventListener("DOMContentLoaded", function() {
    const calendarDisplay = document.getElementById("calendar-display");

    // Get current dates using moment.js
    const now = moment();
    const gregorianDate = now.format("MMMM Do, YYYY");
    const islamicDate = now.format("iYYYY/iM/iD");

    calendarDisplay.innerHTML = `
        <div style="text-align: center; font-size: 18px;">
            <p><strong>Today's Gregorian Date:</strong><br>${gregorianDate}</p>
            <p><strong>Today's Islamic Date:</strong><br>${islamicDate} AH</p>
        </div>
    `;
});
