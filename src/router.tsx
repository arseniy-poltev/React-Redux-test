import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./store";
import { ThingsPageContainer } from "./components/Things";
import { ThingPageContainer } from "./components/Thing";
import { ChildThingPageContainer } from "./components/ChildThing";

export const AppRouter: React.StatelessComponent<{}> = () => {
  let store = configureStore();

  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={ThingsPageContainer} />
          <Route exact path="/thing" component={ThingPageContainer} />
          <Route exact path="/thing/:thingID" component={ThingPageContainer} />
          <Route
            exact
            path="/thing/:thingID/child"
            component={ChildThingPageContainer}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
