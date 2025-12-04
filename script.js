// script.js
$(document).ready(function () {

  /* -------------------------
     Subscription form (if present)
     ------------------------- */
  $("#subscribe-form").on("submit", function (e) {
    e.preventDefault();

    let fullname = $("#fullname").val() ? $("#fullname").val().trim() : "";
    let email = $("#email").val() ? $("#email").val().trim() : "";
    let phone = $("#phone").val() ? $("#phone").val().trim() : "";
    let gender = $("#gender").val() ? $("#gender").val() : "";

    let namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(fullname)) {
      alert("Name must contain letters only!");
      return;
    }

    if (!/^\d{11}$/.test(phone)) {
      alert("Phone must be exactly 11 digits.");
      return;
    }

    alert(
      "Subscription Details:\n" +
      "Full Name: " + fullname + "\n" +
      "Email: " + email + "\n" +
      "Phone: " + phone + "\n" +
      "Gender: " + gender
    );
  });

  /* Prevent numbers in fullname field */
  $("#fullname").on("keypress", function (e) {
    if (!/[A-Za-z\s]/.test(e.key)) {
      e.preventDefault();
    }
  });

  /* Toast example if form exists */
  const formEl = document.getElementById("myForm");
  if (formEl) {
    formEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const toastEl = document.getElementById("successToast");
      if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      }
    });
  }

  /* Ingredient double-click */
  $("ul li").on("dblclick", function () {
    $(this).toggleClass("strike");
  });

  /* Hover effect for cards & recipe images */
  // note: HTML uses class "recipe-img" on carousel images
  $(".card, .recipe-img").hover(
    function () { $(this).css("background-color", "#5addbcff"); },
    function () { $(this).css("background-color", "white"); }
  );

  /* Coming soon click */
  $(".card-link-soon").on("click", function (e) {
    e.preventDefault();
    alert("We’re cooking up more delicious recipes. This recipe will be available soon! 👀");
  });

}); // end ready()

/* ---------------------------
   Initialize Bootstrap carousel
   --------------------------- */
(function () {
  const recipeCarouselEl = document.getElementById("recipeCarousel");
  if (recipeCarouselEl) {
    // If you set data-bs-ride="carousel" and data-bs-interval on the element,
    // Bootstrap will manage autoplay automatically. Here we just ensure control.
    const carousel = bootstrap.Carousel.getInstance(recipeCarouselEl) || new bootstrap.Carousel(recipeCarouselEl, {
      interval: 3000,   // 3 seconds
      pause: "hover",
      ride: false       // set to "carousel" if you want it to start immediately
    });
  }
})();
