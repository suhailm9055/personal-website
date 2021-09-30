// // document.getElementById("name").addEventListener("keyup", valfun1);
// // function valfun1(){
// // 	var inputtext= document.getElementById("name").val
// // 	var letters = /^[A-Za-z]+$/
// // 	if (inputtext.value.match(letters)){
// // 		document.getElementById("errormsg").innerHTML="";
// // 		return true;
// // 	}else{
// // 		document.getElementById("errormsg").innerHTML="enter a valid name";
// // 	return false;
// // 	}
// // }

/ // $(document).ready(function(){
// // 	$("#contact-form").validate({
// // 		rules:{
// // // 			name:{
// 			required:true,
// 			minlength:5,
// 	lettersonly:true
// // 			},
// // 			email:{
// // 				required:true,
// // 				email:true
// // 			},
// // 			subject:{
// // 				required:true,
// // 				minlength:3
// // 			}
// // 		}
// // 	})


	

// // })
// $('#contact-submit').click(function (e) {
		
//     //stop the form from being submitted
//     e.preventDefault();
// var error = false;
//         var name = $('#name').val();
//           var email = $('#email').val();
//           var subject = $('#subject').val();
//           var message = $('#message').val();
//         var namecheck =  /^[a-zA-Z]$/;
// if (name.length === 0) {
//     var error = true;
//     $('#name').css('border-color', '#D8000C');
    
//     $('#name').css('color','#fff');
//     document.getElementById("errorname").innerHTML="Name Cannot be Empty";

// }else if(name == name.match(/^[a-zA-Z]+$/)){
//     var error = false;
//     $('#name').css('background-color' ,'#e8f0fe');
//     $('#name').css('border-color', '#666');
//     $('#name').css('color','#111');
//     document.getElementById("errorname").innerHTML="";
// } else{
    
//     var error = true;
//     $('#name').css('border-color', '#D8000C');

//     $('#name').css('color','#fff');
//     document.getElementById("errorname").innerHTML="Please input a valid name ";
// }
// var emailCheck =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
// if (email.length === 0 ) {
//     var error = true;
//     $('#email').css('border-color', '#D8000C');
//     $('#email').css('color','#fff');

//     document.getElementById("erroremail").innerHTML="Email Cannot be Empty";
// // } else if(email.indexOf('@') === '-1'){
// }else if(emailCheck.test(email)){
//     var error = false;
//     $('#email').css('border-color', '#666');
//     $('#email').css('background-color' ,'#e8f0fe');
//     $('#email').css('color','#111');
//     document.getElementById("erroremail").innerHTML="";
// }else{
//     var error = true;
//     $('#email').css('border-color', '#D8000C');
//     $('#email').css('color','#fff');
    
//     document.getElementById("erroremail").innerHTML="Please input a valid email address!";
// }
// if (subject.length === 0) {
//     var error = true;
//     $('#subject').css('border-color', '#D8000C');
//     $('#subject').css('color','#fff');
    
//     document.getElementById("errorsub").innerHTML="Subject Cannot be Empty ";
// } else if(subject.length<5){
//     var error = true;
//     $('#subject').css('border-color', '#D8000C');
    
//     $('#subject').css('color','#fff');
//     document.getElementById("errorsub").innerHTML="Please type alteast 5 charecters ";
    
// }else{
//     var error = false;
//     $('#subject').css('border-color', '#666');
//     $('#subject').css('background-color' ,'#e8f0fe');
//     $('#subject').css('color','#111');
//     document.getElementById("errorsub").innerHTML="";
// }
// if (message.length === 0) {
//     var error = true;
//     $('#message').css('border-color', '#D8000C');
//     $('#message').css('color','#fff');
    
//     document.getElementById("errormsg").innerHTML="Message Cannot be Empty ";
// } else if(message.length<5){
//     var error = true;
//     $('#message').css('border-color', '#D8000C');
    
//     $('#message').css('color','#fff');
//     document.getElementById("errormsg").innerHTML="Please type alteast 5 charecters ";
// }else{
//     var error = false;
//     $('#message').css('border-color', '#666');
//     $('#message').css('background-color' ,'#e8f0fe');
//     $('#message').css('color','#111');
//     document.getElementById("errormsg").innerHTML="";
// }

//  if(error===false){
//         $("#contact-form").submit((e)=>{
    
//             e.preventDefault()
//             $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbyvCPI5usFZx7atGY8_aZWMaNu0_YiQ1k4OUvoAii_ZQXtgdAzmcZx97qm9yMqzYXOG/exec",
//         data:$("#contact-submit").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })

    
// });	  
// }
// });