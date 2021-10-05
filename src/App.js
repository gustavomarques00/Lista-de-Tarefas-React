import React, { Component } from "react";
import FormularioPosts from "./components/FormularioPosts";
import ListaDePosts from "./components/ListaDePosts";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      posts: []
    };
  }

  criarPost(titulo, texto){
    const novoPost = {titulo,texto};
    const novoArrayPosts = [...this.state.posts,novoPost];
    const novoEstado = {
      posts: novoArrayPosts
    }
    this.setState(novoEstado)
  }

  deletarPost(index){
    let arrayPosts = this.state.posts;
    arrayPosts.splice(index,1);
    this.setState({
      posts: arrayPosts
    })
    console.log("Index deletado:" + index);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioPosts criarPost={this.criarPost.bind(this)} />
        <ListaDePosts deletarPost={this.deletarPost.bind(this)} posts={this.state.posts}/>
      </section>
    );
  }
}

export default App;
