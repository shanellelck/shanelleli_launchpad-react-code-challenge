import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">HOME</Link>
            <ul>
            <li><Link to="/Universities">UNIVERSITIES</Link></li>
            <li><Link to="/PostalLookup">POSTAL LOOKUP</Link></li>
            </ul>
        </nav>
    );
}