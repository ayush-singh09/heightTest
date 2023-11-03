var height = window.innerHeight
var width = window.innerWidth
var vhelem = document.querySelector(".vh")
var vwelem = document.querySelector(".vw")
var inHeight = document.querySelector(".inner-height")
var inWidth = document.querySelector(".inner-Width")
var elem = document.querySelector(".height")

let vhh = document.createElement("h2")
vhh.innerHTML = elem.offsetHeight;
vhelem.appendChild(vhh);

let vww = document.createElement("h2")
vww.innerHTML = elem.offsetWidth;
vwelem.appendChild(vww);

let ih = document.createElement("h2")
ih.innerHTML = window.innerHeight;
inHeight.appendChild(ih);

let iw = document.createElement("h2")
iw.innerHTML = window.innerWidth;
inWidth.appendChild(iw);