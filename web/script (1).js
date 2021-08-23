var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides((slide_index += n));
}

function currentSlide(n) {
    displaySlides((slide_index = n));
}



function sign() {
    document.getElementById("img").style.display = "block";

}

function normal() {
    document.getElementById("img").style.display = "none";
}
function nan() {
    document.getElementById("a").style.display = "block";

}

function normalImg() {
    document.getElementById("a").style.display = "none";
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) {
        slide_index = 1;
    }
    if (n < 1) {
        slide_index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}