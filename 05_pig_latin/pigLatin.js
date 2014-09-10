function translate (string) {
  words = string.split(" ");
  var output = "";
  for (i=0;i<words.length;i++) {
    var word = words[i];
    if (isVowel(word[0])) {
      output += word +  "ay";
    } else if (word.substring(0,3).toLowerCase() == "sch" || 
      word.substring(1,3).toLowerCase() == "qu") {
        output += word.substring(3) + word.substring(0,3) + "ay";
    } else if (word.substring(0,2).toLowerCase() == "qu") {
      output += word.substring(2) + word.substring(0,2) + "ay";
    } else {
      if (isVowel(word.substring(1,2))) {
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
  function isVowel (char) {
    if (char.toLowerCase() == "a" || 
      char.toLowerCase() == "e" || 
      char.toLowerCase() == "i"|| 
      char.toLowerCase() == "o" || 
      char.toLowerCase() == "u") 
    {
      return true;
    } else
    return false;
  }
}