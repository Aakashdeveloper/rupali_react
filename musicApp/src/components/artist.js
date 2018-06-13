import React, {Component} from 'react';
import Header from './header'

const REQ_URL = 'http://localhost:7666/artists'
class Artist extends Component{

    constructor(props){
        super(props);

        this.state = {
            artist:''
        }
    }

    componentDidMount(){
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
            .then(response=>response.json())
            .then(json=>{
                this.setState({
                    artist:json
                })
            })
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="avatar">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg')no-repeat`}}></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artist;