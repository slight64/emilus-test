import React, { useState } from 'react';
import { DndContext, useDroppable } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';
import './planner.css';
import Furniture from './furniture/Furniture';
import { CSS } from '@dnd-kit/utilities';
import { indexOf, replace } from 'lodash';

const initialCeils = Array(400).fill(null);

function Planner() {
  const [itemsCount, setItemsCount] = useState([]);
  const [toolsList, setЕoolsList] = useState(['chair', 'table', 'big-table']);
  const [ceils, setCeils] = useState(initialCeils);
  const [boardItems, setBoardItems] = useState([]);

  const addItemToBoard = (e) => {
    const newItem = e.active.data.current?.title;
    if (e.over?.id !== 'board' || !newItem) return;
    const temp = [...itemsCount];
    temp.push(newItem);
    setItemsCount(temp);
  };

  const items = toolsList.map((el, i) => {
    return (
      <Draggable id={el} key={el}>
        <Furniture type={el}></Furniture>
      </Draggable>
    );
  });

  const item = (id, type) => {
    return (
      <Draggable id={id} key={id}>
        <Furniture type={type}></Furniture>
      </Draggable>
    );
  };
  function handleDragEnd(e) {
    const { over } = e;
    console.log(e);
    if (over && over.id.includes('board')) {
      console.log(toolsList[toolsList.indexOf(e.active.id)]);
      setCeils(
        ceils.map((el, i) => {
          let itemtype = e.active.id;
          console.log('itemtype', itemtype);

          if (over.id === 'board' + i) {
            console.log(itemtype);
            itemtype = itemtype.replaceAll(/\d/gi, '');
            return item(itemtype + i, itemtype);
          }
          if (el && el.key === itemtype) {
            return null;
          }
          return el;
        })
      );
      console.log(ceils);
    }
    if (!over) {
      setCeils(
        ceils.map((el, i) => {
          if (el && el.key === e.active.id) {
            const temp = boardItems.filter((item) => el.key === item.key);
            setBoardItems(temp);
            return null;
          }

          return el;
        })
      );
      console.log('NOT OVER');
    }
  }
  const handleDragStart = (event) => {
    console.log(event);
  };

  return (
    <div className="planner">
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className="planner-wrapper">
          <div className="planner-toolbar">
            <div className="toolbar">{items}</div>
          </div>
          <div className="planner-board">
            <div className="board">
              {ceils.map((el, i) => (
                <Droppable key={'board' + i} id={'board' + i}>
                  {el}
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
  const [item, setITem] = useState([]);
  return (
    <div ref={setNodeRef} className="ceil">
      {props.children}
    </div>
  );
}

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: { children: props.children },
    type: props.type,
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
