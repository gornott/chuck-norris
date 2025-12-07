import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContactService } from '../../services/contactService';
import { IsFibonacciPipe } from '../../pipes/is-fibonacci-pipe';

// Angular Material Modules because i don't have time for css right now
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
];

@Component({
  selector: 'app-contact-orchestrator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IsFibonacciPipe, ...MATERIAL_MODULES],
  templateUrl: './contact-orchestrator.html',
  styleUrls: ['./contact-orchestrator.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactOrchestrator {
  private readonly fb = inject(FormBuilder);
  protected readonly contactService = inject(ContactService);

  readonly contactForm = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
  });

  get firstName() {
    return this.contactForm.controls.firstName;
  }

  get phoneNumber() {
    return this.contactForm.controls.phoneNumber;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { firstName, phoneNumber } = this.contactForm.getRawValue();
    this.contactService.addContact(firstName, phoneNumber);
    this.contactForm.reset();
  }

  onDelete(index: number): void {
    this.contactService.deleteContact(index);
  }
}
