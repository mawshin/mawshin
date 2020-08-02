 /* Create a closure to maintain scope of the '$' and remain compatible with other frameworks. */
(function ($) {

	// *************************************************************************************************** //
	// *************************************************************************************************** //
	// begin: same as $(document).ready(); event fires when the DOM is ready                               //
	// *************************************************************************************************** //
	// *************************************************************************************************** //
	
	
	/*var dl = window.dl || {};
	dl.scrollAnchor = function(){
		$('a[href*=#]:not([href=#])').click(function() {
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
		});
	};*/
	
	
	$(function () {
		
		
		/*!
			================= Registration screen =================
		*/	
		
		function checkPasswordMatch() {
			var password = $('#password').val();
			var confirmPassword = $('#confirmPassword').val();
		
			if (password !== confirmPassword){
				$('#confirmPassword').next().css('display', 'none');
				$('#confirmPassword').next().next().css('display', 'inline-block');
			} else {
				$('#confirmPassword').next().css('display', 'inline-block');
				$('#confirmPassword').next().next().css('display', 'none');
			};
		};
		
		if($('#confirmPassword').length > 0){
			$('#confirmPassword').keyup(checkPasswordMatch);
		};
		
		var stepCount = 1;
		
		var bookingStylist = $('#booking-stylist-id').val();
		var bookingService = $('#booking-service-id').val();
		var bookingGender = $('#booking-gender').val();
		var bookingDate = $('#booking-selected-dt').val();
		var bookingTime = $('#booking-timeslot').val();
		var selectSlide;
		var returnEdit = 0;
		
		function nextStep(){
			if(stepCount < 4){
				stepCount += 1;
					
				$('.step-indicators.current-step').text(stepCount);
				$('.steps.active').removeClass('active').next().addClass('active');
			};
			
			if(stepCount > 1){
				$('#prev-step').show();
			};
		};
		
		/* Get URL parameters */
		var getUrlParameter = function getUrlParameter(sParam) {
			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;
		
			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');
		
				if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : sParameterName[1];
				}
			}
		};
		
		// Preloader 
		/*function loadingAnimation(){
			i = 0;
			setInterval(function() {
				i = ++i % 4;
				$("#loading").html("Loading" + Array(i+1).join("."));
			}, 3500);
		};*/
		
		var getSessionData = base_url + "get-session-data";
		//var getServices = "scripts/services.json";
		
		// Preloader
		$('#loading-screen').fadeIn();
		//loadingAnimation();
		
		if($('#booking-form').length > 0) {
			$.getJSON( getSessionData, function( data ) {
				console.log(data);
				
				if(data.error == true){
					return false;
				};
				
				$('#booking-stylist-id').val(data.staff.staff_id);
				$('#booking-service-id').val(data.service.service_id);
				$('#booking-gender').val(data.service.gender);
				$('#booking-selected-dt').val(data.selected_dt);
				$('#booking-timeslot').val(data.timeslot);
					
			}).done(function() {
				
				
				if($('#booking-timeslot').val() !== ''){
					stepCount = 4;
					returnEdit = 1;
				
					$('.step-indicators.current-step').text(stepCount);				
					
					$('#step-one').removeClass('active');
					
					$('#step-four').addClass('active');
					
					$('#prev-step').show();
				
				
					getServicesList();
		
					getPreferDate();
					
					getTimeSlot();
					
					//returnEdit = 0;
				};
						
				//$('#loading-screen').fadeOut();
			});
		};
		/*!
			================= Stylist Step 1 =================
		*/	
		function getStylists(){
			var getStylists = base_url + "get-stylists";
			//var getStylists = "scripts/stylists.json";
			
			$.getJSON( getStylists, function( data ) {
				console.log(data);
				
				$.each( data, function( key, val ) {
					var stylistTemplate = '<div class="stylist" data-stylist="' + data[key].staff_id + '">' +
						'<div class="inline-block-img"><img src="' + base_url + 'images/booking-engine/' + data[key].photo_path +'" class="img-responsive img-circle"></div>' +
						'<div class="inline-block-img shadow"><img src="images/booking-engine/stylist-shadow.png" class="img-responsive"></div>' +
						'<h5 class="text-uppercase mbn">' + data[key].staff_name + '</h5>' +
						'<div class="designation">' + data[key].designation + '</div>' +
					'</div>';
					
					$('#step-one .stylist-list').append(stylistTemplate);
					
					//console.log(data[key].designation);
					//dates.push(val);
				});
					
			}).done(function() {
				
				var stylistSelected = getUrlParameter('stylist');
				
				stylistSelected = $('.stylist-list').find("[data-stylist='" + stylistSelected + "']").index();
				
				if($('#booking-stylist-id').val() == '' && stylistSelected !== -1){
					$('.stylist-list').slick({
						initialSlide: stylistSelected
					});
				} else if($('#booking-stylist-id').val() == '' && stylistSelected == -1){
					$('.stylist-list').slick();
					$('#step-one').find('.step-error').text('Stylist not available. Please select another stylist.')
				} else if($('#booking-stylist-id').val() == ''){
					$('.stylist-list').slick();
				};
				
				// Preloader
				if(returnEdit == 0){
					$('#loading-screen').fadeOut();
				};
				//$('.stylist-list').slick('initialSlide', 1);
			});
		};
		
		getStylists();
		/*!
			================= Stylist Step 2 =================
		*/	
		function getServicesList(){	
			var getServices = base_url + "get-services?gender=" + $('#booking-gender').val() + "&stylist_id=" + $('#booking-stylist-id').val();
			//var getServices = "scripts/services.json";
			
			$.getJSON( getServices, function( data ) {
				if(data.error == true){
					$('.steps.active').find('.step-error').html(data.message);
					$('#loading-screen').fadeOut();
					return false;	
				};
				
				// line below is to set if back to edit
				if($('#booking-gender').val() == 'M'){
					$('input:radio[id=male]').prop('checked', true);
				} else {
					$('input:radio[id=female]').prop('checked', true);
				};
				
				if(returnEdit == 0){
					nextStep();
				};
				
				$('.steps.active').find('.step-error').html('');
				
				$('#booking-services').find('option:gt(0)').remove();
				
				$.each( data, function( key, val ) {
					var serviceTemplate = '<option value="' + key + '">' + val + '</option>';
					
					//$('select[name="service"]').children('option:not(:first)').remove();
					
					$('#booking-services').append(serviceTemplate);
					
					//console.log(data[key].designation);
					//dates.push(val);
				});
					
			}).done(function() {
				// Preloader
				if(returnEdit == 0){
					$('#loading-screen').fadeOut();
				};
				
				// line below is to set if back to edit
				$('#booking-services').val($('#booking-service-id').val());
				
				if($('html').hasClass('desktop')){
					$('#booking-services').selectpicker('refresh');
				};
				
			});
			
			$('input[name=gender]:radio').change(function(){
			
				var selected = $('input[name=gender]:checked').val();
				
				$('#booking-gender').val(selected);
				
				bookingGender = $('#booking-gender').val();
				
				toggleServicesList();
				//getServicesList(selected, $('input[name="stylist_id"]').val());
				
				/*if($('#female').prop('checked')){
					$('#booking-gender').val(selectStylist);
				} 
				else {
					alert(5);
					return false;
				}*/
			});
			
			$('#booking-services').change(function(){
				$('#booking-service-id').val($('#booking-services option:selected').val());
				
				bookingService = $('#booking-service-id').val();
			});
			
		};
		
		function toggleServicesList(){	
			var getServices = base_url + "get-services?gender=" + bookingGender + "&stylist_id=" + bookingStylist;
			//var getServices = "scripts/services.json";
			
			$.getJSON( getServices, function( data ) {
				$('#booking-services').find('option:gt(0)').remove();
				$('#booking-services')[0].selectedIndex = 0;
				$.each( data, function( key, val ) {
					var serviceList = '<option value="' + key + '">' + val + '</option>';
					
					//$('select[name="service"]').children('option:not(:first)').remove();
					
					$('#booking-services').append(serviceList);
					
					//console.log(data[key].designation);
					//dates.push(val);
				});
					
			})/*.fail(function() {
				return false;
			})*/.done(function() {
				//$('.stylist-list').slick();
				if($('html').hasClass('desktop')){
					$('#booking-services').selectpicker('refresh');
				};
			});
		};
		
		/*!
			================= Stylist Step 3 =================
		*/	
		function getPreferDate(){
					
			var getDates = base_url + "get-dates?stylist_id=" + $('#booking-stylist-id').val() + "&service_id=" + $('#booking-service-id').val() + "&gender=" + bookingGender;
			
			//var getDates = "scripts/dates.json";
			/*var dates = [];
			var dateLength;*/
			
			$.getJSON( getDates, function( data ) {
				if(data.error == true){
					$('.steps.active').find('.step-error').html(data.message);
					$('#loading-screen').fadeOut();
					return false;	
				};
				
				if(returnEdit == 0){
					nextStep();
				};
				
				$('.steps.active').find('.step-error').html('');
				/*$.each( data, function( key, val ) {
					dates.push(val);
				});
				
				dateLength = dates.length - 1;*/
				//console.log(parseInt(dateLength));
				
				$('#calendar').datepicker({
					startDate: data.start_date,
					endDate: data.end_date,
					datesDisabled: data.disabled
				}).on('changeDate', function(e){
				    //console.log($('#calendar').datepicker('getFormattedDate'));
					$('#booking-selected-dt').val(e.format('mm/dd/yyyy'))
					
					bookingDate =  $('#booking-selected-dt').val();
				});
				
				if($('#booking-selected-dt').val() !== ''){
					$('#calendar').datepicker("update", $('#booking-selected-dt').val());
				};
				//$('#calendar').datepicker('setDates', data);
			   
				/*$( "<ul/>", {
				  "class": "my-new-list",
				  html: items.join( "" )
				}).appendTo( "body" );*/
			}).done(function() {
				// Preloader
				if(returnEdit == 0){
					$('#loading-screen').fadeOut();
				};
			});
			
		};
		
		/*!
			================= Stylist Step 4 =================
		*/	
		function getTimeSlot(){
					
			
			var getTimes = base_url + "get-timeslots?service_id=" + $('#booking-service-id').val() + "&selected_dt=" + $('#booking-selected-dt').val() + "&gender=" + bookingGender + "&stylist_id=" + $('#booking-stylist-id').val();
			//var getTimes = "scripts/services.json";
			
			$.getJSON( getTimes, function( data ) {
				if(data.error == true){
					$('.steps.active').find('.step-error').html(data.message);
					
					return false;	
				};
				
				if(returnEdit == 0){
					nextStep();
				};
				
				$('.steps.active').find('.step-error').html('');
				//$('#booking-timeslot').find('option:gt(0)').remove();
				
				$('#booking-time').find("option:gt(0)").remove();
				
				$.each( data, function( key, val ) {
					var timeString = String(val);
					var hourEnd = timeString.indexOf(":");
					//var hourEnd = 2;
					var H = +timeString.substr(0, 2);
					var h = H % 12 || 12;
					var ampm = H < 12 ? "AM" : "PM";
					timeString = h + ":" + timeString.substr(2, 3) + ampm;
					val = timeString;
					
					var timeList = '<option value="' + key + '">' + val + '</option>';
					
					//$('select[name="service"]').children('option:not(:first)').remove();
					
					$('#booking-time').append(timeList);
					//console.log(data[key].designation);
					//dates.push(val);
				});
				
				//$('#booking-timeslot').selectpicker('refresh');
					
			}).done(function() {
				// Preloader
				//if(returnEdit == 0){
					$('#loading-screen').fadeOut();
				//};
				
				// line below is to set if back to edit
				$('#booking-time').val($('#booking-timeslot').val());
				
				if($('html').hasClass('desktop')){
					$('#booking-time').selectpicker('refresh');
				};
				
				returnEdit = 0;
			});
			
			$('#booking-time').change(function(){
				$('#booking-timeslot').val($('#booking-time option:selected').val());
				
				bookingTime = $('#booking-timeslot').val();
			});
			
		};
		
		function checkLogin(){
			var bookStylist = $("#booking-stylist-id").val();
			var bookService = $("#booking-service-id").val();
			//var bookService = $("#nric").val();
			var bookDate = $("#booking-selected-dt").val();
			var bookTime = $("#booking-timeslot").val();
			
			var postData = {};
			postData["stylist_id"] = bookStylist;
			postData["service_id"] = bookService;
			postData["selected_dt"] = bookDate;
			postData["timeslot"] = bookTime;
			//postData["id_no"] = contactID;
			postData[csrf_token] = csrf_hash;
			
			// Preloader
			$('#loading-screen').fadeIn();
			//loadingAnimation();
			
			console.log(postData);
			
			$.ajax({
				type: "POST",
				url: base_url + "confirm-booking",
				data: postData,
				dataType: "json",
				success: function(data) {
					
					console.log(data);
					/*if(data.error == true){
						if(data.login_error == true){
							//console.log(base_url + "login");
							window.location.href = base_url + "login";
						};
					} else*/ 
					
					if(data.error == true){
						$('.steps.active').find('.step-error').html(data.message);
						
						return false;	
					};
					
					if(data.error == false) {
						window.location.href = base_url + "confirmation";
					};
					
					// Preloader
					$('#loading-screen').fadeOut();
					
					//console.log(data);
				},
				error: function(response) {
					console.log(response.responseText);
				}
			});
			
			/*$.post( "http://192.168.88.166/maw/neue/booking/confirm-booking", function( data ) {
				console.log(data);
				//$( ".result" ).html( data );
			});*/
		};
		
		/*!
			================= Confirmation booking screen =================
		*/	
		if($('#confirmation-wrapper').length > 0){
			var getSessionData = base_url + "get-session-data";
			//var getServices = "scripts/services.json";
			
			$.getJSON( getSessionData, function( data ) {
				if(data.error == true){
					$('#confirmation-wrapper').find('.step-error').html(data.message);
					
					return false;	
				};
				
				var replaceSpace = data.selected_dt.replace(/\//g, " ");
				
				//console.log(replaceSpace);
				
				var timeString = String(data.timeslot);
				var hourEnd = timeString.indexOf(":");
				//var hourEnd = 2;
				var H = +timeString.substr(0, 2);
				var h = H % 12 || 12;
				var ampm = H < 12 ? "AM" : "PM";
				timeString = h + ":" + timeString.substr(2, 3) + ampm;
				
				
				$('#stylist-name > div').html(data.staff.first_name + ' ' + data.staff.last_name);
				$('#stylist-designation').html(data.staff.designation);
				
				$('#service').html(data.service.desc);
				
				console.log(replaceSpace);
				var formattedDate = moment(replaceSpace, 'MM DD YYYY').format('Do MMMM YYYY');
				
				$('#date-time').html(formattedDate + ', ' + timeString);			
				
					
			}).done(function() {
				$('#loading-screen').fadeOut();
			});
			
			$('#confirm-booking').click(function(){
				var postData = {};
				postData["stylist_id"] = $('#booking-stylist-id').val();
				postData["service_id"] = $('#booking-service-id').val();
				postData["selected_dt"] = $('#booking-selected-dt').val();
				postData["timeslot"] = $('#booking-timeslot').val();
				//postData["id_no"] = contactID;
				postData[csrf_token] = csrf_hash;
				
				$('#loading-screen').fadeIn();
				//loadingAnimation();
				
				$.ajax({
					type: "POST",
					url: base_url + "book-appointment",
					data: postData,
					dataType: "json",
					success: function(data) {
						$('#loading-screen').fadeOut();
						
						console.log(data);
						
						if(data.error == true){
							if(data.login_error == true){
								//console.log(base_url + "login");
								window.location.href = base_url + "login";
							} else {
                                $('#confirmation-wrapper').find('.step-error').html(data.message);
					
                                return false;	
                            }
						} else if(data.error == false){
							//console.log(base_url + "login");
							window.location.href = base_url + "complete";
						};
						
						//console.log(data);
					},
					error: function(response) {
						console.log(response.responseText);
					}
				});
			});
		};
		
		
		/*!
			================= Booking steps common functions =================
		*/	
			
		$('#next-step').click(function(){
			
			// Preloader
			$('#loading-screen').fadeIn();
			//loadingAnimation();
			
			if(stepCount == 1){
				
				var selectStylist = $('.stylist.slick-active').data('stylist');
				
				$('#booking-stylist-id').val(selectStylist);
				
				bookingStylist = $('#booking-stylist-id').val();
				
				getServicesList();
				
			} else if(stepCount == 2){
				//$('#booking-stylist-id').val(selectStylist);
				
				getPreferDate();
				
			} else if(stepCount == 3){
				//$('#booking-stylist-id').val(selectStylist);
				
				getTimeSlot();
				
			} else if(stepCount == 4){
				//$('#booking-stylist-id').val(selectStylist);
				
				checkLogin();
			};
			
		});
		
		$('#prev-step').click(function(){
			stepCount -= 1;
			$('.step-indicators.current-step').text(stepCount);
			//console.log(stepCount);
			$('.steps.active').removeClass('active').prev().addClass('active');
			
			if(stepCount == 1){
				//selectSlide = $('.stylist-list').find("[data-stylist='" + $('#booking-stylist-id').val() + "']").index();
				$('#prev-step').hide();
				if($('#booking-stylist-id').val() !== ''){
					// line below is to set if back to edit
					selectSlide = $('.stylist-list').find("[data-stylist='" + $('#booking-stylist-id').val() + "']").index();
					
					$('.stylist-list').slick({
						initialSlide: selectSlide
					});
					
					//$('.stylist-list')[0].slick.refresh();
					
				};
				
			};
		});
		
		
	});
	
})(jQuery);

/* =End closure */