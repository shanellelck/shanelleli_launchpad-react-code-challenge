import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <ul>
            <li><Link to="/Universities">Universities</Link></li>
            <li><Link to="/PostalLookup">Postal Lookup</Link></li>
            </ul>
        </nav>
    );
}