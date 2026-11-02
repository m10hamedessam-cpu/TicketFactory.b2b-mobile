import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuList } from './menu-list/menu-list';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, MenuList, Sidebar],
  standalone: true,
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
