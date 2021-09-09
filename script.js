var nota;
nota = prompt("¿Que nota has sacado en el examen?");
if (nota > 0 && nota < 3) {
  document.write("Muy deficiente");
  }else{
    if(nota > 3 && nota < 5) {
    document.write("Insuficiente");
      if (nota > 5 && nota < 6) 
      document.write("Suficiente");
        if (nota > 6 && nota < 7) 
        document.write("Bien");
          if (nota > 7 && nota < 8) 
          document.write("Notable");
            if (nota == 9) 
            document.write("Sobresaliente");
          }else{
      document.write("Matricula de honor");
    }
}

/*
var nota;
nota = prompt("¿Que nota has sacado en el examen?");
if (nota > 0 && nota < 3) {
  document.write("Muy deficiente");
  }else{
    if(nota > 3 && nota < 5) {
    document.write("Insuficiente");
    }else{
      if (nota > 5 && nota < 6) {
      document.write("Suficiente");
      }else{
        if (nota > 6 && nota < 7) {
        document.write("Bien");
        }else{
          if (nota > 7 && nota < 8) {
          document.write("Notable");
          }else{
            if (nota == 9) {
            document.write("Sobresaliente");
          }else{
      document.write("Matricula de honor");
          }
        }
      }
    }
  }
}
*/

/*
var nota;
nota = prompt("¿Que nota has sacado en el examen?");
if (nota > 0 && nota < 3) {
  document.write("Muy deficiente");
}else if (nota > 3 && nota < 5) {
  document.write("Insuficiente");
}else if (nota > 5 && nota < 6) {
  document.write("Suficiente");
}else if (nota > 6 && nota < 7) {
  document.write("Bien");
}else if (nota > 7 && nota < 8) {
  document.write("Notable");
}else if (nota == 9) {
  document.write("Sobresaliente");
}else{
  document.write("Matricula de honor");
}
*/