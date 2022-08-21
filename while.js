alumnos = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estu) {
  console.log(`Hola, ${estu}`);
}

while (alumnos.length > 0) {
  console.log(alumnos);
  var alumno = alumnos.shift();
  saludarEstudiantes(alumno);
}
