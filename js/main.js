(function ($) {

    // *************************************************************************************************** //
    // *************************************************************************************************** //
    // begin: same as $(document).ready(); event fires when the DOM is ready                               //
    // *************************************************************************************************** //
    // *************************************************************************************************** //

    //var neue = window.neue || {};
    

    $(function () {
        
//        var imageLoaded;
//
//        $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
//            event.preventDefault();
//            $(this).ekkoLightbox();
//        });
//        var config = {
//            "id": '39022493',
//            "domId": 'twitterTweets',
//            "maxTweets": 3,
//            "enableLinks": true,
//            "showImages": false,
//            "showUser": true,
//            "showTime": true,
//            "showInteraction": false
//            //"customCallback": handleTweets
//        };
//
//
//        twitterFetcher.fetch(config1);
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

            var configFeed = {
                "id": '653063325496938496',
                "domId": 'twitter-fav-list',
                "maxTweets": 3,
                "enableLinks": true,
                "showUser": true,
                "showTime": true,
                "lang": 'en',
                "showInteraction": false,
                "customCallback": handleTweets
            };
            twitterFetcher.fetch(configFeed);
        }
        
        var flag = 0;
        
        if($('#xhtml-gauge').length > 0){
            function animateChart(){
                var circlexHTML = new ProgressBar.Circle('#xhtml-gauge', {
                    color: '#000',
                    strokeWidth: 4,
                    trailWidth: 2,
                    trailColor: '#ededed',
                    duration: 1500,
                    fill: '#cc0000',
                    text: {
                        value: '0'
                    },
                    step: function(state, bar) {
                        bar.setText("HTML/CSS");
                    }
                });

                circlexHTML.animate(1);

                var circleHTML = new ProgressBar.Circle('#html-gauge', {
                    color: '#000',
                    strokeWidth: 4,
                    trailWidth: 2,
                    trailColor: '#ededed',
                    duration: 1500,
                    fill: '#cc0000',
                    text: {
                        value: '0'
                    },
                    step: function(state, bar) {
                        bar.setText("HTML5/CSS3");
                    }
                });

                circleHTML.animate(.75);  

                var circleJquery = new ProgressBar.Circle('#jquery-gauge', {
                    color: '#000',
                    strokeWidth: 4,
                    trailWidth: 2,
                    trailColor: '#ededed',
                    duration: 1500,
                    fill: '#cc0000',
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
                    trailColor: '#ededed',
                    duration: 1500,
                    fill: '#cc0000',
                    text: {
                        value: '0'
                    },
                    step: function(state, bar) {
                        bar.setText("SCSS");
                    }
                });

                circleSCSS.animate(.5); 
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

})(jQuery);

/* =End closure */