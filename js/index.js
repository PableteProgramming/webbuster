$(function(){
	$("body").hide().fadeIn(1000);
})

$(document).ready(function () {
	bsCustomFileInput.init()
})

function Search(){
	var fr=new FileReader();
	let input= document.getElementById("inputGroupFile04");
	fr.readAsText(input.files[0])
	fr.onload = function(e) {
 		let content= fr.result;
		//content is now the file content
	};;
}
