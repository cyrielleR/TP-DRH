import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from '../model/Employee';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService
{

    private _http: Http;

    constructor(p_http: Http)
    {
        this._http = p_http;
    }

    getEmployees(): Promise<Employee[]>
    {
       let emp: Employee[];

       return this._http.get('http://172.26.10.31:8080/employees')
       //return this._http.get('./data/mocks.json')
                        .toPromise()
                        .then(resp => resp = resp.json().employees);
    }

}