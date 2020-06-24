/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	document.getElementById("run").addEventListener("click", () => {
	window.lib.getPosts(callback1);
	})

	function callback1(error,array) 
	{
		console.table(array);
		array.forEach(element =>
		{
			element.comments = window.lib.getComments(element.id,callback2);
			function callback2(error,arrayCom){}
		})	
		
		console.table(array);
		
	}


})()

