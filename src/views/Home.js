import React from "react";
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container text-center espacamento">
                <h1 className="text-color">Sistema de Cadastro</h1>
                <hr></hr>
                <p>Serviço de cadastro de produtos funcional, guarda as informações com localStorage <br></br>e gera uma tabela com as informações que foram salvas</p>
                <br></br>
                <p> <strong>Aluno:</strong> Marcelo Henrique <br></br> <strong>Curso:</strong> Analise e Desenvolvimento de Sistemas - <strong>3° Modulo</strong></p>
                <br></br>
                <button type="button" class="btn"> <Link className="btn btn-primary" to='/cadastro' > Iniciar</Link></button>
            </div>

        )
    }
}

export default Home;