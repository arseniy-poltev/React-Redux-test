import * as React from "react";
import { Action } from "redux";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { withRouter } from "react-router-dom";
import { AppState } from "../../store";
import { addThingAction } from "../../store/things/actions";
import { Thing } from "../../store/things/model/thing";
import { ThingPage } from "./temple";

const mapStateToProps = (state: AppState) => ({
  things: state.things
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, null, Action>
) => ({
  addThing: (thing: Thing) => dispatch(addThingAction(thing))
});

export const ThingPageContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ThingPage)
);
