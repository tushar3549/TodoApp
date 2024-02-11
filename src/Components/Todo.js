import React from 'react'
import style from './todo.module.css'

function Todo(props) {
    const { title, desc } = props.todo;
    const { id } = props;

    // const {id} = props
    const handleClicked = (id) => {
        // alert(id);
        props.onRemoveTodo(id);
    }
    return (
        <article className={style.todo}>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <div>
                <button className={style.btn}>
                    <i className='fa fa-check-circle fa-2x'></i>
                </button>
            </div>

            <div>
                <button className={style.btn}>
                    <i className='fa fa-edit fa-2x'></i>
                </button>
            </div>

            <div>
                <button className={style.btn} onClick={() => {
                    handleClicked(id);
                }}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>

        </article>
    )
}

export default Todo



