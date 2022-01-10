export const ImageCard = (props) => {
    return (
        <div onClick={props.onClick}>
            <img src={props.src} alt={props.alt}></img>
            <div className='duration'>{props.duration}</div>
            <div className='details' data-testid="resolved">{props.firstname} {props.lastname}
                <div className='likes'>{props.likes} <span className='heart'>&#10084;</span></div></div>
        </div>
    )
};