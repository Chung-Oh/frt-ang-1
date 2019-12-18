import { Component, OnInit } from '@angular/core';
// import employees from '../employees';
import { Employee, EmployeeService } from '../employee.service';

@Component({
	selector: 'employee-new',
	templateUrl: './employee-new.component.html',
	styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

	employee: Employee = {
		name:  '',
		salary: 0,
		bonus:  0
	}

	constructor(private employeeService: EmployeeService) {
		// setTimeout(() => {
		// 	this.name = 'Kazuya Mishima';
		// }, 1000);
	}

	ngOnInit() {
	}

	addEmployee() {
		// criando cópia para não poder acessar na lista
		const copy = Object.assign({}, this.employee);
		this.employeeService.addEmployee(copy);
		// const bonus = this.salary <= 1000 ? 0 : this.bonus;
		// this.employeeService.employees.push({name: this.name, salary: this.salary, bonus: bonus});
		// console.log(this.employeeService);
	}
}
