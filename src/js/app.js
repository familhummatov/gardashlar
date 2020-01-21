$(document).ready(function() {
  zoomables = {
    container1: new ImageZoom(".big-gallery img", { maxZoom: 4 })
  };
  $(".dropdown").hover(function() {
    $(this).toggleClass("show");
    $(this)
      .children(".dropdown-menu")
      .toggleClass("show");
  });
  $(".dropdown-menu").hover(function() {
    $(this).toggleClass("show");
    $(this)
      .parent()
      .find(".dropdown-menu")
      .toggleClass("show");
  });
  $("#toggle-button").click(function() {
    $("#menu").toggleClass("navbar-toggle");
  });

  $("#category-btn").click(function() {
    $(".category-nav").toggleClass("category-bar-toggle");
  });

  $("#search-button").click(function() {
    $("#search-tab").toggleClass("toggle-search-bar");
  });

  $("#close-btn").click(function() {
    $("#search-tab").removeClass();
  });

  $(".clear-button").click(function() {
    $('.category-item input[type="checkbox"]').prop("checked", false);
  });
  $(".owl-stage .active .item img").mouseover(function() {
    console.log(this.id);
    // $("#" + this.id).elevateZoom({
    //   zoomType: "inner",
    //   cursor: "crosshair"
    // });
  });

  $(".decrement").click(function() {
    var count = parseInt($(".count").text());
    if (count > 0) {
      $(".count").text(count - 1);
    }
  });
  $(".increment").click(function() {
    var count = parseInt($(".count").text());
    $(".count").text(count + 1);
  });

  $(".galeri-image").click(function() {
    var srcImg1 = $(this)
      .find("img")
      .attr("src");
    $(".big-galleri-image").attr("src", srcImg1);
  });
});
