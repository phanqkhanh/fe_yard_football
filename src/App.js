import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ownerRoutes, adminRoutes, staffRoutes } from './routes';
import Layout from './components/Layout/layout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {ownerRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
