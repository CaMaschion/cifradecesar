window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(text, offset) { 
  let resultado = " ";
  for (let i = 0; i<text.length; i++) { 
    if (text[i].charCodeAt() == 32) {
      resultado += " ";
    }

    else if (text[i].charCodeAt() >= 65 && text[i].charCodeAt() <= 90) {
      resultado += String.fromCharCode(((text[i].charCodeAt()-65 + offset) % 26 ) + 65);   
    }
    else if (text[i].charCodeAt() >=97 && text[i].charCodeAt() <= 122) {
      resultado += String.fromCharCode(((text[i].charCodeAt()-97 + offset) % 26 ) + 97);
    }         
  }
      
  return resultado;
}   
   
function decode(text, offset) {
  let resultado2 = " ";
  for (let i = 0; i<text.length; i++) {
    if (text[i].charCodeAt() == 32) {
      resultado2 += " ";
    }

    else if (text[i].charCodeAt() >= 65 && text[i].charCodeAt() <= 90) {
      resultado2 += String.fromCharCode(((text[i].charCodeAt()-90 - offset) % 26 ) + 90);
    }
    else if (text[i].charCodeAt() >=97 && text[i].charCodeAt() <=122) {
      resultado2 += String.fromCharCode(((text[i].charCodeAt()-122 - offset) % 26) + 122);  
   
    }  
  }    
  return resultado2;
}