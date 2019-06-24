import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  nm
  em
  messa
    constructor(private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params)
      this.nm = params.name
      console.log(this.nm),
      this.em = params.email
      console.log(this.em)
      this.messa = params.message
      console.log(this.messa)
    })
    }
    onComp(){
      this.router.navigateByUrl("")
    }
}
