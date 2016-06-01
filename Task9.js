/**
 * Created by Екатерина on 31.05.2016.
 */
console.log(getCountDayLeftUntilChristmas());

function getCountDayLeftUntilChristmas()
{
    var currentDay = new Date();
    var Christmas;
    if(currentDay.getMonth()>0)
        Christmas = new Date(currentDay.getFullYear()+1,0,7);
    else if(currentDay.getDate()>7)
        Christmas = new Date(currentDay.getFullYear()+1,0,7);
    else Christmas = new Date(currentDay.getFullYear(),0,7);

    var countDays = Christmas - currentDay;

    countDays  =( countDays / 60 / 60 / 24/1000);

    return Math.floor(countDays) + " day(s)";
}