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
                    </table>
                </div>
            </>
        )
    }
}



export default Consulta;