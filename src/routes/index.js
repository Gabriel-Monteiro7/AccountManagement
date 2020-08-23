import { Switch } from "react-router-dom";
import React from "react";
import Route from "./Route";
import Home from "pages/Home";
import Despesa from "pages/Despesa";
import Receita from "pages/Receita";

import Logon from "pages/Logon";
import Register from "pages/Register";

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/" component={Logon} exact>
        {props.children}
      </Route>
      <Route path="/home" component={Home} isPrivate>
        {props.children}
      </Route>
      <Route path="/despesas" component={Despesa} isPrivate>
        {props.children}
      </Route>
      <Route path="/receitas" component={Receita} isPrivate>
        {props.children}
      </Route>
      <Route path="/register" component={Register} isPrivate>
        {props.children}
      </Route>
    </Switch>
  );
}
