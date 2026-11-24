import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  styleUrl: './page-header.css',
  template: `
    <header class="header">
      @if (eyebrow()) {
        <p>{{ eyebrow() }}</p>
      }
      <h1>{{ title() }}</h1>
      @if (subtitle()) {
        <p>{{ subtitle() }}</p>
      }
    </header>
  `,
})
export class PageHeader {
  readonly eyebrow = input<string>('Wallet Management · Admin');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
