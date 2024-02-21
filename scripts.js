const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectdois = document.querySelector(".currency-selectdois")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    opcao()
    const currencyValueToConverted = document.querySelector(".currency-value")

    const realpdolar = 4.95
    const realpeuro = 5.38
    const dolarpreal = 0.20
    const dolarpeuro = 1.08
    const europdolar = 0.93
    const europreal = 0.19


    if (currencySelect.value == "dolar" && currencySelectdois.value == "real") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / realpdolar)
    }
    else if (currencySelect.value == "real" && currencySelectdois.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / dolarpreal)

    }
    else if (currencySelect.value == "dolar" && currencySelectdois.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / europdolar)

    }
    else if (currencySelect.value == "euro" && currencySelectdois.value == "real") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / realpeuro)
    }
    else if (currencySelect.value == "real" && currencySelectdois.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / europreal)
    }
    else if (currencySelect.value == "euro" && currencySelectdois.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / dolarpeuro)
    }
    else {
        alert('Error: mesma moeda inválido')
        currencyValueToConverted.innerHTML = "Error"
    }



}


function opcao() {
    const currencyValue1 = document.querySelector(".currency-value1")
    const inputCurrencyValue = document.querySelector(".input-currency").value

    if (currencySelectdois.value == "dolar") {
        currencyValue1.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelectdois.value == "euro") {
        currencyValue1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectdois.value == "real") {
        currencyValue1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
}




function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()

}

currencySelectdois.addEventListener("change", opcao)
currencySelectdois.addEventListener("change", changeCurrencydois)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

function changeCurrencydois() {
    const currencyName = document.getElementById("nomedinheiro")
    const currencyImage = document.querySelector(".encima")

    if (currencySelectdois.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    if (currencySelectdois.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelectdois.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues()

}