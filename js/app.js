/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


//Funcion  puntuación promedio de l@s profesores.
var sumaAQP1_prof = 0;
var promAQP1_prof = 0;
for(var i = 0; i < data.AQP['2016-2'].ratings.length; i++){
 sumaAQP1_prof += data.AQP['2016-2'].ratings[i].teacher;
 promAQP1_prof = sumaAQP1_prof /data.AQP['2016-2'].ratings.length;
}
console.log(sumaAQP1_prof +' suma y promedio P:'+promAQP1_prof); 

var sumaAQP2_prof = 0;
var promAQP2_prof = 0;
for(var i = 0; i < data.AQP['2017-1'].ratings.length; i++){
 sumaAQP2_prof += data.AQP['2017-1'].ratings[i].teacher;
 var promAQP2_prof = sumaAQP2_prof /data.AQP['2017-1'].ratings.length;
}
console.log(sumaAQP2_prof +' suma y promedio P:'+promAQP2_prof); 

var sumaCDMX1_prof = 0;
var promCDMX1_prof = 0;
for(var i = 0; i < data.CDMX['2017-1'].ratings.length; i++){
 sumaCDMX1_prof += data.CDMX['2017-1'].ratings[i].teacher;
 var promCDMX1_prof = sumaCDMX1_prof / data.CDMX['2017-1'].ratings.length;
}
console.log(sumaCDMX1_prof+' suma y promedio P:'+promAQP1_prof); 

var sumaCDMX2_prof = 0;
var promCDMX2_prof = 0;
for(var i = 0; i < data.CDMX['2017-2'].ratings.length; i++){
 sumaCDMX2_prof += data.CDMX['2017-2'].ratings[i].teacher;
  promCDMX2_prof = sumaCDMX2_prof / data.CDMX['2017-2'].ratings.length;
}
console.log(sumaCDMX2_prof +' suma y promedio P :'+promCDMX2_prof); 

var sumaLIM1_prof = 0;
var promLIM1_prof = 0;
for(var i = 0; i < data.LIM['2016-2'].ratings.length; i++){
 sumaLIM1_prof += data.LIM['2016-2'].ratings[i].teacher;
 promLIM1_prof = sumaLIM1_prof / data.LIM['2016-2'].ratings.length;
}
console.log(sumaLIM1_prof+' suma y promedio P:'+promLIM1_prof); 

var sumaLIM2_prof = 0;
var promLIM2_prof = 0;
for(var i = 0; i < data.LIM['2017-1'].ratings.length; i++){
 sumaLIM2_prof += data.LIM['2017-1'].ratings[i].teacher;
 promLIM2_prof = sumaLIM2_prof / data.LIM['2017-1'].ratings.length;
}
console.log(sumaLIM2_prof +' suma y promedio P:'+promLIM2_prof); 

var sumaLIM3_prof = 0;
var promLIM3_prof = 0;
for(var i = 0; i < data.LIM['2017-2'].ratings.length; i++){
 sumaLIM3_prof += data.LIM['2017-2'].ratings[i].teacher;
 promLIM3_prof = sumaLIM3_prof / data.LIM['2017-2'].ratings.length;
}
console.log(sumaLIM3_prof+' suma y promedio P:'+promLIM3_prof);

var sumaSCL1_prof = 0;
var promSCL1_prof = 0;
for(var i = 0; i < data.SCL['2016-2'].ratings.length; i++){
 sumaSCL1_prof += data.SCL['2016-2'].ratings[i].teacher;
 promSCL1_prof = sumaSCL1_prof / data.SCL['2016-2'].ratings.length;
}
console.log(sumaSCL1_prof+' suma y promedio P:'+promSCL1_prof);

var sumaSCL2_prof = 0;
var promSCL2_prof = 0;
for(var i = 0; i < data.SCL['2017-1'].ratings.length; i++){
 sumaSCL2_prof += data.SCL['2017-1'].ratings[i].teacher;
 promSCL2_prof = sumaSCL2_prof / data.SCL['2017-1'].ratings.length;
}
console.log(sumaSCL2_prof+' suma y promedio P:'+promSCL2_prof);


var sumaSCL3_prof = 0;
var promSCL3_prof = 0;
for(var i = 0; i < data.SCL['2017-2'].ratings.length; i++){
 sumaSCL3_prof += data.SCL['2017-2'].ratings[i].teacher;
 promSCL3_prof = sumaSCL3_prof / data.SCL['2017-2'].ratings.length;
}
console.log(sumaSCL3_prof+' suma y promedio P:'+promSCL3_prof);

//sumo todos los puntajes de sedes y divido para obtener promedio de profesores
var sumaTotal = promAQP1_prof + promAQP2_prof + promCDMX1_prof + promCDMX2_prof + promLIM1_prof + promLIM2_prof + promLIM3_prof + promSCL1_prof + promSCL2_prof + promSCL3_prof;
var promedioProfesores = sumaTotal/10;
console.log('promedio de profesores '+ promedioProfesores);


//Funcion para devolver La puntuación promedio de l@s jedi masters. 
 var sumaAQP1 = 0;
 var promAQP1 = 0;
for(var i = 0; i < data.AQP['2016-2'].ratings.length; i++){
  sumaAQP1 += data.AQP['2016-2'].ratings[i].jedi;
  promAQP1 = sumaAQP1 /data.AQP['2016-2'].ratings.length;
}
console.log(sumaAQP1 +' suma y promedio :'+promAQP1); 
 
var sumaAQP2 = 0;
var promAQP2 = 0;
for(var i = 0; i < data.AQP['2017-1'].ratings.length; i++){
  sumaAQP2 += data.AQP['2017-1'].ratings[i].jedi;
  var promAQP2 = sumaAQP2 /data.AQP['2017-1'].ratings.length;
}
console.log(sumaAQP2 +' suma y promedio :'+promAQP2); 

var sumaCDMX1 = 0;
var promCDMX1 = 0;
for(var i = 0; i < data.CDMX['2017-1'].ratings.length; i++){
  sumaCDMX1 += data.CDMX['2017-1'].ratings[i].jedi;
  var promCDMX1 = sumaCDMX1 / data.CDMX['2017-1'].ratings.length;
}
console.log(sumaCDMX1+' suma y promedio :'+promAQP1); 

var sumaCDMX2 = 0;
var promCDMX2 = 0;
for(var i = 0; i < data.CDMX['2017-2'].ratings.length; i++){
  sumaCDMX2 += data.CDMX['2017-2'].ratings[i].jedi;
   promCDMX2 = sumaCDMX2 / data.CDMX['2017-2'].ratings.length;
}
console.log(sumaCDMX2 +' suma y promedio :'+promCDMX2); 

var sumaLIM1 = 0;
var promLIM1 = 0;
for(var i = 0; i < data.LIM['2016-2'].ratings.length; i++){
  sumaLIM1 += data.LIM['2016-2'].ratings[i].jedi;
  promLIM1 = sumaLIM1 / data.LIM['2016-2'].ratings.length;
}
console.log(sumaLIM1+' suma y promedio :'+promLIM1); 

var sumaLIM2 = 0;
var promLIM2 = 0;
for(var i = 0; i < data.LIM['2017-1'].ratings.length; i++){
  sumaLIM2 += data.LIM['2017-1'].ratings[i].jedi;
  promLIM2 = sumaLIM2 / data.LIM['2017-1'].ratings.length;
}
console.log(sumaLIM2 +' suma y promedio :'+promLIM2); 

var sumaLIM3 = 0;
var promLIM3 = 0;
for(var i = 0; i < data.LIM['2017-2'].ratings.length; i++){
  sumaLIM3 += data.LIM['2017-2'].ratings[i].jedi;
  promLIM3 = sumaLIM3 / data.LIM['2017-2'].ratings.length;
}
console.log(sumaLIM3+' suma y promedio :'+promLIM3);

var sumaSCL1 = 0;
var promSCL1 = 0;
for(var i = 0; i < data.SCL['2016-2'].ratings.length; i++){
  sumaSCL1 += data.SCL['2016-2'].ratings[i].jedi;
  promSCL1 = sumaSCL1 / data.SCL['2016-2'].ratings.length;
}
console.log(sumaSCL1+' suma y promedio :'+promSCL1);

var sumaSCL2 = 0;
var promSCL2 = 0;
for(var i = 0; i < data.SCL['2017-1'].ratings.length; i++){
  sumaSCL2 += data.SCL['2017-1'].ratings[i].jedi;
  promSCL2 = sumaSCL2 / data.SCL['2017-1'].ratings.length;
}
console.log(sumaSCL2+' suma y promedio :'+promSCL2);


var sumaSCL3 = 0;
var promSCL3 = 0;
for(var i = 0; i < data.SCL['2017-2'].ratings.length; i++){
  sumaSCL3 += data.SCL['2017-2'].ratings[i].jedi;
  promSCL3 = sumaSCL3 / data.SCL['2017-2'].ratings.length;
}
console.log(sumaSCL3+' suma y promedio :'+promSCL3);

//sumo todos los puntajes de sedes y divido para obtener promediode l@s jedi masters. 
var sumaTotal = promAQP1 + promAQP2 + promCDMX1 + promCDMX2 + promLIM1 + promLIM2 + promLIM3 + promSCL1 + promSCL2 + promSCL3;
var promedioJedis = sumaTotal/10;
console.log('promedio de jedis '+promedioJedis);


