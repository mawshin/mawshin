<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">

	<title>NEUE Salon - A new experience in hairstyling awaits</title>

	<!-- Behavioral Meta Data -->
	<meta name="apple-mobile-web-app-capable" content="yes">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
	
    
    <style>
    	body{
			display: none;
		}
    </style>  
    
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
	<script src="scripts/device.min.js"></script>
    <script>
    	$(function(){
			
			if($('html').hasClass('tablet')){
			
				if($('html').hasClass('landscape')){
					window.location.href = "home.php";
					return false;
				} else {
					window.location.href = "mobile-home.php";
					return false;
				};
			} else if($('html').hasClass('mobile')){
				window.location.href = "mobile-home.php";
				return false;
			} else if($('html').hasClass('desktop')){
				window.location.href = "home.php";
				return false;
			};
		});
    </script>
    
</body>
</html>

