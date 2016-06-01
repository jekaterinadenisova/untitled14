/**
 * Created by Екатерина on 31.05.2016.
 */
function farenheitToCelsium()
{
    var input = Number (document.getElementById("inputFarenheit").value);
    var result = (input*(9/5))+32;
    document.getElementById("result").innerHTML=input+'\xB0 C is '+result+'\xB0F';
}


function celsiumToFarenheit()
{
    var input = Number (document.getElementById("inputCelsium").value);
    var result = (input-32)/(9/5);
    document.getElementById("result").innerHTML=input+'\xB0 F is '+result+'\xB0C';
    document.getElementById("inputFarenheit").value = '';
}