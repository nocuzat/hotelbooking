import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
sub
    constructor(private router: Router,private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params)
      this.sub = params.subscriber
      console.log(this.sub)
    })
    }
    onComp(){
      this.router.navigateByUrl("")
    }
}
