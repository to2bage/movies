import React, { Component } from 'react';

// 导入跨域使用的第三方fetch组件
import fetchJSONP from 'fetch-jsonp';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nowPage: 1,
            pageSize: 12,

        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params);
        const url = `http://api.douban.com/v2/movie/${nextProps.match.params.type}?start=0&count=${this.state.pageSize}`;
        // console.log(url);
        fetchJSONP(url).then(resp => resp.json()).then(data => console.log(data));
    }

    render() { 
        return ( 
            <div>{this.props.match.params.type} --- {this.props.match.params.page}</div>
         );
    }
}
 
export default MovieList;