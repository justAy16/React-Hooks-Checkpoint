import { Card } from 'react-bootstrap'
// import Card from 'react-bootstrap/Card';

const MovieCard = ({ title, description, rating, posterUrl }) =>{
    return (
        <div >
        <Card class="snap-center ..." style={{width:'16rem', textAlign:'center', marginRight:8}}>
            <div style={{width:'13rem', height:'13rem', margin:'auto', position:'relative', paddingTop:8}}>
            <Card.Img variant="top" src={posterUrl} alt={title} style={{height:'100%', borderBottomRightRadius:'4%'}}  />
            <span style={{position:'absolute', bottom:0, right:0}} class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">⭐️{rating}</span>
            </div>
            <Card.Body style={{height:'11.5rem'}}>
                <Card.Title style={{height:'3rem'}}>{title}  </Card.Title>
                <Card.Text style={{lineHeight:1.1, fontSize:'small', fontWeight:'bold', }}>{description}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
};

MovieCard.defaultProps = {
    title: 'Coming soon',
    description: 'Its all about the struggle',
    rating: 10/10,
    posterUrl: "data:image/jpeg;base64,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"
}

export default MovieCard
