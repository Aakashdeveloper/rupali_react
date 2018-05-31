import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json'

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keywords){
       let filtered = this.state.news.filter((items) => {
           return items.title.indexOf(keywords)>=0;
       })
       
       this.setState({filtered:filtered})
    }
    render(){
        return(
            <div>
                <Header  newsSearch = {(data) => this.filterNews(data)}/>
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }
} 

ReactDOM.render(<App/>,document.getElementById('root'))




/*

function add(a,b){
    return a+b
}

var add = (a,b) => {return a+b}

class
function
*/