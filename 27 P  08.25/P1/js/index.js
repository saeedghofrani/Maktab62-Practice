// function soundAlarm() {
//     var audio = new Audio('../Sound effect- Alarm Clock Beeps 1.mp3');
//     audio.play();
// }

// $(document).ready(function () {
//     // Set the date we're counting down to
//     var countDownDate = new Date();
//     console.log(countDownDate);

//     // Update the count down every 1 second
//     var x = setInterval(function () {

//         // Get today's date and time
//         var nowSecond = new Date().getSeconds();
//         var nowMinutes = new Date().getMinutes();
//         var nowHours = new Date().getHours();

//         // Find the distance between now and the count down date
//         var distance = countDownDate - now;

//         // Time calculations for days, hours, minutes and seconds
//         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         // Output the result in an element with id="demo"
//         $("#hour").html(`${hours} :`);
//         $('#menute').html(`${minutes}:`);
//         $('#second').html(seconds);

//         // If the count down is over, write some text 
//         if (hours < 0 && minutes < 0 && seconds <= 0) {
//             clearInterval(x);
//             soundAlarm();
//         }
//     }, 1000);

//     $('#start').click(function (e) {
//         e.preventDefault();
//         let txtStart = $(this).text();
//         console.log(txtStart);
//         if (txtStart === 'Start') {
//             txtStart = 'pause';
//         }
//         else {
//             txtStart = 'Start';
//         }
//     });

//     $('#chooseTimerCount').change(function (e) {
//         e.preventDefault();
//         if ($('#chooseTimerCount').val() === 'coustom') {
//             $('.coustome').css('display', 'block');
//         }
//     });
//     $('#done').click(function (e) {
//         e.preventDefault();
//         let value = Number($('#CoustomChose').val());
//         console.log(value);
//     });
// });

let times = 0.1;
let x = times * 60;
console.log(x);
console.log(times);
let set = setInterval(function () {
    var secend, min, hour, mins;
    x = x - 1;
    secend = x % 60;
    min = Math.floor(x / 60);
    hour = Math.floor(min / 60);
    mins = min % 60;
    if (secend < 10) secend = `0${secend}`;
    if (hour < 10) hour = `0${hour}`;
    if (mins < 10) mins = `0${mins}`;
    if (mins == "00" && hour == "00" && secend == "00"){
        clearInterval(set);
    }
    console.log(hour, mins, secend);
}, 1000);







function time(x) {
    var secend, min, hour, mins;
    x = x - 1;
    secend = x % 60;
    min = Math.floor(x / 60);
    hour = Math.floor(min / 60);
    mins = min % 60;
    if (secend < 10) secend = `0${secend}`;
    if (hour < 10) hour = `0${hour}`;
    if (mins < 10) mins = `0${mins}`;
    console.log(hour, mins, secend);
}
