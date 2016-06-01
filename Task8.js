/**
 * Created by Екатерина on 31.05.2016.
 */

function getRandomInt(min, max)
{
    min = 0;
    max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var num = + prompt("Input your number: ",'');
if(num==getRandomInt()){
    alert("Good work!");
}
else alert("Not matched");
