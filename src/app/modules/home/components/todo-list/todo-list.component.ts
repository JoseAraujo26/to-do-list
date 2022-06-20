import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

	taskList: TaskList[] = JSON.parse(localStorage.getItem('list') || '[]');

	constructor() { }

	setEmitTaskList(event: string) {
		this.taskList.push({ task: event, checked: false });
	}

	deleteItemTaskList(taskPosition: number) {
		this.taskList.splice(taskPosition, 1);
	}

	ngDoCheck() {
		this.setLocalStorage();
	}

	deleteAll() {
		const confirm = window.confirm('Você realmente deseja deletar tudo?');
		if (confirm) {
			this.taskList = [];
		}
	}

	validationInput(event: string, index: number) {
		if (!event.length) {
			const confirm = window.confirm('Task está vazia, dejesa deletar?');
			if (confirm) {
				this.deleteItemTaskList(index);
			}
		}
	}

	setLocalStorage() {
		if (this.taskList) {
			this.taskList.sort((first: TaskList, last: TaskList) => Number(first.checked) - Number(last.checked));
			localStorage.setItem('list', JSON.stringify(this.taskList));
		}
	}

}
