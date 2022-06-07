import React from "react";
import './Cadastro.css';
import ProdutoService from "../app/produtoService";

import { withRouter } from 'react-router-dom';

class Cadastro extends React.Component {
    state = {
        nome: '',
        codigo: '',
        descricao: '',
        preco: '',
        fornecedor: '',

        sucesso: false
    }

    constructor() {
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({
            [nomeDoCampo]: valor
        })
    }

    onSubmit = (event) => {

        const produto = {
            'nome': this.state.nome,
            'codigo': this.state.codigo,
            'descricao': this.state.descricao,
            'preco': this.state.preco,
            'fornecedor': this.state.fornecedor,
        }

        try {
            this.setState({ sucesso: true })
            this.service.salvar(produto);
            this.limparCampos()

        } catch (error) {
            const errors = error.errors
            this.setState({ errors: errors })
        }
    }

    limparCampos = (event) => {
        this.setState({
            nome: '',
            codigo: '',
            descricao: '',
            preco: '',
            fornecedor: '',
            sucesso: false
        })
    }

    componentDidMount(){
        const codigo = this.props.match.params.codigo
        if(codigo){
            const resultado = this.service.obterProduto().filter( produto=> produto.codigo === codigo )

            if(resultado.length === 1){
                const produtoEncontrado = resultado[0]
                this.setState({ ...produtoEncontrado })
            }
        }
    }
   

    render() {
        return (
            <div className="container mt-5">




                <div className="card bg-info mb-3">
                    <div className="card-header text-white text-center">Cadastro de Produtos</div>
                    <div className="card-body bg-secondary text-black">

                        {
                            this.state.sucesso ? (
                                <div className="alert alert-dismissible alert-success">
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => { this.setState({ sucesso: false }) }}></button>

                                    <strong>O produto {this.state.nome} foi cadastrado com sucesso</strong>.
                                </div>
                            ) : (
                                <></>
                            )
                        }

                        <form>
                            <fieldset>
                                <div className="row mb-5 mt-3">
                                    <div className="col">
                                        <label>Nome <span className='text-red'>*</span> </label>
                                        <input type="text" id='input_nome' name="nome" className="form-control" value={this.state.nome} onChange={this.onChange} required></input>
                                    </div>
                                    <div className="col">
                                        <label>Código <span className='text-red'>*</span> </label>
                                        <input type="number" id='input_codigo' name="codigo" className="form-control" value={this.state.codigo} onChange={this.onChange} required></input>
                                    </div>
                                </div>



                                <div className="form-group mb-5">
                                    <label>Descrição <span className='text-red'>*</span> </label>
                                    <textarea className="form-control text_area" name="descricao" id="textArea_descricao" rows="6" value={this.state.descricao} onChange={this.onChange} required></textarea>
                                </div>



                                <div className="row mb-5">
                                    <div className="col">
                                        <label>Preço <span className='text-red'>*</span> </label>
                                        <input type="number" id='input_preco' name="preco" className="form-control" value={this.state.preco} onChange={this.onChange} required></input>
                                    </div>
                                    <div className="col">
                                        <label>Fornecedor <span className='text-red'>*</span> </label>
                                        <input type="text" id='input_fornecedor' name="fornecedor" className="form-control" value={this.state.fornecedor} onChange={this.onChange} required></input>
                                    </div>
                                </div>


                                <div>
                                    <button type="button" className="btn btn-success btn_space" onClick={this.onSubmit} >Salvar</button>

                                    <button type="button" className="btn btn-info" onClick={this.limparCampos} >Limpar</button>
                                </div>

                            </fieldset>
                        </form>

                    </div>
                </div>

            </div>
        )
    }
}
export default withRouter(Cadastro);