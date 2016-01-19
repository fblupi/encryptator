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
	var undoReplaceMap = getUndoReplacementMap(noRepeated(pass1));

	// 2.2. Undo replacement
	result = replaceNumbersByLetters(result, undoReplaceMap);

	// 3. Undo invert

	// Set result
	$("#decrypterResult").val(result);
}

/**
 * Generate a map for replace numbers by letters
 * @param {string} key - Key for disturb
 * @return {Object} o - Map for replacement
 */
function getUndoReplacementMap(key) {
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
				o[value] = sequence[pos];
				pos++;
			}
		}
	}
	return o;
}

/**
 * Generate a new string by replacing numbers by letters following a map
 * @param {string} s - Original string with numbers
 * @param {Object} map - Map with replacements
 * @return {string} o - New string with letters
 */
function replaceNumbersByLetters(s, map) {
	var o = '';
	for (var i = 0; i < s.length; i++) {
		if (s[i] == 1 || s[i] == 2) {
			var value = parseInt("" + s[i] + s[i + 1]);
			i++;
			o += map[value];
		} else {
			o += map[s[i]];
		}
	}
	return o;
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