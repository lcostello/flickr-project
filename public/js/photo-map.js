$(() => {

    let map;

    $("#myButton").click((e) => {
        e.preventDefault();

        $.ajax({
            url: `/search`,
            method: 'POST',
            data: {
                query: $("#searchBar").val()
            }
        })
            .then((data) => {
                initMap(data);
            });
    })

    // setTimeout(() => {
    //         initMap([]);
    // }, 2000);

    function initMap(data) {
        console.log(data);
        let markers = [];

        var uluru = { lat: 51.643173, lng: 0.050168 };
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: uluru
        });

        let markerData = data.result;
        let infowindow = new google.maps.InfoWindow;

        for (let i in markerData) {
            console.log(markerData[i].latitude);
            var pos = new google.maps.LatLng(markerData[i].latitude, markerData[i].longitude);
            //When you call the function pass in the image URL
            createMarker(pos, markerData[i].title);
        }
    }

    //You need to pass the photo image URL INTO this function
    function createMarker(pos, t) {
        var marker = new google.maps.Marker({       
            position: pos, 
            map: map,  // google.maps.Map 
            title: t      
        }); 
        google.maps.event.addListener(marker, 'click', function() { 
            //Trigger a Modal Window here showing the photo
            alert("I am marker " + marker.title); 
        }); 
        return marker;  
    }

});

