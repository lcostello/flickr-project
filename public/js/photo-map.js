$(() => {

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
        
        var uluru = { lat: 51.643173, lng: 0.050168};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: uluru
        });
        // let markerData = data.result;
        // for (let i in markerData) {
        //     console.log(markerData[i].latitude);
        //     var pos = new google.maps.LatLng(markerData[i].latitude, markerData[i].longitude);
        //     markers [i] = new google.maps.Marker({
        //         position: pos,
        //         map: map
        //     });

        // }
    }

});

