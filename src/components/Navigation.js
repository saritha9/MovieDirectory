import React from "react";
import { Link } from '@reach/router';

const Navigation = () => {

    return(
        <>
        <div className="mynavi">
            <Link to="/">all movies</Link>
            &nbsp;|&nbsp;
            <Link to="/new">create new movie</Link>
        </div>
        <br/>
        <hr/>
        </>
    );
}

export default Navigation;