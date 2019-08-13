import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { ThingsPage } from "./temple";

const mapStateToProps = (state: AppState) => ({
  things: state.things
});

export const ThingsPageContainer = connect(
  mapStateToProps,
  null
)(ThingsPage);
