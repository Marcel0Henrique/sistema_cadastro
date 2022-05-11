import React from "react";
import './Cadastro.css';
import ProdutoService from "../app/produtoService";


class Cadastro extends React.Component {
    state = {
        nome: '',
        codigo: '',
        descricao: '',
        preco: '',
        fornecedor: '',

        sucesso: false
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({
            [nomeDoCampo]: valor
        })
    }

    limparCampos = (event) => {
        console.log("teste")
        this.setState({
            nome: '',
            codigo: '',
            descricao: '',
            preco: '',
            fornecedor: '',
            sucesso: false
        })
    }

    onSubmit = (event) => {
        this.setState({ sucesso: true })
        const produto = {
            'nome': this.state.nome,
            'codigo': this.state.codigo,
            'descricao': this.state.descricao,
            'preco': this.state.preco,
            'fornecedor': this.state.fornecedor,
        }

        this.service.salvar(produto);
        this.limpaCampos()


    }



    constructor() {
        super()
        this.service = new ProdutoService();
    }

    render() {
        return (
            <div className="container space">




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
                                <div className="row">
                                    <div className="col">
                                        <label>Nome <span className='text-red'>*</span> </label>
                                        <input type="text" id='input_nome' name="nome" className="form-control" value={this.state.nome} onChange={this.onChange} required></input>
                                    </div>
                                    <div className="col">
                                        <label>Código <span className='text-red'>*</span> </label>
                                        <input type="number" id='input_codigo' name="codigo" className="form-control" value={this.state.codigo} onChange={this.onChange} required></input>
                                    </div>
                                </div>

                                <br></br>

                                <div className="form-group">
                                    <label>Descrição <span className='text-red'>*</span> </label>
                                    <textarea className="form-control text_area" name="descricao" id="textArea_descricao" rows="6" value={this.state.descricao} onChange={this.onChange} required></textarea>
                                </div>

                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <label>Preço <span className='text-red'>*</span> </label>
                                        <input type="number" id='input_preco' name="preco" className="form-control" value={this.state.preco} onChange={this.onChange} required></input>
                                    </div>
                                    <div className="col">
                                        <label>Fornecedor <span className='text-red'>*</span> </label>
                                        <input type="text" id='input_fornecedor' name="fornecedor" className="form-control" value={this.state.fornecedor} onChange={this.onChange} required></input>
                                    </div>
                                </div>

                                <br></br>


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
export default Cadastro;