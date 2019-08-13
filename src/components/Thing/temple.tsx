import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Thing } from "../../store/things/model/thing";
import { Input, Button } from "../../common/components/form";

interface Props extends RouteComponentProps<any> {
  things: Thing[];
  addThing(thing: Thing): void;
}

export class ThingPage extends React.Component<Props, {}> {
  state = {
    id: -1,
    name: ""
  };

  constructor(props: Props) {
    super(props);
    if (!!props.match.params.thingID) {
      if (props.things.length <= parseInt(props.match.params.thingID)) {
        this.onBack();
        return;
      }
    } else {
      this.state = {
        id: props.things.length,
        name: ""
      };
    }
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

  onAddThing = () => {
    const { id, name } = this.state;
    let thing: Thing = {
      id,
      name,
      children: []
    };
    this.props.addThing(thing);
    this.props.history.goBack();
  };

  onBack = () => {
    this.props.history.goBack();
  };

  renderCreateThing = () => {
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
            onClick={this.onAddThing}
          />

          <Button
            label="Back"
            className="btn btn-default"
            onClick={this.onBack}
          />
        </form>
      </div>
    );
  };

  renderEditThing = () => {
    let thingID = parseInt(this.props.match.params.thingID);
    let thing = this.props.things[thingID];
    const { id, name, children } = thing;
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
            onChange={() => {}}
            error={""}
          />

          <Link to={`${thingID}/child`}>Add Child Thing</Link>

          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {children.map(child => (
                <tr key={child.id}>
                  <td>
                    <Link to={`${thingID}/child/${child.id}`}>{child.id}</Link>
                  </td>
                  <td>
                    <span>{child.name}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Button
            label="Back"
            className="btn btn-default"
            onClick={this.onBack}
          />
        </form>
      </div>
    );
  };

  render() {
    if (!!this.props.match.params.thingID) {
      return this.renderEditThing();
    } else {
      return this.renderCreateThing();
    }
  }
}
