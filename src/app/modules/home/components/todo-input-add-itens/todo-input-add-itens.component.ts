import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-todo-input-add-itens',
	templateUrl: './todo-input-add-itens.component.html',
	styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

	@Output() emitItemTaskList = new EventEmitter();
	addItemTaskList = '';

	constructor() { }

	ngOnInit(): void {
	}

	submitItemTaskList() {
		const text: string = this.formatInput(this.addItemTaskList);
		if(text) {
			this.emitItemTaskList.emit(text);
			this.addItemTaskList = '';
		}
	}

	private formatInput(text: string) {
		return text.split(' ').filter((e: string) => e).join(' ');
	}

}
