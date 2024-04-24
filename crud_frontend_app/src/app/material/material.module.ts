import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTreeModule } from '@angular/material/tree';

const materialCompnents = [MatBadgeModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatTreeModule,
  ],
})
export class MaterialModule {}
