import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'

const App = () => {
    return( <div>
                <Header/>
                <h1>This is first page</h1>
            </div>
    )
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