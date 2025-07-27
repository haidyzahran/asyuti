import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LatestWorksComponent } from './components/pages/latest-works/latest-works.component';
import { CommonQuestionsComponent } from './components/pages/common-questions/common-questions.component';
import { BuyComponent } from './components/pages/buy/buy.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"latest-works", component:LatestWorksComponent},
    {path:"common-questions", component:CommonQuestionsComponent},
    {path:"buy", component:BuyComponent},
    {path:"**", component:LatestWorksComponent},
];
