
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(".searchButton").on("click", function(){

  $(".searchButton").toggleClass("active");

  if ($(".searchButton").hasClass("active")) {
    $(".searchBar").css("height", "100vh");
    $("#searchForm").css("opacity","1");
    $(".searchIcon").removeClass("fa-search").addClass("fa-times");
  }
  
  else {
    $(".searchBar").css('height', "0vh");
    $("#searchForm").css("opacity","0");
    $(".searchIcon").removeClass("fa-times").addClass("fa-search");
  }
});

$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});
 