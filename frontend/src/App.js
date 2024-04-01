import {Outlet} from "react-router-dom";

import './App.css';
import Header from "./component/Header/Header";
import {Provider} from "react-redux";
import Store from "./pages/Cart/Redux/Store";

function App() {
    return (
        <Provider store={Store}>
            <div>
                <Header/>
                <div>
                    <Outlet>
                    </Outlet>
                </div>
                {/*<Product/>*/}
            </div>
        </Provider>
    );
}

export default App;
