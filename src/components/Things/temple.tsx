import * as React from "react";
import { Link } from "react-router-dom";
import { Thing } from "../../store/things/model/thing";

interface Props {
  things: Thing[];
}

export class ThingsPage extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <h2>Things Page</h2>
        <Link to="/thing">Add Thing</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.things.map(thing => (
              <tr key={thing.id}>
                <td>
                  <Link to={`/thing/${thing.id}`}>{thing.id}</Link>
                </td>
                <td>
                  <span>{thing.name}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
