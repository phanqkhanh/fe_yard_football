import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/layout';
import { Fragment } from 'react';
import NotFound from '../NotFound';

function Authmiddleware({ user, listRoutes }) {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {listRoutes.map((route, index) => {
                        const Page = route.component;
                        const DefaultLayout = route.layout === null ? Fragment : Layout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Authmiddleware;
