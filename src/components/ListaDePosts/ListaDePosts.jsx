import React, { Component } from "react";
import "./Estilo.css";
import CardPost from "../CardPost";

class ListaDePosts extends Component {

  constructor(){
    super()
    this.state = {posts:[]}
  }

  componentDidMount(){
    this.props.posts.inscrever(this._novoPosts.bind(this));
  }

  _novoPosts(posts){
    this.setState({...this.state, posts})
  }

  render() {
    return (
      <ul className="ListaDePosts">
        {this.state.posts.map((post, index) => {
          return (
            <div key={index} className="ListaDePosts_Div">
              <li className="ListaDePosts_Item">
                <CardPost
                  titulo={post.titulo}
                  texto={post.texto}
                  deletarPost={this.props.deletarPost} 
                  indice={index}
                />
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ListaDePosts;
