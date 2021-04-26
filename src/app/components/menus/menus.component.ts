import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SelectMenuService } from 'src/app/services/select-menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenusComponent implements OnInit {

  public menus: any[] = [
    {
      icon: 'account_box',
      active: false,
      tooltip: 'Perfil',
      component: 'profile'
    },
    {
      icon: 'question_answer',
      active: false,
      tooltip: 'Chat',
      component: 'chats'
    },
    {
      icon: 'people',
      active: false,
      tooltip: 'Pessoas',
      component: ''
    },
    {
      icon: 'contacts',
      active: false,
      tooltip: 'Contatos',
      component: ''
    },
    {
      icon: 'settings',
      active: false,
      tooltip: 'Configurações',
      component: ''
    },
  ];

  constructor(private selectMenuService: SelectMenuService) { }

  ngOnInit(): void {
  }

  selectMenu(menu) {
    this.menus.forEach(menu => menu.active = false);
    
    menu.active = true;
    
    this.selectMenuService.selectMenu(menu.component);
  }

}
