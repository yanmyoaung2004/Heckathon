let cards = document.querySelector(".movie_cards_container");
let json_url = "movie.json"
fetch(json_url)
.then(res => res.json())
.then(data => {
  data.forEach(ele => {
    cards.insertAdjacentHTML('beforeend',`<a href="index.html" class="movie_card"><img src="${ele.sposter}" alt="${ele.name}">
    <div class="movie_content">
      <h3>${ele.name}</h3>
      <p>${ele.genre}, ${ele.type}, ${ele.date}</p>
      <h6><span>IMDB</span>
        <i class="bi bi-star-fill"></i> 9.0</h6>
    </div></a>`)
  });
});
