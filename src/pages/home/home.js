import React from "react";
import TelaInicial from "../tela-inicial/TelaInicial";
import TelaServicos from "../tela-servicos/TelaServicos";
import TelaDetalhe from "../tela-detalhe/TelaDetalhe";
import TelaCarrinho from "../tela-carrinho/TelaCarrinho";
import TelaCadastro from "../tela-cadastro/TelaCadastro"
export default class Home extends React.Component {

  state = {
    paginaAtual: "tela-inicial"
  }

  procuraPagina = () => {
    switch (this.state.paginaAtual) {
      case "tela-inicial":
        return <TelaInicial
          goToTelaCadastro={this.goToTelaCadastro}
          goToTelaServicos={this.goToTelaServicos}
          goToTelaCarrinho={this.goToTelaCarrinho}
        />

      case "tela-cadastro":
        return <TelaCadastro
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaInicial}
        />


      case "tela-servicos":
        return <TelaServicos
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaCarrinho}
          goToTelaDetalhe={this.goToTelaDetalhe}
        />

      case "tela-detalhe":
        return <TelaDetalhe
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaCarrinho}
        />

      case "tela-carrinho":
        return <TelaCarrinho />

      default:
        return "Erro ao Encontrar pagina"

    }
  }

  goToTelaInicial = () => {
    this.setState({ paginaAtual: "tela-inicial" })
  }

  goToTelaCadastro = () => {
    this.setState({ paginaAtual: "tela-cadastro" })
  }

  goToTelaServicos = () => {
    this.setState({ paginaAtual: "tela-servicos" })
  }

  goToTelaDetalhe = () => {
    this.setState({ paginaAtual: "tela-detalhe" })
  }

  goToTelaCarrinho = () => {
    this.setState({ paginaAtual: "tela-carrinho" })
  }

  render() {

    return (

      <div>

        {this.procuraPagina()}
      </div>
    );

  }

}