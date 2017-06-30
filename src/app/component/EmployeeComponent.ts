import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../service/EmployeeService';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  styleUrls: ['css/style.css'],
  template: `
 
  <table>

    <tr>
      <td>id</td>
      <td>Name</td>
      <td>Surname</td>
      <td>Sex</td>
      <td>Email</td>
    </tr>

    <tr *ngFor="let emp of employees">

      
      <td><input type = "text" name = "id" [(ngModel)] = "emp.id"/></td>
      <td><input type = "text" name = "name" [(ngModel)] = "emp.name"/></td>
      <td><input type = "text" name = "surname" [(ngModel)] = "emp.surname"/></td>
      <td><input type = "text" name = "sex" [(ngModel)] = "emp.sex"/></td>
      <td><input type = "text" name = "email" [(ngModel)] = "emp.email"/></td>

    </tr>

  </table>

  <br>  
  <button (click) = "affichAjoutEmpl()" style="margin-left: 53em;" >Add new employee</button>


  <hr class="a">
   
      <form method="POST" action="" id="f01">
      
        Nom: <input type = "text" name = "name" required />
        Prenom: <input type = "text" name = "surname" required />

        Sexe: 
        <select name="sex" required >
            <option value="H"> Homme </option>
            <option value="F"> Femme </option>
            <option value="U"> Indeterminé </option>
        </select>
        
        Email <input type = "email" name = "email" required />

        <input type="submit" value="Ajouter" class="btAjoutEMP" /> 
        <input type="reset" value="Annuler" (click)="AnnulAjoutEmpl()" /> 
      </form>  


  `,
})

export class EmployeeComponent  implements OnInit
{ 

  public employees: Employee[];
  private _employeeService: EmployeeService;

  constructor(p_employeeService: EmployeeService)
  {
    this._employeeService = p_employeeService;
  }

  ngOnInit(): void {

    this._employeeService .getEmployees()
                         .then(emp => this.employees = emp);

    document.getElementById("f01").style.visibility = "hidden";

  }

  affichAjoutEmpl(): void{
      document.getElementById("f01").style.visibility = "visible";
  }

  AnnulAjoutEmpl(): void{
      document.getElementById("f01").style.visibility = "hidden";
  }

}
