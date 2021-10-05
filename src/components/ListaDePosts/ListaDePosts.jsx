import React, { Component } from "react";
import "./Estilo.css";
import CardPost from "../CardPost";

class ListaDePosts extends Component {

  render() {
    return (
      <ul className="ListaDePosts">
        {this.props.posts.map((post, index) => {
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
