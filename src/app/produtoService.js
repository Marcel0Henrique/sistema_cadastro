const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(errors) {
    this.errors = errors;
}

export default class ProdutoService {

    validar = (produto) => {
        const erros = []

        if (!produto.nome) {
            erros.push("O campo nome é obrigatorio")
        } if (!produto.codigo) {
            erros.push("O campo codigo é obrigatorio")
        } if (!produto.preco || produto.preco <= 0) {
            erros.push("O campo preco é obrigatorio")
        } if(!produto.fornecedor) {
            erros.push("O campo fornecedor é obrigatorio")
        } if(erros.length > 0) {
            throw new ErroValidacao(erros)
        }
    }

    obterProduto = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }

    obterIndex = (codigo) => {
        let index = null;
        this.obterProdutos().forEach( (produto, i) => {
            if(produto.codigo === codigo ){
                index = i;
            }
        })
        return index;
    }


    salvar = (produto) =>{
       
        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = []
        }else{
            produtos = JSON.parse(produtos)
        }

                     
        produtos.push(produto);  
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}