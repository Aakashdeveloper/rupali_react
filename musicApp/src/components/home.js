import React, {Component} from 'react';

import Banner from '../components/banner';
import ArtistList from './artistList'

const URL_ARTISTS = "http://localhost:7666/artists"

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTISTS,{
            method:'GET'
        }).then((response)=> response.json())
        .then((json)=>{
            this.setState({
                artists:json
            })
        })
    }

    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistList allArtists={this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home;