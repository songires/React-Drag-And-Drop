import React from "react";
import { useDrag } from "react-dnd";
function DraggableComponent({ componentType, componentId, children }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: componentType, id: componentId },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      {children}
    </div>
  );
}

export default DraggableComponent;
