/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var x = document.querySelector('[data-image]');
    var y = x.dataset.image;
    console.log(y);
    document.querySelector("#target").innerHTML="<img src="+y+">";

})();

//img src=y
