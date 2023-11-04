// I am currently working on a real-time project.
function updateclock(){
const time = new Date()
let hours = time.getHours() 
let minutes = formatTime(time.getMinutes()) 
let second = formatTime(time.getSeconds())
let ampm  = "AM"

// Convert a time given in 24-hour format into a time in 12-hour format.
if(hours > 12 ){
    hours -= 12
    ampm = "PM"  
}
// Create a readable time format.
function formatTime(time){
    if(time < 10) return "0" + time;
    return time; 
}

document.querySelector(".hour").textContent = hours + " : "
document.querySelector(".minute").textContent = minutes 
document.querySelector(".second").textContent =  " : " + second
document.querySelector(".ampm").textContent = ampm

}

// Update the time in real-time.
setInterval(updateclock,1000) 

// I am developing a program that displays the current date with day and month accurately.
const Data_DDM = new Date()
let date = Data_DDM.getDate()
let day = Data_DDM.getDay()
let month = Data_DDM.getMonth()
let year = Data_DDM.getFullYear()
// All Days name in Array 
let dayName = {
    0 : "Sunday",
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday"
}
// All Months name in Array 
let monthName = {
    0 : "January",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December",
}

document.querySelector(".date").textContent = date + " , "
document.querySelector(".month").textContent = monthName[month] + " , " 
document.querySelector(".year").textContent =  year  
document.querySelector(".day").textContent = dayName[day] + " , "