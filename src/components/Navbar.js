import React from "react";
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <Link className="navbar-brand" to='/home' >SC</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link className="nav-link" to='/home' >Home</Link>
                                
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='/cadastro' >Cadastro</Link>
                            </li>
                            <li class="nav-item">
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