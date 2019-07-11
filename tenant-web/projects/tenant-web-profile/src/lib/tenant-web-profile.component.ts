import { Component, OnInit } from '@angular/core';
import { TitleCasePipe} from '@angular/common';
import { Tenant } from '../tenant';


@Component({
  selector: 'lib-tenant-web-profile',
  templateUrl: 'tenant-web-profile.html',
  styleUrls: ['./tenant-web-profile.css']
})
export class TenantWebProfileComponent implements OnInit {

tenant: Tenant;



  constructor() { }

  ngOnInit() {
    this.tenant= new Tenant();
    this.tenant.firstName="Carlos";
    this.tenant.lastName="Zurita";
    this.tenant.email="carloszman43@yahoo.com";
    this.tenant.location="Arlington";
    this.tenant.batch="Dotnet";
    this.tenant.address="11111 Some Road";
    this.tenant.contact="1112223333";
    this.tenant.carMake="Toyota";
    this.tenant.carModel="Camry";
    this.tenant.roommate="Evan";
  }

  displayInfo(){



  }

}
