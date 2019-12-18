import { Injectable } from '@angular/core';

// ng g service employee

export interface Employee {
	name: string;
	salary: number;
	bonus: number;
}

@Injectable({ // decorator
	providedIn: 'root'
})
export class EmployeeService {
	employees: Employee[] = [];

	constructor() {}

	addEmployee(employee: Employee) {
		employee.bonus = employee.salary >= 5000 ? employee.bonus : 0;
		this.employees.push(employee);
	}
}
