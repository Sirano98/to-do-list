import React, { Fragment } from "react";
import { Alert } from "../alert/alert";
import { Header } from "../header/header";
import { MainPage } from "../main-page/main-page";

function App() {
    return (
        <Fragment>
            <Header />
            <Alert />
            <MainPage />
        </Fragment>
    );
}

export default App;
