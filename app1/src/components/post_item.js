import React, {Component} from 'react';

class PostsItems extends Component{

    constructor(props){
        super(props);

    }

    render(){
        console.log(this.props)
        return(
            <div>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        PostsItems Page
                    </div>
                    <div class="panel-body">
                        Content come here >>>>>> {this.props.match.params.id}
                    </div>
                </div>
            </div>

        )
    }
}

export default PostsItems;