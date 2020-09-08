import React from "react";
import { ClickableTile } from "carbon-components-react";
import DraggableComponent from "./DraggableComponent";

class DroppableTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileIdsDropped: [],
    };
  }
  render() {
    return (
      <DraggableComponent componentType="dropTile" componentId={this.props.id}>
        <ClickableTile
          style={{
            "background-color": "#c9c9c9",
            color: "rgb(0, 0, 0)",
            "margin-top": "5rem",
          }}
        >
          <h4>This is Droppable Tile number {this.props.id}</h4>
        </ClickableTile>
      </DraggableComponent>
    );
  }
}
export default DroppableTile;
