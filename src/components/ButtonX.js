
export const ButtonX = (props)=>{
    return (
        <button onClick={props.onButtonClick} className="button">
            {props.children}
        </button>
    )
}