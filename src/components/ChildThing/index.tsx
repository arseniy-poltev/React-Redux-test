import * as React from "react";
import { Action } from "redux";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { withRouter } from "react-router-dom";
import { AppState } from "../../store";
import { addChildThingAction } from "../../store/things/actions";
import { Thing } from "../../store/things/model/thing";
import { ChildThing } from "../../store/things/model/child_thing";
import { ChildThingPage } from "./temple";

const mapStateToProps = (state: AppState) => ({
  things: state.things
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, null, Action>
) => ({
  addChildThing: (thingID: number, childThing: ChildThing) =>
    dispatch(addChildThingAction(thingID, childThing))
});

export const ChildThingPageContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChildThingPage)
);
