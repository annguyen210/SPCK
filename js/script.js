 
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
        title: "4. Tà Chú Cấm - Thái Lan",  
        year: 2023,  
        img: "https://s1.dmcdn.net/v/Wl7q81d5-Grhbo2l0/x1080",   
    },  
    {  
        title: "Spider-Man: No Way Home",  
        year: 2021,  
        img: "https://m.yodycdn.com/blog/phim-chieu-rap-2021-3.jpg",  
    },  
    {  
        title: "John Wick: Chapter 4",  
        year: 2023,  
        img: "https://i.ytimg.com/vi/qEVUtrk8_B4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBC_Qhq_jvQw3WIDhe33XNgQu48Fg",  
    },  
    {  
        title: "Top Gun: Maverick",  
        year: 2022,  
        img: "https://gamek.mediacdn.vn/133514250583805952/2022/5/19/photo-1-16529313524351305865351.jpg",  
    },  
    {  
        title: "The Invisible Man: Kẻ Vô Hình",  
        year: 2020,  
        img: "https://image.voh.com.vn/voh/Image/2022/03/14/2-The-Invisible-Man.jpg?t=o&w=768&q=85",  
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