/**
 * Created by Екатерина on 31.05.2016.
 */
var date = new Date();
function getWeekDay(date) {
    date = date || new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = date.getDay();

    return days[day];
}


function addZero(n) {
    return (n >= 0 && n < 10) ? "0" + n : n + "";
}

function get12FormatTime(){

    var dt = new Date(),
        hours24 = dt.getHours(),
        hours = ((hours24 + 11) % 12) + 1;

    return [[addZero(hours), addZero(dt.getMinutes())].join(" PM :"),
        hours24 > 11 ? "" : ""].join(" ");

}

console.log("Today is: "+getWeekDay(date)+"\nCurrent time is : "+get12FormatTime());
