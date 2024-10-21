import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ContentPagesRoutingModule } from './content-pages-routing.module';

import { ErrorPageComponent } from '../auth/error/error-page.component';
import { ForgotPasswordPageComponent } from '../auth/forgot-password/forgot-password-page.component';
import { RegisterPageComponent } from '../auth/register/register-page.component';
import { LoginPageComponent } from '../auth/login/login-page.component';

@NgModule({
  imports: [CommonModule, ContentPagesRoutingModule, FormsModule, ReactiveFormsModule, NgbModule, NgxSpinnerModule],
  declarations: [ErrorPageComponent, LoginPageComponent, ForgotPasswordPageComponent, RegisterPageComponent],
})
export class ContentPagesModule {}
