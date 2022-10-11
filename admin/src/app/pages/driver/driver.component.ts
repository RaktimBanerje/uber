import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/interfaces/Driver';
import { DataService } from 'src/app/services/data.service';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(
    private driver: DriverService,
    private data: DataService
  ) { }

  isLoading: boolean = false
  drivers: Driver[] = []

  ngOnInit(): void {
    this.isLoading = true
    const globalData = this.data.getData()
    console.log(globalData)
    // const token = globalData.token    

    this.driver.getDrivers().subscribe(data => { 
      this.isLoading = false
      this.drivers = data 
    })
  }

}
