$(document).ready(function() {
  if ($(".big-galleri-image").length > 0) {
    zoomables = {
      container1: new ImageZoom(".big-gallery img", { maxZoom: 4 })
    };
  }

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

  $(".decrement").click(function() {
    var x = parseInt(this.parentElement.children[1].innerText);
    if (x > 0) {
      this.parentElement.children[1].innerText = x - 1;
    }
  });
  $(".increment").click(function() {
    var x = parseInt(this.parentElement.children[1].innerText) + 1;
    this.parentElement.children[1].innerText = x;
  });

  $(".galeri-image").click(function() {
    var srcImg1 = $(this)
      .find("img")
      .attr("src");
    $(".big-galleri-image").attr("src", srcImg1);
  });
  $(".letters div a").click(function() {
    $(".letters div a").removeClass("active");
    $(this).addClass("active");
  });
});
