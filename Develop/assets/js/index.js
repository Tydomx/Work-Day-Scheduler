mainStorage = window.localStorage;

// variables to show the current hour and day
var hour = moment().format('h:mm:ss a');
var currentDay = moment().format('ddd') + " " + moment().format('MMM DD YYYY');
var userInput;
var hourSpan;

// variable for hour of a workday
var hour9 = $('#9:00am');

$('#currentDay').text(currentDay);


// uses local storage to store event set into calendar
function workScheduleEvents() {
    var event = JSON.parse(localStorage.getItem('9:00 am'));
    hour9.val(event);
}

// change background color based on past/future/present
function editColor() {
    $('.form-control').each(function () {
        var timeId = parseInt($(this).attr('id'));
        hour = parseInt(hour);
        console.log(timeId);
        console.log(hour);

        if (hour > timeId) {
            $(this).addClass('past');
        } else if (hour < timeId) {
            $(this).addClass('future');
        } else {
            $(this).addClass('present');
        }
    });
}

$(document).ready(function () {
    workScheduleEvents()
    editColor()

    // save button
    $('.saveBtn').on('click', function () {
        userInput = $(this).siblings('.form-control').val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings('.input-group-prepend').text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, userInput);
    })
});