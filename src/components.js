import './App.css';

/*
props :
    type
    placeholder
*/
const MyInput = (props)=>{
    return(
        <input type={props.type} placeholder={props.placeholder} />
    )
}

function log(value){
    console.log(value)
}


export const MyButton = (props)=>{
    log(props);
    return(
        <button style={props.style}>{props.children}</button>
    )
}

export const Card = (props)=>{

    let mainContainer = {
        height: "500px",
        width: "400px",
        backgroundColor: props.backgroundColor,
        borderRadius: "10px",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 300ms",
        margin: "5px"
    }

    let placeImg = {
        width: "100%",
        height: "85%",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px"
    }

    return(
        <div style={mainContainer}>
            <img src={props.url} alt="description" style={placeImg}/>
            <div className='info'>
                <p>{props.cardName}</p>
                <button onClick={props.onBtnClick} className="btn">See details</button>
            </div>
        </div>
    )
}

export default MyInput;