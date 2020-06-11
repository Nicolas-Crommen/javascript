/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var day = time.getDay();
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();


    var dayN;

    switch (day)
    {
    	case 0: dayN="Sunday"; break;
    	case 1: dayN="Monday"; break;
    	case 2: dayN="Tuesday"; break;
    	case 3: dayN="Wednesday"; break;
    	case 4: dayN="Thursday"; break;
    	case 5: dayN="Friday"; break;
    	case 6: dayN="Saturday"; break;
    }


    var monthN;

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

    document.getElementById("target").innerHTML= dayN+" "+date+" "+monthN+" "+year+", "+hour+"h"+minute;

})();
