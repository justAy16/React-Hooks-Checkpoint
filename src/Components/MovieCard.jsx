import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function MovieCard({ title, description, rating, posterUrl }) {

    return (
        <div >
        <Link to={`trailerPage/${title}`} style={{textDecoration:'none'}}>
        <Card className="snap-center ..." style={{width:'16rem', textAlign:'center', marginRight:8, backgroundColor:'wheat', }}>
            <div style={{width:'13rem', height:'13rem', margin:'auto', position:'relative', paddingTop:8}}>
            <Card.Img variant="top" src={posterUrl} alt={title} style={{height:'100%', borderBottomRightRadius:'4%'}}  />
            <span style={{position:'absolute', bottom:0, right:0}} class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">⭐️{rating}</span>
            </div>
            <Card.Body style={{height:'11.5rem'}}>
                <Card.Title style={{height:'3rem', fontFamily:'cursive', fontWeight:'bolder', fontSize:'larger'}}>{title}  </Card.Title>
                <Card.Text style={{lineHeight:1.1, fontSize:'small', fontWeight:'bold', }}>{description}</Card.Text>
            </Card.Body>
        </Card>
        </Link>
        </div>
    )

}

export default MovieCard
