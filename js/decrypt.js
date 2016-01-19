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
	var result = undoDisplace(message, displacementKey);

	// 2.1. Get map for replacement with the key

	// 2.2. Undo replacement

	// 3. Undo invert

	// Set result
	$("#decrypterResult").val(result);
}

/**
 * Generate a new string by substracting (module 10, no haul) the sequence of numbers generated repeating the key
 * @param {string} s - Displaced string
 * @param {string} key - Displacement key
 * @return {string} o - Original string
 */
function undoDisplace(s, key) {
	var o = '';
	for (var i = 0; i < s.length; i++) {
		var value = (parseInt(key[i % key.length]) - parseInt(s[i])) % 10;
		if (value > 0) {
			value = 10 - value;
		} else {
			value *= -1;
		}
		o += value;
	}
	return o;
}