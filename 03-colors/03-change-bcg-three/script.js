/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));}
    document.getElementById("run").addEventListener("click", function() {document.body.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)});


})();


//'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)});