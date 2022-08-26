
export const ImageCard = (props) => {
    return (
        <div className="image-card">
            <img src={props.url} alt="grid" className="image"/>
            <p>{props.title}</p>
        </div>
    )
}