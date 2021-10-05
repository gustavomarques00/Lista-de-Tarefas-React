import React from "react";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
import { ReactComponent as LikeSVG } from "../../assets/img/like.svg";
import { ReactComponent as LoveSVG } from "../../assets/img/love.svg";
import "./Estilo.css";

class CardPost extends React.Component {
  apagar() {
    const indice = this.props.indice;
    this.props.deletarPost(indice);
  }

  render() {
    return (
      <section className="CardPost">
        <h3 className="CardPost_Titulo">{this.props.titulo}</h3>
        <p className="CardPost_Conteudo">{this.props.texto}</p>
        <div className="CardPost_Reacoes">
          <div className="CardPost_IconesGrupo">
            <LikeSVG className="CardPost_Icones" />
          </div>
          <div className="CardPost_IconesGrupo">
            <LoveSVG className="CardPost_Icones" />
          </div>
          <div className="CardPost_IconesGrupoDiferente">
            <DeleteSVG
              className="CardPost_Icones "
              onClick={this.apagar.bind(this)}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default CardPost;
