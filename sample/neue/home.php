<!DOCTYPE html>
<html id="home">
<head>
	<meta charset="utf-8">

	<title>NEUE Salon - A new experience in hairstyling awaits</title>

	<!-- Behavioral Meta Data -->
	<meta name="apple-mobile-web-app-capable" content="yes">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <!-- <meta name="description" content="A new you awaits at Singapore’s newest hair salon. Flaunt it with the help of a team of top hair artists, for an iconic style that’s all you, all NEUE.">
    <meta name="keywords" content="hair salon, singapore, top stylists, hair styling, hair colouring, hair treatment, rebonding, perm techniques, raffles shopping centre"> -->
    <meta name="robots" content="noindex">
    <meta name="googlebot" content="noindex">
    
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
    <link rel="stylesheet" type="text/css" href="styles/bootstrap-select.css"/>
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
<body>
	
    <div id="test" style="width: 100%; height: 100%; background-color: #fff; position: absolute; top: 0; z-index: 1040; display: none;"></div>
    
    <!-- This section is for Splash Screen -->
    <section id="jSplash">
        <div id="preloader"><!--<div class="icon-spin5 animate-spin"></div>--></div>
    </section>
    <!-- End of Splash Screen -->
    
    <div id="desktop-limit">
        <h2>Page best viewed in 1024 by 768 and above.</h2>
    </div>
    
    <div id="landscape"><p><b>Rotate Device to "Portrait"</b></p></div>
    
    <?php include_once "include/nav.php"; ?>
    
    <div id="gallery-pagination">
    	<div id="circle-timer">
        	<div class="pause-strip-wrapper">
            	<div class="pause-strip"></div>
            	<div class="pause-strip"></div>
            </div>
        </div>
    </div>
    
    <div id="gallery">
    	
        <div id="gallery-wrapper">
            <img src="images/home/canvas-frame.png" class="img-responsive" id="gallery-frame">
            
            <div class="bg">
            	<img src="images/home/bg1.jpg" class="img-responsive">
            </div> 
            <div class="bg">
            	<img src="images/home/bg2.jpg" class="img-responsive">
                <img src="images/home/sofa.png" class="img-responsive" id="gallery-sofa">
            </div>
            <div class="bg">                
                <img src="images/home/bg3.jpg" class="img-responsive">
                
            </div>
            <div class="bg">
            	<img src="images/home/bg4.jpg" class="img-responsive">
                <div class="wall-mask">
                	<div class="wall-mask-overlay"></div>
                    <div id="left-chair-wall">
                        <img src="images/home/take-a-seat-left.png" class="img-responsive">
                    </div>
                    <div id="right-chair-wall">
                        <img src="images/home/take-a-seat-right.png" class="img-responsive">
                    </div>
                </div>
                <img src="images/home/take-a-seat-copy.png" class="img-responsive" id="gallery-chair-copy">
                <img src="images/home/chair.png" class="img-responsive" id="gallery-chair">
            </div>
            <div class="bg">
            	<img src="images/home/bg5.jpg" class="img-responsive">
                <a href="#" id="book" class="btn btn-default btn-lg" onClick="ga('send', 'event', 'button', 'click', 'book_now_homepage_desktop');"><span>Book now</span></a>
                <img src="images/home/jerry.png" class="img-responsive" id="gallery-jerry"> 
            </div>
        </div>
    </div>   
    

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
    <script src="scripts/jpreloader.min.js"></script>
	<script src="scripts/device.min.js"></script>
    <!--<script src="scripts/hide-address-bar.js"></script>-->
    <!--<script src="scripts/bootstrap.js"></script>
    <script src="scripts/bootstrapx-clickover.js"></script>-->
    <script src="scripts/imagesloaded.pkgd.min.js"></script>
    <!--<script src="scripts/global-min.js"></script>-->
    <script src="scripts/retina.min.js"></script>
    <script src="scripts/progressbar-min.js"></script>
    
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js"></script>
    <script src="scripts/velocity.min.js"></script>
    <script src="scripts/velocity.ui.js"></script>
    <script src="scripts/global.js"></script>
    
    <script>
    	$(function(){
			TweenMax.from("#test", 1, {right:"-200%", skewX:45, ease: Power4.easeOut});
		});
    </script>
    
</body>
</html>

