import {Outlet} from "react-router-dom";

import './App.css';
import Header from "./component/Header/Header";


function App() {
    return (
        <div>
            <Header/>
            <div>
                <Outlet>
                </Outlet>
            </div>
        </div>
    );
}

export default App;
