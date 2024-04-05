const amperInput = document.getElementById("amperInput")
const ohmInput = document.getElementById("ohmInput")
const sonucYazi = document.getElementById("sonuc")

function voltHesapla(){
    let amperInputValue = amperInput.value
    let ohmInputValue = ohmInput.value
    amperInput.value = ""
    ohmInput.value = ""
    let sonuc = Number(amperInputValue)*Number(ohmInputValue)
    sonucYazi.innerHTML = `<span class="sonucYazi">${sonuc}</span> Volt`
}