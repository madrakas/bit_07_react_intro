import { useState } from 'react';
import style from './Todo.module.css';

export function Todo() {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);

    function updateText(event) {
        setText(event.target.value);
    }

    function addTask(event) {
        event.preventDefault();
        console.log('ADD TASK:', text );

        setText('');
        // setTasks([...tasks, text]);
        setTasks((prev) => [...prev, text]);
        // setTasks((prev) => prev + 1);
    }

    return (
        <div className={style.todo}>
            <form onSubmit={addTask} className={style.form}>
                <input value={text} type="text" onChange={updateText} className={style.input} />
            </form>
            <ul className={style.list}>
                {
                    tasks.length && tasks.map(task => (
                
                        <li key={task} className={style.task}>
                            <p className={style.text}>{task}</p>
                            <div className={style.actions}>
                                <button className={style.btn} type='button'>Veiksmas</button>
                            </div>
                        </li>
                    ))
                }
                {
                    !tasks.length && <div className={style.error}>Nėra užduočių - sukurk!</div>
                }
            </ul>
        </div>
    );
}