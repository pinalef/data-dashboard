/*
 * Funcionalidad de tu producto
 */
window.onload = function(){
//aca se llaman a las funciones para que se carguen en la pagina

    totalEstudiantes()
    desercionEstudiantes();
    superanMeta();
    porcentajeEstudiantes();
    nps();
    superanTech();
    superanHSE();
    promedioProfesores();
    promedioJedis();
    promedioAlumnas();
 
}
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


//1.-El total de estudiantes presentes por sede y generación.
function totalEstudiantes(){
var totalEstudiantes_AQP1 = 0;
for(var i = 0; i < data.AQP['2016-2'].students.length; i++){
totalEstudiantes_AQP1++;
};
console.log('total estudiantes: ' + totalEstudiantes_AQP1);

var totalEstudiantes_AQP2 = 0;
for(var i = 0; i < data.AQP['2017-1'].students.length; i++){
totalEstudiantes_AQP2++;
};
console.log('total estudiantes: ' + totalEstudiantes_AQP2);

var totalEstudiantes_CDMX1 = 0;
for(var i = 0; i < data.CDMX['2017-1'].students.length; i++){
totalEstudiantes_CDMX1++;
};
console.log('total estudiantes: ' + totalEstudiantes_CDMX1);

var totalEstudiantes_CDMX2 = 0;
for(var i = 0; i < data.CDMX['2017-2'].students.length; i++){
totalEstudiantes_CDMX2++;
};
console.log('total estudiantes: ' + totalEstudiantes_CDMX2);

var totalEstudiantes_LIM1 = 0;
for(var i = 0; i < data.LIM['2016-2'].students.length; i++){
totalEstudiantes_LIM1++;
};
console.log('total estudiantes: ' + totalEstudiantes_LIM1);

var totalEstudiantes_LIM2 = 0;
for(var i = 0; i < data.LIM['2017-1'].students.length; i++){
totalEstudiantes_LIM2++;
};
console.log('total estudiantes: ' + totalEstudiantes_LIM2);

var totalEstudiantes_LIM3 = 0;
for(var i = 0; i < data.LIM['2017-2'].students.length; i++){
totalEstudiantes_LIM3++;
};
console.log('total estudiantes: ' + totalEstudiantes_LIM3);

var totalEstudiantes_SCL1 = 0;
for(var i = 0; i < data.SCL['2016-2'].students.length; i++){
totalEstudiantes_SCL1++;
};
console.log('total estudiantes: ' + totalEstudiantes_SCL1);

var totalEstudiantes_SCL2 = 0;
for(var i = 0; i < data.SCL['2017-1'].students.length; i++){
totalEstudiantes_SCL2++;
};
console.log('total estudiantes: ' + totalEstudiantes_SCL2);

var totalEstudiantes_SCL3 = 0;
for(var i = 0; i < data.SCL['2017-2'].students.length; i++){
totalEstudiantes_SCL3++;
};
console.log('total estudiantes: ' + totalEstudiantes_SCL3);

var resultadoEstudiantes = totalEstudiantes_AQP1 + totalEstudiantes_AQP2 + totalEstudiantes_CDMX1 + totalEstudiantes_CDMX2 + totalEstudiantes_LIM1 + totalEstudiantes_LIM2 + totalEstudiantes_LIM2 + totalEstudiantes_LIM3 + totalEstudiantes_SCL1 + totalEstudiantes_SCL2 + totalEstudiantes_SCL3;

//agregar promedios al html
var estudiantesDiv = document.getElementById('totalEstudiantes');
var  nodoElemento = document.createElement('h2');
var nodoTexto = document.createTextNode(resultadoEstudiantes);
nodoElemento.appendChild(nodoTexto);
estudiantesDiv.appendChild(nodoElemento);
 
return totalEstudiantes_AQP1 + totalEstudiantes_AQP2 + totalEstudiantes_CDMX1 + totalEstudiantes_CDMX2 + totalEstudiantes_LIM1 + totalEstudiantes_LIM2 + totalEstudiantes_LIM2 + totalEstudiantes_LIM3 + totalEstudiantes_SCL1 + totalEstudiantes_SCL2 + totalEstudiantes_SCL3;
}


//2.-Funcion porcentaje de deserción de estudiantes.
function desercionEstudiantes(){
var counterAQP1_desercion = 0;
for(var i=0; i < data.AQP["2016-2"].students.length;i++){
 if(data.AQP["2016-2"].students[i].active == false){
 counterAQP1_desercion++
 };
};
console.log(counterAQP1_desercion);

var counterAQP2_desercion = 0;
for(var i=0; i < data.AQP["2017-1"].students.length;i++){
 if(data.AQP["2017-1"].students[i].active == false){
 counterAQP2_desercion++
 };
};
console.log(counterAQP2_desercion);

var counterCDMX1_desercion = 0;
for(var i=0; i < data.CDMX["2017-1"].students.length;i++){
 if(data.CDMX["2017-1"].students[i].active == false){
 counterCDMX1_desercion++
 };
};
console.log(counterCDMX1_desercion);

var counterCDMX2_desercion = 0;
for(var i=0; i < data.CDMX["2017-2"].students.length;i++){
 if(data.CDMX["2017-2"].students[i].active == false){
 counterCDMX2_desercion++
 };
};
console.log(counterCDMX2_desercion);

var counterLIM1_desercion = 0;
for(var i=0; i < data.LIM["2016-2"].students.length;i++){
 if(data.LIM["2016-2"].students[i].active == false){
 counterLIM1_desercion++
 };
};
console.log(counterLIM1_desercion);

var counterLIM2_desercion = 0;
for(var i=0; i < data.LIM["2017-1"].students.length;i++){
 if(data.LIM["2017-1"].students[i].active == false){
 counterLIM2_desercion++
 };
};
console.log(counterLIM2_desercion);

var counterLIM3_desercion = 0;
for(var i=0; i < data.LIM["2017-2"].students.length;i++){
 if(data.LIM["2017-2"].students[i].active == false){
 counterLIM3_desercion++
 };
};
console.log(counterLIM3_desercion);

var counterSCL1_desercion = 0;
for(var i=0; i < data.SCL["2016-2"].students.length;i++){
 if(data.SCL["2016-2"].students[i].active == false){
 counterSCL1_desercion++
 };
};
console.log(counterSCL1_desercion);

var counterSCL2_desercion = 0;
for(var i=0; i < data.SCL["2017-1"].students.length;i++){
 if(data.SCL["2017-1"].students[i].active == false){
 counterSCL2_desercion++
 };
};
console.log(counterSCL2_desercion);

var counterSCL3_desercion = 0;
for(var i=0; i < data.SCL["2017-2"].students.length;i++){
 if(data.SCL["2017-2"].students[i].active == false){
 counterSCL3_desercion++
 };
};
console.log(counterSCL3_desercion);

//Calculando porcentaje de desercion por sedes
var desercionAQP1_percent = (counterAQP1_desercion * 100) / data.AQP["2016-2"].students.length;
var desercionAQP2_percent = (counterAQP2_desercion * 100) / data.AQP["2017-1"].students.length;
var desercionCDMX1_percent = (counterCDMX1_desercion * 100) / data.CDMX["2017-1"].students.length;
var desercionCDMX2_percent = (counterCDMX2_desercion * 100) / data.CDMX["2017-2"].students.length;
var desercionLIM1_percent = (counterLIM1_desercion * 100) / data.LIM["2016-2"].students.length;
var desercionLIM2_percent = (counterLIM2_desercion * 100) / data.LIM["2017-1"].students.length;
var desercionLIM3_percent = (counterLIM3_desercion * 100) / data.LIM["2017-2"].students.length;
var desercionSCL1_percent = (counterSCL1_desercion * 100) / data.SCL["2016-2"].students.length;
var desercionSCL2_percent = (counterSCL2_desercion * 100) / data.SCL["2017-1"].students.length;
var desercionSCL3_percent = (counterSCL3_desercion * 100) / data.SCL["2017-2"].students.length;

console.log(desercionAQP1_percent + " %AQP1")
console.log(desercionAQP2_percent + " %AQP2")
console.log(desercionCDMX1_percent + " %CDMX1");
console.log(desercionCDMX2_percent + " %CDMX2");
console.log(desercionLIM1_percent + " %LIM1")
console.log(desercionLIM2_percent + " %LIM2");
console.log(desercionLIM3_percent + " %LIM3");
console.log(desercionSCL1_percent + " %SCL1");
console.log(desercionSCL2_percent + " %SCL2");
console.log(desercionSCL3_percent + " %SCL3");

var totalDesercion = (desercionAQP1_percent + desercionAQP2_percent + desercionCDMX1_percent + desercionCDMX2_percent + desercionLIM1_percent + desercionLIM2_percent + desercionLIM3_percent + desercionSCL1_percent + desercionSCL2_percent + desercionSCL3_percent)/10;
//agregar promedios al html
var estudiantesPorcenDiv = document.getElementById('porcentajeDesercion');
var  nodoElemento = document.createElement('h2');
var nodoTexto = document.createTextNode(Math.round(totalDesercion) + '%');
nodoElemento.appendChild(nodoTexto);
estudiantesPorcenDiv.appendChild(nodoElemento);
}

//3.-La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos.
function superanMeta(){ 
  
      //alumnas de AQP 2016-2
      var studentsAQP1 = data.AQP["2016-2"].students;
      var countAQP1= 0;
      for(var i = 0; i < studentsAQP1.length; i++){
          var sprints = data.AQP["2016-2"].students[i].sprints;
          var s1H= data.AQP["2016-2"].students[i].sprints[0].score.hse;
          var s1T= data.AQP["2016-2"].students[i].sprints[0].score.tech;
          var s2H= data.AQP["2016-2"].students[i].sprints[1].score.hse;
          var s2T= data.AQP["2016-2"].students[i].sprints[1].score.tech;
          var s3H= data.AQP["2016-2"].students[i].sprints[2].score.hse;
          var s3T= data.AQP["2016-2"].students[i].sprints[2].score.tech;
          var s4H= data.AQP["2016-2"].students[i].sprints[3].score.hse;
          var s4T= data.AQP["2016-2"].students[i].sprints[3].score.tech;
  
              if ((s1H + s2H + s3H  + s4H)/sprints.length > 840 && (s1T + s2T + s3T + s4T)/sprints.length > 1260){
              console.log('nombre estudiante: '+data.AQP["2016-2"].students[i].name+' puntaje hse: '+((s1H + s2H + s3H  + s4H)/sprints.length));
              console.log('nombre estudiante: '+data.AQP["2016-2"].students[i].name+' puntaje tech: '+((s1T + s2T + s3T  + s4T)/sprints.length));
              countAQP1++;
              console.log(countAQP1);
                }
      }
  
      //alumnas de AQP 2017-1
      var studentsAQP2 = data.AQP["2017-1"].students;
      var countAQP2= 0;
      for(var i = 0; i < studentsAQP2.length; i++){
          var sprints = data.AQP["2017-1"].students[i].sprints;
          var s1H= data.AQP["2017-1"].students[i].sprints[0].score.hse;
          var s1T= data.AQP["2017-1"].students[i].sprints[0].score.tech;
          var s2H= data.AQP["2017-1"].students[i].sprints[1].score.hse;
          var s2T= data.AQP["2017-1"].students[i].sprints[1].score.tech;
          var s3H= data.AQP["2017-1"].students[i].sprints[2].score.hse;
          var s3T= data.AQP["2017-1"].students[i].sprints[2].score.tech;
  
              if ((s1H + s2H + s3H)/sprints.length > 840 && (s1T + s2T + s3T)/sprints.length > 1260){
              console.log('nombre estudiante: '+data.AQP["2017-1"].students[i].name+' puntaje hse: '+((s1H + s2H + s3H)/sprints.length));
              console.log('nombre estudiante: '+data.AQP["2017-1"].students[i].name+' puntaje tech: '+((s1T + s2T + s3T)/sprints.length));
              countAQP2++;
              console.log(countAQP2);
                }
      }
  
        //alumnas de CDMX 2017-1
        var studentsCDMX1 = data.CDMX["2017-1"].students;
        var countCDMX1= 0;
        for(var i = 0; i < studentsCDMX1.length; i++){
            var sprints = data.CDMX["2017-1"].students[i].sprints;
            var s1H= data.CDMX["2017-1"].students[i].sprints[0].score.hse;
            var s1T= data.CDMX["2017-1"].students[i].sprints[0].score.tech;
            var s2H= data.CDMX["2017-1"].students[i].sprints[1].score.hse;
            var s2T= data.CDMX["2017-1"].students[i].sprints[1].score.tech;
            var s3H= data.CDMX["2017-1"].students[i].sprints[2].score.hse;
            var s3T= data.CDMX["2017-1"].students[i].sprints[2].score.tech;
    
                if ((s1H + s2H + s3H)/sprints.length > 840 && (s1T + s2T + s3T)/sprints.length > 1260){
                console.log('nombre estudiante: '+data.CDMX["2017-1"].students[i].name+' puntaje hse: '+((s1H + s2H + s3H)/sprints.length));
                console.log('nombre estudiante: '+data.CDMX["2017-1"].students[i].name+' puntaje tech: '+((s1T + s2T + s3T)/sprints.length));
                countCDMX1++;
                console.log(countCDMX1);
                  }
        }
  
           //alumnas de CDMX 2017-2
           var studentsCDMX2 = data.CDMX['2017-2'].students;
           var countCDMX2= 0;
           for(var i = 0; i < studentsCDMX2.length; i++){
               //verifica si esta activa la estudiante
               if(data.CDMX['2017-2'].students[i].active){
               var sprints = data.CDMX['2017-2'].students[i].sprints;
               var s1H= data.CDMX['2017-2'].students[i].sprints[0].score.hse;
               var s1T= data.CDMX['2017-2'].students[i].sprints[0].score.tech;
               var s2H= data.CDMX['2017-2'].students[i].sprints[1].score.hse;
               var s2T= data.CDMX['2017-2'].students[i].sprints[1].score.tech;
       
                   if ((s1H + s2H)/sprints.length > 840 && (s1T + s2T)/sprints.length > 1260){
                   console.log('nombre estudiante: '+data.CDMX['2017-2'].students[i].name+' puntaje hse: '+((s1H + s2H)/sprints.length));
                   console.log('nombre estudiante: '+data.CDMX['2017-2'].students[i].name+' puntaje tech: '+((s1T + s2T)/sprints.length));
                   countCDMX2++;
                   console.log(countCDMX2);
                     }
                  }else{
                  continue;
              }
           }
  
             //alumnas de LIM 2016-2
             var studentsLIM1 = data.LIM['2016-2'].students;
             var countLIM1= 0;
             for(var i = 0; i < studentsLIM1.length; i++){
                 //verifica si esta activa la estudiante
                 if(data.LIM['2016-2'].students[i].active){
                 var sprints = data.LIM['2016-2'].students[i].sprints;
                 var s1H= data.LIM['2016-2'].students[i].sprints[0].score.hse;
                 var s1T= data.LIM['2016-2'].students[i].sprints[0].score.tech;
                 var s2H= data.LIM['2016-2'].students[i].sprints[1].score.hse;
                 var s2T= data.LIM['2016-2'].students[i].sprints[1].score.tech;
         
                     if ((s1H + s2H)/sprints.length > 840 && (s1T + s2T)/sprints.length > 1260){
                     console.log('nombre estudiante: '+data.LIM['2016-2'].students[i].name+' puntaje hse: '+((s1H + s2H)/sprints.length));
                     console.log('nombre estudiante: '+data.LIM['2016-2'].students[i].name+' puntaje tech: '+((s1T + s2T)/sprints.length));
                     countLIM1++;
                     console.log(countLIM1);
                       }
                    }else{
                    continue;
                }
             }
  
               //alumnas de LIM 2017-1
               var studentsLIM2 = data.LIM['2017-1'].students;
               var countLIM2= 0;
               for(var i = 0; i < studentsLIM2.length; i++){
                   //verifica si esta activa la estudiante
                   if(data.LIM['2017-1'].students[i].active){
                   var sprints = data.LIM['2017-1'].students[i].sprints;
                   var s1H= data.LIM['2017-1'].students[i].sprints[0].score.hse;
                   var s1T= data.LIM['2017-1'].students[i].sprints[0].score.tech;
                   var s2H= data.LIM['2017-1'].students[i].sprints[1].score.hse;
                   var s2T= data.LIM['2017-1'].students[i].sprints[1].score.tech;
                   var s3H= data.LIM['2017-1'].students[i].sprints[2].score.hse;
                   var s3T= data.LIM['2017-1'].students[i].sprints[2].score.tech;
                   var s4H= data.LIM['2017-1'].students[i].sprints[3].score.hse;
                   var s4T= data.LIM['2017-1'].students[i].sprints[3].score.tech;
           
                       if ((s1H + s2H + s3H + s4H)/sprints.length > 840 && (s1T + s2T + s3T + s4T)/sprints.length > 1260){
                       console.log('nombre estudiante: '+data.LIM['2017-1'].students[i].name+' puntaje hse: '+((s1H + s2H + s3H + s4H)/sprints.length));
                       console.log('nombre estudiante: '+data.LIM['2017-1'].students[i].name+' puntaje tech: '+((s1T + s2T + s3T + s4T)/sprints.length));
                       countLIM2++;
                       console.log(countLIM2);
                         }
                      }else{
                      continue;
                  }
               }
   
                 //alumnas de LIM 2017-2
                 var studentsLIM3 = data.LIM['2017-2'].students;
                 var countLIM3= 0;
                 for(var i = 0; i < studentsLIM3.length; i++){
                     //verifica si esta activa la estudiante
                     if(data.LIM['2017-2'].students[i].active){
                     var sprints = data.LIM['2017-2'].students[i].sprints;
                     var s1H= data.LIM['2017-2'].students[i].sprints[0].score.hse;
                     var s1T= data.LIM['2017-2'].students[i].sprints[0].score.tech;
                     var s2H= data.LIM['2017-2'].students[i].sprints[1].score.hse;
                     var s2T= data.LIM['2017-2'].students[i].sprints[1].score.tech;
                     
                         if ((s1H + s2H)/sprints.length > 840 && (s1T + s2T)/sprints.length > 1260){
                         console.log('nombre estudiante: '+data.LIM['2017-2'].students[i].name+' puntaje hse: '+((s1H + s2H)/sprints.length));
                         console.log('nombre estudiante: '+data.LIM['2017-2'].students[i].name+' puntaje tech: '+((s1T + s2T)/sprints.length));
                         countLIM3++;
                         console.log(countLIM3);
                           }
                        }else{
                        continue;
                    }
                 } 
  
                  //alumnas de SCL 2016-2
             var studentsSCL1 = data.SCL['2016-2'].students;
             var countSCL1= 0;
             for(var i = 0; i < studentsSCL1.length; i++){
                 //verifica si esta activa la estudiante
                 if(data.SCL['2016-2'].students[i].active){
                 var sprints = data.SCL['2016-2'].students[i].sprints;
                 var s1H= data.SCL['2016-2'].students[i].sprints[0].score.hse;
                 var s1T= data.SCL['2016-2'].students[i].sprints[0].score.tech;
                 var s2H= data.SCL['2016-2'].students[i].sprints[1].score.hse;
                 var s2T= data.SCL['2016-2'].students[i].sprints[1].score.tech;
                 var s3H= data.SCL['2016-2'].students[i].sprints[2].score.hse;
                 var s3T= data.SCL['2016-2'].students[i].sprints[2].score.tech;
                 var s4H= data.SCL['2016-2'].students[i].sprints[3].score.hse;
                 var s4T= data.SCL['2016-2'].students[i].sprints[3].score.tech;
         
                     if ((s1H + s2H + s3H + s4H)/sprints.length > 840 && (s1T + s2T + s3T + s4T)/sprints.length > 1260){
                     console.log('nombre estudiante: '+data.SCL['2016-2'].students[i].name+' puntaje hse: '+((s1H + s2H + s3H + s4H)/sprints.length));
                     console.log('nombre estudiante: '+data.SCL['2016-2'].students[i].name+' puntaje tech: '+((s1T + s2T + s3T + s4T)/sprints.length));
                     countSCL1++;
                     console.log(countSCL1);
                       }
                    }else{
                    continue;
                }
             }
  
              //alumnas de SCL 2017-1
              var studentsSCL2 = data.SCL['2017-1'].students;
              var countSCL2= 0;
              for(var i = 0; i < studentsSCL2.length; i++){
                  //verifica si esta activa la estudiante
                  if(data.SCL['2017-1'].students[i].active){
                  var sprints = data.SCL['2017-1'].students[i].sprints;
                  var s1H= data.SCL['2017-1'].students[i].sprints[0].score.hse;
                  var s1T= data.SCL['2017-1'].students[i].sprints[0].score.tech;
                  var s2H= data.SCL['2017-1'].students[i].sprints[1].score.hse;
                  var s2T= data.SCL['2017-1'].students[i].sprints[1].score.tech;
                  var s3H= data.SCL['2017-1'].students[i].sprints[2].score.hse;
                  var s3T= data.SCL['2017-1'].students[i].sprints[2].score.tech;
          
                      if ((s1H + s2H + s3H)/sprints.length > 840 && (s1T + s2T + s3T)/sprints.length > 1260){
                      console.log('nombre estudiante: '+data.SCL['2017-1'].students[i].name+' puntaje hse: '+((s1H + s2H + s3H)/sprints.length));
                      console.log('nombre estudiante: '+data.SCL['2017-1'].students[i].name+' puntaje tech: '+((s1T + s2T + s3T)/sprints.length));
                      countSCL2++;
                      console.log(countSCL2);
                        }
                     }else{
                     continue;
                     
                 }
              }
  
              //alumnas de SCL 2017-2
              var studentsSCL3 = data.SCL['2017-2'].students;
              var countSCL3= 0;
              for(var i = 0; i < studentsSCL3.length; i++){
                  //verifica si esta activa la estudiante
                  if(data.SCL['2017-2'].students[i].active){
                  var sprints = data.SCL['2017-2'].students[i].sprints;
                  var s1H= data.SCL['2017-2'].students[i].sprints[0].score.hse;
                  var s1T= data.SCL['2017-2'].students[i].sprints[0].score.tech;
                  var s2H= data.SCL['2017-2'].students[i].sprints[1].score.hse;
                  var s2T= data.SCL['2017-2'].students[i].sprints[1].score.tech;
                  
                     if ((s1H + s2H)/sprints.length > 840 && (s1T + s2T)/sprints.length > 1260){
                      console.log('nombre estudiante: '+data.SCL['2017-2'].students[i].name+' puntaje hse: '+((s1H + s2H)/sprints.length));
                     console.log('nombre estudiante: '+data.SCL['2017-2'].students[i].name+' puntaje tech: '+((s1T + s2T)/sprints.length));
                      countSCL3++;
                      console.log(countSCL3);
                        }
                     }else{
                     continue;
                 }
              } 
  
var totalCount = countAQP1 + countAQP2 + countCDMX1 + countCDMX2 + countLIM1 + countLIM2 + countLIM3 + countSCL1 + countSCL2 + countSCL3;

//agregar promedios al html
var superanMetaDiv = document.getElementById('estudiantesMeta');
var nodoElemento = document.createElement('h2');
var nodoTexto = document.createTextNode(totalCount);
nodoElemento.appendChild(nodoTexto);
superanMetaDiv.appendChild(nodoElemento);
return countAQP1 + countAQP2 + countCDMX1 + countCDMX2 + countLIM1 + countLIM2 + countLIM3 + countSCL1 + countSCL2 + countSCL3;
}



//4.-El porcentaje que representa el dato anterior en relación al total de estudiantes

function porcentajeEstudiantes(){

var total = ((superanMeta() * 100) / totalEstudiantes());
//agregar promedios al html
var porcentajEstudiantesDiv = document.getElementById('porcentajeMeta');
var nodoElemento = document.createElement('h2');
var nodoTexto = document.createTextNode(Math.round(total));
nodoElemento.appendChild(nodoTexto);
porcentajEstudiantesDiv.appendChild(nodoElemento);
return ((superanMeta() * 100) / totalEstudiantes());
}


//5.-El Net Promoter Score (NPS) promedio de los sprints cursados
function nps(){
var promoters_AQP1 = 0;
var detractors_AQP1 = 0;
var nps_AQP1 = 0;
for(var i = 0; i< data.AQP["2016-2"].ratings.length; i++){
promoters_AQP1 += data.AQP["2016-2"].ratings[i].nps.promoters/data.AQP['2016-2'].ratings.length;
detractors_AQP1 += data.AQP["2016-2"].ratings[i].nps.detractors/data.AQP['2016-2'].ratings.length;
nps_AQP1 = promoters_AQP1 - detractors_AQP1;
}
console.log('nps_AQP1: ' + nps_AQP1.toFixed(0));
var promoters_AQP2 = 0;
var detractors_AQP2 = 0;
var nps_AQP2 = 0;
for(var i = 0; i< data.AQP["2017-1"].ratings.length; i++){
promoters_AQP2 += data.AQP["2017-1"].ratings[i].nps.promoters/data.AQP['2017-1'].ratings.length;
detractors_AQP2 += data.AQP["2017-1"].ratings[i].nps.detractors/data.AQP['2017-1'].ratings.length;
nps_AQP2 = promoters_AQP2 - detractors_AQP2;
}
console.log('nps_AQP2: ' + nps_AQP2.toFixed(0));
var promoters_CDMX1 = 0;
var detractors_CDMX1 = 0;
var nps_CDMX1 = 0;
for(var i = 0; i< data.CDMX["2017-1"].ratings.length; i++){
promoters_CDMX1 += data.CDMX["2017-1"].ratings[i].nps.promoters/data.CDMX['2017-1'].ratings.length;
detractors_CDMX1 += data.CDMX["2017-1"].ratings[i].nps.detractors/data.CDMX['2017-1'].ratings.length;
nps_CDMX1 = promoters_CDMX1 - detractors_CDMX1;
}
console.log('nps_CDMX1: ' + nps_CDMX1.toFixed(0));
var promoters_CDMX2 = 0;
var detractors_CDMX2 = 0;
var nps_CDMX2 = 0;
for(var i = 0; i< data.CDMX["2017-2"].ratings.length; i++){
promoters_CDMX2 += data.CDMX["2017-2"].ratings[i].nps.promoters/data.CDMX['2017-2'].ratings.length;
detractors_CDMX2 += data.CDMX["2017-2"].ratings[i].nps.detractors/data.CDMX['2017-2'].ratings.length;
nps_CDMX2 = promoters_CDMX2 - detractors_CDMX2;
}
console.log('nps_CDMX2: ' + nps_CDMX2.toFixed(0));
var promoters_LIM1 = 0;
var detractors_LIM1 = 0;
var nps_LIM1 = 0;
for(var i = 0; i< data.LIM["2016-2"].ratings.length; i++){
promoters_LIM1 += data.LIM["2016-2"].ratings[i].nps.promoters/data.LIM['2016-2'].ratings.length;
detractors_LIM1 += data.LIM["2016-2"].ratings[i].nps.detractors/data.LIM['2016-2'].ratings.length;
nps_LIM1 = promoters_LIM1 - detractors_LIM1;
}
console.log('nps_LIM1: ' + nps_LIM1.toFixed(0));
var promoters_LIM2 = 0;
var detractors_LIM2 = 0;
var nps_LIM2 = 0;
for(var i = 0; i< data.LIM["2017-1"].ratings.length; i++){
promoters_LIM2 += data.LIM["2017-1"].ratings[i].nps.promoters/data.LIM['2017-1'].ratings.length;
detractors_LIM2 += data.LIM["2017-1"].ratings[i].nps.detractors/data.LIM['2017-1'].ratings.length;
nps_LIM2 = promoters_LIM2 - detractors_LIM2;
}
console.log('nps_LIM2: ' + nps_LIM2.toFixed(0));
var promoters_LIM3 = 0;
var detractors_LIM3 = 0;
var nps_LIM3 = 0;
for(var i = 0; i< data.LIM["2017-2"].ratings.length; i++){
promoters_LIM3 += data.LIM["2017-2"].ratings[i].nps.promoters/data.LIM['2017-2'].ratings.length;
detractors_LIM3 += data.LIM["2017-2"].ratings[i].nps.detractors/data.LIM['2017-2'].ratings.length;
nps_LIM3 = promoters_LIM3 - detractors_LIM3;
}
console.log('nps_LIM3: ' + nps_LIM3.toFixed(0));
var promoters_SCL1 = 0;
var detractors_SCL1 = 0;
var nps_SCL1 = 0;
for(var i = 0; i< data.SCL["2016-2"].ratings.length; i++){
promoters_SCL1 += data.SCL["2016-2"].ratings[i].nps.promoters/data.SCL['2016-2'].ratings.length;
detractors_SCL1 += data.SCL["2016-2"].ratings[i].nps.detractors/data.SCL['2016-2'].ratings.length;
nps_SCL1 = promoters_SCL1 - detractors_SCL1;
}
console.log('nps_SCL1: ' + nps_SCL1.toFixed(0));
var promoters_SCL2 = 0;
var detractors_SCL2 = 0;
var nps_SCL2 = 0;
for(var i = 0; i< data.SCL["2017-1"].ratings.length; i++){
promoters_SCL2 += data.SCL["2017-1"].ratings[i].nps.promoters/data.SCL['2017-1'].ratings.length;
detractors_SCL2 += data.SCL["2017-1"].ratings[i].nps.detractors/data.SCL['2017-1'].ratings.length;
nps_SCL2 = promoters_SCL2 - detractors_SCL2;
}
console.log('nps_SCL2: ' + nps_SCL2.toFixed(0));
var promoters_SCL3 = 0;
var detractors_SCL3 = 0;
var nps_SCL3 = 0;
for(var i = 0; i< data.SCL["2017-2"].ratings.length; i++){
promoters_SCL3 += data.SCL["2017-2"].ratings[i].nps.promoters/data.SCL['2017-2'].ratings.length;
detractors_SCL3 += data.SCL["2017-2"].ratings[i].nps.detractors/data.SCL['2017-2'].ratings.length;
nps_SCL3 = promoters_SCL3 - detractors_SCL3;
}
console.log('nps_SCL3: ' + nps_SCL3.toFixed(0));
}
//6.-La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
function superanTech(){

    //alumnas de AQP 2016-2
    var studentsAQP1 = data.AQP["2016-2"].students;
    var countAQP1= 0;
    for(var i = 0; i < studentsAQP1.length; i++){
        var sprints = data.AQP["2016-2"].students[i].sprints;
        var s1T= data.AQP["2016-2"].students[i].sprints[0].score.tech;
        var s2T= data.AQP["2016-2"].students[i].sprints[1].score.tech;
        var s3T= data.AQP["2016-2"].students[i].sprints[2].score.tech;
        var s4T= data.AQP["2016-2"].students[i].sprints[3].score.tech;

            if ((s1T + s2T + s3T + s4T)/sprints.length > 1260){
            console.log('nombre estudiante: '+data.AQP["2016-2"].students[i].name+' puntaje tech: '+((s1T + s2T + s3T  + s4T)/sprints.length));
            countAQP1++;
            console.log(countAQP1);
              }
    }

    //alumnas de AQP 2017-1
    var studentsAQP2 = data.AQP["2017-1"].students;
    var countAQP2= 0;
    for(var i = 0; i < studentsAQP2.length; i++){
        var sprints = data.AQP["2017-1"].students[i].sprints;
        var s1T= data.AQP["2017-1"].students[i].sprints[0].score.tech;
        var s2T= data.AQP["2017-1"].students[i].sprints[1].score.tech;
        var s3T= data.AQP["2017-1"].students[i].sprints[2].score.tech;

            if ((s1T + s2T + s3T)/sprints.length > 1260){
            console.log('nombre estudiante: '+data.AQP["2017-1"].students[i].name+' puntaje tech: '+((s1T + s2T + s3T)/sprints.length));
            countAQP2++;
            console.log(countAQP2);
              }
    }

      //alumnas de CDMX 2017-1
      var studentsCDMX1 = data.CDMX["2017-1"].students;
      var countCDMX1= 0;
      for(var i = 0; i < studentsCDMX1.length; i++){
          var sprints = data.CDMX["2017-1"].students[i].sprints;
          var s1T= data.CDMX["2017-1"].students[i].sprints[0].score.tech;
          var s2T= data.CDMX["2017-1"].students[i].sprints[1].score.tech;
          var s3T= data.CDMX["2017-1"].students[i].sprints[2].score.tech;
  
              if ((s1T + s2T + s3T)/sprints.length > 1260){
              console.log('nombre estudiante: '+data.CDMX["2017-1"].students[i].name+' puntaje tech: '+((s1T + s2T + s3T)/sprints.length));
              countCDMX1++;
              console.log(countCDMX1);
                }
      }

         //alumnas de CDMX 2017-2
         var studentsCDMX2 = data.CDMX['2017-2'].students;
         var countCDMX2= 0;
         for(var i = 0; i < studentsCDMX2.length; i++){
             //verifica si esta activa la estudiante
             if(data.CDMX['2017-2'].students[i].active){
             var sprints = data.CDMX['2017-2'].students[i].sprints;
             var s1T= data.CDMX['2017-2'].students[i].sprints[0].score.tech;
             var s2T= data.CDMX['2017-2'].students[i].sprints[1].score.tech;
     
                 if ((s1T + s2T)/sprints.length > 1260){
                 console.log('nombre estudiante: '+data.CDMX['2017-2'].students[i].name+' puntaje tech: '+((s1T + s2T)/sprints.length));
                 countCDMX2++;
                 console.log(countCDMX2);
                   }
                }else{
                continue;
            }
         }

           //alumnas de LIM 2016-2
           var studentsLIM1 = data.LIM['2016-2'].students;
           var countLIM1= 0;
           for(var i = 0; i < studentsLIM1.length; i++){
               //verifica si esta activa la estudiante
               if(data.LIM['2016-2'].students[i].active){
               var sprints = data.LIM['2016-2'].students[i].sprints;
               var s1T= data.LIM['2016-2'].students[i].sprints[0].score.tech;
               var s2T= data.LIM['2016-2'].students[i].sprints[1].score.tech;
       
                   if ((s1T + s2T)/sprints.length > 1260){
                   console.log('nombre estudiante: '+data.LIM['2016-2'].students[i].name+' puntaje tech: '+((s1T + s2T)/sprints.length));
                   countLIM1++;
                   console.log(countLIM1);
                     }
                  }else{
                  continue;
              }
           }

             //alumnas de LIM 2017-1
             var studentsLIM2 = data.LIM['2017-1'].students;
             var countLIM2= 0;
             for(var i = 0; i < studentsLIM2.length; i++){
                 //verifica si esta activa la estudiante
                 if(data.LIM['2017-1'].students[i].active){
                 var sprints = data.LIM['2017-1'].students[i].sprints;
                 var s1T= data.LIM['2017-1'].students[i].sprints[0].score.tech;
                 var s2T= data.LIM['2017-1'].students[i].sprints[1].score.tech;
                 var s3T= data.LIM['2017-1'].students[i].sprints[2].score.tech;
                 var s4T= data.LIM['2017-1'].students[i].sprints[3].score.tech;
         
                     if ((s1T + s2T + s3T + s4T)/sprints.length > 1260){
                     console.log('nombre estudiante: '+data.LIM['2017-1'].students[i].name+' puntaje tech: '+((s1T + s2T + s3T + s4T)/sprints.length));
                     countLIM2++;
                     console.log(countLIM2);
                       }
                    }else{
                    continue;
                }
             }
 
               //alumnas de LIM 2017-2
               var studentsLIM3 = data.LIM['2017-2'].students;
               var countLIM3= 0;
               for(var i = 0; i < studentsLIM3.length; i++){
                   //verifica si esta activa la estudiante
                   if(data.LIM['2017-2'].students[i].active){
                   var sprints = data.LIM['2017-2'].students[i].sprints;
                   var s1T= data.LIM['2017-2'].students[i].sprints[0].score.tech;
                   var s2T= data.LIM['2017-2'].students[i].sprints[1].score.tech;
                   
                       if ((s1T + s2T)/sprints.length > 1260){
                       console.log('nombre estudiante: '+data.LIM['2017-2'].students[i].name+' puntaje tech: '+((s1T + s2T)/sprints.length));
                       countLIM3++;
                       console.log(countLIM3);
                         }
                      }else{
                      continue;
                  }
               } 

                //alumnas de SCL 2016-2
           var studentsSCL1 = data.SCL['2016-2'].students;
           var countSCL1= 0;
           for(var i = 0; i < studentsSCL1.length; i++){
               //verifica si esta activa la estudiante
               if(data.SCL['2016-2'].students[i].active){
               var sprints = data.SCL['2016-2'].students[i].sprints;
               var s1T= data.SCL['2016-2'].students[i].sprints[0].score.tech;
               var s2T= data.SCL['2016-2'].students[i].sprints[1].score.tech;
               var s3T= data.SCL['2016-2'].students[i].sprints[2].score.tech;
               var s4T= data.SCL['2016-2'].students[i].sprints[3].score.tech;
       
                   if ((s1T + s2T + s3T + s4T)/sprints.length > 1260){
                   console.log('nombre estudiante: '+data.SCL['2016-2'].students[i].name+' puntaje tech: '+((s1T + s2T + s3T + s4T)/sprints.length));
                   countSCL1++;
                   console.log(countSCL1);
                     }
                  }else{
                  continue;
              }
           }

            //alumnas de SCL 2017-1
            var studentsSCL2 = data.SCL['2017-1'].students;
            var countSCL2= 0;
            for(var i = 0; i < studentsSCL2.length; i++){
                //verifica si esta activa la estudiante
                if(data.SCL['2017-1'].students[i].active){
                var sprints = data.SCL['2017-1'].students[i].sprints;
                var s1T= data.SCL['2017-1'].students[i].sprints[0].score.tech;
                var s2T= data.SCL['2017-1'].students[i].sprints[1].score.tech;
                var s3T= data.SCL['2017-1'].students[i].sprints[2].score.tech;
        
                    if ( (s1T + s2T + s3T)/sprints.length > 1260){
                    console.log('nombre estudiante: '+data.SCL['2017-1'].students[i].name+' puntaje tech: '+((s1T + s2T + s3T)/sprints.length));
                    countSCL2++;
                    console.log(countSCL2);
                      }
                   }else{
                   continue;
                   
               }
            }

            //alumnas de SCL 2017-2
            var studentsSCL3 = data.SCL['2017-2'].students;
            var countSCL3= 0;
            for(var i = 0; i < studentsSCL3.length; i++){
                //verifica si esta activa la estudiante
                if(data.SCL['2017-2'].students[i].active){
                var sprints = data.SCL['2017-2'].students[i].sprints;
                var s1T= data.SCL['2017-2'].students[i].sprints[0].score.tech;
                var s2T= data.SCL['2017-2'].students[i].sprints[1].score.tech;
                
                    if ((s1T + s2T)/sprints.length > 1260){
                    console.log('nombre estudiante: '+data.SCL['2017-2'].students[i].name+' puntaje tech: '+((s1T + s2T)/sprints.length));
                    countSCL3++;
                    console.log(countSCL3);
                      }
                   }else{
                   continue;
               }
            } 
return countAQP1 + countAQP2 + countCDMX1 + countCDMX2 + countLIM1 + countLIM2 + countLIM3 + countSCL1 + countSCL2 + countSCL3;
}



//7.-La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint
function superanHSE(){

    //alumnas de AQP 2016-2
    var studentsAQP1 = data.AQP["2016-2"].students;
    var countAQP1= 0;
    for(var i = 0; i < studentsAQP1.length; i++){
        var sprints = data.AQP["2016-2"].students[i].sprints;
        var s1H= data.AQP["2016-2"].students[i].sprints[0].score.hse;
        var s2H= data.AQP["2016-2"].students[i].sprints[1].score.hse;
        var s3H= data.AQP["2016-2"].students[i].sprints[2].score.hse;
        var s4H= data.AQP["2016-2"].students[i].sprints[3].score.hse;

            if ((s1H + s2H + s3H  + s4H)/sprints.length > 840){
            console.log('nombre estudiante: '+data.AQP["2016-2"].students[i].name+' puntaje hse: '+((s1H + s2H + s3H  + s4H)/sprints.length));
            countAQP1++;
            console.log(countAQP1);
              }
    }

    //alumnas de AQP 2017-1
    var studentsAQP2 = data.AQP["2017-1"].students;
    var countAQP2= 0;
    for(var i = 0; i < studentsAQP2.length; i++){
        var sprints = data.AQP["2017-1"].students[i].sprints;
        var s1H= data.AQP["2017-1"].students[i].sprints[0].score.hse;
        var s2H= data.AQP["2017-1"].students[i].sprints[1].score.hse;
        var s3H= data.AQP["2017-1"].students[i].sprints[2].score.hse;

            if ((s1H + s2H + s3H)/sprints.length > 840){
            console.log('nombre estudiante: '+data.AQP["2017-1"].students[i].name+' puntaje hse: '+((s1H + s2H + s3H)/sprints.length));
            countAQP2++;
            console.log(countAQP2);
              }
    }

        //alumnas de CDMX 2017-1
        var studentsCDMX1 = data.CDMX["2017-1"].students;
        var countCDMX1= 0;
        for(var i = 0; i < studentsCDMX1.length; i++){
            var sprints = data.CDMX["2017-1"].students[i].sprints;
            var s1H= data.CDMX["2017-1"].students[i].sprints[0].score.hse;
            var s2H= data.CDMX["2017-1"].students[i].sprints[1].score.hse;
            var s3H= data.CDMX["2017-1"].students[i].sprints[2].score.hse;
    
                if ((s1H + s2H + s3H)/sprints.length > 840){
                console.log('nombre estudiante: '+data.CDMX["2017-1"].students[i].name+' puntaje hse: '+((s1H + s2H + s3H)/sprints.length));
                countCDMX1++;
                console.log(countCDMX1);
                  }
        }
  
           //alumnas de CDMX 2017-2
           var studentsCDMX2 = data.CDMX['2017-2'].students;
           var countCDMX2= 0;
           for(var i = 0; i < studentsCDMX2.length; i++){
               //verifica si esta activa la estudiante
               if(data.CDMX['2017-2'].students[i].active){
               var sprints = data.CDMX['2017-2'].students[i].sprints;
               var s1H= data.CDMX['2017-2'].students[i].sprints[0].score.hse;
               var s2H= data.CDMX['2017-2'].students[i].sprints[1].score.hse;
       
                   if ((s1H + s2H)/sprints.length > 840){
                   console.log('nombre estudiante: '+data.CDMX['2017-2'].students[i].name+' puntaje hse: '+((s1H + s2H)/sprints.length));
                   countCDMX2++;
                   console.log(countCDMX2);
                     }
                  }else{
                  continue;
              }
           }

             //alumnas de LIM 2016-2
             var studentsLIM1 = data.LIM['2016-2'].students;
             var countLIM1= 0;
             for(var i = 0; i < studentsLIM1.length; i++){
                 //verifica si esta activa la estudiante
                 if(data.LIM['2016-2'].students[i].active){
                 var sprints = data.LIM['2016-2'].students[i].sprints;
                 var s1H= data.LIM['2016-2'].students[i].sprints[0].score.hse;
                 var s2H= data.LIM['2016-2'].students[i].sprints[1].score.hse;
         
                     if ((s1H + s2H)/sprints.length > 840){
                     console.log('nombre estudiante: '+data.LIM['2016-2'].students[i].name+' puntaje hse: '+((s1H + s2H)/sprints.length));
                     countLIM1++;
                     console.log(countLIM1);
                       }
                    }else{
                    continue;
                }
             }
  
               //alumnas de LIM 2017-1
               var studentsLIM2 = data.LIM['2017-1'].students;
               var countLIM2= 0;
               for(var i = 0; i < studentsLIM2.length; i++){
                   //verifica si esta activa la estudiante
                   if(data.LIM['2017-1'].students[i].active){
                   var sprints = data.LIM['2017-1'].students[i].sprints;
                   var s1H= data.LIM['2017-1'].students[i].sprints[0].score.hse;
                   var s2H= data.LIM['2017-1'].students[i].sprints[1].score.hse;
                   var s3H= data.LIM['2017-1'].students[i].sprints[2].score.hse;
                   var s4H= data.LIM['2017-1'].students[i].sprints[3].score.hse;
           
                       if ((s1H + s2H + s3H + s4H)/sprints.length > 840){
                       console.log('nombre estudiante: '+data.LIM['2017-1'].students[i].name+' puntaje hse: '+((s1H + s2H + s3H + s4H)/sprints.length));
                       countLIM2++;
                       console.log(countLIM2);
                         }
                      }else{
                      continue;
                  }
               }
   
                 //alumnas de LIM 2017-2
                 var studentsLIM3 = data.LIM['2017-2'].students;
                 var countLIM3= 0;
                 for(var i = 0; i < studentsLIM3.length; i++){
                     //verifica si esta activa la estudiante
                     if(data.LIM['2017-2'].students[i].active){
                     var sprints = data.LIM['2017-2'].students[i].sprints;
                     var s1H= data.LIM['2017-2'].students[i].sprints[0].score.hse;
                     var s2H= data.LIM['2017-2'].students[i].sprints[1].score.hse;
                     
                         if ((s1H + s2H)/sprints.length > 840){
                         console.log('nombre estudiante: '+data.LIM['2017-2'].students[i].name+' puntaje hse: '+((s1H + s2H)/sprints.length));
                         countLIM3++;
                         console.log(countLIM3);
                           }
                        }else{
                        continue;
                    }
                 } 
  

                //alumnas de SCL 2016-2
           var studentsSCL1 = data.SCL['2016-2'].students;
           var countSCL1= 0;
           for(var i = 0; i < studentsSCL1.length; i++){
               //verifica si esta activa la estudiante
               if(data.SCL['2016-2'].students[i].active){
               var sprints = data.SCL['2016-2'].students[i].sprints;
               var s1H= data.SCL['2016-2'].students[i].sprints[0].score.hse;
               var s2H= data.SCL['2016-2'].students[i].sprints[1].score.hse;
               var s3H= data.SCL['2016-2'].students[i].sprints[2].score.hse;
               var s4H= data.SCL['2016-2'].students[i].sprints[3].score.hse;
       
                   if ((s1H + s2H + s3H + s4H)/sprints.length > 840){
                   console.log('nombre estudiante: '+data.SCL['2016-2'].students[i].name+' puntaje hse: '+((s1H + s2H + s3H + s4H)/sprints.length));
                   countSCL1++;
                   console.log(countSCL1);
                     }
                  }else{
                  continue;
              }
           }

            //alumnas de SCL 2017-1
            var studentsSCL2 = data.SCL['2017-1'].students;
            var countSCL2= 0;
            for(var i = 0; i < studentsSCL2.length; i++){
                //verifica si esta activa la estudiante
                if(data.SCL['2017-1'].students[i].active){
                var sprints = data.SCL['2017-1'].students[i].sprints;
                var s1H= data.SCL['2017-1'].students[i].sprints[0].score.hse;
                var s2H= data.SCL['2017-1'].students[i].sprints[1].score.hse;
                var s3H= data.SCL['2017-1'].students[i].sprints[2].score.hse;
        
                    if ((s1H + s2H + s3H)/sprints.length > 840 ){
                    console.log('nombre estudiante: '+data.SCL['2017-1'].students[i].name+' puntaje hse: '+((s1H + s2H + s3H)/sprints.length));
                    countSCL2++;
                    console.log(countSCL2);
                      }
                   }else{
                   continue;
                   
               }
            }

            //alumnas de SCL 2017-2
            var studentsSCL3 = data.SCL['2017-2'].students;
            var countSCL3= 0;
            for(var i = 0; i < studentsSCL3.length; i++){
                //verifica si esta activa la estudiante
                if(data.SCL['2017-2'].students[i].active){
                var sprints = data.SCL['2017-2'].students[i].sprints;
                var s1H= data.SCL['2017-2'].students[i].sprints[0].score.hse;
                var s2H= data.SCL['2017-2'].students[i].sprints[1].score.hse;
                
                    if ((s1H + s2H)/sprints.length > 840 ){
                    console.log('nombre estudiante: '+data.SCL['2017-2'].students[i].name+' puntaje hse: '+((s1H + s2H)/sprints.length));
                    countSCL3++;
                    console.log(countSCL3);
                      }
                   }else{
                   continue;
               }
            } 
return countAQP1 + countAQP2 + countCDMX1 + countCDMX2 + countLIM1 + countLIM2 + countLIM3 + countSCL1 + countSCL2 + countSCL3;
}


//8.-porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
function promedioAlumnas(){

var sumaAQP1 = 0;
var promAQP1 = 0;
for(var i = 0; i < data.AQP['2016-2'].ratings.length; i++){
 sumaAQP1 += data.AQP['2016-2'].ratings[i].student.cumple;
 promAQP1 = sumaAQP1 / data.AQP['2016-2'].ratings.length;
 console.log(sumaAQP1);
}
console.log('promedio total: ' + promAQP1);

var sumaAQP2 = 0;
var promAQP2 = 0;
for(var i = 0; i < data.AQP['2017-1'].ratings.length; i++){
  sumaAQP2 += data.AQP['2017-1'].ratings[i].student.cumple;
  var promAQP2 = sumaAQP2 /data.AQP['2017-1'].ratings.length;
}
console.log(sumaAQP2 +' suma y promedio :'+promAQP2); 

var sumaCDMX1 = 0;
var promCDMX1 = 0;
for(var i = 0; i < data.CDMX['2017-1'].ratings.length; i++){
  sumaCDMX1 += data.CDMX['2017-1'].ratings[i].student.cumple;
  var promCDMX1 = sumaCDMX1 / data.CDMX['2017-1'].ratings.length;
}
console.log(sumaCDMX1+' suma y promedio :'+promAQP1); 

var sumaCDMX2 = 0;
var promCDMX2 = 0;
for(var i = 0; i < data.CDMX['2017-2'].ratings.length; i++){
  sumaCDMX2 += data.CDMX['2017-2'].ratings[i].student.cumple;
   promCDMX2 = sumaCDMX2 / data.CDMX['2017-2'].ratings.length;
}
console.log(sumaCDMX2 +' suma y promedio :'+promCDMX2); 

var sumaLIM1 = 0;
var promLIM1 = 0;
for(var i = 0; i < data.LIM['2016-2'].ratings.length; i++){
  sumaLIM1 += data.LIM['2016-2'].ratings[i].student.cumple;
  promLIM1 = sumaLIM1 / data.LIM['2016-2'].ratings.length;
}
console.log(sumaLIM1+' suma y promedio :'+promLIM1); 

var sumaLIM2 = 0;
var promLIM2 = 0;
for(var i = 0; i < data.LIM['2017-1'].ratings.length; i++){
  sumaLIM2 += data.LIM['2017-1'].ratings[i].student.cumple;
  promLIM2 = sumaLIM2 / data.LIM['2017-1'].ratings.length;
}
console.log(sumaLIM2 +' suma y promedio :'+promLIM2); 

var sumaLIM3 = 0;
var promLIM3 = 0;
for(var i = 0; i < data.LIM['2017-2'].ratings.length; i++){
  sumaLIM3 += data.LIM['2017-2'].ratings[i].student.cumple;
  promLIM3 = sumaLIM3 / data.LIM['2017-2'].ratings.length;
}
console.log(sumaLIM3+' suma y promedio :'+promLIM3);

var sumaSCL1 = 0;
var promSCL1 = 0;
for(var i = 0; i < data.SCL['2016-2'].ratings.length; i++){
  sumaSCL1 += data.SCL['2016-2'].ratings[i].student.cumple;
  promSCL1 = sumaSCL1 / data.SCL['2016-2'].ratings.length;
}
console.log(sumaSCL1+' suma y promedio :'+promSCL1);

var sumaSCL2 = 0;
var promSCL2 = 0;
for(var i = 0; i < data.SCL['2017-1'].ratings.length; i++){
  sumaSCL2 += data.SCL['2017-1'].ratings[i].student.cumple;
  promSCL2 = sumaSCL2 / data.SCL['2017-1'].ratings.length;
}
console.log(sumaSCL2+' suma y promedio :'+promSCL2);


var sumaSCL3 = 0;
var promSCL3 = 0;
for(var i = 0; i < data.SCL['2017-2'].ratings.length; i++){
  sumaSCL3 += data.SCL['2017-2'].ratings[i].student.cumple;
  promSCL3 = sumaSCL3 / data.SCL['2017-2'].ratings.length;
}
console.log(sumaSCL3+' suma y promedio :'+promSCL3);

//sumo todos los puntajes de sedes y divido para obtener promediode l@s jedi masters. 
var sumaTotal = promAQP1 + promAQP2 + promCDMX1 + promCDMX2 + promLIM1 + promLIM2 + promLIM3 + promSCL1 + promSCL2 + promSCL3;
var promedioAlumnas = sumaTotal/10;
console.log('promedio de Alumnas: '+promedioAlumnas);

//agregar promedios al html
var expectativasDiv = document.getElementById('expectativasEstudiantes');
var  nodoElemento = document.createElement('h2');
var nodoTexto = document.createTextNode(Math.round(promedioAlumnas));
nodoElemento.appendChild(nodoTexto);
expectativasDiv.appendChild(nodoElemento);
}

//9.-Funcion  puntuación promedio de l@s profesores.
function promedioProfesores(){
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

//agregar promedios al html
var profesDiv = document.getElementById('promedioProfesor');
var  nodoElemento = document.createElement('h2');
var nodoTexto = document.createTextNode(Math.round(promedioProfesores));
nodoElemento.appendChild(nodoTexto);
profesDiv.appendChild(nodoElemento);
}


//10.-Funcion para devolver La puntuación promedio de l@s jedi masters. 
function promedioJedis(){
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

//agregar promedios al html
var jedisDiv = document.getElementById('promedioJedi');
var  nodoElemento = document.createElement('h2');
var nodoTexto = document.createTextNode(Math.round(promedioJedis));
nodoElemento.appendChild(nodoTexto);
jedisDiv.appendChild(nodoElemento);

}