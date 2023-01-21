function carritoDeCompras() {
  let entrada = prompt(
    "Ingrese un producto (Cupcakes, Brownie, Box, Minicakes) para agregar al carrito"
  );
  let totalCompra = parseInt(0);
  let sumaCupcakes = parseInt(0);
  let sumaBrownie = parseInt(0);
  let sumaBox = parseInt(0);
  let sumaMinicakes = parseInt(0);
  let cupcakes = " ";
  let brownie = " ";
  let box = " ";
  let minicakes = " ";
  let productosAgregados = " ";

  while (entrada != "finalizar") {
    switch (entrada) {
      case "Cupcakes":
        totalCompra = totalCompra + parseInt(500);
        if ((entrada = "Cupcakes")) {
          sumaCupcakes = sumaCupcakes + parseInt(1);
        }
        cupcakes = "Cupcakes " + sumaCupcakes + " unidad/es. ";
        productosAgregados =
          cupcakes + " " + brownie + " " + box + " " + minicakes;
        alert(
          "Cupcakes $500, " +
            "Productos Agregados: " +
            productosAgregados +
            " Total de la compra: $" +
            totalCompra
        );
        break;

      case "Brownie":
        totalCompra = totalCompra + parseInt(3000);
        if ((entrada = "Brownie")) {
          sumaBrownie = sumaBrownie + parseInt(1);
        }
        brownie = "Brownie " + sumaBrownie + " unidad/es. ";
        productosAgregados =
          cupcakes + " " + brownie + " " + box + " " + minicakes;
        alert(
          "Brownie $3000, " +
            "Productos Agregados: " +
            productosAgregados +
            " Total de la compra: $" +
            totalCompra
        );
        break;

      case "Box":
        totalCompra = totalCompra + parseInt(4000);
        if ((entrada = "Box")) {
          sumaBox = sumaBox + parseInt(1);
        }
        box = "Box " + sumaBox + " unidad/es. ";
        productosAgregados =
          cupcakes + " " + brownie + " " + box + " " + minicakes;
        alert(
          "Box $4000, " +
            "Productos Agregados: " +
            productosAgregados +
            " Total de la compra: $" +
            totalCompra
        );
        break;

      case "Minicakes":
        totalCompra = totalCompra + parseInt(1500);
        if ((entrada = "Minicakes")) {
          sumaMinicakes = sumaMinicakes + parseInt(1);
        }
        minicakes = "Minicakes " + sumaMinicakes + " unidad/es. ";
        productosAgregados =
          cupcakes + " " + brownie + " " + box + " " + minicakes;
        alert(
          "Minicakes $1500, " +
            "Productos Agregados: " +
            productosAgregados +
            " Total de la compra: $" +
            totalCompra
        );
        break;
    }
    entrada = prompt(
      "Ingrese un producto (Cupcakes, Brownie, Box, Minicakes) o finalizar para terminar"
    );
  }
}
carritoDeCompras();
