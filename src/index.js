import cipher from './cipher.js';
 document.getElementById("code").addEventListener("click", function code() { 
 let texto =document.getElementById("text").value;
 let offset=parseInt(document.getElementById("offset").value);
 document.getElementById("codedText").value= cipher.encode(offset, texto);
 })
 document.getElementById("decode").addEventListener("click", function decode() { 
 let texto2 =document.getElementById("text2").value;
 let offset2=parseInt(document.getElementById("offset2").value);
 document.getElementById("decoded").value= cipher.decode(offset2, texto2);
})
document.getElementById("copyPaste").addEventListener("click", function copy(){ 
 let copyText = document.getElementById("codedText");
 navigator.clipboard.writeText(copyText.value);
 alert("Texto copiado");   
})
document.getElementById("copyPaste2").addEventListener("click", function copy2(){
 let copyText2 = document.getElementById("decoded");
 navigator.clipboard.writeText(copyText2.value);
 alert("Texto copiado");   
})