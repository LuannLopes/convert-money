const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  const dolarToday = 4.99;
  const euroToday = 5.28;

  if (currencySelect.value == "dolar") {
    const convertedValueDolar = inputCurrencyValue / dolarToday;
    currencyValueToConvert.innerHTML = inputCurrencyValue;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(convertedValueDolar);
  }
  if (currencySelect.value == "euro") {
    const convertedValueEuro = inputCurrencyValue / euroToday;
    currencyValueToConvert.innerHTML = inputCurrencyValue;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(convertedValueEuro);
  }
}

convertButton.addEventListener("click", convertValues);
