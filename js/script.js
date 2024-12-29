 
const movies = [  
    {  
        title: "1. Monster Hunter – Thợ săn quái vật ",  
        year: 2020,  
        img: "https://i.ytimg.com/vi/puQyZsaTtqY/sddefault.jpg",  
   
    },  
    {  
        title: "2. Hành tinh cát – Dune",  
        year: 2021,  
        img: "https://static2.vieon.vn/vieplay-image/thumbnail_big_v4/2022/03/29/pviu1fy9_1920x1080xucat_1267_712.jpg",
    },  
    {  
        title: "3. Black Panther: Wakanda Forever",  
        year: 2022,  
        img: "https://www.programme-tv.net/imgre/fit/http.3A.2F.2Fprmd.2Etmsimg.2Ecom.2Fassets.2Fp18958283_v_h8_ap.2Ejpg/630x355/quality/80/black-panther-wakanda-forever.jpg", 
       
    },  
    {  
        title: "Phim 4",  
        year: 2023,  
        img: "https://via.placeholder.com/150",   
    },  
    {  
        title: "Phim 5",  
        year: 2021,  
        img: "https://via.placeholder.com/150",  
    },  
    {  
        title: "Phim 6",  
        year: 2022,  
        img: "https://via.placeholder.com/150",  
    },  
    {  
        title: "Phim 7",  
        year: 2023,  
        img: "https://via.placeholder.com/150",  
    },  
    {  
        title: "Phim 8",  
        year: 2020,  
        img: "https://via.placeholder.com/150",  
    },  
];  

function displayMovies(movies) {  
    const movieList = document.getElementById("movie-list");  
    movieList.innerHTML = "";  
    movies.forEach(movie => {  
        const movieDiv = document.createElement("div");  
        movieDiv.classList.add("movie");  
        movieDiv.innerHTML = `  
            <img src="${movie.img}" alt="${movie.title}">  
            <h2>${movie.title}</h2>  
            <p>Năm: ${movie.year}</p>  
            <button onclick="showDetails('${encodeURIComponent(movie.title)}')">Xem chi tiết</button>  
        `;  
        movieList.appendChild(movieDiv);  
    });  
}  

function showDetails(title) {  
    window.location.href = `detail.html?title=${title}`;  
}  

document.getElementById("search").addEventListener("input", function() {  
    const query = this.value.toLowerCase();  
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));  
    displayMovies(filteredMovies);  
});  

// Hiển thị tất cả phim ban đầu  
displayMovies(movies);