import React from 'react';
import './Consulta.css';


class Consulta extends React.Component {
    render() {
        var heading = ['Nome', 'Código', 'Descrição', 'Preço', 'Fornecedor'];

        let body =[];

        for (let i = 0; i < localStorage.length; i++) {
            var produto = JSON.parse(localStorage.getItem(i));
            body.push([produto.nome, produto.codigo, produto.descricao, produto.preco, produto.fornecedor])
            console.log(i);

        }

        
        return (
            <div >
                <Table heading={heading} body={body} />,
            </div>
        );
    }
}

class Table extends React.Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <div className='container space'>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            {heading.map(head => <th>{head}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map(row => <TableRow row={row} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}

export default Consulta;