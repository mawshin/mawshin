(function ($) {

    // *************************************************************************************************** //
    // *************************************************************************************************** //
    // begin: same as $(document).ready(); event fires when the DOM is ready                               //
    // *************************************************************************************************** //
    // *************************************************************************************************** //


    $(function () {
        
        if($('#twitter-fav-list').length > 0){
            function handleTweets(tweets){
                var x = tweets.length;
                var n = 0;
                var element = document.getElementById('twitter-fav-list');
                var html = '';
                while(n < x) {
                    html += '<div class="col-sm-4">' + tweets[n] + '</div>';
                    n++;
                }
                //html += '</ul>';
                element.innerHTML = html;
            }

            // var configFeed = {
            //     "id": '653063325496938496',
            //     "domId": 'twitter-fav-list',
            //     "maxTweets": 3,
            //     "enableLinks": true,
            //     "showUser": true,
            //     "showTime": true,
            //     "lang": 'en',
            //     "showInteraction": false,
            //     "customCallback": handleTweets
            // };

            var configLikes = {
                //"likes": {"screenName": 'mawshin'},
                "profile": {"screenName": 'mawshin'},
                "domId": 'twitter-fav-list',
                "maxTweets": 3,
                "enableLinks": true, 
                "showUser": true,
                "showTime": true,
                "showImages": false,
                "lang": 'en',
                "showInteraction": false,
                "customCallback": handleTweets
            };
            twitterFetcher.fetch(configLikes);
        }
        
        var flag = 0;
        
        if($('#html-gauge').length > 0){
            function animateChart(){
                var circlexHTML = new ProgressBar.Circle('#bootstrap-gauge', {
                    color: '#000',
                    strokeWidth: 4,
                    trailWidth: 2,
                    trailColor: '#fecf07',
                    duration: 1500,
                    //fill: '#fecf07',
                    text: {
                        value: '0'
                    },
                    step: function(state, bar) {
                        bar.setText("Twitter Bootstrap");
                    }
                });

                circlexHTML.animate(1);

                var circleHTML = new ProgressBar.Circle('#html-gauge', {
                    color: '#000',
                    strokeWidth: 4,
                    trailWidth: 2,
                    trailColor: '#fecf07',
                    duration: 1500,
                    //fill: '#fecf07',
                    text: {
                        value: '0'
                    },
                    step: function(state, bar) {
                        bar.setText("HTML5/CSS3");
                    }
                });

                circleHTML.animate(.95);  

                var circleJquery = new ProgressBar.Circle('#jquery-gauge', {
                    color: '#000',
                    strokeWidth: 4,
                    trailWidth: 2,
                    trailColor: '#fecf07',
                    duration: 1500,
                    //fill: '#fecf07',
                    text: {
                        value: '0'
                    },
                    step: function(state, bar) {
                        bar.setText("jQuery");
                    }
                });

                circleJquery.animate(.65);  

                var circleSCSS = new ProgressBar.Circle('#scss-gauge', {
                    color: '#000',
                    strokeWidth: 4,
                    trailWidth: 2,
                    trailColor: '#fecf07',
                    duration: 1500,
                    //fill: '#fecf07',
                    text: {
                        value: '0'
                    },
                    step: function(state, bar) {
                        bar.setText("SASS");
                    }
                });

                circleSCSS.animate(.9); 

                var circleReact = new ProgressBar.Circle('#react-gauge', {
                    color: '#000',
                    strokeWidth: 4,
                    trailWidth: 2,
                    trailColor: '#fecf07',
                    duration: 1500,
                    //fill: '#fecf07',
                    text: {
                        value: '0'
                    },
                    step: function(state, bar) {
                        bar.setText("ReactJS");
                    }
                });

                circleReact.animate(.2); 

                var circleVue = new ProgressBar.Circle('#vue-gauge', {
                    color: '#000',
                    strokeWidth: 4,
                    trailWidth: 2,
                    trailColor: '#fecf07',
                    duration: 1500,
                    //fill: '#fecf07',
                    text: {
                        value: '0'
                    },
                    step: function(state, bar) {
                        bar.setText("VueJS");
                    }
                });

                circleVue.animate(.4); 
            };
            
            $('#skills').waypoint(function(direction) {
                // do stuff
                if(direction == 'down' && flag === 0){
                    animateChart();
                    flag = 1;
                    $('.skills-list').fadeTo( 400 , 1);
                };
            }, { offset: 500 });
        };
        
    });
    
    // var pass = "2530b43a2b667f0ffc3586ab016950d20cd20650", user = "35675e68f4b5af7b995d9205ad0fc43842f16450";
    // var cookieExpiry = 15; //num of minutes

    var listView = "";
    
    if($('#loginform').length > 0) {
        var pass = "43a3a3941ca9c87acb4354c2740e9c36ab60d94f", 
        user = "35675e68f4b5af7b995d9205ad0fc43842f16450",
        pass2= "ab87137e2eaf3eeb1f5fdabeca38e3514d50eae8";

        var cookieExpiry = 15; //num of minutes

        if($('#loginform').length > 0){
            //Cookies.remove('access');

            $('#submit').click(function(){
                $('#loginform').submit(function(e){
                    e.preventDefault();

                    var hashPass = CryptoJS.SHA1($('#password').val()).toString(CryptoJS.enc.Hex);
                    var hashUser = CryptoJS.SHA1($('#username').val()).toString(CryptoJS.enc.Hex);

                    if(hashPass === pass && hashUser === user) {
                        var currentDate = new Date();
                        var expiryDate = new Date(currentDate.getTime() + (cookieExpiry * 60 * 1000));
                        
                        listView = "simple";

                        Cookies.set('access', expiryDate , { expires: expiryDate });
                        setTimeout(function(){ window.location.href="portfolio-listing.html" }, 1);
                    } else if(hashPass === pass2 && hashUser === user) {
                        var currentDate = new Date();
                        var expiryDate = new Date(currentDate.getTime() + (cookieExpiry * 60 * 1000));

                        listView = "full";

                        Cookies.set('access', expiryDate , { expires: expiryDate });
                        setTimeout(function(){ window.location.href="portfolio-listing.html" }, 1);
                    } else {
                        alert("Invalid credential, please contact me at mawshin@hotmail.sg and I'll share the login with you! Thanks.");
                    }
                });
                //alert(Cookies.get('access'));
            });
        }
    }
    
    if($('.portfolio-list').length > 0){
        if( Cookies.get('access') === undefined ){
            window.location.href = "portfolio.html";
        } else {
            if(listView === 'simple') {
                $('.portfolio-list').load('include/listing.html');   
            } else if(listView === 'full') {
                $('.portfolio-list').load('include/listings.html');  
            }
        }
    }

    $('.navbar-nav a').click(function(){
        ga('send', 'event', 'navBar', 'Click', $(this).text());
    });

})(jQuery);

/* =End closure */