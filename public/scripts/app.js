$(".navbar-burger").click(function () {
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
});

$("#open-modal").on("click", e => {
  $(".modal").toggleClass("is-active");
});

$("#close-modal").on("click", e => {
  $(".modal").toggleClass("is-active");
});

$("#close-modal2").on("click", e => {
  $(".modal").toggleClass("is-active");
});
