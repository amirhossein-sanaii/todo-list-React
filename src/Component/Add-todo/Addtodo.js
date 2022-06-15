
import './Add-todo.css'
const Addtodo = (props)=>{
    return(
        <>
        <div className="Add-todo">
            <form onSubmit={props.addDatatodo}>
                <textarea name='textarea' className="input-add-todo" placeholder="Add Todo ..."/>
                <br/>
                <button type='submit'  className="btn-add">Add</button>
            </form>
        </div>
        </>
    )
}

export default Addtodo