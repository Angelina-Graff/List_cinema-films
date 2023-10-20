document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var query = document.getElementById('searchInput').value;
    searchMovies(query, 1);
});

function searchMovies(query, page) {
    var apiKey = 'a23d3dbb2b26dca1cb19cd0d50f22767';
    var apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}&language=fr-FR`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results);
            displayPagination(data.total_pages, data.page, query);
        })
        .catch(error => console.error('Error:', error));
}

function displayMovies(movies) {
    var moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';

    var rowDiv;
    movies.forEach(function (movie, index) {
        if (index % 3 === 0) {

            rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            moviesContainer.appendChild(rowDiv);
        }
        cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        moviesContainer.appendChild(cardDiv);

        var movieDiv = document.createElement('div');
        movieDiv.className = 'col-3';
        movieDiv.innerHTML = `
            <h2 class="card-title">${movie.title}</h2>
            <p class="overview">${movie.overview}</p>
            <button class="expand-btn mb-2">Rouler</button>
            <img class="img_film" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        `;

        rowDiv.appendChild(movieDiv);
    });
}


function displayPagination(totalPages, currentPage, query) {
    var paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    var visiblePages = 10;
    var maxVisiblePages = 7;
    var ellipsis = false;

    for (var i = 1; i <= totalPages; i++) {
        if (i <= visiblePages || i === totalPages || (i >= currentPage - Math.floor(maxVisiblePages / 2) && i <= currentPage + Math.floor(maxVisiblePages / 2))) {
            var pageLink = document.createElement('a');
            pageLink.className = 'pagination-btn';
            pageLink.href = '#';
            pageLink.textContent = i;

            pageLink.addEventListener('click', function (event) {
                event.preventDefault();
                searchMovies(query, this.textContent);
            });

            if (i == currentPage) {
                pageLink.style.fontWeight = 'bold';
            }

            paginationContainer.appendChild(pageLink);
        } else {
            if (!ellipsis) {
                var ellipsisSpan = document.createElement('span');
                ellipsisSpan.textContent = '...';
                paginationContainer.appendChild(ellipsisSpan);
                ellipsis = true;
            }
        }
    }
}


document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('expand-btn')) {
        var overview = event.target.previousElementSibling;
        if (overview.style.maxHeight) {
            overview.style.maxHeight = null;
            overview.style.overflow = 'hidden';
            event.target.textContent = 'Rouler';
        } else {
            overview.style.maxHeight = '100%';
            overview.style.overflow = 'visible';
            event.target.textContent = 'Déployer';
        }
    }
});

