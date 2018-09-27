import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public Names: Array<string> = ["Andrew Fuller", "Connor McGregor", "Nancy Leverling", "Robert King", "Rigo Stanley"];




  constructor(
  ) { }

  ngOnInit() {
  }

 


}
