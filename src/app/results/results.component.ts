import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  din
  dout
  a
  k
  custn
  custs
  phone
  custm
  Rum
    constructor(private router: Router,private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params)
      this.din = params.datein
      console.log(this.din),
      this.dout = params.dateout
      console.log(this.dout)
      this.a = params.adult
      console.log(this.a)
      this.k = params.kids
      console.log(this.k)
      this.custn = params.custname
      console.log(this.custn)
      this.custs = params.custsurname
      console.log(this.custs)
      this.phone = params.custnumber
      console.log(this.phone)
      this.custm = params.custemail
      console.log(this.custm)
      this.Rum = params.Room
      console.log(this.Rum)
    })
    }
    onComp(){
      this.router.navigateByUrl("")
    }
  }
