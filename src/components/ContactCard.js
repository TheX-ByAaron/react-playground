

export const ContactCard = (props)=>{
    return (
        <div className="contact-container">
            <div className="inner1">
                <p>Info contacts</p>
                <a href="mailto:contact@autolib.dz">Contact@autolib.dz</a>
                <a href="tel:054404039404">05405049485</a>
                <a href="fb">Autolib fb</a>
                <a href="insta">Autolib twitter</a>
                <a href="twitter">{props.text}</a>
            </div>
            <div className="inner2">
                <input placeholder="Name" type="text"/>
                <input placeholder="Email" type="Email"/>
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </div>
        </div>
    )
}