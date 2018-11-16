import React, { Component } from 'react';
// 导入自定义组件
import MovieItem from '@/components/movie/MovieItem.jsx';
// 导入跨域使用的第三方fetch组件
import fetchJSONP from 'fetch-jsonp';
// 导入ant-design组件
import { Spin } from 'antd';
import { Pagination } from 'antd';


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nowPage: 1,     // 当前页数
            pageSize: 12,   // 每一页显示的数据数
            movies: [],
            isLoading: true,
            total: 0,       // 数据的总数
        }

        this.renderMovieInfo = this.renderMovieInfo.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params);
        const url = `http://api.douban.com/v2/movie/${nextProps.match.params.type}?start=0&count=${this.state.pageSize}`;
        // console.log(url);
        fetchJSONP(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                this.setState(() => {
                    // 获得数据后
                    return {
                        isLoading: false,    // 是否在转载状态设为false
                        movies: data.subjects,  // 当前页的电影信息的数组
                        total: data.total,      // 全部数据的总数, 不是单页的
                    }
                }, () => {
                    //this.renderMovieInfo();
                    // console.log(this.state.movies);
                })
            });
    }

    render() { 
        console.log("assert render()");
        return ( 
            <div>
                {this.renderMovieInfo()}
            </div>
         );
    }

    renderMovieInfo() {
        if (this.state.isLoading) {
            return <Spin size="large" />
        } else {
            return (
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {
                        this.state.movies.map((movie) => {
                            return <MovieItem {...movie} key={movie.id}></MovieItem>
                        })
                    }
                    <Pagination 
                        defaultCurrent={this.state.nowPage} 
                        total={this.state.total} 
                        pageSize={this.state.pageSize}
                    />
                </div>
            );
        }
    }
}
 
export default MovieList;