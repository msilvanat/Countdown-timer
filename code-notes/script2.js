const getTimeRemaining = (endtime) => {

    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

// endtime is a property that return the endtime in seconds
// Date.parse method is used to parse a date or string and returns the number of miliseconds
// Math.floor method , is a Js funtion that is used to return the largest integer less than or equal to a given number
// When you have values around the parentesis that means that the operation that is between parentesis take places first

const initializeClock = (id, endtime) => {

    let clock = document.getElementById(id);
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    const updateClock = () => {

        let t = getTimeRemaining(endtime);  

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);

}

let deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

// The dot . represents a class in querySelector
// Slice method is used to extract parts of the string and it returs the extracted parts in a new string, so
// The first character has a position of 0
// However you can use negative numbers, if you use a negative number it wouls make a selection from 
// The end of the string







