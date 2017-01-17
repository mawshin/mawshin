(function ($) {
    $(function() {
        function geocodeAddress(geocoder, resultsMap, input) {

            var address = input.val();

            //  Make an array of the LatLng's of the markers you want to show
            var LatLngList = [];

            geocoder.geocode({'address': address}, function(results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);

                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location,
                        title: address
                    });

                    LatLngList.push(results[0].geometry.location);

                    // Creating an InfoWindow          
                    var infowindow = new google.maps.InfoWindow({});

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.setContent(address);
                        infowindow.open(map, this);
                    }); 
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });

            //  Create a new viewpoint bound
            var bounds = new google.maps.LatLngBounds ();
            //  Go through each...
            for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
                //  And increase the bounds to take this point
                bounds.extend(LatLngList[i]);
            }
            //  Fit these bounds to the map
            map.fitBounds(bounds);

            google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
                if (this.getZoom() < 13) {
                    this.setZoom(12);
                }
            });
        }

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 1.3553794, lng: 103.8677444},
            zoom: 13
        });

        var geocoder = new google.maps.Geocoder();

        $('.jsFormSubmit').click(function(e){
            e.preventDefault();
            geocodeAddress(geocoder, map, $('#pickup-input'));
            geocodeAddress(geocoder, map, $('#dropoff-input'));
        });

        var service;

        function initService(value, input) {
            var displaySuggestions = function(predictions, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    alert(status);
                    return;
                }

                predictions.forEach(function(prediction) {
                    var template = '<li>' +
                        '<div class="prediction-list--result">' + prediction.description +
                        '</div></li>';

                    input.append(template);
                });
            };

            var options = {
                input: value,
                types: ['cities'],
                componentRestrictions: {country: 'sg'}
            };

            service = new google.maps.places.AutocompleteService();
            service.getQueryPredictions(options, displaySuggestions);
        }

        $('#pickup-input').keyup(function() {
            var dInput = this.value,
                list = $('#pickup-prediction-list');

            if(dInput !== '') {
                list.empty().show();
            
                initService( dInput, list );
            } else {
                list.empty().hide();
            }

        });

        $('#dropoff-input').keyup(function() {
            var dInput = this.value,
                list = $('#dropoff-prediction-list');

            if(dInput !== '') {
                list.empty().show();
            
                initService( dInput, list );
            } else {
                list.empty().hide();
            }

        });

        $(document).on('click', '.prediction-list > li', function() {
            var value = $(this).text(),
            list = $(this).parent();

            $(this).parent().prev().find('input').val(value);
            list.empty().hide();
        });

        $(document).click(function (e) {
            var container = $('.prediction-list');

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.hide();
            }
        });

    });
})(jQuery);
