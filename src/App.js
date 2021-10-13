import React from "react"
import axios from "axios"

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
        const { isLoading } = this.state
        return(
            <div>
                {isLoading ? 'Loading...': '영화 데이터 출력'}
            </div>
        )
    }
}

export default App