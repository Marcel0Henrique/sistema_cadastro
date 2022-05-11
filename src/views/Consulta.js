import React from 'react';



class Consulta extends React.Component {

    state = {
        produtos: []
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map(
                                    produto =>{
                                        return(
                                            <tr>
                                                <th>{produto.nome}</th>
                                                <th>{produto.codigo}</th>
                                                <th>{produto.descricao}</th>
                                                <th>{produto.preco}</th>
                                                <th>{produto.fornecedor}</th>
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



export default Consulta;