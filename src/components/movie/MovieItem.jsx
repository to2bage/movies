import React, { Component } from 'react';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <img src={this.props.images.small} />
                <h4>电影名称: {this.props.title}</h4>
                <h4>电影类型: {this.props.genres.join(", ")}</h4>
                <h4>上映年份: {this.props.year}年</h4>
            </div>
         );
    }
}
 
export default MovieItem;