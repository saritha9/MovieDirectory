import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdateMovie = props => {

    const [title, setTitle] = useState(); 
    const [rate, setRate] = useState();
    const [duration, setDuration] = useState();


    useEffect(() => {
        axios.get('http://localhost:9011/api/movie/' + props.id)
            .then(res => {
            setTitle(res.data.title);
            setRate(res.data.rate);
            setDuration(res.data.duration)
        })
    }, [props.id])

    const UpdateMovie= e => {
        e.preventDefault();

        axios.put('http://localhost:9011/api/movie/update/' + props.id, {
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
        <form onSubmit={UpdateMovie}>
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
            <button className="submitbutt" type="submit">update this movie</button>
        </form>
    )
}

export default UpdateMovie;
