import { AboutComponent } from './pages/frontend/about/about.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { UsersComponent } from './pages/backend/users/users.component';

// Authen Guard
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // Route สำหรับเรียกหนเ้า frontend layout
  {
    path:"", 
    component:FrontendLayoutComponent,
    children:[
      {
        path: "",
        component: HomeComponent,
        data:{title:"Home"}
      },
      {
        path: "about",
        component: AboutComponent,
        data:{title:"About"}
      },
      {
        path: "contact",
        component: ContactComponent,
        data:{title:"Contact"}
      },
    ]
  },
  {
    path:"auth",
    component: AuthLayoutComponent,
    children:[
      {
        path: "login",
        component:LoginComponent
      },
      {
        path:"register",
        component: RegisterComponent
      }
    ]

  },
  {
      path:"backend",
      component: BackendLayoutComponent,
      canActivate:[AuthGuard],
      children:[
      {
          path:"",
          component: DashboardComponent
      },
      {
          path:"stock",
          component: StockComponent
      },
      {
          path:"users",
          component: UsersComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
