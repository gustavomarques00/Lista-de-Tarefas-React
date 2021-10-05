import React from "react";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardPost extends React.Component {

    apagar(){
        const indice = this.props.indice
        this.props.deletarPost(indice)
    }

  render() {
    return (
      <section className="CardPost">
        <header className="CardPost_Header">
          <h3 className="CardPost_Titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)} />
        </header>
        <p className="CardPost_Conteudo">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardPost;
