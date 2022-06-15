import './Showtodo.css'
 
const Showtodo = (props)=>{
    // console.log(props.index);
    // console.log(props.remove);
    return(
        <>
        <div className='show-todo'>
            <p> {props.text}</p>
            <button onClick={props.remove} className='btn-remove'>Remove</button>
        </div>
        </>
    )
}

export default Showtodo