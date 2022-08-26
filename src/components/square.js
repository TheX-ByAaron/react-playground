
export const Square = (props) => {
    let squareColor; 

    switch(props.player){
        case "1" : {
            squareColor = "greenYellow";
            break;
        }

        case "2" : {
            squareColor = "red";
            break;
        }

        default : {
            squareColor = "whitesmoke";
            break;
        }
    }


    return(
        <div className="Square" 
            style={{backgroundColor: squareColor}}
            onClick={props.onPlayerClick}>

        </div>
    )
}