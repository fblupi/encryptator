/**
 * Invert a string. For example: HELLO --> OLLEH
 * @param {string} s - Original string
 * @return {string} o - Inverted string
 */
function invertString(s) {
	var o = '';
	for (var i = s.length - 1; i >= 0; i--) {
		o += s[i];
	}
	return o;
}

/**
 * Generate a string without repetitions. For example: HELLO --> HELO
 * @param {string} s - Original string
 * @return {string} o - String without repetitions
 */
function noRepeated(s) {
	var o = '';
	for (var i = 0; i < s.length; i++) {
		var repeated = false;
		for (j = 0; j < i; j++) {
			if (s[i] === o[j]) {
				repeated = true;
			}
		}
		if (!repeated) {
			o += s[i];
		}
	}
	return o;
}

/**
 * Generate a number key from a string with the order in the ABC of each letter of the string. For example HELLO --> 21335
 * @param {string} s - Original string
 * @return {string} o - String 
 */
function getDisplacementKey(s) {
	var numbers = new Array(s.length);
	var o = '';
	var cont;
	for (i in s){
	    cont = 0;
	    for (j in s){
		if(s[j]<s[i]){
		    cont++;
		}else if(s[j]==s[i] && !numbers[j]){
		    cont++;
		}
	    }
	    numbers[i]=cont;
	    o += cont;
	}
	return o;
}