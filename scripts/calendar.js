const prevBtn = document.querySelector('.prev-month');
const nextBtn = document.querySelector('.next-month');
const currentMonth = document.querySelector('.current-month');
const calendarBody = document.querySelector('tbody');

// Initialize with the current month
let currentDate = new Date();
let currentMonthIndex = currentDate.getMonth();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' ,'December'];

function populateCalendar() {
    // Clear existing calendar
    calendarBody.innerHTML = '';

    // Calculate days in the current month
    const daysInMonth = new Date(currentDate.getFullYear(), currentMonthIndex + 1, 0).getDate();

    // Create a row for the first week
    let weekRow = document.createElement('tr');
    calendarBody.appendChild(weekRow);

    // Offset for starting date
    // Fill rest with X's
    for (let x = 0; x < getFirstDayOfWeek(2024, currentMonthIndex); x++) {
        // Create a cell
        const cell = document.createElement('td');
        cell.textContent = 'X';
        weekRow.appendChild(cell);
    }

    // Populate days
    for (let day = 1; day <= daysInMonth; day++) {
        // Create a cell for the day
        const cell = document.createElement('td');
        cell.textContent = day;
        weekRow.appendChild(cell);

        // Check if the day is the last day of the week
        if ((day+getFirstDayOfWeek(2024, currentMonthIndex)) % 7 === 0) {
            // Create a new row for the next week
            weekRow = document.createElement('tr');
            calendarBody.appendChild(weekRow);
        }
    }

    // Fill rest with X's
    for (let x = daysInMonth+1+getFirstDayOfWeek(2024, currentMonthIndex); x <= 42; x++) {
        // Create a cell
        const cell = document.createElement('td');
        cell.textContent = 'X';
        weekRow.appendChild(cell);
        // fix calendar
        if (x % 7 === 0) {
            // Create a new row for the next week
            weekRow = document.createElement('tr');
            calendarBody.appendChild(weekRow);
        }
    }

    // Update month name
    currentMonth.textContent = months[currentMonthIndex];
}

function getFirstDayOfWeek(year, month) {
    // Create a date object for the first day of the given month and year
    const firstDayOfMonth = new Date(year, month, 1);
    
    // Get the day of the week for the first day of the month (0 for Sunday, 1 for Monday, etc.)
    const firstDayOfWeek = firstDayOfMonth.getDay();
    
    // Return the first day of the week
    return firstDayOfWeek;
}


// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    currentMonthIndex--;
    currentMonthIndex%=12;
    populateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentMonthIndex++;
    currentMonthIndex%=12;
    populateCalendar();
});

// Initial population
populateCalendar();
