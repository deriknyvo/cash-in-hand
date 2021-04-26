import { Component, OnInit } from '@angular/core';
import { SelectMenuService } from 'src/app/services/select-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nameMenuSelected: string;

  constructor(private selectMenuService: SelectMenuService) {
    this.selectMenuService.menuSelected.subscribe((value: string) => this.nameMenuSelected = value);
  }

  ngOnInit(): void {
  }
}
