import React, { Component } from 'react';
// 导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom';
// 导入ant-design组件
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
// 导入自定义组件
import MovieContainer from '@/components/movie/MovieContainer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HashRouter>
                <Layout className="layout" style={{height: "100%"}}>
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1"><Link to="/home">首页</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/movie">电影</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/about">关于</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', height: '100%'}}>
                        <Route path="/home" render={({match}) => <h3>{match.path.split("/")[1]}</h3>}></Route>
                        {/*<Route path="/movie" render={({match}) => <h3>{match.path.split("/")[1]}</h3>}></Route>*/}
                        <Route path="/movie" component={MovieContainer}></Route>
                        <Route path="/about" render={({match}) => <h3>{match.path.split("/")[1]}</h3>}></Route>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        movies ©2018 Created by To2bage
                    </Footer>
                </Layout>
            </HashRouter>
         );
    }
}
 
export default App;