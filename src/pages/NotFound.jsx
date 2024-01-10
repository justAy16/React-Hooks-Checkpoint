import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    return (
        <div style={{marginTop:'15%'}}>
            <Card
                style={{
                    width: '20rem',
                    textAlign: 'center',
                    backgroundColor: '#FF6FC0',
                    padding: 15,
                    margin: 'auto',
                }}
            >
                <h2>Page not found 🥲</h2>
                <Button onClick={() => {
                    navigate('/')
                }} style={{ margin: 'auto' }}>Go Home</Button>
            </Card>
            
        </div>
    )
}

export default NotFound
