/**
 * Created by Екатерина on 31.05.2016.
 */
find();
function find()
{
    var firstYear = 2014;
    var lastYear = 2050;
    var dayOfWeek = 3;
    firstYear++;
    for(;firstYear<=lastYear;firstYear++)
    {
        var Year = firstYear%100 ==0 ?  firstYear %400 == 0 :  firstYear%4 == 0;

        dayOfWeek = Year ? dayOfWeek+2 : dayOfWeek+1;
        dayOfWeek = dayOfWeek > 7 ? dayOfWeek-7 : dayOfWeek;

        if(dayOfWeek == 7)
            console.log(firstYear);
    }
}