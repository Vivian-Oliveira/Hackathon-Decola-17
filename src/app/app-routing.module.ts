import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LawPageComponent } from './components/law-page/law-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';

const routes: Routes = [{
  path:'',
  component: MenuTemplateComponent,
  children: [

    {
      path: '',
      component: HomePageComponent
    },

    {
      path:'Help',
      component: HelpPageComponent
    },

    {
      path: 'Law',
      component: LawPageComponent
    },

  ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
