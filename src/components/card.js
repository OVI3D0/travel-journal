import '../styles/card.css';

function Card(props) {
    return (
        <>
            <div className='travel-card row mt-5'>
                <div className='col-3 img-col rounded'>
                    <img src={props.imageUrl} />
                </div>
                <div className='col-9'>
                    <h4 className='d-inline pe-5'><i className="fa-solid fa-location-dot fa-xs"></i> {props.location}</h4><a href={props.googleMapsUrl} target={"_blank"} style={{color: '#918E9B'}}>View on Google Maps</a>
                    <h1 className='fw-bold mb-4'>{props.title}</h1>
                    <p className='fw-bold'>{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Card;