/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function () 
{

    // your code here
    

    document.getElementById("run").addEventListener("click", function() 
    {
    	var time = new Date();
	    var day = time.getDate();
	    var month = time.getMonth();
	    var year = time.getFullYear();
	    var bday = parseInt (document.getElementById("dob-day").value,10);
	    var bmonth = parseInt (document.getElementById("dob-month").value,10);
	    var byear = parseInt (document.getElementById("dob-year").value,10);
	    if (month<bmonth) {console.log(year - byear -1);}
	    else if (month==bmonth)
	    {
	    	if (day<bday) {console.log(year-byear-1);}
	    	else {console.log(year-byear);}
	    }
	    else
	    {
	    	console.log(year-byear);
	    }
	})    
})()