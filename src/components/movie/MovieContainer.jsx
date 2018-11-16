import React, { Component } from 'react';

// 导入路由组件
import { Route, Link } from 'react-router-dom';
// 导入ant-design组件
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;
// 导入自定义组件
import MovieList from '@/components/movie/MovieList.jsx';

class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <Layout style={{ padding: '24px 0', background: '#fff', height: '100%' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1"><Link to={`${this.props.match.url}/in_theaters/1`}>正在上映</Link></Menu.Item>
                        <Menu.Item key="2"><Link to={`${this.props.match.url}/coming_soon/1`}>即将上映</Link></Menu.Item>
                        <Menu.Item key="3"><Link to={`${this.props.match.url}/top250/1`}>Top250</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    {/*this.props.match.path == /movie/ */}
                    {/*<Route path={`${this.props.match.path}/:type/:page`} render={() => { return <div>{this.props.match.path}</div>}}></Route>*/}
                    <Route path={`${this.props.match.path}/:type/:page`} component={MovieList}></Route>
                </Content>
           </Layout>
         );
    }
}
 
export default MovieContainer;