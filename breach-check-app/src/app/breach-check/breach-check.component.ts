import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreachService } from '../services/breach.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-breach-check',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
  templateUrl: './breach-check.component.html',
  styleUrls: ['./breach-check.component.css']
})
export class BreachCheckComponent implements OnInit {
  form!: FormGroup;
  result: any = null;
  loading = false;
  error: string | null = null;
  history: string[] = [];

  constructor(private fb: FormBuilder, private svc: BreachService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    // ✅ Load history from localStorage
    const saved = localStorage.getItem('breachHistory');
    if (saved) {
      this.history = JSON.parse(saved);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const email = this.form.value.email!;
    this.loading = true;
    this.error = null;
    this.result = null;

    // ✅ Add to history (avoid duplicates)
    if (!this.history.includes(email)) {
      this.history.unshift(email);
      if (this.history.length > 5) {
        this.history.pop();
      }
      localStorage.setItem('breachHistory', JSON.stringify(this.history)); 
      // ✅ save
    }
    

    this.svc.checkEmail(email).subscribe({
      next: (res) => { this.result = res; this.loading = false; },
      error: () => { this.error = 'API call failed'; this.loading = false; }
    });
  }

  // ✅ Re-run check from history click
  reCheck(email: string) {
    this.form.patchValue({ email });
    this.onSubmit();
  }
    clearHistory() {
    this.history = [];
    localStorage.removeItem('breachHistory');
  }
}
