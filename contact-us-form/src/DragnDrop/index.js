import React, { useState } from "react";
import "./dragnDrop.css";

const data = [
  { title: "Group1", items: ["1", "2", "3"] },
  { title: "Group2", items: ["4", "5"] },
];

function DragAndDrop() {
  const [list, setList] = React.useState(data);
  const [dragging, setDragging] = React.useState(false);

  const dragItem = React.useRef();
  const dragNode = React.useRef();

  const handleDragStart = (e, params) => {
    console.log("start draging....", params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    console.log("ending drag....");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.index === params.index &&
      currentItem.itemIndex === params.itemIndex
    ) {
      return "current";
    }
    return "dnd-item";
  };
  const handleDragEnter = (e, params) => {
    console.log("drag enter...", params);
    const currentItem = dragItem.current;
    console.log("current item", currentItem);
    if (e.target !== dragNode.current) {
      setList((oldlist) => {
        let newlist = JSON.parse(JSON.stringify(oldlist));
        console.log("newlist", newlist);
        newlist[params.index].items.splice(
          params.itemIndex,
          0,
          newlist[currentItem.index].items.splice(currentItem.itemIndex, 1)[0]
        );
        dragItem.current = params;
        return newlist;
      });
      console.log("target is not the same");
    }
  };
  return (
    <div>
      <div className="drag-n-drop">
        {list.map((grp, index) => {
          return (
            <div className="dnd-group" key={grp.title}>
              <div className="group-title">{grp.title}</div>
              {grp.items.map((item, itemIndex) => {
                return (
                  <div
                    draggable
                    onDragStart={(e) => {
                      handleDragStart(e, { index, itemIndex });
                    }}
                    onDragEnter={
                      dragging
                        ? (e) => {
                            handleDragEnter(e, { index, itemIndex });
                          }
                        : null
                    }
                    className={
                      dragging ? getStyles({ index, itemIndex }) : "dnd-item"
                    }
                    key={itemIndex}
                  >
                    <div>
                      <p>ITEM {item}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DragAndDrop;
