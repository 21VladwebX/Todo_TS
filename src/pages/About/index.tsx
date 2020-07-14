import React from "react";
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
    const history = useHistory();

    return(
        <>
            <h1 className="center">Its about page</h1>
            <button className="btn" onClick={()=>{history.push("/")}}>Go to todos page</button>
        </>
    )
}

export default AboutPage;
