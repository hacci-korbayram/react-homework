import React, { Component } from "react";
import "./style.css";


const NEW_URL = 
"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2db7c8db36f94deca2746e6693821b1f";


class NewPage extends Component{
    constructor(props){
        super(props);

        this.state={
            newData: [],
        };
    }

    componentDidMount(){
        fetch(NEW_URL)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            this.setState({
            newData: data.articles,
        });
    });
}

renderNewData = () =>{
    return (
        <div className="card-wrapper">
            {this.state.newData.map((article)=>(
                <div className="card" key={article.url}>
                    <h4>{article.title}</h4>
                    <h5>{article.content}</h5>
                    <h3>{article.author}</h3>
                    <p>Published on: {article.publishedAt}</p>
                    <img src={article.urlToImage} alt="img-new"/>
                </div>
            ))}
        </div>
    );
};

        render(){
            return <div className="card-container">{this.renderNewData()}</div>;
        }
}

export default NewPage;