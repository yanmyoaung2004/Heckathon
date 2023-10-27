let searchlist = document.querySelector(".search");
let search = document.getElementsByClassName("search")[0];
let search_input = document.getElementById('search_input');

fetch(json_url)
.then(res => res.json())
.then(data => {
    data.forEach(ele => {
        searchlist.insertAdjacentHTML('beforeend', `
        <a href="#" class="card">
        <img src="${ele.sposter}" alt="${ele.name}">
        <div class="cont">
        <h3>${ele.name}</h3>
        <p>${ele.genre},${ele.type},${ele.date} <span>IMDB</span><i class="bi bi-star-fill"></i>${ele.imdb}</p>
        </div>
        </a>
        `)
    });
    // search filter 
    search_input.addEventListener("keyup",()=>{
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');
        for (let index = 0; index < a.length; index++) {
            let b = a[index].getElementsByClassName('cont')[0];
            let TextValue = b.textContent || b.innerText;
            if (TextValue.toUpperCase().indexOf(filter) > -1) {
                a[index].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            }else{
                a[index].style.display = "none";
            }
    
        }
    })
});
let engine = document.getElementById("seen");
document.getElementById("search_input").addEventListener("keyup", ()=>{
    engine.style.display = "block";
});


























// <a href="#" class="card">
// <img  src="${ele.sposter}" alt="${ele.name}">
// <div class="cont">
//     <h3>${ele.name}</h3>
//     <p>${ele.genre},${ele.type},${ele.date} <span>IMDB</span> <i class="bi bi-star-fill"></i> ${ele.imdb}</p>
// </div>
// </a>