// document.getElementById("name").addEventListener("keyup", valfun1);
// function valfun1(){
// 	var inputtext= document.getElementById("name").val
// 	var letters = /^[A-Za-z]+$/
// 	if (inputtext.value.match(letters)){
// 		document.getElementById("errormsg").innerHTML="";
// 		return true;
// 	}else{
// 		document.getElementById("errormsg").innerHTML="enter a valid name";
// 	return false;
// 	}
// }

$(document).ready(function(){
	$("#contact-form").validate({
		rules:{
			name:{
				required:true,
				minlength:5,
				lettersonly:true
			},
			email:{
				required:true,
				email:true
			},
			subject:{
				required:true,
				minlength:3
			}
		}
	})


	

})