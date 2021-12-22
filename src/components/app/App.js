import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../header/header";
import { MainPage } from "../main-page/main-page";
import { Filter } from "../filter/filter";

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
                    path="/filter"
                    element={<Filter />}
                />
            </Routes>
        </Fragment>
    );
}

export default App;
