import { ThingsActionTypes } from "../actionTypes";
import { Thing } from "../model/thing";
import { ChildThing } from "../model/child_thing";

export const addThingAction = (thing: Thing) => ({
  type: ThingsActionTypes.ADD_THING,
  payload: thing
});

export const addChildThingAction = (
  thingID: number,
  childThing: ChildThing
) => ({
  type: ThingsActionTypes.ADD_CHILDTHING,
  payload: { thingID, childThing }
});
