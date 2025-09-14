// hamburger menu icon for mobile responsive
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}


// bottom to top button
let btntop = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btntop.style.display = "block";
    } else {
        btntop.style.display = "none";
    }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// sec 3 tab sec 
let tabs = document.querySelectorAll(".s3fb-tabs ul li a");
let products = document.querySelectorAll(".s3fb-product");

tabs.forEach(function(tab) {
  tab.addEventListener("click", function(e) {
    e.preventDefault();

    // Remove active class from all tabs
    tabs.forEach(function(t) {
      t.classList.remove("active");
    });

    // Hide all product groups
    products.forEach(function(product) {
      product.classList.remove("active");
    });

    // Add active class to clicked tab
    this.classList.add("active");

    // Show only the clicked one
    let targetId = this.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  });
});




