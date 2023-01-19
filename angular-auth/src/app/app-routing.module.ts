import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

//student crud
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './views/student-crud/add-student/add-student.component';
import { StudentListComponent } from './views/student-crud/student-list/student-list.component';
import { EditStudentComponent } from './views/student-crud/edit-student/edit-student.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { LayoutComponent } from './views/layout/layout.component';
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard],
  // },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  //CRUD ROUTE
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'home',
    },
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'register-student', component: AddStudentComponent },
      { path: 'view-students', component: StudentListComponent },
      { path: 'edit-student/:id', component: EditStudentComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
