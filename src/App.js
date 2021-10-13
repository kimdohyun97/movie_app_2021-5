import React from "react"
import axios from "axios"
import Movie from "./Moive"

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
        console.log(movies);
        this.setState({movies, isLoading: false})
    }

    componentDidMount() {
        this.getMovies()
    }

    render() {
        const { isLoading, movies } = this.state
        return(
            <section>
                { isLoading ? (
                    <div>
                        <span>Loading...</span>
                    </div>
                ) : (
                  <div>
                     {
                        movies.map((movie) => {
                        console.log(movie)
                         return (
                            <Movie 
                            key = {movie.id}
                            id = {movie.id}
                            year = {movie.year}
                            title = {movie.title}
                            summary = {movie.summary}
                            poster = {movie.poster}
                            /> 
                         )})} 
                  </div>    
                )}
                </section>
                )
            }
}

export default App