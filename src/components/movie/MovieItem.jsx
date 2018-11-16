import React, { Component } from 'react';
// 导入自定义的样式表
import movieItemStyle from '@/css/movie/movie_item.styl';


class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={movieItemStyle.box}>
                <img src={this.props.images.small} style={{width: "100px", height: "140px", margin: "2px"}}/>
                <h5>电影名称: {this.props.title}</h5>
                <h5>电影类型: {this.props.genres.join(", ")}</h5>
                <h5>上映年份: {this.props.year}年</h5>
            </div>
         );
    }
}
 
export default MovieItem;