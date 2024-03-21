import {Outlet} from "react-router-dom";

import './App.css';
import Header from "./component/Header/Header";
import ListProduct from "./pages/Product/ListProduct";


function App() {
    return (
        <div>
            {/*<Header/>*/}
            {/*<div>*/}
            {/*    <Outlet>*/}
            {/*    </Outlet>*/}
            {/*</div>*/}
            <ListProduct/>
        </div>
    );
}

export default App;
