import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { movie } from '../Data/Movie'
import { useParams, useNavigate } from 'react-router-dom'

function TrailerPage() {
    const navi = useNavigate()
    const { title } = useParams()
    const trailer = movie.find((i) => i.title === title)

    return (
        <Card style={{backgroundColor:'#0F3230', color:'wheat', width:'80%', margin:'auto'}} className="text-center">
            <Card.Header>Trailer</Card.Header>
            <Card.Body>
                <Card.Title>{trailer.title}</Card.Title>
                <div>{trailer.description}</div>
                <iframe
                    style={{ margin: 'auto', marginTop: 15 }}
                    width="560"
                    height="315"
                    src={trailer.trailerLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <Button
                    onClick={() => {
                        navi('/')
                    }}
                    style={{ marginTop: 13 }}
                    variant="primary"
                >
                    Home
                </Button>
            </Card.Body>
        </Card>
    )
}

export default TrailerPage
