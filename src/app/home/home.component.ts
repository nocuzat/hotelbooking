import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datein
  dateout
  adult
  kids
  name
  email
  message
  subscriber
  custname
  custsurname
  custnumber
  custemail;
    constructor(private router: Router) { }
  
    ngOnInit() {
    }
    onLogin(){
        this.router.navigate(['/results'], { queryParams: { datein: this.datein, dateout: this.dateout,adult:this.adult, kids:this.kids,
                                                            custname:this.custname, custsurname:this.custsurname,custnumber:this.custnumber,custemail:this.custemail } });
  
    }
    onSend(){
      this.router.navigate(['/contact'], { queryParams: { name: this.name, email: this.email ,message:this.message } });

  }
  onSub(){
    this.router.navigate(['/subscribe'], { queryParams: { subscriber: this.subscriber } });

}

}
