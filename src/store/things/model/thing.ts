import { ChildThing } from "./child_thing";
export interface Thing {
  id: number;
  name: string;
  children: ChildThing[];
}
