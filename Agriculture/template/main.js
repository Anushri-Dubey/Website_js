(function($) {
  $.fn.menumaker = function(options) {     
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$("#cssmenu").menumaker({
   title: "Menu",
   format: "multitoggle"
});

});
})(jQuery);



$(document).ready(function(){
	  var originalSize = $('div').css('font-size');
	 // reset
	  $(".resetMe").click(function(){
		$('div').css('font-size', ''); 
		$('h1,h2,h3,h4,h5,h6,a,span,p').css('font-size', ''); 
	  });

	  // Increase Font Size
	  $(".increase").click(function(){
           var h3Size = $('h3').css('font-size');
           var aSize = $('div>a').css('font-size');
		   var pSize = $('div>p').css('font-size');
		   var mSize = $('#cssmenu > ul > li >a').css('font-size'); 
		   
		   var dtSize = $('dt').css('font-size');
		   var ddSize = $('dd').css('font-size');

		  var aSize1 = parseFloat(aSize)+1;
          if(aSize1 <= 18)
          {
              $('a').css('font-size', aSize1);
          }
		  
		  
		  var mSize1 = parseFloat(mSize)+1;
          if(mSize1 <= 13)
          {
              $('#cssmenu > ul > li >a').css('font-size', mSize1);
          }
		  
		  
		  
		  var ddSize1 = parseFloat(ddSize)+2;
          if(ddSize1 <= 24)
          {

              $('dd').css('font-size', ddSize1);
          } 
		  
		  var dtSize1 = parseFloat(dtSize)+3;
          if(dtSize1 <=60)
          {

           $('dt').css('font-size', dtSize1);
          } 
			  
		  var pSize1 = parseFloat(pSize)+1;
          if(pSize1 <= 24)
          {

              $('p').css('font-size', pSize1);
          } 
		  
		  var h3Size1 = parseFloat(h3Size)+4;
          if(h3Size1 <=30)
          {

              $('h3').css('font-size', h3Size1);
          }
		
	  });
	  
	  
	  
	  
 // Decrease Font Size

		  
		  $(".decrease").click(function(){
			  
	       var h3Size = $('h3').css('font-size');
           var aSize = $('div>a').css('font-size');
		   var pSize = $('div>p').css('font-size');
		   var dtSize = $('dt').css('font-size');
		   var ddSize = $('dd').css('font-size');
		   var mSize = $('#cssmenu > ul > li >a').css('font-size'); 

        
		
		
		
		 var aSize1 = parseFloat(aSize)-1;
          if(aSize1 >= 16)
          {
              $('a').css('font-size', aSize1);
          }
		  
		   var mSize1 = parseFloat(mSize)-2;
          if(mSize1 >= 8)
          {

              $('a').css('font-size', mSize1);
          } 

		  var ddSize1 = parseFloat(ddSize)-2;
          if(ddSize1 <= 24)
          {

              $('dd').css('font-size', ddSize1);
          } 
		  
		  
		  
		  var dtSize1 = parseFloat(dtSize)-3;
          if(dtSize1 <=60)
          {

           $('dt').css('font-size', dtSize1);
          } 
			  
		  var pSize1 = parseFloat(pSize)-1;
          if(pSize1 >= 24)
          {

              $('p').css('font-size', pSize1);
          } 
		  
		  var h3Size1 = parseFloat(h3Size)-4;
          if(h3Size1 >=20)
          {

              $('h3').css('font-size', h3Size1);
          }
  
		  

	  });
});	  
	  
	  


 

	
		


$(document).ready(function(){

	$(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("up"); 
	});
	
	 
});


$(document).ready(function (){
            $("#click").click(function (){
                    $('html,body').animate({
                        scrollTop: $("#panel").offset().top
                    }, 700);
            });
 });
	
		
		
		
		
		
		
		
		
		
		
		
		
		// slider 
		
		
		$(function() {
				$('#slider').carouFredSel({
					responsive: true,
					width: '100%',
					scroll: 1,
					items: {
						width: 400,
					//	height: '30%',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 6
						}
					}
				});
			});
			
			
			// end slider
			




// theme changer 		
			
	$(document).ready(function(){
    $("#flip").click(function(){
        $("#panelToggle").slideToggle("slow");
		$(this).find('span').toggleClass('fa-search fa-close');
		

    });
});	

