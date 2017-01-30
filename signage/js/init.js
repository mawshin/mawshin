/* Create a closure to maintain scope of the '$' and remain compatible with other frameworks. */
(function ($) {

	$(function () {
		if($('#feedForm').length > 0) {
            $('.jsFormSubmit').click(function(e) {

                var form = $('#feedForm');

                form.validate({
                	rules: {
						feedTrigger: {
							required: true,
							url: true
						}
					}
                });

                var validated = form.valid();
                
                if(validated) {
                    // Do something when form validation success
                    window.location.href='that.html';
                }
                
            });
        }

        if($('#actionForm').length > 0) {
            $('.jsFormSubmit').click(function(e) {

                var form = $('#actionForm');

                form.validate({
                	rules: {
						actionTrigger: {
							required: true,
							email: true
						}
					}
                });

                var validated = form.valid();
                
                if(validated) {
                    // Do something when form validation success
                    window.location.href='complete.html';
                }
                
            });
        }
	});
	
})(jQuery);