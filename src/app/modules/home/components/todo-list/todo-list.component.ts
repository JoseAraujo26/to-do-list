import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	taskList: TaskList[] = [
		{ task: 'Minha nova task', checked: true },
		{ task: 'Isso é um teste', checked: false },
		{ task: 'Terceira Task', checked: true },
	];

	constructor() { }

	ngOnInit(): void {
	}

	setEmitTaskList(event: string) {
		this.taskList.push({ task: event, checked: false });
	}

	deleteItemTaskList(taskPosition: number) {
		this.taskList.splice(taskPosition, 1);
	}


	deleteAll() {
		const confirm = window.confirm('Você realmente deseja deletar tudo?');
		if (confirm) {
			this.taskList = [];
		}
	}
}
