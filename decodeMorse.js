function translateWord(word){
    if(word.length>0){
        let characters = word.split(" ");
        let result = "";
        for (let index = 0; index < characters.length; index++) {
            if(MORSE_CODE[characters[index]]) result+=MORSE_CODE[characters[index]];       
        }
        return result;
    }else{
        return null;
    }    
}

decodeMorse = function(morseCode){
  let morseWords = morseCode.split("   ");
  let result = "";
  for (let index = 0; index < morseWords.length; index++) {
      if (translateWord(morseWords[index])) {
        result += translateWord(morseWords[index]);
        if(index !== morseWords.length -1) {
            result+=" ";
        } 
      }          
  }
  return result;
}
decodeMorse = function(morseCode){
    function decodeMorseLetter(letter) {
      return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
      return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
  }