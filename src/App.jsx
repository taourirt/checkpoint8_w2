import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './Components/MovieCard'
import MovieList from './Components/MovieList'
import Filtre from './Components/Filtre'

function App() {
  const [filmTrouve, setFilmTrouve] = useState([]);

  const [film, setFilm] = useState([
    {title:"Hitch", description:"Film de divertissement", posterURL:"www.streaming/hitch", rating:4.7
},
    {title:"Blow", description:"Film de Mafia", posterURL:"www.streaming/blow", rating:4.8
},
    {title:"House of Gucci", description:"Film issu d'une histoire vrai", posterURL:"www.streaming/houseofgucci", rating:4.2
},
    {title:"Godfather", description:"Film d'anthologie", posterURL:"www.streaming/godfather", rating:4.9
}
  ])
function searchItem(){

var userInput = document.getElementById('search').value
var movieTrouve = film.filter(video => video.title.includes(userInput))

console.log(movieTrouve)

setFilmTrouve(movieTrouve)

}
function searchDescription(){
  var rat = document.getElementById('recherche').value
var ratingTrouve = film.filter(classement => classement.description.includes(rat))

console.log(ratingTrouve)
setFilmTrouve(ratingTrouve)
}
function addItem(e){
  e.preventDefault();
  var title = e.target.title.value
  var description = e.target.description.value 
  var posterURL = e.target.posterURL.value
  var rating = e.target.rating.value

  var newFilm = {
    title,
    description,
    posterURL,
    rating
  }
  console.log(newFilm)
setFilm([...film, newFilm])
}

useEffect(() => {
  console.log(film);
}, [film])

  return (
    <div className="App">
      <MovieCard searchItem={searchItem} searchDescription={searchDescription}/>
      <MovieList  film={film} filmTrouve={filmTrouve}/>
      <Filtre addItem={addItem}/>
    </div>
  )
}

export default App
