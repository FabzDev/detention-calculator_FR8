function auto(mar, mod, ann) {
  this.marca = mar;
  this.modelo = mod;
  this.annio = ann;
}

var marcas = ["Renault", "Chevrolet", "Hyundai", "Kia", "Mazda"];
var modelos = ["Kwid", "Onix", "Elantra", "Rio", "CX-5"];
var ann = [2021, 2022, 2019, 2020, 2023];
var car = [];

for (i = 0; i < 5; i++) {
  var marcas = prompt("Ingresa la marca del auto");
  var modelos = prompt("Ingresa el modelo del auto");
  var annios = prompt("Ingresa el annio del auto");
  car[i] = new auto(marcas, modelos, annios);
}

for (mcar of car) {
  console.log(mcar);
}
