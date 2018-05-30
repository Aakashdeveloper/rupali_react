import React,{Component} from 'react';

/*const Header = () =>{
    return <h3>Header</h3>
}*/

class Header extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            title:'yes i m coming',
            keyword:''
        }
    }

    onLogoClick(){
        console.log(" logo clicked>>>>>>>")
    }

    inputChanges(event){
        this.setState({keyword:event.target.value})
    }
    render(){

        /*const styles ={
            header:{
                background:'#EE82EE'
            },
            logo:{
                textAlign:'center'
            }
        }*/

        return(
            <header>
                <div className="logo"
                onClick={this.onLogoClick()}>Logo</div>
                <center>
                    <input onChange={this.inputChanges.bind(this)}/>
                    <h3>{this.state.keyword}</h3>
                </center>
                <div>{this.state.title}</div>
            </header>
            
        )
    }
}

export default Header;