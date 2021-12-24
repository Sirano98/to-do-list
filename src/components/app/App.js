import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../header/header";
import { MainPage } from "../pages/main-page/main-page";
import { SearchPage } from "../pages/search-page/search-page";

function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<MainPage />}
                    exatc
                />
                <Route
                    path="/search"
                    element={<SearchPage />}
                />
            </Routes>
        </Fragment>
    );
}

export default App;
