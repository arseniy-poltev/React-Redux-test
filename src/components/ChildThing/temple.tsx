import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Thing } from "../../store/things/model/thing";
import { ChildThing } from "../../store/things/model/child_thing";
import { Input, Button } from "../../common/components/form";

interface Props extends RouteComponentProps<any> {
  things: Thing[];
  addChildThing(thingID: number, childThing: ChildThing): void;
}

export class ChildThingPage extends React.Component<Props, {}> {
  state = {
    thingID: -1,
    id: -1,
    name: ""
  };

  constructor(props: Props) {
    super(props);
    let thingID = parseInt(props.match.params.thingID);
    if (props.things.length <= thingID) {
      this.onBack();
      return;
    }
    let thing = props.things[thingID];
    // if (!!props.match.params.childID) {
    //   let childID = parseInt(props.match.params.childID);
    //   if (thing.children.length <= childID) {
    //     this.onBack();
    //     return;
    //   }
    // }
    // else {
    this.state = {
      thingID,
      id: thing.children.length,
      name: ""
    };
    // }
  }

  handleChange = (name: string, value: string) => {
    console.log("handleChange", name, value);
    if (name === "id") {
      return;
    }
    this.setState({
      [name]: value
    });
  };

  onAddChildThing = () => {
    const { thingID, id, name } = this.state;
    let childThing: ChildThing = {
      id,
      name
    };
    this.props.addChildThing(thingID, childThing);
    this.props.history.goBack();
  };

  onBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { id, name } = this.state;
    return (
      <div className="row">
        <h2>Add Thing Page</h2>
        <form>
          <Input
            name="id"
            label="ID"
            value={id.toString()}
            onChange={() => {}}
            error={""}
          />
          <Input
            name="name"
            label="Name"
            value={name}
            onChange={this.handleChange}
            error={""}
          />

          <Button
            label="Add"
            className="btn btn-default"
            onClick={this.onAddChildThing}
          />

          <Button
            label="Back"
            className="btn btn-default"
            onClick={this.onBack}
          />
        </form>
      </div>
    );
  }
}
