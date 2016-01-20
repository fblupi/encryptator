/**
 * Get a message and two passwords and encrypt the message
 */
function encrypt() {
	// Get values
	var message = $("#encrypterMessage").val().toUpperCase();
	var pass1 = $("#encrypterPass1").val().toUpperCase();
	var pass2 = $("#encrypterPass2").val().toUpperCase();

	// 1. Invert message
	var result = invertString(message);

	// 2.1. Get map for replacement with the key
	var replaceMap = getReplacementMap(noRepeated(pass1));

	// 2.2. Replace letters by numbers
	result = replaceLettersByNumbers(result, replaceMap);

	// 3.1. Get key for displacement
	var displacementKey = getDisplacementKey(pass2);

	// 3.2. Step: Displace result
	result = displace(result, displacementKey);

	// Set result
	$("#encrypterResult").val(result);
}

/**
 * Generate a map for replace letters by numbers
 * @param {string} key - Key for disturb
 * @return {Object} o - Map for replacement
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

/**
 * Generate a new string by replacing letters by numbers following a map
 * @param {string} s - Original string with letters
 * @param {Object} map - Map with replacements
 * @return {string} o - New string with numbers
 */
function replaceLettersByNumbers(s, map) {
	var o = '';
	for (var i = 0; i < s.length; i++) {
		o += map[s[i]];
	}
	return o;
}

/**
 * Generate a new string by adding (module 10, no haul) the sequence of numbers generated repeating the key
 * @param {string} s - Original string
 * @param {string} key - Displacement key
 * @return {string} o - Displaced string
 */
function displace(s, key) {
	var o = '';
	for (var i = 0; i < s.length; i++) {
		o += (parseInt(key[i % key.length]) + parseInt(s[i])) % 10;
	}
	return o;
}