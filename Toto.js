import React, { useState } from 'react';

function Toto(props) {

    const [task, setTask] = useState('');
    const [tasklist, setTasklist] = useState([]);

    function addtask() {
        setTasklist([...tasklist, task]);
    }

    function deletetask(index) {
      //  alert(index);
        var duparray = [...tasklist];
        duparray.splice(index,1);
        setTasklist(duparray);
    }

    const taskListContent = tasklist.map((task, index) => {

        return (
            <div>
                <b style={{margin:"20px",color:"green"}}>{task}</b> 
                <button onClick={() => deletetask(index)} style={{margin:"20px",color:"green"}}>Delete</button>
            </div>
        )
    })

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>React TODO List</h1>
                <input
                    type="text"
                    placeholder='Enter Task'
                    value={task}
                    onChange={(e) => { setTask(e.target.value) }}
                />
                <button onClick={addtask}>
                    ADD
                </button>
            </div>
            <br></br>
            <div style={{ textAlign: "center" }}>{taskListContent}</div>
        </>
    );
}

export default Toto;