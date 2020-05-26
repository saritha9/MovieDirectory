import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


const MovieDir = () => {

    const [title, setTitle] = useState(""); 
    const [rate, setRate] = useState("");
    const [duration, setDuration] = useState("");


    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:9011/api/movie/create', {
            title,
            rate,
            duration
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            setTitle("");
            setRate("");
            setDuration("");
            navigate("/");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input required type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Rate</label><br/>
                <input required type="number" value={rate} onChange = {(e)=>setRate(e.target.value)}/>
            </p>
            <p>
                <label>Duration</label><br/>
                <input required type="text" value={duration} onChange = {(e)=>setDuration(e.target.value)}/>
            </p>
            <button className="submitbutt" type="submit">submit this movie</button>
        </form>
    )
}

export default MovieDir;
