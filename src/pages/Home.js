import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../stores/counter"

export const Home = (props) => {
    const currentCount = useSelector(state => state.counterReducer.count);
    const dispatcher = useDispatch()
    return (
        <div>
            <br/><br/><br/>
            <div>
                <p>{currentCount}</p>
                <button onClick={()=>{dispatcher(increment())}}>Increment</button>
                <button onClick={()=>{dispatcher(decrement(2))}}>Decrement</button>
            </div>
        </div>

    )
}