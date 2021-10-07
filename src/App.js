import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import FormularioPosts from "./components/FormularioPosts";
import ListaDePosts from "./components/ListaDePosts";
import PaginaLogin from "./components/PaginaLogin";
import PaginaCadastro from "./components/PaginaCadastro";
import RecuperarSenha from "./components/RecuperarSenha";
import ArrayDePosts from "./dados/ArrayDePosts";
class App extends Component {
  constructor() {
    super();
    this.posts = new ArrayDePosts();
  }

  render() {
    return (
      <section className="conteudo">

        
        <FormularioPosts
          criarPost={this.posts.adicionarPost.bind(this.posts)}
        />
        <ListaDePosts deletarPost={this.posts.apagarPost.bind(this.posts)} posts={this.posts} />
        {/*
        <PaginaCadastro />
        <PaginaLogin />
        <RecuperarSenha />*/}
      </section>
    );
  }
}

export default App;
