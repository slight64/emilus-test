import React, { useState } from 'react';
import { DndContext, useDroppable } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';
import './planner.css';
import Furniture from './furniture/Furniture';
import { CSS } from '@dnd-kit/utilities';

function Planner() {
  const [itemsCount, setItemsCount] = useState([]);
  const [itemDraggable, setItemDraggable] = useState(false);
  const toolsList = ['chair', 'table'];
  const ceils = Array(400).fill('');

  const [parent, setParent] = useState(null);

  const addItemToBoard = (e) => {
    const newItem = e.active.data.current?.title;
    if (e.over?.id !== 'board' || !newItem) return;
    const temp = [...itemsCount];
    temp.push(newItem);
    setItemsCount(temp);
  };

  const item = toolsList.map((el, i) => {
    return (
      <Draggable id={i} key={i}>
        <Furniture type={el} />
      </Draggable>
    );
  });

  function handleDragEnd(event) {
    const { over } = event;
    setParent(over ? over.id : null);
  }
  return (
    <div className="planner">
      <DndContext onDragEnd={addItemToBoard}>
        <div className="planner-wrapper">
          <div className="planner-toolbar">
            <div className="toolbar">{item}</div>
          </div>
          <div className="planner-board">
            <div className="board">
              {ceils.map((_, i) => (
                <Droppable key={i} id={'board'}>
                  {parent === i ? item : ''}
                </Droppable>
              ))}
            </div>
          </div>
        </div>
      </DndContext>
    </div>
  );
}

export function Droppable(props) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div ref={setNodeRef} className="ceil">
      {props.children}
    </div>
  );
}

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="item"
    >
      {props.children}
    </div>
  );
}

export default Planner;
