import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

const primengComponents: any[] = [
  GalleriaModule,
  ButtonModule,
  TooltipModule,
  InputNumberModule,
  DialogModule,
  SidebarModule,
  RadioButtonModule,
  InputTextareaModule,
  CarouselModule,
  DropdownModule,
  SliderModule,
  InputTextModule,
  CalendarModule,
  CheckboxModule,
  ConfirmDialogModule,
]


@NgModule({
  declarations: [],
  imports: [
    primengComponents,

  ],
  exports: [
    primengComponents
  ]
})
export class PrimengModule { }
