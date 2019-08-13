import { ThingsActionTypes } from "../actionTypes";
import { Thing } from "../model/thing";

export const ThingsReducer = (state: Thing[] = [], action: any) => {
  switch (action.type) {
    case ThingsActionTypes.ADD_THING:
      return handleAddThing(state, action.payload);
    case ThingsActionTypes.ADD_CHILDTHING:
      return handleAddChildThing(state, action.payload);
  }

  return state;
};

const handleAddThing = (state: Thing[] = [], payload: Thing): Thing[] => {
  return [...state, payload];
};

const handleAddChildThing = (state: Thing[] = [], payload: any): Thing[] => {
  let thingID = payload.thingID;
  let childThing = payload.childThing;
  let things = state;
  things[thingID].children = [...things[thingID].children, childThing];
  return things;
};
