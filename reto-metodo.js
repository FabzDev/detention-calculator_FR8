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
  car[i] = new auto(marcas[i], modelos[i], ann[i]);
}

for (mcar of car) {
  console.log(mcar);
}
