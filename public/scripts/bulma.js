$(".navbar-burger").click(function () {
  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
});
  
$(".toggle-modal").on("click", e => {
  $(".modal").toggleClass("is-active");
});
  
$('#bumpButton').on('click', () => {
  console.log('bump count =', post.bumpCount);
});