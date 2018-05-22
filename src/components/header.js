import React,{Component} from 'react';

/*const Header = () =>{
    return <h3>Header</h3>
}*/

class Header extends React.Component{

    onLogoClick(){
        console.log(" logo clicked>>>>>>>")
    }

    inputChanges(event){
        console.log(event.target.value)
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
                    <input onChange={this.inputChanges}/>
                </center>
            </header>
            
        )
    }
}

export default Header;