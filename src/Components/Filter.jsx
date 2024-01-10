import { movie } from '../Data/Movie'
import MovieCard from './MovieCard'
import { useState } from 'react'
import React from 'react'
import { Navbar, Container, Form, Button, Card } from 'react-bootstrap'

function Filter() {
    const [filteredMovies, setFilteredMovies] = useState(movie)

    const searchItem = (e) => {
        const search = e.target.value.toLowerCase()

        const filtered = movie.filter(
            (i) =>
                i.title.toLowerCase().includes(search) ||
                i.rating.toString().includes(search)
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
            <div style={{ display: 'flex', marginTop: 90, width: '100%' }}>
                {!filteredMovies.length ? (
                    <Card
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
                    </Card>
                ) : (
                    filteredMovies.map((movieCard, index) => (
                        <MovieCard key={index} {...movieCard} />
                    ))
                )}
            </div>
        </div>
    )
}

export default Filter
