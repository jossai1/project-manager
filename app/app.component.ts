import { Component } from '@angular/core';


export class Project {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}}</h1>
  <hr>
  <button type ="button ">Create Project </button>
  <button type ="button ">Add a Task </button>
  <hr>
  <h1> Projects </h1>
  `

})


export class AppComponent
{
  title = 'My Project Manager';
  project: Project = {
    id: 1,
    name: 'Chores'
  };
}
