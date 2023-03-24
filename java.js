function convertirDivisa(divisa, monto) {
  if (divisa === "CLP") {
    return monto * 3.93;
  } else if (divisa === "USD") {
    return monto / 390;
  } else if (divisa === "EUR") {
    return monto / 414;
  } else {
    return "Divisa no válida";
  }
}

let aceptar = true;
while (aceptar) {
  let divisa = prompt("Ingrese la divisa a convertir (CLP, USD o EUR):");
  let monto = parseFloat(prompt("Ingrese la cantidad en ARS a convertir:"));
  let resultado = convertirDivisa(divisa, monto);
  alert(resultado);
  let continuar = prompt("Para hacer otro cálculo escriba 'continuar', para dejar de calcular escriba 'parar':");
  if (continuar === "parar") {
    aceptar = false;
  }
}