/*
The users wants to construct a ransom note by cutting letters out of a magazine.
Assume that the magazine, and note are coming in as strings.
Write a function that will check to make sure that there are enough of each letter in the magazine to construct the note.
*/

var noteString = "I have your cake!";
var magazineString = "Let's make this one longer, so that we have a bigger to check against! I";


function getStringCount(strng){
	var obj = {};

	for (var i = 0; i < strng.length; i++){
		if (obj[strng[i]] !== undefined){
			obj[strng[i]] += 1;
		} else {
			obj[strng[i]] = 1;
		}
	}

	return obj;
}

function checkChars(note, mag){
	var magObj = getStringCount(mag);

	for (var i = 0; i < note.length; i++){
		if (magObj[note[i]] == undefined || 0){
			var strng = "There are not enough " + note[i] + " characters.";
			console.log(strng);
			return false;
		} else {
			magObj[note[i]] -= 1;
		}
	}

	return true;
}