import React from 'react';
import ProdutoService from '../app/produtoService';
import {withRouter} from 'react-router-dom';



class Consulta extends React.Component {

    state = {
        produtos: []
    }

    constructor() {
        super()
        this.service = new ProdutoService();
    }

    preparaEditar = (codigo) => {
        this.props.history.push(`/cadastro/${codigo}`)
    }

    componentDidMount() {
        const produtos = this.service.obterProduto();
        this.setState({ produtos })
    }

    

    render() {
        return (
            <>
                <div className='container mt-5'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th scope='col'>Nome</th>
                                <th scope='col'>Código</th>
                                <th scope='col'>Descrição</th>
                                <th scope='col'>Preço</th>
                                <th scope='col'>Fornecedor</th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map(
                                    produto => {
                                        return (
                                            <tr>
                                                <th>{produto.nome}</th>
                                                <th>{produto.codigo}</th>
                                                <th>{produto.descricao}</th>
                                                <th>{produto.preco}</th>
                                                <th>{produto.fornecedor}</th>
                                                <th>                                                   
                                                        <button className='btn btn-outline-primary mr-2' onClick={() => this.preparaEditar(produto.codigo)}>Editar</button>
                                                        <button className='btn btn-outline-danger'>Remover</button>                                                   
                                                </th>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}



export default withRouter(Consulta);