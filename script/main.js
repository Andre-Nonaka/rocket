flatpickr("input[type=datetime-local]", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

var expertModal1 = document.getElementById("expert1");
var expertModal2 = document.getElementById("expert2");
var expertModal3 = document.getElementById("expert3");
var expertModal4 = document.getElementById("expert4");
var expertModal5 = document.getElementById("expert5");
var expertModal6 = document.getElementById("expert6");
  
expertModal1.onclick = function openLink() {
    window.location.href = 'expert1.html';
}
expertModal2.onclick = function openLink2() {
    window.location.href = 'expert2.html';
}
expertModal3.onclick = function openLink3() {
    window.location.href = 'expert3.html';
}
expertModal4.onclick = function openLink4() {
    window.location.href = 'expert4.html';
}
expertModal5.onclick = function openLink5() {
    window.location.href = 'expert5.html';
}
expertModal6.onclick = function openLink6() {
    window.location.href = 'expert6.html';
}

var boxModal1 = document.getElementById("box1");
var boxModal2 = document.getElementById("box2");
var boxModal3 = document.getElementById("box3");
var boxModal4 = document.getElementById("box4");
var boxModal5 = document.getElementById("box5");
var boxModal6 = document.getElementById("box6");
  
boxModal1.onclick = function openLink7() {
    window.location.href = 'webdev.html';
}
boxModal2.onclick = function openLink8() {
    window.location.href = 'webdesign.html';
}
boxModal3.onclick = function openLink9() {
    window.location.href = 'graphicdesign.html';
}
boxModal4.onclick = function openLink10() {
    window.location.href = 'appdev.html';
}
boxModal5.onclick = function openLink11() {
    window.location.href = 'SEO.html';
}
boxModal6.onclick = function openLink12() {
    window.location.href = 'hosting.html';
}

var nav1 = document.getElementById("homeNav");
var nav2 = document.getElementById("aboutNav");
var nav3 = document.getElementById("servicesNav");
var nav4 = document.getElementById("expertsNav");
var nav5 = document.getElementById("officeNav");
var nav6 = document.getElementById("contactNav");

nav1.onclick = function clickNav1() {
    nav1.classList.add("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
    nav4.classList.remove("active");
    nav5.classList.remove("active");
    nav6.classList.remove("active");
}
nav2.onclick = function clickNav2() {
    nav2.classList.add("active");
    nav1.classList.remove("active");
    nav3.classList.remove("active");
    nav4.classList.remove("active");
    nav5.classList.remove("active");
    nav6.classList.remove("active");
}
nav3.onclick = function clickNav3() {
    nav3.classList.add("active");
    nav2.classList.remove("active");
    nav1.classList.remove("active");
    nav4.classList.remove("active");
    nav5.classList.remove("active");
    nav6.classList.remove("active");
}
nav4.onclick = function clickNav4() {
    nav4.classList.add("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
    nav1.classList.remove("active");
    nav5.classList.remove("active");
    nav6.classList.remove("active");
}
nav5.onclick = function clickNav5() {
    nav5.classList.add("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
    nav4.classList.remove("active");
    nav1.classList.remove("active");
    nav6.classList.remove("active");
}
nav6.onclick = function clickNav6() {
    nav6.classList.add("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
    nav4.classList.remove("active");
    nav5.classList.remove("active");
    nav1.classList.remove("active");
}