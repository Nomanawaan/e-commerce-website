// hamburger menu icon for mobile responsive
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}


// bottom to top button
let btntop = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btntop.style.display = "block"; // use same variable name
    } else {
        btntop.style.display = "none";
    }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


