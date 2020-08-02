/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*/

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

 /* Create a closure to maintain scope of the '$' and remain compatible with other frameworks. */
(function ($) {

	// *************************************************************************************************** //
	// *************************************************************************************************** //
	// begin: same as $(document).ready(); event fires when the DOM is ready                               //
	// *************************************************************************************************** //
	// *************************************************************************************************** //
	
	
	var neue = window.neue || {};
	neue.scrollAnchor = function(){
		var flag = 0;
		
		var scrollToAnchor = function( id ) {
			var elem = $("a[name='"+ id +"']");
			
			if ( typeof( elem.offset() ) === "undefined" ) {
				elem = $("#"+id);
			};
			
			if ( typeof( elem.offset() ) !== "undefined" ) {
				$('html, body').animate({
					scrollTop: elem.offset().top
				}, 450, 'easeOutCubic', function() {
					window.location.hash = id;
					flag = 0;
				});
			};
		};
		
		if(flag == 0){
			var topMenu = $('#page-subnav'),
			topMenuHeight = $('#menu-list').outerHeight()+15,
			// All list items
			menuItems = topMenu.find("a"),
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
			var item = $($(this).attr("href"));
				if (item.length) { return item; }
			});
			
			$(window).scroll(function(){
				// Get container scroll position
				var fromTop = $(this).scrollTop() + topMenuHeight;
				
				var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
				var windowHeight = $(window).height(); // get the height of the window
				var docHeight = $(document).height();
				
				// Get id of current scroll item
				var cur = scrollItems.map(function(){
					if ($(this).offset().top < fromTop)
						return this;
				});
				// Get the id of the current element
				cur = cur[cur.length-1];
				var id = cur && cur.length ? cur[0].id : "";
				// Set/remove active class
				menuItems.parent().removeClass("active").end().filter("[href=#"+id+"]").parent().addClass("active");
				
				if(windowPos + windowHeight == docHeight) {
					if (!$('#page-subnav li:last-child').hasClass('active')) {
						var navActiveCurrent = $('.active a').attr("href");
						
						$("a[href='" + navActiveCurrent + "']").parent().removeClass('active');
						$('#page-subnav li:last-child').addClass('active');
					};
				};
				
			});
		};
		
		function getHash() {
			return location.hash.replace(/^#\/?/,'');
		};
		
		$('a').click(function( event ) {
			//path = window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1);
			
			if ( $(this).attr("href").match("#") ) {	
				event.preventDefault();
				flag = 1;
				/*if($(this).parent().is(':last-child')){
					$('#page-subnav').find('.active').removeClass('active');
					$(this).parent().addClass('active');
				} else {
					$('#page-subnav').find('.active').removeClass('active');
					$(this).parent().addClass('active');
				};*/
				
				
				var href = $(this).attr('href').replace('#', '');
				scrollToAnchor( href );
			};
			
			//ga('send', 'pageview', '/' + path + '#' + href);
		});
		
		
		if (window.location.href.split("#").length > 0)
		{
			scrollToAnchor(getHash());
		};
		
		$(window).bind('hashchange', function(event) {
			scrollToAnchor(getHash());
		});
		
		
		/*$(window).bind('statechange',function(){
			// Do something, inspect History.getState() to decide what
			scrollToAnchor(getHash());
		});*/
		
		/*$('a[href*=#]:not([href=#])').click(function() {
			if (!$(this).hasClass("carousel-control")) {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  
				  if (target.length) {
					$('html,body').animate({
					  scrollTop: parseInt(target.offset().top)-155
					}, 750, 'easeOutExpo');
					return false;
				  }
				}
			}
		});*/
	};
	
	neue.backTop = function(){
		var offset = 150;
		var duration = 500;
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('#back-to-top').fadeIn(duration);
				
				$('#mouse-icon').fadeOut(duration);
			} else {
				$('#back-to-top').fadeOut(duration);
				
				$('#mouse-icon').fadeIn(duration);
			};
		});
		
		$('#back-to-top').click(function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
	};
    
	neue.setAnimate = function(el, timing){
		$_items = el;
		//$('.product-listing__loadmore button',el).fadeOut('fast');
		$_items.each(function(i){
			$(this).attr("style", "-webkit-animation-delay:" + i * timing + "ms;"
					+ "-moz-animation-delay:" + i * timing + "ms;"
					+ "-o-animation-delay:" + i * timing + "ms;"
					+ "animation-delay:" + i * timing + "ms;");
			/*if (i == $_items.size() -1) {
				$('.product-listing > div').addClass("play").removeClass("notAnimated");
				$('.product-listing__loadmore button', el).fadeIn(i*0.3);
			};*/
		});
	};
	
	$(function () {
		neue.scrollAnchor();
		
		if($('#back-to-top').length > 0){
			neue.backTop();
		};
		
		/*if($('[rel="clickover"]').length > 0){
			$('[rel="clickover"]').clickover();	
		};*/
		
		if($('#jSplash').length > 0){
			//var timer;	//timer for splash screen
			
			//calling jPreLoader
			$('body').jpreLoader({
				splashID: "#jSplash",
				loaderVPos: '0%',
				autoClose: true,
				showPercentage: true,
				//closeBtnText: "Let's Begin!",
				splashFunction: function() {  
					//passing Splash Screen script to jPreLoader
					//$('#jSplash').children('section').not('.selected').hide();
					$('#jSplash').hide().fadeIn(800);
					
				}
			}, function() {	//callback function
				//clearInterval(timer);
				if($('#home').length > 0){
					reRun();
				};
				/*$('#footer')
				.animate({"bottom":0}, 500);
				$('#header')
				.animate({"top":0}, 800, function() {
					$('#wrapper').fadeIn(1000);
				});*/
			});
		};
		
		if ($('#home-mobile').length > 0) {
			var lastPos = 0,
			currPos;
			
			$('#gallery').scroll(function() {
				currPos = $(this).scrollLeft();
			
				if (lastPos < currPos) {
					console.log('scroll right');
					$('#promo-cta').fadeOut();
				}
                
				if (lastPos > currPos) 
				{
					console.log('scroll left');
					$('#promo-cta').fadeOut();
				}                
				
                if ( $(this).scrollLeft() == (($('#gallery-wrapper').width() * $('#gallery-wrapper > .bg').length) - $(this).width())) {
					console.log('end!');
				}
			
				lastPos = currPos;
				
				if($('#promo-cta').is(":visible")){
					$('#promo-cta').fadeOut();
				};
				
				clearTimeout($.data(this, 'scrollTimer'));
				$.data(this, 'scrollTimer', setTimeout(function() {
					// do something
					$('#promo-cta').fadeIn();
				}, 3000));
				
			});
		};
        
        if($('#promo-cta').length > 0){
             var /*currentPromo = $('#promo-current').text(),
                startWith = currentPromo.slice(0 , 1),*/
                current = parseInt($('#promo-current').text()),
                total;
			
			$('#promo-cta').click(function(){
                $('#promo-current').text('01');
				current = 1;
				
				getPromo();
				
				$('body').toggleClass('modal-open');

                if(!$('#promo-overlay-wrapper').hasClass('opened')){
                    //$('#menu-wrapper').velocity('transition.flipBounceYOut');

                    $('#promo-overlay-wrapper').velocity({
                        top: '0'
                    }, {
                        /* Log all the animated divs. */
    //                    duration: 500,
    //                    easing: "easeOutCubic",
    //                    complete: function(elements) {
    //                        neue.setAnimate($('.nav-list li'), 100);
    //
    //                        var totalNavList = $('.nav-list li').length;
    //                        $('.copyright').attr("style", "-webkit-animation-delay:" + (totalNavList + 1) * 100 + "ms;"
    //                                             + "-moz-animation-delay:" + (totalNavList + 1) * 100 + "ms;"
    //                                             + "-o-animation-delay:" + (totalNavList + 1) * 100 + "ms;"
    //                                             + "animation-delay:" + (totalNavList + 1) * 100 + "ms;");
    //
    //                        $('.copyright').addClass('show');
    //                        $('#menu-wrapper').find('.nav-list').addClass('show');
    //                    }
                    });
                    //$('#menu-wrapper').velocity('transition.flipBounceYOut');

                    $('#promo-overlay-wrapper').addClass('opened');
                };
            });
            
//            if (typeof String.prototype.startsWith != 'function') {
//                String.prototype.startsWith = function (str) {
//                    return this.slice(0, str.length) == str;
//                };
//            };
           
            
            function getPromo(){
                $.getJSON('scripts/promo.json', function(data) {
                    $('#promo-total').html('0' + data.promo.length);                

                    /*if (startWith === '0') {
                        currentPromo = currentPromo.slice(1, 2);
                    };*/
                    
                    // Change promo image
                    $('#promo-img-wrapper > img').attr("src", data.promo[current - 1].poster);
                    
                    // Check if there is any shout out message
                    if (data.promo[current - 1].callout.length > 0){
                        if(!$('#promo-callout').is(":visible")){
                            $('#promo-callout').show();
                        };
                        $('#promo-callout').html(data.promo[current - 1].callout);
                    } else {
                        $('#promo-callout').hide();
                    };
                    
                    // Change promo title
                    $('#promo-title').html(data.promo[current - 1].title);
                    
                    // Change promo description
                    $('#promo-description').html(data.promo[current - 1].description);
                    
                    // Change promo CTA
                    $('#promo-link').attr("href", data.promo[current - 1].cta.link);
					$('#promo-link > span').html(data.promo[current - 1].cta.text);
					
					// Change promo terms
					//console.log(data.promo[current - 1].terms.length);
                    $('.promo-terms').empty();
                    for(var i = 0; i < data.promo[current - 1].terms.length; i++){
						$('.promo-terms').append('<li>' + data.promo[current - 1].terms[i].point + '</li>');
                    };

                })/*.done(function() {
                    console.log( "second success" );
                })*/.fail(function() {
                    console.log( "error" );
                });
            };
            
            $('.promo-nav.right').click(function(){
                total = parseInt($('#promo-total').text());

                current += 1;
                
                if (current > total){
                    current = total;
                    
                    return false; 
                } else {
                    if(current < 10){
                        $('#promo-current').text("0" + current);
                    } else {
                        $('#promo-current').text(current);
                    };
                };
                
				//console.log(current);
                $('#promo-img-wrapper, #promo-details').addClass('fadeout');
				//getPromo();
            });
            
            $('.promo-nav.left').click(function(){
                current -= 1;
                
                if (current === 0){
                    current = 1;
                    
                    return false; 
                } else {
                    if(current < 10){
                        $('#promo-current').text("0" + current);
                    } else {
                        $('#promo-current').text(current);
                    };
                };
                
                //console.log(current);
				$('#promo-img-wrapper, #promo-details').addClass('fadeout');
				//getPromo();
            });
			
			$('#promo-img-wrapper, #promo-details').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
				getPromo();
				$('#promo-img-wrapper, #promo-details').removeClass('fadeout');
			});
            
        };
		
		$('#menu').click(function(){
			ga('send', 'event', 'button', 'click', 'menu');
			
			$('body').toggleClass('modal-open');
			
			if(!$('#menu-wrapper').hasClass('opened')){
				//$('#menu-wrapper').velocity('transition.flipBounceYOut');
				
				$('#menu-wrapper').velocity({
					top: '0'
				}, {
					/* Log all the animated divs. */
					duration: 500,
					easing: "easeOutCubic",
					complete: function(elements) {
						neue.setAnimate($('.nav-list li'), 100);
						
						var totalNavList = $('.nav-list li').length;
						$('.copyright').attr("style", "-webkit-animation-delay:" + (totalNavList + 1) * 100 + "ms;"
						+ "-moz-animation-delay:" + (totalNavList + 1) * 100 + "ms;"
						+ "-o-animation-delay:" + (totalNavList + 1) * 100 + "ms;"
						+ "animation-delay:" + (totalNavList + 1) * 100 + "ms;");
						
						$('.copyright').addClass('show');
						$('#menu-wrapper').find('.nav-list').addClass('show');
						
					}
				});
				//$('#menu-wrapper').velocity('transition.flipBounceYOut');
				
				$('#menu-wrapper').addClass('opened');
			}; /*else {
				//$('#menu-wrapper').velocity('transition.whirlIn');	
				
				$('#menu-wrapper').addClass('opened');
			};*/
			
		});
		
		$('.overlay-close > div').click(function(){
            var parentDiv = $(this).parent().parent();
			
            parentDiv.velocity({
				top: '120%'
			}, {
				/* Log all the animated divs. */
				duration: 500,
				easing: "easeInCubic",
				complete: function(elements) {
                    parentDiv.removeClass('opened');
                    
					$('body').toggleClass('modal-open');
					$('#menu-wrapper').find('.nav-list').removeClass('show');
					$('.copyright').removeClass('show');
				}
			});			
		});
		
		if($('html').hasClass('desktop')){
			if($('.selectpicker').length > 0){
				$('.selectpicker').selectpicker();	
			};	
		};
		
		
		/*!
			================= Mobile lock landscape mode =================
		*/		
		function lockScroll() {
            $(document).bind("touchmove", function(event) {
                event.preventDefault();
            });
        };

        function unLockScroll() {
            $(document).unbind("touchmove");
        };
		
		if ($('html').hasClass('mobile')){
			$(window).bind('orientationchange', function() {
				if (window.orientation % 180 == 0) {
					$('#landscape').hide();
					unLockScroll();
				} else {
					$('#landscape').show();
					lockScroll();
					window.scrollTo( 0, 1 );
				}
			})
			.trigger('orientationchange');
		};
		
		/*!
			================= Tablet landscape mode to load Desktop =================
		*/	
		if ( $('html').hasClass('tablet') && ($('#home').length > 0 || $('#home-mobile').length > 0) ){
			window.addEventListener("orientationchange", function() {
				// Announce the new orientation number
				if(window.orientation == 0 || window.orientation == 180){
					window.location.href = "mobile-home.php";
				} else {
					window.location.href = "home.php";
				};
			}, false);
			
			/*$(window).bind('orientationchange', function() {
				if (window.orientation % 180 == 0) {
				//if($('html').hasClass('landscape')){
					window.location.href = "mobile-home.php";
					return false;
				} else {
					window.location.href = "home.php";
					return false;
				};*/
				
				/*if (window.orientation % 180 == 0) {
					
					window.location.href = "mobile-home.php";
					return false;
					//window.location.href = "index.html";
				} else {
					
					window.location.href = "home.php";
					return false;
				}*/
			//});
			//.trigger('orientationchange');
		};		
		
		/*!
			================= Functions for Home page =================
		*/
		
		if($('#home').length > 0){
			//console.log($(window).width());
			var number = 0;
			
			var timingArray = [1500, 5000, 5000, 5000, 5000];
			
			var timing = timingArray[0];
			
			
			/* Function below detect for mouse move after idle for a set period of time */
			var idlefunction = function() {
					// what to do when mouse is idle
					circle.set(0);
					if(number < $('#gallery-wrapper > div').length - 1){
						// Uncomment below to start timer run again
						
						//reRun();
					};
				}, idletimer,
				idlestart = function() {idletimer = setTimeout(idlefunction, timing);},
				idlebreak = function() {clearTimeout(idletimer); idlestart(); circle.stop(); circle.set(0);};
			
			/* To kill timer on mousemove */
				
			/*if( window.addEventListener)
				document.documentElement.addEventListener("mousemove",idlebreak,true);
			else
				document.documentElement.attachEvent("onmousemove",idlebreak,true);*/
				
			window.addEventListener('focus', function() {
				window.clearInterval(idletimer);
			},false);
		
			window.addEventListener('blur', function() {
				//focused = false;
				window.clearInterval(idletimer);
				idletimer = null;
			},false);
			
			/* Function below init and start the circular countdown animation */
			var startColor = '#717171';
			var endColor = '#717171';
			
			var element = document.getElementById('circle-timer');
			var circle;
			
			circle = new ProgressBar.Circle(element, {
				color: startColor,
				trailColor: '#f9f9f9',
				trailWidth: 2,
				duration: timing,
				//easing: 'bounce',
				strokeWidth: 2
			});
            
            function room2Animation() {
                $('#gallery-sofa').velocity({
                    translateX: '-50%'
                }, 2500, "easeOut" );
            };
            
            function room4Animation() {
                $('.wall-mask-overlay').velocity({
                    opacity: 1
                }, 2500, "easeIn" );
                $('#gallery-chair-copy').velocity({
                    opacity: 1
                }, 2000, "easeIn" );
                $('#gallery-chair').velocity({
                    translateX: '-50%'
                }, 2500, "easeOut" );  
            };
			
			var animateGallery = function(value) {
				/*$('#gallery-wrapper').velocity({
					left: value
				}, 2500, "easeInOut" );*/
				
				$('#gallery-wrapper').velocity({
					left: value,
				}, {
					duration: 2500,
					easing: "easeInOut"/*,
					complete: function() {
						
					}*/
				});
				
				switch(number) {
					case 0:
						break;
					case 1:
                        room2Animation();
						break;
					case 2:
                        room2Animation();
						break;
					case 3:
                        room4Animation();
						break;
					case 4:
                        room4Animation();
						break;
				};
				
				/*TweenLite.to($('#gallery-wrapper'), 7, {
					css: {
						left: value
					},
					ease: Power3.easeOut
				});*/
				
				
				/*$('#gallery-frame').velocity({
					translateX: value.replace('-', '')
				}, 1000, "easeOutCubic" );*/
			};
			
			function reRun() {
				switch(number) {
					case 0:
						timing = timingArray[0]; 
						break;
					case 1:
						timing = timingArray[1];
						break;
					case 2:
						timing = timingArray[2];
						break;
					case 3:
						timing = timingArray[3];
						break;
					case 4:
						timing = timingArray[4];
						break;
					/*default: 
						Set_Cookie('REGION',states[x], "1", "/", this.domain, false); 
						window.location.href = "http://global.intuit.com/row/";*/
					
				};
				
				circle.animate(1.0, {duration: timing}, function(){
					
					
					circle.set(0);
					number = number + 1;
					
					if(number <= $('#gallery-wrapper > div').length - 1){
						
						var value = -(number * 100) + '%';
						
						animateGallery(value);
											
						$('#gallery-pagination').find('a').removeClass('active');
						$('.page').eq(number).addClass('active');
						
						if(number == $('#gallery-wrapper > div').length - 1){
							circle.stop();
							
							return false;
							//circle.set(0);
						};
						
						reRun();
					};
					
					
				});
			};
			
			
			var counter = 0;
			
			$('#circle-timer').click(function(){
				
				if(counter == 0) {
					//timer.pause();
					circle.stop();
					counter = 1;
					
					return false;
				};
				
				if(counter == 1) {
					//timer.resume();
					
					circle.set(0);
					reRun();
					
					counter = 0;
					
					return false;
				};
				
			});
			
			
			$('#gallery > .bg:first-child').addClass('current');
			
			var position = 0;
			
			//console.log($('#list').find('.bg').length);
			
			for(i = 1; i <= $('#gallery').find('.bg').length; i++){
				var pagination = '<a href="javascript:void(0)" class="page">' + i + '</a>';
				
				$('#gallery-pagination').append(pagination);
				
				$('#gallery-pagination a:eq(0)').addClass('active');
			};
						
			$('.page').click(function(){
				number = $(this).index() - 1;
				
				$('#gallery-pagination').find('a').removeClass('active');
				$(this).addClass('active');
				
				var value = -(number * 100) + '%';
				
				animateGallery(value);		
				
				if(number < $('#gallery-wrapper > div').length - 1){
					
					circle.destroy();
					circle = new ProgressBar.Circle(element, {
						color: startColor,
						trailColor: '#f9f9f9',
						trailWidth: 2,
						duration: timing,
						//easing: 'bounce',
						strokeWidth: 2
					});
					
					//reRun();
				};
				
				if(number == $('#gallery-wrapper > div').length - 1){
					
					circle.stop();
					circle.set(0);
					
					return false;
				};
			});
			
			/*if($('html').hasClass('tablet') && $('html').hasClass('landscape')){
				$('#gallery-wrapper').swiperight(function() {  
					circle.destroy();
					circle = new ProgressBar.Circle(element, {
						color: startColor,
						trailColor: '#f9f9f9',
						trailWidth: 2,
						duration: timing,
						//easing: 'bounce',
						strokeWidth: 2
					});
					
					number = $('#gallery-wrapper > div').length - 1;
					
					$(this).removeAttr('style');
					
					return false;
				});  
				$('#gallery-wrapper').swipeleft(function() {  
					circle.destroy();
					circle = new ProgressBar.Circle(element, {
						color: startColor,
						trailColor: '#f9f9f9',
						trailWidth: 2,
						duration: timing,
						//easing: 'bounce',
						strokeWidth: 2
					});
					
					number = $('#gallery-wrapper > div').length - 1;
					
					$(this).removeAttr('style');
					
					return false;
				});
			};*/
			
		};
		
		if($('.wall-mask').length > 0){
			$('.wall-mask').imagesLoaded( function(){
				$('.wall-mask').height($('#left-chair-wall').height());
			});
			
			$(window).resize(function() {
				 $('.wall-mask').height($('#left-chair-wall').height());
			});
		};
		
		/*!
			================= Function for scroll and highlight subnav =================
		*/
		
		/**
		 * This part handles the highlighting functionality.
		 * We use the scroll functionality again, some array creation and 
		 * manipulation, class adding and class removing, and conditional testing
		 */
		if($('#page-subnav').length > 0){
			
			
			/*var aChildren = $('#page-subnav li').children(); // find the a children of the list items
			var aArray = []; // create the empty aArray
			
			for (var i=0; i < aChildren.length; i++) {    
				var aChild = aChildren[i];
				var ahref = $(aChild).attr('href');
				aArray.push(ahref);
			}; // this for loop fills the aArray with attribute href values
						
			
			$(window).scroll(function(){
				var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
				var windowHeight = $(window).height(); // get the height of the window
				var docHeight = $(document).height();
				topMenuHeight = $('#menu-list').outerHeight();
		
				for (var i = 0; i < aArray.length; i++) {
					var theID = aArray[i];
					var divPos = $(theID).offset().top - 30; // get the offset of the div from the top of page
					var divHeight = $(theID).height(); // get the height of the div in question
					if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
						$("a[href='" + theID + "']").parent().addClass('active');
					} else {
						$("a[href='" + theID + "']").parent().removeClass('active');
					};
				};
				
				if(windowPos == 0) {
					if($('#page-subnav').hasClass('first-highlight')){
						$('#page-subnav li:first-child').addClass('active');
					};
				};
				
				if(windowPos + windowHeight == docHeight) {
					if (!$('#page-subnav li:last-child').hasClass('active')) {
						var navActiveCurrent = $('.active a').attr("href");
						
						$("a[href='" + navActiveCurrent + "']").parent().removeClass('active');
						$('#page-subnav li:last-child').addClass('active');
					};
				};
			});*/
		};
		
		if($('.dropdown-wrapper').length > 0){
			$('.dropdown-wrapper select').change( function () {
				window.location.href = $(this).val();
				
				//var targetPosition = $($(this).val()).offset().top;
				//$('html,body').animate({ scrollTop: targetPosition}, 'slow');
			});
		};
		
		equalheight = function(container){
		   var currentTallest = 0,
		   currentRowStart = 0,
		   rowDivs = new Array(),
		   $el,
		   topPosition = 0;
		   $(container).each(function() {
			   $el = $(this);
			   $($el).height('auto')
			   topPostion = $el.position().top;
	
			   if (currentRowStart != topPostion) {
				   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					   rowDivs[currentDiv].height(currentTallest);
				   }
	
				   rowDivs.length = 0; // empty the array
				   currentRowStart = topPostion;
				   currentTallest = $el.height();
				   rowDivs.push($el);
			   } 
			   else {
				   rowDivs.push($el);
				   currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			   }
			   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				   rowDivs[currentDiv].height(currentTallest);
			   }
		   });
		};
		
		if($('.banner-bg').length > 0){
			
			
			$(document).scroll(function(){
				if($(this).scrollTop() >= $('#commitments').position().top - 20){
					neue.setAnimate($('#commitments').find('.banner-bg > *'), 150);
					$('#commitments').addClass('animate');
					equalheight($('.banner-bg'));
				};
			});
			
			equalheight($('.banner-bg'));
			$(window).resize(function() {
				 equalheight($('.banner-bg'));
			});
			
		};
		
		
		if($('#page-subnav-wrapper').length > 0){
									
			if(!window.location.hash) {
				ga('send', 'pageview');
			} else {
				ga('send', 'pageview', window.location.pathname + window.location.hash);
			};
			
			$(window).on('hashchange', function() {
				ga('send', 'pageview', window.location.pathname + window.location.hash);
			});
			
		};
		
		/*!
			================= Contact page =================
		*/
		
		if($('#contact-form').length > 0){
			ga('send', 'pageview', window.location.pathname.substring(0,window.location.pathname.lastIndexOf('/')+1) + 'write_to_us');
			
			jQuery.validator.addMethod("mobilePhoneSG", function(ph, element) {
			if (ph == null) {return false;}
			//ph = ph.replace(/[\s()+-]|ext\.?/gi, "");
			// 10 is the minimum number of numbers required
			return this.optional(element) /*|| ph.match(/^[9][0-9]{7}$/) || ph.match(/^[8][0-9]{7}$/);*/  || ph.match(/^[8|9][0-9]{7,11}$/);
			}, "Please enter a valid mobile number");
			
			$("#contact-form").validate({
				rules: { 
					contactName: {
						required: true
					}, 
					contactEnquiry: {
						required: true
					},
					contactMobile: {
						number: true,
						minlength: 7,
						maxlength: 11
						//mobilePhoneSG: true
					},
					contactEmail: { 
						required: true, 
						email: true 
					}
				},
			    //ignore: ":hidden:not(select)",
				errorPlacement: function (error, element) {
					if ($(element).is('select')) {
						element.parent().after(error); // special placement for select elements
					};
					if ($(element).is('input') || $(element).is('textarea')) {
						element.after(error); // special placement for select elements
					};
				}
			});
			
			$('#contact-form').submit(function(e){
								
				var thisForm = $(this);
				e.preventDefault();
	
				if($('#contact-form').valid()) {
					var contactName = $("input[name=contactName]", thisForm).val();
					var contactEmail = $("input[name=contactEmail]", thisForm).val();
					var contactMobile = $("input[name=contactMobile]", thisForm).val();
					var contactEnquiry = $("textarea[name=contactEnquiry]", thisForm).val();
	
					$.post("mail_contact_us.php", {
						contactName: contactName,
						contactEmail: contactEmail,
						contactMobile: contactMobile,
						contactEnquiry: contactEnquiry
					}, function (data) {
	
						// alert(data);
						if (data == "success") {
							$('#contact-form').prev().hide();
							$('#contact-form').hide();
							
							$( '<p>Thank you we have received your enquiry.</p>' ).insertBefore( $('#contact-form') ).fadeIn( 400 );
							
							ga('send', 'pageview', '/write_to_us/thank_you');
							//$('#contact-form')[0].reset();
	
							//alert("You have successfully submitted the form!");
						}
						else if (data == "fail") {
							// console.log("fail");
							// alert("You have not entered the correct captcha!");
						}
	
					});
				}
			});
		};
		
		/*!
			================= Common function =================
		*/	
		if(!Modernizr.input.placeholder){

			$('[placeholder]').focus(function() {
			  var input = $(this);
			  if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			  }
			}).blur(function() {
			  var input = $(this);
			  if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			  }
			}).blur();
			$('[placeholder]').parents('form').submit(function() {
			  $(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
				  input.val('');
				}
			  })
			});
		};
		
		
	});
	
})(jQuery);

/* =End closure */