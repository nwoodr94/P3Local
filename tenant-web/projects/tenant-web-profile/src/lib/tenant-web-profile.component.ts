import { Component, OnInit } from '@angular/core';
import { Tenant } from '../../../../src/app/tenant'

@Component({
  selector: 'lib-tenant-web-profile',
  template: `
    <p>
      tenant-web-profile works!
    </p>
  `,
  styles: []
})
export class TenantWebProfileComponent implements OnInit {

  tenant: Tenant;



  constructor() { }

  ngOnInit() {
  }

  displayInfo(){



  }

}
