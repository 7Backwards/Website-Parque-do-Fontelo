function initMap() {
        var fontelo = {lat: 40.659042, lng: -7.901304};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: fontelo,
          mapTypeId: 'satellite',
    	  tilt: 45
        });
        

        var marker = new google.maps.Marker({
  			position:fontelo,
 			map:map,
 			animation:google.maps.Animation.BOUNCE
  		});

        var infowindow = new google.maps.InfoWindow({
 			content:"Parque do Fontelo"
 		});

	google.maps.event.addListener(marker, 'click', function() {
 	 infowindow.open(map,marker);
 	});

 	
}
//{lat: 40.659042, lng: -7.901304},                