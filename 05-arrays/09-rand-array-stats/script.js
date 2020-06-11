/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    numbers= new Array;

	document.getElementById("run").addEventListener("click", function()
    {
        var nb;
        for (it=0;it<=9;it++)
        {
        	nb=Math.floor((Math.random() * 100) + 1);
        	numbers[it]=nb;
        }
        document.getElementById("n-1").innerHTML=numbers[0];
        document.getElementById("n-2").innerHTML=numbers[1];
        document.getElementById("n-3").innerHTML=numbers[2];
        document.getElementById("n-4").innerHTML=numbers[3];
        document.getElementById("n-5").innerHTML=numbers[4];
        document.getElementById("n-6").innerHTML=numbers[5];
        document.getElementById("n-7").innerHTML=numbers[6];
        document.getElementById("n-8").innerHTML=numbers[7];
        document.getElementById("n-9").innerHTML=numbers[8];
        document.getElementById("n-10").innerHTML=numbers[9];

    	var minimum = Math.min(...numbers);
    	document.getElementById("min").innerHTML=minimum;

    	var maximum = Math.max(...numbers);
    	document.getElementById("max").innerHTML=maximum;

    	var sum = numbers.reduce((a, b) => a + b, 0);
    	document.getElementById("sum").innerHTML=sum;

    	var average = sum/10;
    	document.getElementById("average").innerHTML=average;

    })

})();
