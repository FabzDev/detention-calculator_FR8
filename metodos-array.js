// .filter
var itemsFiltered = items.filter(function (asdasd) {
  return asdasd.costo > 2000;
});

//.map
var itemsMap = items.map(function (asdasd) {
  return asdasd.nombre;
});

// .find
var itemsFind = items.find(function (asdasd) {
  return asdasd.nombre === "Laptop";
});

// .forEach
var itemsEach = items.forEach(function (asdasd) {
  console.log(asdasd.costo > 2000);
});

// .some
var itemsSome = items.some(function (asdasd) {
  return asdasd.costo > 30000;
});
