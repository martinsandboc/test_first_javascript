function translate (string) {
	words = string.split(" ");
	var output = "";
	for (i=0;i<words.length;i++) {
		var word = words[i];
		if (word[0].toLowerCase() == "a" || word[0].toLowerCase() == "e" || word[0].toLowerCase() == "i"|| word[0].toLowerCase() == "o" ||word[0].toLowerCase() == "u") {
			output += word +  "ay";
		} else if (word.substring(0,3).toLowerCase() == "sch" || word.substring(1,3).toLowerCase() == "qu") {
			output += word.substring(3) + word.substring(0,3) + "ay";
		} else if (word.substring(0,2).toLowerCase() == "qu") {
			output += word.substring(2) + word.substring(0,2) + "ay";
		} else {
			if (word.substring(1,2).toLowerCase() == "a" || word.substring(1,2).toLowerCase() == "e" || word.substring(1,2).toLowerCase() == "i" || word.substring(1,2).toLowerCase() == "o" || word.substring(1,2).toLowerCase() == "u") {
				output += word.substring(1) + word.substring(0,1) + "ay";
			} else {
				output += word.substring(2) + word.substring(0,2) + "ay";
			}
		}

		

		if (i != words.length-1) {
			output += " ";
		}
	}
	return output;
	
}