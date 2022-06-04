mainStorage = window.localStorage;

// variables to show the current hour and day and the formatting
var hour = moment().format('h:mm:ss a');
var currentDay = moment().format('ddd') + " " + moment().format('MMM DD YYYY');
var userInput;
var hourSpan;

// variable for hours of a workday
var hour9 = $('#9:00am');
var hour10 = $('#10:00am');
var hour11 = $('#11:00am');
var hour12 = $('#12:00pm');
var hour01 = $('#1:00pm');
var hour02 = $('#2:00pm');
var hour03 = $('#3:00pm');
var hour04 = $('#4:00pm');
var hour05 = $('#5:00pm');

// this shows the current day based on user's clock
$('#currentDay').text(currentDay);



// uses local storage to store event set into calendar, using Id from HTML
function workScheduleEvents() {
    var event9 = JSON.parse(localStorage.getItem('9:00 am'));
    hour9.val(event9);
    var event10 = JSON.parse(localStorage.getItem('10:00 am'));
    hour10.val(event10);
    var event11 = JSON.parse(localStorage.getItem('11:00 am'));
    hour11.val(event11);
    var event12 = JSON.parse(localStorage.getItem('12:00 pm'));
    hour12.val(event12);
    var event01 = JSON.parse(localStorage.getItem('1:00 pm'));
    hour01.val(event01);
    var event02 = JSON.parse(localStorage.getItem('2:00 pm'));
    hour02.val(event02);
    var event03 = JSON.parse(localStorage.getItem('3:00 pm'));
    hour03.val(event03);
    var event04 = JSON.parse(localStorage.getItem('4:00 pm'));
    hour04.val(event04);
    var event05 = JSON.parse(localStorage.getItem('5:00 pm'));
    hour05.val(event05);
    
}

// change the background color based on past/future/present
function editColor() {
    $('.form-control').each(function () {
        // timeId is the time that gets compared to decide the background color
        var timeId = parseInt($(this).attr('id'));
        hour = parseInt(hour);

        // comparing hour to hour on schedule 
        if (hour > timeId) {
            $(this).addClass('past');
        } else if (hour < timeId) {
            $(this).addClass('future');
        } else {
            $(this).addClass('present');
            // default color if present
        }
    });
}

$(document).ready(function () {
    // calling both functions
    workScheduleEvents()
    editColor()

    // when user hits save button (cloud icon) userInput and hourSpan get saved into localStorage
    $('.saveBtn').on('click', function () {
        userInput = $(this)
            .siblings('.form-control')
            .val()
            .trim();
        hourSpan = $(this)
            .siblings('.input-group-prepend')
            .text()
            .trim();

        // this sets localstorage as (Key: Time, Value: Userinput)
        localStorage.setItem(hourSpan, userInput);
    })
});