import _ from 'lodash';
import $ from 'jquery';
import ToDoData from './ToDoData';

const URL = 'http://localhost:3000/todos';

function getAll() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: URL,
      method: 'GET',
      dataType: 'json',
      success: resolve,
      error: reject
    });
  });
}

function remove(todo) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${URL}/${todo.id}`,
      method: 'DELETE',
      dataType: 'json',
      success: resolve,
      error: reject
    });
  });
}

function add(todo) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${URL}`,
      crossDomain: true,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: resolve,
      error: reject,
      data: JSON.stringify(todo)
    });
  });
}

function update(todo) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${URL}/update`,
      crossDomain: true,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: resolve,
      error: reject,
      data: JSON.stringify(todo)
    });
  });
}

class Store {
  
  constructor() {
    this.getAll().then((data) => {
      if(data.todos.length > 0) {
        let ids = _(data.todos).map('id').value();
        this.idCount = Math.max.apply(Math, ids);
      } else {
        this.idCount = 10;
      }
    }); 
    this.subscribers = [];
  }
  
  add(todoText) {
    this.idCount++;
    let todo = new ToDoData(todoText, this.idCount, false);
    
    add(todo).then(() => {
      this.publish({
        actionType: 'add',
        data: todo
      });
    });
     
    return this.idCount;
  }
  
  remove(todo) {
    remove(todo).then(() => {
      this.publish({
          actionType: 'remove',
          data: todo
      });
    });
  }

  update(todo) {
    update(todo).then(() => {
      this.publish({
        actionType: 'update',
        data: todo
      });
    });
  }
  
  getAll() {
      return getAll();
  }
  
  publish(action) {
    this.getAll().then((data) => {
      action.todos = data.todos;
      this.subscribers.forEach((subscriber) => {
        subscriber(action);
      });
    });
  }
  
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}

// export singleton
export default new Store();