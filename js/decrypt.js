/**
 * Get encrypted message and two passwords and decrypt the message
 */
function decrypt() {
	// Get values
	var message = $("#decrypterMessage").val().toUpperCase();
	var pass1 = $("#decrypterPass1").val().toUpperCase();
	var pass2 = $("#decrypterPass2").val().toUpperCase();

	// 1.1. Get key for displacement
	var displacementKey = getDisplacementKey(noRepeated(pass2));

	// 1.2. Undo displacement

	// 2.1. Get map for replacement with the key

	// 2.2. Undo replacement

	// 3. Undo invert

	// Set result
}