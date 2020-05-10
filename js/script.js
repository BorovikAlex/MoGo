const background = document.querySelector(".background-14");

document.getElementById("burger").onclick = function () {
  addMenu();
};

function addMenu() {
  document.getElementById("menu").classList.toggle("show");
}

setInterval(function () {
  if (document.querySelectorAll(".owl-dot")[0].className === "owl-dot active") {
    document.querySelector(".container-1").classList.remove("img2");
    document.querySelector(".container-1").classList.remove("img3");
    document.querySelector(".container-1").classList.remove("img4");
    document.querySelector(".container-1").classList.add("img1");
  } else if (
    document.querySelectorAll(".owl-dot")[1].className === "owl-dot active"
  ) {
    document.querySelector(".container-1").classList.remove("img1");
    document.querySelector(".container-1").classList.remove("img3");
    document.querySelector(".container-1").classList.remove("img4");
    document.querySelector(".container-1").classList.add("img2");
  } else if (
    document.querySelectorAll(".owl-dot")[2].className === "owl-dot active"
  ) {
    document.querySelector(".container-1").classList.remove("img1");
    document.querySelector(".container-1").classList.remove("img2");
    document.querySelector(".container-1").classList.remove("img4");
    document.querySelector(".container-1").classList.add("img3");
  } else if (
    document.querySelectorAll(".owl-dot")[3].className === "owl-dot active"
  ) {
    document.querySelector(".container-1").classList.remove("img1");
    document.querySelector(".container-1").classList.remove("img3");
    document.querySelector(".container-1").classList.remove("img2");
    document.querySelector(".container-1").classList.add("img4");
  }
}, 10);
setInterval(function () {
  if (document.querySelectorAll(".owl-dot").className === "owl-dot active") {
    document.querySelector(".owl-dot ative").classList.add("dotGrad");
  }
}, 10);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
  });
});

function initMap() {
  var pos = { lat: 53.889977, lng: 27.521929 },
    opt = {
      center: pos,
      zoom: 17,
      mapTypeId: "satellite",
    },
    myMap = new google.maps.Map(document.getElementById("map"), opt),
    markerImage = {
      url: "img/maps-and-flags.svg",
      size: new google.maps.Size(20, 26),
      scaledSize: new google.maps.Size(20, 26),
    },
    marker = new google.maps.Marker({
      position: pos,
      map: myMap,
      icon: markerImage,
      animation: google.maps.Animation.BOUNCE,
    });
}

background.onclick = function () {
  background.style.display = "none";
};

new WOW().init();
