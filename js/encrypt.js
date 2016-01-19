function encrypt() {
	// Get values
	var message = $("#encrypterMessage").val().toUpperCase();
	var pass1 = $("#encrypterPass1").val().toUpperCase();
	var pass2 = $("#encrypterPass2").val().toUpperCase();

	// 1st. Step: Invert message
	var result = invertString(message);

	// Set result
	$("#encrypterResult").val(result);
}