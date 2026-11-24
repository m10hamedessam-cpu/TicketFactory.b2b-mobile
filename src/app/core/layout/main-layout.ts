import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuList } from './menu-list/menu-list';
import { Sidebar } from './sidebar/sidebar';
import { TopBar } from './top-bar/top-bar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, MenuList, Sidebar, TopBar],
  standalone: true,
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  sidebarOpen = signal(false);
}
