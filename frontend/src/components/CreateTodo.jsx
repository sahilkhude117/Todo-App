/* eslint-disable no-unused-vars */
import { useState } from 'react'

export function CreateTodo() {
    //react-query
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}/><br /><br />
        <input type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }} /><br /><br />

        <button onClick={() =>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: setDescription
                }),
                headers: {
                    "Content-type":"application/json"
                }
            })
             .then(async function (res) {
                const json = await res.json();
                alert("Todo added")
             })
        }}>Add Todo</button>
    </div>
}