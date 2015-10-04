
$(document).ready(function() {

	$("body").addClass("loaded");

	$(function () {
		
		
		var imageLoaded;
		
		$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		    event.preventDefault();
		    $(this).ekkoLightbox();
		});

		
		// $('a[rel="lightbox"]').click(function(){
		// 	imageLoaded = $(this).html();
		// 	var title = $(this).data('title');
			
			
		// 	$('#lightbox-content').html(imageLoaded);
		// 	$('#lightbox-content').imagesLoaded( function() {
  //           	$('#myModal').modal('show'); 
  //           });
			
		// 	var overlayHeight = $('.modal-backdrop').height();
		// 	$('#myModal').height(overlayHeight);
			
		// 	$('#myModalLabel').text(title);
			
		// });
	})

});
