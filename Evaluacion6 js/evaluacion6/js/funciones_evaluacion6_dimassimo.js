
 const inputBase = document.querySelector('#base Imponible');
 let inputIVA = document.querySelector('#IVA');
 let inputTotal =document.querySelector('#total');
 const tipoIVA = 0.21;
 
 
 function Calcular() {

 const inputBase = document.querySelector('#Monto');

 let inputIVA = document.querySelector('#Iva');

 let inputTotal =document.querySelector('#Total');

const base = inputBase.value;

const IVA = base * tipoIVA;

inputIVA.value = IVA; 

const total = parseInt(base) + IVA;

inputTotal.value = total;



 }










