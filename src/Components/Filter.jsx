// import { movie } from '../Data/Movie'
import MovieCard from './MovieCard'
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Form, Button, Card} from 'react-bootstrap';
import { searchItem } from '../Functions/SearchItem';

function Filter() {
    const API = 'https://api.themoviedb.org/3/movie/popular?api_key=be5b5b951aea3a7b6afe09c7d7c947b0';
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState(movies)

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results)
                setMovies(data.results)
                setFilteredMovies(data.results);
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            });
    }, [API])
    const searchItem = (e) => {
        const search = e.target.value.toLowerCase()

        const filtered = movies.filter(
            (i) =>
                i.original_title.toLowerCase().includes(search) ||
                i.vote_average.toString().includes(search)
        )

        setFilteredMovies(filtered)
    }

    
    return (
        <div>
            <Navbar
                expand="lg"
                bg="dark"
                data-bs-theme="dark"
                sticky="top"
                style={{ position: 'fixed', width: '100%' }}
            >
                <Container fluid>
                    <Navbar.Brand href="#">Free Movies</Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="...input search here"
                            className="me-2"
                            aria-label="Search"
                            onChange={searchItem}
                        />
                    </Form>
                </Container>
            </Navbar>
      
                {!filteredMovies.length ? (
                    <div style={{marginTop:'10vw'}}><Card
                    style={{
                        width: '20rem',
                        textAlign: 'center',
                        backgroundColor: '#FF6FC0',
                        padding: 15,
                        margin: 'auto',
                    }}
                >
                    <h2>Movie not found 🥲</h2>
                    <Button style={{ margin: 'auto' }}>Add movie</Button>
                </Card></div>
                ) : (
                    <div style={{backgroundColor:'#A7CDC9', width:'max-content', paddingTop:8}}>
                    <h1 style={{marginTop:'8vh'}}>Popular Movies</h1>
                    <div style={{ display: 'flex', marginTop: 15 }}>
                    {filteredMovies.map((movieCard) => (
                        <MovieCard key={movieCard.id} {...movieCard} />
                    ))}
                    </div>
                    </div>
                )}
            </div>
        
    )
}

export default Filter
