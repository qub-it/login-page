$(document).ready(function(){
	$('body').css('background-image','url(' + getRandomBgUrl() + ')')

	var formInputs = $('#username, #password');
	formInputs.focusin(function() {
       $(this).parent().children('p.formLabel').addClass('formTop');
       $('div#formWrapper').addClass('darken-bg');
       $('div.logo').addClass('logo-active');
	});
	formInputs.focusout(function() {
		if ($.trim($(this).val()).length == 0){
		$(this).parent().children('p.formLabel').removeClass('formTop');
		}
		$('div#formWrapper').removeClass('darken-bg');
		$('div.logo').removeClass('logo-active');
	});
	$('#username').change( function () {
		setTimeout( function () {
			if ($('#password').val() || $('#password:-webkit-autofill').val()) {
				$('#password').triggerHandler("focusin");
			}
		}, 300);
	});
	$('p.formLabel').click(function(){
		$(this).parent().children('.form-style').focus();
	});

	$('.mark > .btn').on('click', function () {
		$(this).find('i').toggleClass('fa-angle-right');
		$(this).find('i').toggleClass('fa-angle-left');
		$('.mark').toggleClass('mark-show');
	});

	$('#auth-button').on('click', function (event) {
  		event.preventDefault();
  		$('.alert-login').show(); $('#form-container').hide(); $('.alert').hide();
  		$.post($('#authenticator').val(), {
  			'username': $('#username').val(),
  			'password': $('#password').val()
  		}).done(function (data) {
  			var url = $('#callback').val() || '/fenix/';
  			$('.alert-login').text("Bem-vindo(a) " + data.name + '!');
  			window.location = url;
  		}).error(function (error) {
  			$('.alert').show();
  			$('#form-container').show();
  			$('.alert-login').hide();
  		});
  		return false;
  	});

  	setTimeout( function () {
  		if ($('#username').val() || $('#username:-webkit-autofill').val()) {
  			// Autofocus will be on username and autofiller will have loaded all slots by now.
			$('#username').triggerHandler("focusin");
			$('#password').triggerHandler("focusin");
		}
  	}, 300);
});

function getRandomBgUrl() {
	var hiddenData = $(".hidden-data > span");
    return hiddenData[Math.floor(Math.random() * hiddenData.length)].innerHTML;
}