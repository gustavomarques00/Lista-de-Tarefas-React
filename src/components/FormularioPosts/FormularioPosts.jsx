import React, { Component } from "react";
import "./Estilo.css";

class FormularioPosts extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handlerMudancaTitulo(evento) {
    this.titulo = evento.target.value;
  }

  _handlerMudancaPost(evento) {
    this.texto = evento.target.value;
  }

  _criarPost(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarPost(this.titulo, this.texto);
  }

  render() {
    return (
      <form onSubmit={this._criarPost.bind(this)} className="FormularioPosts">
        <h2 className="FormularioPosts_TituloPrincipal">
          Bem-vindo ao Sistema de Posts
        </h2>
        <div className="FormularioPosts_Div">
          <label htmlFor="tituloPost">Título</label>
          <input
            id="tituloPost"
            className="FormularioPosts_TituloPost"
            type="text"
            onChange={this._handlerMudancaTitulo.bind(this)}
          ></input>
        </div>

        <div className="FormularioPosts_Div">
          <label htmlFor="post">Post</label>
          <textarea
            id="post"
            rows="15"
            className="FormularioPosts_Post"
            onChange={this._handlerMudancaPost.bind(this)}
          ></textarea>
        </div>

        <div className="FormularioPosts_DivBotao">
          <button className="FormularioPosts_Botao">Postar</button>
        </div>
      </form>
    );
  }
}

export default FormularioPosts;
