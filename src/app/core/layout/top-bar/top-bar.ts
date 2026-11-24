import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css',
})
export class TopBar {
  readonly title = input<string>('Wallet');
  readonly menuToggle = output<void>();
}
