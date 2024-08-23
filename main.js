//! task1
// setInterval(function() {
//     document.getElementById("myspan").innerHTML = "Урааа";
// }, 10000);

//! task2
// const i = setInterval(
//     function () {
//       var randomColor = Math.floor(Math.random()*16777215).toString(16);
//       document.getElementById("background").style.backgroundColor = "#"+randomColor;
//     },500);
//     setTimeout(function() { clearInterval(i); }, 60000);
    
//! task3
// document.addEventListener('DOMContentLoaded', function () {
//     let timeInput = document.querySelector('.time-input');
//     let timeButton = document.querySelector('.time-button')
//     let timeBlock = document.querySelector('.time-block');
//     function inputTime() {
//       timeBlock.textContent = timeInput.value;
//     }
//     let timerID;
//     function start() {
//       clearInterval(timerID); 
//       let time = parseInt(timeInput.value); 
//       timerID = setInterval(function() {
//         const res = --time; 
//         timeBlock.textContent = res; 
//         if (!res) clearInterval(timerID);
//       }, 1000)
//     }
//     timeButton.addEventListener('click', start);
//     timeInput.addEventListener('input', inputTime);
//     });
