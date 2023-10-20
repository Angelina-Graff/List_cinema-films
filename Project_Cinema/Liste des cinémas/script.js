document.getElementById('get-location-btn').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch(`https://api-adresse.data.gouv.fr/search/?q=${latitude},${longitude}`)
                .then(response => response.json())
                .then(data => {
                    const firstResult = data.features[0];
                    if (firstResult) {
                        const address = firstResult.properties.label;
                        document.getElementById('address').value = address;
                    } else {
                        alert('Adresse introuvable.');
                    }
                })
                .catch(error => {
                    console.error('Erreur de requête à l\'API de localisation:', error);
                });
        }, function(error) {
            console.error('Erreur de localisation:', error);
        });
    } else {
        alert('La Géolocalisation n\'est pas prise en charge par votre navigateur.');
    }
});

document.getElementById('cinema-search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const address = document.getElementById('address').value;

    const apiKey = 'a23d3dbb2b26dca1cb19cd0d50f22767';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${address}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cinemaList = document.getElementById('cinema-list');
            cinemaList.innerHTML = '';

            if (data.results && data.results.length > 0) {
                data.results.forEach(cinema => {
                    const cinemaName = cinema.title;
                    const cinemaAddress = cinema.release_date;

                    const cinemaElement = document.createElement('div');
                    cinemaElement.innerHTML = `<strong>${cinemaName}</strong><br>${cinemaAddress}<br><br>`;
                    cinemaList.appendChild(cinemaElement);
                });
            } else {
                cinemaList.innerHTML = 'Cinémas introuvables.';
            }
        })
        .catch(error => {
            console.error('Erreur de requête API:', error);
        });
});
