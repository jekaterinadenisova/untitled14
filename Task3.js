/**
 * Created by Екатерина on 31.05.2016.
 */

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

today = month+'-'+day+'-'+year;
console.log(today);
today = month+'/'+day+'/'+year;
console.log(today);
today = day+'-'+month+'-'+year;
console.log(today);
today = day+'/'+month+'/'+year;
console.log(today);
