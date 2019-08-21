
    $(document).ready(function(){
        
        $(".menu-toggle").click(function(){
            document.getElementById("first-container").style.position = "fixed";
            document.getElementById("menus").style.position = "relative";
          $(".the-two-menu-container").show();
            $(".left-menu").show()
              $(".right-menu").show()
              $(".left-menu").animate({bottom:"0px",height:"100%"},500);
              $(".right-menu").animate({top:"0px",height:"100%"},500);
              $(".top-nav").show();
         });
          $(".close-image-container").click(function(){
               $(".left-menu").animate({bottom:"-100vh",height:"0%"},500,hideObj);
               $(".right-menu").animate({top:"-100vh",height:"100%"},500,hideObj);
               $(".top-nav").fadeOut(500);
          });
          $(function () {
            $(".top-nav").hide();
            $(".the-two-menu-container").hide();
        });
          function hideObj(){
              $(".left-menu").hide()
              $(".right-menu").hide()
          }
    })
 

 