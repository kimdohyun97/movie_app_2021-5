import React from "react"
import axios from "axios"

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
        console.log(movies);
    }

    componentDidMount() {
        this.getMovies()
    }

    render() {
        const { isLoading } = this.state
        return(
            <div>
                {isLoading ? 'Loading...': '영화 데이터 출력'}
            </div>
        )
    }
}

export default App