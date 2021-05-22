import { Link } from 'react-router-dom';
import React from "react";


const Home = () => {
  return (
    <div className="Home">
        Home
        <br/>
        <br/>
        <Link to="/profile">Go to Profile List page</Link><br/>
    </div>
  );
}

export default Home;
