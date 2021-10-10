import { BrowserRouter, Switch, Route } from "react-router-dom";
import Casamento from "../pages/Casamento";
import Formatura from "../pages/Formatura";
import Confraternizacao from "../pages/Confraternizacao";

import Home from "../pages/home";



export default function Routers(){


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/casamento">
                    <Casamento />
                </Route>
                <Route path="/formatura">
                    <Formatura />
                </Route>
                <Route path="/confraternizacao">
                    <Confraternizacao />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}