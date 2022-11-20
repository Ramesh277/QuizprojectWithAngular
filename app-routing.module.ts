import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsaChapterComponent } from './calculate/dsa-chapter/dsa-chapter.component';
import { EvalutionpostfixComponent } from './calculate/evalutionpostfix/evalutionpostfix.component';
import { EvalutionprefixComponent } from './calculate/evalutionprefix/evalutionprefix.component';
import { InfixtopostfixComponent } from './calculate/infixtopostfix/infixtopostfix.component';
import { InfixtoprefixComponent } from './calculate/infixtoprefix/infixtoprefix.component';
import { PostfixtoinfixComponent } from './calculate/postfixtoinfix/postfixtoinfix.component';
import { PrefixtoinfixComponent } from './calculate/prefixtoinfix/prefixtoinfix.component';
import { UnauthComponent } from './components/unauth/unauth.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AnswerquestionComponent } from './pages/admin/answerquestion/answerquestion.component';
import { ListofquestionanswerComponent } from './pages/admin/listofquestionanswer/listofquestionanswer.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { UpdateAnswerquestionComponent } from './pages/admin/update-answerquestion/update-answerquestion.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { ArtificialComponent } from './pages/artificial/artificial.component';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { CyberSecurityComponent } from './pages/cyber-security/cyber-security.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { RocketComponent } from './pages/rocket/rocket.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { NormalDashboardComponent } from './pages/user/normal-dashboard/normal-dashboard.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { WebTechnologyComponent } from './pages/web-technology/web-technology.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
   {
   path:'unauth',
   component:UnauthComponent,
   pathMatch:'full'
   },
   {
    path:'infixtoPre',
    component:InfixtoprefixComponent,
    pathMatch:'full'

   },
   {
    path:'infixtopos',
    component:InfixtopostfixComponent,
    pathMatch:'full'
   },
  {
    path:'mobile',
    component:MobileComponent,
    pathMatch:'full'
  },
  {
    path:'dsachapter',
    component:DsaChapterComponent,
    pathMatch:'full'
  },
  {
   path:'evaluatepost',
   component:EvalutionpostfixComponent,
   pathMatch:'full'
  },
  {
   path:'evaluatepre',
   component:EvalutionprefixComponent,
   pathMatch:'full'
  },
  {
   path:'posttoinfix',
   component:PostfixtoinfixComponent,
   pathMatch:'full'
  },
  {
   path:'prefixtoinfix',
   component:PrefixtoinfixComponent,
   pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:ProfileComponent
      },
      {
        path:'answerquestion',
        component:AnswerquestionComponent,
      },
      {
        path:'listofQueAns',
        component:ListofquestionanswerComponent
      },
      {
        path:'answerquestion/:qaid',
        component:UpdateAnswerquestionComponent
      },
      {
        path:'addcategory',
        component:AddCategoryComponent
      },
      {
        path:'viewcategory',
        component:ViewCategoriesComponent
      },
      {
        path:'viewquiz',
        component:ViewQuizzesComponent
      },
      {
        path:'addquestion/:quizid/:quiztitle',
        component:AddQuestionComponent
      },
      {
        path:'addquiz',
        component:AddQuizComponent
      },
      {
        path:'viewquestions/:qid/:title',
        component:ViewQuestionComponent
      }


    ],
  },
  {
    path:'user-dashboard',
    component:NormalDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'',
        component:UserProfileComponent
      },{
        path:':catid',
        component:LoadQuizComponent
      },
      {
        path:'instruciton/:qid',
        component:InstructionsComponent
      }

    ]
  },
  //out of normal guard
    {
        path:'start/:qid',
        component:StartComponent,
        canActivate:[NormalGuard]
      },
  {
    path:'rocket',
    component:RocketComponent,
    pathMatch:'full'
  },
  {
    path:'web',
    component:WebTechnologyComponent,
    pathMatch:'full'
  },
  {
    path:'cyber',
    component:CyberSecurityComponent,
    pathMatch:'full'
  },
  {
    path:'block',
    component:BlockchainComponent,
    pathMatch:'full'
  },
  {
    path:'artificial',
    component:ArtificialComponent,
    pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
