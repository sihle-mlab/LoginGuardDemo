import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name: string;


  constructor(public database: AngularFireDatabase, public afAuth : AngularFireAuth) { }


  displayedColumns = ['name', 'location', 'phone', 'level'];
  public items : Observable<any[]>;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  selectedValue: string;

  options = [
    {value: 'profile', viewValue: 'Profile'},
    {value: 'logout', viewValue: 'Logout'}
  ];


  ngOnInit() {
    var user = this.afAuth.auth.currentUser;
    if(user != null){
      this.name = user.displayName;
    } else {
      this.name = "Hey";
    }
    this.database.list("students").valueChanges().subscribe(values  => {
      values.forEach(value => {
        console.log(value['name']);
        let item : Element = {name : value['name'], location : value['location'], phone : value['phone_number'], level : value['level']};
        ELEMENT_DATA.push(item);
      })
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    });
    
  }

}

export interface Element {
  name: string;
  location: string;
  phone: string;
  level: string;
}

const ELEMENT_DATA: Element[] = [];
