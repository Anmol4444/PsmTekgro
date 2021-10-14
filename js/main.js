AOS.init();
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.arrow').show();
        $('.navbar').addClass("fixed");
    } else {      
        $('.arrow').hide();
        $('.navbar').removeClass("fixed");
    }
});
// <!---------logo slider-------->
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});
//------------------swiper-------------------------->
// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });

//-----------------country-code--------------------//
{/* <script>
    function abc() {
      document.getElementById("mySidenav").style.width = "100%"
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0"
    }


    function togglePopup(){
      document.getElementById("popup-1").classList.toggle("active")
    }
    </script> */}