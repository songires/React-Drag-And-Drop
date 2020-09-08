import React from "react";
import {
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
} from "carbon-components-react";
import DropTarget from "./DroptTargetWrapper";
class CollectionTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileIdsDropped: [],
    };
    this.addTileIds = this.addTileIds.bind(this);
  }
  addTileIds(id) {
    let ids = this.state.tileIdsDropped;
    ids.push(id);
    console.log(ids);
    this.setState({
      tileIdsDropped: ids,
    });
  }
  render() {
    return (
      <DropTarget addId={this.addTileIds}>
        <ExpandableTile
          style={{
            "background-color": "blue",
            color: "#fff",
          }}
          expanded={true}
        >
          <TileAboveTheFoldContent>
            <h1>This is the Collection Tile</h1>
          </TileAboveTheFoldContent>
          <TileBelowTheFoldContent>
            {this.state.tileIdsDropped &&
              this.state.tileIdsDropped.map((ids) => {
                return <h4>Dropped Tile with ID ----- {ids}</h4>;
              })}
          </TileBelowTheFoldContent>
        </ExpandableTile>
      </DropTarget>
    );
  }
}
export default CollectionTile;
