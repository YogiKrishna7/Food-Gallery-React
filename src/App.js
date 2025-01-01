import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppComponent = () => {
    return (
        <div className="full-body">
            <Header />

            <Body />

            <Footer/>
        </div>
    );
};

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(<AppComponent />);
