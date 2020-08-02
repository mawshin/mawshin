<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">

	<title>NEUE Salon - A new experience in hairstyling awaits</title>

	<!-- Behavioral Meta Data -->
	<meta name="apple-mobile-web-app-capable" content="yes">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <meta name="description" content="A new you awaits at Singapore’s newest hair salon. Flaunt it with the help of a team of top hair artists, for an iconic style that’s all you, all NEUE.">
    <meta name="keywords" content="hair salon, singapore, top stylists, hair styling, hair colouring, hair treatment, rebonding, perm techniques, raffles shopping centre">
    
    <!-- For third-generation iPad with high-resolution Retina display: -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/ico/favicon-144.png">
    <!-- For iPhone with high-resolution Retina display: -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/ico/favicon-114.png">
    <!-- For first- and second-generation iPad: -->
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ico/favicon-72.png">
    <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
    <link rel="apple-touch-icon-precomposed" href="images/ico/favicon-57.png">
    <link rel="icon" href="images/ico/favicon.ico">

	<!-- Styles -->
	<link rel="stylesheet" type="text/css" href="styles/fonts.css"/>
    <link rel="stylesheet" type="text/css" href="styles/fontello.css"/>
    <link rel="stylesheet" type="text/css" href="styles/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="styles/global-common.css"/>
    <link rel="stylesheet" type="text/css" href="styles/global.css"/>
    
    <!-- Google Analytic -->
    <script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-65524568-1', 'auto');
	ga('send', 'pageview');
	</script>
</head>
<body id="booking-bg">
	<div id="landscape"><p><b>Rotate Device to "Portrait"</b></p></div>
	
    <?php include_once "include/nav.php"; ?>
        
    <section id="contact-wrapper" class="container-fluid">
    	<div class="row">
        	<div class="col-sm-6">
                <div id="map-top" class="table-wrapper">
                    <div class="table-cell">
                        <div class="table-align">
                            <h5 class="text-yellow mb30">Click here for directions</h5>
                            <a href="https://www.google.com/maps/dir/Current+Location/Quest+Salon+Pte+Ltd+Singapore" target="_blank" class="btn btn-default btn-lg" onClick="ga('send', 'event', 'button', 'click', 'go_to_map');"><span>Go to map</span></a>
                        </div>
                    </div>
                </div>
                <div id="map-bottom" class="table-wrapper">
                    <div class="table-cell valign-top">
                        <div class="table-align">
                            <h5>Opening hours</h5>
                            <div>10am - 10pm (Mon - Fri)<br>10am - 8pm (Sat &amp; Sun)</div>
                            <h5 class="mt40">Outlet's Address</h5>
                            <ul class="list-unstyled">
                                <li>252 North Bridge Road,</li>
                                <li>#02-27C, Raffles City,</li>
                                <li>Singapore 179103</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-sm-offset-6">
            	<div id="contact-form-wrapper">
                	<h2>Write to us</h2>
                	<p>Now that you’ve found us on this space, we want nothing more than to meet you in person. If you’re looking to create your unique look, or just enjoy a chat over a nice cup of tea with us, just give us a ring, shoot us an email or step in to our carefully curated space at Raffles City.</p>
                    <form id="contact-form" method="post">
                    	<div class="form-group">
                        	<input type="text" class="form-control" id="contact-name" name="contactName" placeholder="Name">
                        </div>
                        <div class="form-group">
                        	<input type="email" class="form-control" id="contact-email" name="contactEmail" placeholder="Email">
                        </div>
                        <div class="form-group">
                        	<input type="text" class="form-control" id="contact-mobile" name="contactMobile" placeholder="Mobile (Optional)">
                        </div>
                        <textarea class="form-control" name="contactEnquiry" rows="4" placeholder="Enquiry"></textarea>
                        
                        <div class="mt20">
                            <button type="submit" class="btn btn-default btn-lg"><span>Submit</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

	<!-- Scripts -->
    <!--[if lt IE 9]>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>
        if (!window.jQuery) {
        document.write('<script src="scripts/jquery-1.11.3.min.js"><\/script>');
        }
        </script>
    <![endif]-->
    <!--[if gte IE 9]><!-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script>
        if (!window.jQuery) {
        document.write('<script src="scripts/jquery-2.1.4.min.js"><\/script>');
        }
        </script>
    <!--<![endif]-->
    <script src="scripts/modernizr.js"></script>
    <script src="scripts/device.min.js"></script>
    <script src="scripts/bootstrap.js"></script>
    <script src="scripts/bootstrapx-clickover.js"></script>
    <script src="scripts/retina.min.js"></script>
    <script src="scripts/jquery.validate.js"></script>
    <script src="scripts/velocity.min.js"></script>
    <script src="scripts/velocity.ui.js"></script>
    <script src="scripts/global.js"></script>
    
    <script>
    	$(function(){
			$('[rel="clickover"]').clickover();
						
			
		});
    </script>

</body>
</html>
