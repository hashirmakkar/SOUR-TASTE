// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
  });
  
  // Buy Now button handler
  function buyNow(productName) {
    alert(`Thank you for choosing ${productName}! We will contact you soon.`);
  }
  