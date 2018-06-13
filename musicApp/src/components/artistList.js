import React from 'react';
import { Link } from 'react-router-dom'

const ArtistsList = (props) => {
    console.log(props);

    const list = ({allArtists})=>{
        if(allArtists){
        return allArtists.map((item) => {

            const style={
                background:`url('/images/covers/${item.cover}.jpg') no-repeat`
            }

           return(
               <Link key={item.id} to={`/artist/${item.id}`} 
                className="artist_item"
                style={style}>
                </Link>
           )
            
        })
    }
    }

    return(
        <div className="artists_list">
            <h4>Artists List</h4>
            {list(props)}
        </div>
    )
}

export default ArtistsList;