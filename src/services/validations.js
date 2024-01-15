
const isValid = (gamerTag) => {
    if (gamerTag.length < 8) {
      return "Invalid - gamertag length must be at least 8 characters";
    }
  
    
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
    if (!gamerTag.split('').some(char => specialCharacters.includes(char))) {
      return "Invalid - gamertag must contain at least a special character";
    }
  
    if (!/\d/.test(gamerTag)) {
      return "Invalid - gamertag must contain at least a number";
    }
  
    return "Valid - gamertag is valid";
  }
  
  exports.isValid = isValid;
  