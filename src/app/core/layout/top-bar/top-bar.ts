import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css',
})
export class TopBar {
  title = input<string>('Wallet');
  menuToggle = output<void>();
}
