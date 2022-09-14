var  letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
               'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

var iguales = usuario1, usuario2 ;

for(var i=0;i<usuario1;i++){
  for (var j=0;j<usuario2;j++) {
    if (letras[i]=numeros[j])
      iguales++;
  }
}

var usuario1 = prompt("Elegi un número(0-25)") ;
 if (usuario1 > 25) {
 alert("No válido") }
 else{
  var usuario2 = prompt("Elegi una letra") ;
 if (usuario1[i], usuario2[j] === iguales){
   alert("Victoria") ; }
 else {
   alert("Derrota") ; }
 } 


 
 





    
