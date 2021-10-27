import PropTypes from 'prop-types'
import "./Movie.css"

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className='movie'>
            <img src={poster} alt={title} title={title} />
            <div className='movie-data'>
                <h3 className='movie-title'>{title}</h3>
                <h5 className='movie-year'>{year}</h5>
                <p className='movie-genres'>
                    {genres.map((genre) => {
                        return (
                            <li className='movie-genre'>{genre} </li>
                        )
                    })}</p>
            </div>
        </div>
    )
}

Movie.propTypes = 
{
   year: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
   poster: PropTypes.string.isRequired,
   genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie