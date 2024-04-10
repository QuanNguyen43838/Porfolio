// JavaScript Document
$('#banner').owlCarousel({
loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
autoplayTimeout:4000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
})
$('#cam-nhan').owlCarousel({
	loop:true,	// cho lap lại		
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
autoplayTimeout:2500,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	nav:true,	// cho xuất hiện bộ nút tới lui 
	margin:40,
// xuất hiện item tùy theo thiết bị (pc/ ipad/phone)i


responsive:{
        0:{
            items:1,
           dots:false,
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
	
})

// xóa cart
var remove_cart = document.getElementsByClassName("number");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}



var typed = new Typed('#element', {
strings: ["Web Designer,UX/UI Designer.", "Code Developer.","Apps Designer."],
typeSpeed:50,
backSpeed:50,
loop:true,
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$(document).ready(function(){
	$("#open-close-menu").click(function(){
		$(".menu").slideToggle()
	})
})
