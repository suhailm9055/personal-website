(function ($) {
	'use strict';

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */

	$('#post-thumb, #gallery-post').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000

	});

	$('#features').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});


	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$('#navigation').sticky({
		topSpacing: 0
	});


	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});



	//   magnific popup video
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-zoom-in',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true
	});
	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.portfolio-filter button').on('click', function () {
			$('.portfolio-filter button').removeClass('active');
			$(this).addClass('active');
		});
	});

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	//Init the carousel
	$('#testimonials').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});





	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */


	$('#contact-submit').click(function (e) {

		//stop the form from being submitted
		e.preventDefault();

		/* declare the variables, var error is the variable that we use on the end
		to determine if there was an error or not */
		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();
		
		
		/* in the next section we do the checking by using VARIABLE.length
		where VARIABLE is the variable we are checking (like name, email),
		length is a JavaScript function to get the number of characters.
		And as you can see if the num of characters is 0 we set the error
		variable to true and show the name_error div with the fadeIn effect. 
		if it's not 0 then we fadeOut the div( that's if the div is shown and
		the error is fixed it fadesOut. 
		
		The only difference from these checks is the email checking, we have
		email.indexOf('@') which checks if there is @ in the email input field.
		This JavaScript function will return -1 if no occurrence have been found.*/
		var namecheck =  /^[a-zA-Z]$/;
		if (name.length === 0) {
			var error = true;
			$('#name').css('border-color', '#D8000C');
			$('#name').css('background-color' ,'#591713');
			$('#name').css('color','#fff');
			document.getElementById("errorname").innerHTML="Name Cannot be Empty";
		// }else if(!namecheck.test(name)){
		}else if(name == name.match(/^[a-zA-Z]+$/)){
			$('#name').css('background-color' ,'#e8f0fe');
			$('#name').css('border-color', '#666');
			$('#name').css('color','#111');
			document.getElementById("errorname").innerHTML="";
		} else{
			
			var error = true;
			$('#name').css('border-color', '#D8000C');
			$('#name').css('background-color' ,'#591713');
			$('#name').css('color','#fff');
			document.getElementById("errorname").innerHTML="Please input a valid name ";
		}
		var emailCheck =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
		if (email.length === 0 ) {
			var error = true;
			$('#email').css('border-color', '#D8000C');
			$('#email').css('color','#fff');
			$('#email').css('background-color' ,'#591713');
			document.getElementById("erroremail").innerHTML="Email Cannot be Empty";
		// } else if(email.indexOf('@') === '-1'){
		}else if(emailCheck.test(email)){
			
			$('#email').css('border-color', '#666');
			$('#email').css('background-color' ,'#e8f0fe');
			$('#email').css('color','#111');
			document.getElementById("erroremail").innerHTML="";
		}else{
			var error = true;
			$('#email').css('border-color', '#D8000C');
			$('#email').css('color','#fff');
			$('#email').css('background-color' ,'#591713');
			document.getElementById("erroremail").innerHTML="Please input a valid email address!";
		}
		if (subject.length === 0) {
			var error = true;
			$('#subject').css('border-color', '#D8000C');
			$('#subject').css('color','#fff');
			$('#subject').css('background-color' ,'#591713');
			document.getElementById("errorsub").innerHTML="Subject Cannot be Empty ";
		} else if(subject.length<5){
			var error = true;
			$('#subject').css('border-color', '#D8000C');
			$('#subject').css('background-color' ,'#591713');
			$('#subject').css('color','#fff');
			document.getElementById("errorsub").innerHTML="Please type alteast 5 charecters ";
			
		}else{
			$('#subject').css('border-color', '#666');
			$('#subject').css('background-color' ,'#e8f0fe');
			$('#subject').css('color','#111');
			document.getElementById("errorsub").innerHTML="";
		}
		if (message.length === 0) {
			var error = true;
			$('#message').css('border-color', '#D8000C');
			$('#message').css('color','#fff');
			$('#message').css('background-color' ,'#591713');
			document.getElementById("errormsg").innerHTML="Message Cannot be Empty ";
		} else if(message.length<5){
			var error = true;
			$('#message').css('border-color', '#D8000C');
			$('#message').css('background-color' ,'#591713');
			$('#message').css('color','#fff');
			document.getElementById("errormsg").innerHTML="Please type alteast 5 charecters ";
		}else{
			$('#message').css('border-color', '#666');
			$('#message').css('background-color' ,'#e8f0fe');
			$('#message').css('color','#111');
			document.getElementById("errormsg").innerHTML="";
		}

		//now when the validation is done we check if the error variable is false (no errors)
		if (error === false) {
			//disable the submit button to avoid spamming
			//and change the button text to Sending...
			$('#contact-submit').attr({
				'disabled': 'false',
				'value': 'Sending...'
			});

			/* using the jquery's post(ajax) function and a lifesaver
			function serialize() which gets all the data from the form
			we submit it to send_email.php */
			$.post('sendmail.php', $('#contact-form').serialize(), function (result) {
				//and after the ajax request ends we check the text returned
				if (result === 'sent') {
					//if the mail is sent remove the submit paragraph
					$('#cf-submit').remove();
					//and show the mail success div with fadeIn
					$('#mail-success').fadeIn(500);
				} else {
					//show the mail failed div
					$('#mail-fail').fadeIn(500);
					//re enable the submit button by removing attribute disabled and change the text back to Send The Message
					$('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
				}
			});
		}
	});

})(jQuery);
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();


/* ========================================================================= */
/*	Smooth Scroll
/* ========================================================================= */
var scroll = new SmoothScroll('a[href*=\'#\']');



/* ========================================================================= */
/*	Google Map Customization
/* =========================================================================  */

function initialize() {
	'use strict';

	var myLatLng = new google.maps.LatLng(22.333851, 91.812256);

	var roadAtlasStyles = [{
		'featureType': 'landscape',
		'elementType': 'geometry.fill',
		'stylers': [{
			'color': '#2F3238'
		}]
	}, {
		'elementType': 'labels.text.fill',
		'stylers': [{
			'color': '#FFFFFF'
		}]
	}, {
		'elementType': 'labels.text.stroke',
		'stylers': [{
			'visibility': 'off'
		}]
	}, {
		'featureType': 'road',
		'elementType': 'geometry.fill',
		'stylers': [{
			'color': '#50525f'
		}]
	}, {
		'featureType': 'road',
		'elementType': 'geometry.stroke',
		'stylers': [{
			'visibility': 'on'
		}, {
			'color': '#808080'
		}]
	}, {
		'featureType': 'poi',
		'elementType': 'labels',
		'stylers': [{
			'visibility': 'off'
		}]
	}, {
		'featureType': 'transit',
		'elementType': 'labels.icon',
		'stylers': [{
			'visibility': 'off'
		}]
	}, {
		'featureType': 'poi',
		'elementType': 'geometry',
		'stylers': [{
			'color': '#808080'
		}]
	}, {
		'featureType': 'water',
		'elementType': 'geometry.fill',
		'stylers': [{
			'color': '#3071a7'
		}, {
			'saturation': -65
		}]
	}, {
		'featureType': 'road',
		'elementType': 'labels.icon',
		'stylers': [{
			'visibility': 'off'
		}]
	}, {
		'featureType': 'landscape',
		'elementType': 'geometry.stroke',
		'stylers': [{
			'color': '#bbbbbb'
		}]
	}];

	var mapOptions = {
		zoom: 14,
		center: myLatLng,
		disableDefaultUI: true,
		scrollwheel: false,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
		}
	};

	// var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


	// var marker = new google.maps.Marker({
	// 	position: myLatLng,
	// 	map: map,
	// 	title: ''
	// });


	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});

	var styledMapOptions = {
		name: 'US Road Atlas'
	};

	var usRoadMapType = new google.maps.StyledMapType(
		roadAtlasStyles, styledMapOptions);

	map.mapTypes.set('roadatlas', usRoadMapType);
	map.setMapTypeId('roadatlas');
}

google.maps.event.addDomListener(window, 'load', initialize);


