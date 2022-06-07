import React from "react";
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/home' >SC</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/home' >Home</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/cadastro' >Cadastro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/consulta' >Consulta</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>


        )
    }
}

export default Navbar;