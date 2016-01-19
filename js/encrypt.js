function encrypt() {
	// Get values
	var message = $("#encrypterMessage").val().toUpperCase();
	var pass1 = $("#encrypterPass1").val().toUpperCase();
	var pass2 = $("#encrypterPass2").val().toUpperCase();

	// 1st. Step: Invert message
	var result = invertString(message);

	// 2nd. Step: Get key for replacement
	var replaceKey = noRepeated(pass1);

	// 3rd. Step: Get map for replacement with the key
	var replaceMap = getReplacementMap(replaceKey);

	// Set result
	$("#encrypterResult").val(result);
}

/**
 * Generate a map for replace letters by numbers
 * @param {string} key - Key for disturb
 * @return {Object} o - Map for replacemente
 */
function getReplacementMap(key) {
	var o = {};
	var MIN_CONFLICT = 1;
	var MAX_CONFLICT = 2;
	var ABC = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

	var sequence = noRepeated(key + " " + ABC);
	var pos = 0;

	for (var i = 0; i <= MAX_CONFLICT; i++) {
		for (var j = 1; j <= 10; j++) {
			var value = parseInt("" + i + j % 10);
			if (value < MIN_CONFLICT || value > MAX_CONFLICT) {
				o[sequence[pos]] = value;
				pos++;
			}
		}
	}

	return o;
}