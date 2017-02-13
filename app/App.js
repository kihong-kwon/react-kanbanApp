import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanBoard from '../component/KanbanBoard'

let cardList = [
  {
    id: 1,
    title: "Read The Book",
    description: "I should read the whole book",
    status: "in-progress",
    task:[]
  },
  {
    id:2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    task:[
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My Own experiments",
        done: false
      }
    ]
  }
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
