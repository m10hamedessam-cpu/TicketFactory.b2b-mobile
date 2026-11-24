import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-up-request',
  imports: [ReactiveFormsModule],
  templateUrl: './top-up-request.html',
  styleUrl: './top-up-request.css',
})
export class TopUpRequest {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly selectedFileName = signal<string>('');
  readonly fileError = signal<string>('');

  topUpForm = this.fb.group({
    amount: ['', [Validators.required, Validators.min(1)]],
    bank: ['', Validators.required],
    reference: ['', [Validators.required, Validators.minLength(4)]],
    date: ['', [Validators.required]],
    proofDocument: [null as File | null, [Validators.required]],
    notes: [''],
  });

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    this.fileError.set('');

    if (!file) {
      this.selectedFileName.set('');
      this.topUpForm.controls.proofDocument.setValue(null);
      this.topUpForm.controls.proofDocument.markAsTouched();
      return;
    }

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    const maxSizeBytes = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      this.fileError.set('Only PDF, JPG, or PNG files are allowed.');
      this.selectedFileName.set('');
      this.topUpForm.controls.proofDocument.setValue(null);
      return;
    }

    if (file.size > maxSizeBytes) {
      this.fileError.set('File size must not exceed 10MB.');
      this.selectedFileName.set('');
      this.topUpForm.controls.proofDocument.setValue(null);
      return;
    }

    this.selectedFileName.set(file.name);
    this.topUpForm.controls.proofDocument.setValue(file);
    this.topUpForm.controls.proofDocument.markAsDirty();
  }

  onSubmit(): void {
    if (this.topUpForm.invalid) {
      this.topUpForm.markAllAsTouched();
      return;
    }

    this.router.navigate(['/wallet']);
  }
  onCancel(): void {
    this.topUpForm.reset();
    this.selectedFileName.set('');
    this.fileError.set('');
    this.router.navigate(['/wallet']);
  }
}
