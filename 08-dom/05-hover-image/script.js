/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	

    let x = document.querySelector('[data-hover]');
    let y = x.dataset.hover;
    console.log(y);
    let z = x.src;
    console.log(z);

    x.onmouseover = function a(){z=y;};

   /* function over() {z=y;};
    x.addEventListener("mouseover", over); */
    

})()
