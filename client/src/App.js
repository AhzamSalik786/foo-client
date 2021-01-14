import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './Components/main';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
// import SearchBox from './Components/search';

function App() {
    return (
        <Provider store={store} >
            <div className="App">

                {/* Always shows a header, even in smaller screens. */}
                <div className="header" style={{ height: '750px', position: 'relative' }}>
                    <Layout fixedHeader>
                        <Header className="header-colors" title={<span><strong>The Food Rating App</strong></span>} scroll>
                            <Navigation>
                                <Link to="/login">Login</Link>
                                <Link to="/contect">Contect</Link>

                            </Navigation>
                        </Header>
                        <Drawer title="Title" style={{ height: '200px' }}>
                            <Navigation>
                                <Link to="/login">Login</Link>
                                <Link to="/contect">Contect</Link>

                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                            <Main />

                            {/* <Footers  className="footer-setting"/> */}

                        </Content>
                    </Layout>
                </div>



            </div>
        </Provider>
    );
}

export default App;
