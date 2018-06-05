import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Posts from './components/posts'
import Profile from './components/profile';
import PostsItems from './components/post_item';

class App extends Component{
    render(){
        return(
            <div>
                <h1>Home</h1>
                
            </div>
        )
    }
}


ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <a class="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                         
                        </ul>
                    </div>
                </nav>
                
               
                
                <hr/>
            </header>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/posts/:id" component={PostsItems}></Route>
        </div>
    </BrowserRouter>
    ,document.getElementById('root'))