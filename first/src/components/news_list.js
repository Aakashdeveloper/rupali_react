import React from 'react';

const NewsList = (props) =>{
    console.log(props)

    const items = props.news.map((data)=>{
        return(
            <div>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    })

    return(
        <div>
            {items}
        </div>
    )
}

export default NewsList;