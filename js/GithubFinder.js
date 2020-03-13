// let form = document.getElementById("form");
// form.addEventListener("keyup", e => {
//   e.preventDefault();
//   let searchText = document.getElementById("search").value;
//   getMovies(searchText);
// });

// function getMovies(searchText) {
//   let imdbApiUrl = `http://www.omdbapi.com/?s=${searchText}&apikey=f056e2f7`;
//   window
//     .fetch(imdbApiUrl)
//     .then(data => {
//       data
//         .json()
//         .then(movies => {
//           MovieData = movies.Search;
//           let output = "";
//           for (let movie of MovieData) {
//             console.log(movie);
//             output += `
//             <div class="card"">
//               <img src="${movie.Poster}" class="card-img-top" alt="...">
//               <div class="card-body">
//                 <h5 class="card-title">${movie.Title}</h5>
                
//                 <p class="card-text">
//                 <span class="badge badge-danger float-right">${movie.imdbID}</span>
//                 <span class="badge badge-primary">${movie.Year}</span>
//                 </p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//             `;
//             document.getElementById("template").innerHTML = output;
//           }
//         })
//         .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));
// } //api .......




//--------------------------------GITHUB FINDER----------------------

let input =document.getElementById("search");

input.addEventListener("keyup",e=>{
  let searchText=e.target.value;
  getGithubProfile(searchText);
});

async function getGithubProfile(searchText){
  let client_id="9c6510f920586a2a4903";
  let client_secret="b73775de1ef28245df43313c3a3f04e4cf625522";
  let githubUrl=`https://api.github.com/users/${searchText}?client_id=${client_id}&client_secret${client_secret}`;
  let res= await window.fetch(githubUrl).catch(err=>console.log(err));

  let Data=await res.json().catch(err=>console.log(err));
  console.log(Data);

  document.getElementById("template").innerHTML=`
 <div class="container">
  <div class="row">
  <div class="col-md-3">
  <img src="${Data.avatar_url}"/>
  <h1 class="display-4 font-weight-bold">${Data.login}</h1>

  </div>
   <div class="col-md-9">
   <li class="list-group-item mt-2">${Data.name}</li>
   <li class="list-group-item mt-2"></li>
   </div>

  </div>
  </div>
  `
}


