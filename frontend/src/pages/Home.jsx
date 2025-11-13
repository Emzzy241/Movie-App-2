import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies) // taking the popular movies and putting them in the state.
            } catch (err) {
                setError("Failed to load movies...")
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return // we won't be able to search when already seacrhing something else
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null) // if we had an error before, we clear that error this time around.
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
        // setSearchQuery("-------")
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        )}


    </div>
}

export default Home