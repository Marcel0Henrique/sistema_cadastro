import React from "react";
import './Cadastro.css';

function salvar() {

    let nome = document.getElementById('input_nome').value;
    let codigo = document.getElementById('input_codigo').value;
    let descricao = document.getElementById('textArea_descricao').value;
    let preco = document.getElementById('input_preco').value;
    let fornecedor = document.getElementById('input_fornecedor').value;

    if (nome === '' || codigo === '' || descricao === '' || preco === '' || fornecedor === '') {

        alert('Favor preencher todos os campos!');

    } else {
        let produto = { 'nome': nome, 'codigo': codigo, 'descricao': descricao, 'preco': preco, 'fornecedor': fornecedor };
        localStorage.setItem(localStorage.length, JSON.stringify(produto));

        limpar();
    }
}

function limpar() {
    document.getElementById('input_nome').value = null;
    document.getElementById('input_codigo').value = '';
    document.getElementById('textArea_descricao').value = '';
    document.getElementById('input_preco').value = '';
    document.getElementById('input_fornecedor').value = '';
}




class Cadastro extends React.Component {
    render() {
        return (
            <div className="container space">

                <div class="card bg-info mb-3">
                    <div class="card-header text-white text-center">Cadastro de Produtos</div>
                    <div class="card-body bg-secondary text-black">

                        <form>
                            <fieldset>
                                <div class="row">
                                    <div class="col">
                                        <label>Nome <span class='text-red'>*</span> </label>
                                        <input type="text" id='input_nome' class="form-control" required></input>
                                    </div>
                                    <div class="col">
                                        <label>Código <span class='text-red'>*</span> </label>
                                        <input type="number" id='input_codigo' class="form-control" required></input>
                                    </div>
                                </div>

                                <br></br>

                                <div class="form-group">
                                    <label>Descrição <span class='text-red'>*</span> </label>
                                    <textarea class="form-control text_area" id="textArea_descricao" rows="6" required></textarea>
                                </div>

                                <br></br>

                                <div class="row">
                                    <div class="col">
                                        <label>Preço <span class='text-red'>*</span> </label>
                                        <input type="number" id='input_preco' class="form-control" required></input>
                                    </div>
                                    <div class="col">
                                        <label>Fornecedor <span class='text-red'>*</span> </label>
                                        <input type="text" id='input_fornecedor' class="form-control" required></input>
                                    </div>
                                </div>

                                <br></br>


                                <div>
                                    <button type="button" class="btn btn-success btn_space" onClick={salvar}>Salvar</button>

                                    <button type="button" class="btn btn-info" onClick={limpar} >Limpar</button>
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