export default class ArrayDePosts{
    constructor(){
        this.posts = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    deinscrever(func){
        this._inscritos = this._inscritos.filter(f => f!== func)    
    }

    notificar(){
        this._inscritos.forEach(func =>{
            func(this.posts);
            console.log("Entreii")
        })
    }

    adicionarPost(titulo, texto){
        const novoPost = new Post(titulo,texto);
        this.posts.push(novoPost)
        this.notificar()
    }

    apagarPost(index){
        this.posts.splice(index,1)
        this.notificar()
    }
}

class Post{
    constructor(titulo,texto){
        this.titulo = titulo;
        this.texto = texto;
    }
}