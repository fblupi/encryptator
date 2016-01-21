$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/**
 * Check if an input is correct
 * @param {string} input - Name of input
 * @param {regex} pattern - Regex to chek
 * @return {boolean} boolean - True if input is ok, false if not
 */
function check(input, pattern) {
    if (!pattern.test($(input).val())) {
        if (!$('.tooltip').hasClass('in')) {
            $(input).tooltip('show');
        }
        return false;
    } else {
        if ($('.tooltip').hasClass('in')) {
            $(input).tooltip('hide');
        }
        return true;
    }
}

/**
 * Check if every input from encrypter is correct. Then execute the action
 */
function checkEncrypter() {
    var message = check("#encrypterMessage", /^([a-zA-ZñÑ ])+$/);
    var pass1 = check("#encrypterPass1", /^([a-zA-ZñÑ]){2,10}$/);
    var pass2 = check("#encrypterPass2", /^([a-zA-ZñÑ]){2,10}$/);
    if (message && pass1 && pass2) {
        encrypt();
    }
}

/**
 * Check if every input from decrypter is correct. Then execute the action
 */
function checkDecrypter() {
    var message = check("#decrypterMessage", /^([0-9])+$/);
    var pass1 = check("#decrypterPass1", /^([a-zA-ZñÑ]){2,10}$/);
    var pass2 = check("#decrypterPass2", /^([a-zA-ZñÑ]){2,10}$/);
    if (message && pass1 && pass2) {
        decrypt();
    }
}