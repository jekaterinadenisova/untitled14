/**
 * Created by Екатерина on 31.05.2016.
 */

var str = 'w3resource';

coupLine(str);

function coupLine(str)
{
    for(var i=0;i<str.length;i++){
       str = str[str.length-1] + str.substring(0,str.length-1);
        console.log(str);
    }
}
