//Слайдер в каталоге

$(function(){
	$(".catalog-menu-settings-selection-slider").slider({
		range: "min",
      	min: 0,
      	max: 56000,
      	slide: function( event, ui ) {
      		$(".catalog-menu-settings-selection-slider-price span").html(ui.value);
      	},
	});

	var min = $( ".catalog-menu-settings-selection-slider" ).slider( "option", "min" ),
		max = $( ".catalog-menu-settings-selection-slider" ).slider( "option", "max" );
		
	$(".catalog-menu-settings-selection-slider-min").html(min);
	$(".catalog-menu-settings-selection-slider-max").html(max);
});

$(function(){
	$(".catalog-menu-title-settings-selection-toggle").on("click", function(){
      if ($(".catalog-menu-settings-selection_and_item-of-the-day").is(':visible')) {
        $(this).css("background-color", "#ea0813");
      }
      else {
        $(this).css("background-color", "#343b47")
      }
		  $(".catalog-menu-settings-selection_and_item-of-the-day").slideToggle(600);
	})

});

//Кнопки

$(function(){
	$(".cart-delivery-company a").click(function(e){
		e.preventDefault();
		$(".cart-delivery-company-menu").slideToggle(200);
	});

	$(".main-header-nav-toggle").on("click", function(){
		$(".main-header-main-menu").slideToggle();
	});

	$('.main-header-cart-icon').on('click', function(){
    	location.href = "cart_step1.html";
    	window.status = "cart_step1.html";
  	});

  	$(".catalog-menu-settings-selection-option button").on("click", function(){
		$(this).next().slideToggle();    
	});



});



//Медиа-запросы

$(function(){
	matchMedia480();
	matchMedia1024();


	$(window).resize(matchMedia480);
	$(window).resize(matchMedia1024);	

	function matchMedia480() {
		var mq = window.matchMedia( "(max-width: 480px)" );
    		if (mq.matches) {
    			$(".main-header-main-menu").css("display", "none");
			}

			else {
				$(".main-header-main-menu").css({"display": "-ms-flexbox", "display": "flex"});
			}
	};

	function matchMedia1024() {
		var mq = window.matchMedia( "(max-width: 1024px)" );
    		if (mq.matches) {
    			$(".cart-how-many-text").html('Кол-во:');
    			$(".cart-price-summary-text").html('Итого:');
			}
			else {
				$(".cart-how-many-text").html('Количество:');
				$(".cart-price-summary-text").html('Итоговая стоимость ваших покупок:');
			}; 
	};

});

//Модальные окна

$(function() {
  $('.callback').click(function () {    
    $('.overlay').fadeIn(400,
      function(){
        $('.modal-form-phone') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
    });
  });

  $('.modal-phone-close, .overlay').click( function(){
    $('.modal-form-phone')
      .animate({opacity: 0, top: '45%'}, 200,
        function(){
          $(this).css('display', 'none');
          $('.overlay').fadeOut(400);
        }
      );
  });

  $('.main-header-search-icon').click(function () {    
    $('.overlay').fadeIn(400,
      function(){
        $('.modal-form-search') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
    });
  });

  $('.modal-search-close, .overlay').click( function(){
    $('.modal-form-search')
      .animate({opacity: 0, top: '45%'}, 200,
        function(){
          $(this).css('display', 'none');
          $('.overlay').fadeOut(400);
        }
      );
  });

});

