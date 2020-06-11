/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    var time = new Date();
    
    document.getElementById("run").addEventListener("click", function()
    {
    	var myyear = document.getElementById("year").value;
    	time.setYear(myyear);
    	time.setDate(13);
    	
    	var month;
    	for (month=0;month<=12;month++)

    	{		
    	time.setMonth(month);

    	switch (month)
    		{
		    	case 0: monthN="January"; break;
		    	case 1: monthN="February"; break;
		    	case 2: monthN="March"; break;
		    	case 3: monthN="April"; break;
		    	case 4: monthN="May"; break;
		    	case 5: monthN="June"; break;
		    	case 6: monthN="July"; break;
		    	case 7: monthN="August"; break;
		    	case 8: monthN="September"; break;
		    	case 9: monthN="October"; break;
		    	case 10: monthN="November"; break;
		    	case 11: monthN="December"; break;
    		}
    	var day=time.getDay();
    		if (day==5)
    			{console.log(monthN+" 13th "+myyear+" is a Spooky Friday !");}
    	}
    })

})();
