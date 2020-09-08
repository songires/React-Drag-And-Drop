import React from "react";
import { useDrop } from "react-dnd";

function DropTarget({ addId, children }) {
  const [collectedProps, drop] = useDrop({
    accept: ["dropTile"],
    drop: (item, monitor) => {
      console.log(item);
      addId(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
      {collectedProps.isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: "#0d4d00",
          }}
        />
      )}
    </div>
  );
}

export default DropTarget;
