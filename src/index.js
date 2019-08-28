//botões de cifra/decifra
document.getElementById("cifra").addEventListener("click", msg);
document.getElementById("decifradois").addEventListener("click", msg2);

function msg() {
  event.preventDefault();
  //msg1 - frase inserida pelo usuario
  let ciframsg = document.getElementById("msg1").value;
  //number chave1 - numero deslocamento
  let chave = Number (document.getElementById("chave1").value);
  // resultado na tela da cifra       
  let resultado = document.getElementById("resultado"); 
  //função encode - cifrada  
  let cifra = window.cipher.encode(ciframsg, chave);
  resultado.innerHTML = `O resultado é ${cifra}`;  
  
}

function msg2() {
  event.preventDefault();
  //msg2 - frase inserida pelo usuario
  let ciframsg = document.getElementById("decifra").value;
  //number chave2 - numero deslocamento
  let chave2 = Number (document.getElementById("chave2").value);
  // resultado na tela da decifra       
  let resultado = document.getElementById("resultado2"); 
  //função decode - decifrada  
  let cifra = window.cipher.decode(ciframsg, chave2);
  resultado.innerHTML = `O resultado é ${cifra}`;
  
}    
