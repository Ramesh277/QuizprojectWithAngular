import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MobileComponent } from './pages/mobile/mobile.component';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { ArtificialComponent } from './pages/artificial/artificial.component';
import { RocketComponent } from './pages/rocket/rocket.component';
import { CyberSecurityComponent } from './pages/cyber-security/cyber-security.component';
import { ContentComponent } from './pages/content/content.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { NormalDashboardComponent } from './pages/user/normal-dashboard/normal-dashboard.component';
import { FounderComponent } from './components/founder/founder.component';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { LeftContentComponent } from './components/left-content/left-content.component';
import { UnauthComponent } from './components/unauth/unauth.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { PasswordForgetComponent } from './components/password-forget/password-forget.component';
import { SendOtpComponent } from './components/send-otp/send-otp.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import {MatCommonModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { WebTechnologyComponent } from './pages/web-technology/web-technology.component';
import { InfixtopostfixComponent } from './calculate/infixtopostfix/infixtopostfix.component';
import { InfixtoprefixComponent } from './calculate/infixtoprefix/infixtoprefix.component';
import { RightPageComponent } from './pages/admin/right-page/right-page.component';
import { AnswerquestionComponent } from './pages/admin/answerquestion/answerquestion.component';
import { ListofquestionanswerComponent } from './pages/admin/listofquestionanswer/listofquestionanswer.component';
import { UpdateAnswerquestionComponent } from './pages/admin/update-answerquestion/update-answerquestion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DsaChapterComponent } from './calculate/dsa-chapter/dsa-chapter.component';
import { PostfixtoinfixComponent } from './calculate/postfixtoinfix/postfixtoinfix.component';
import { PrefixtoinfixComponent } from './calculate/prefixtoinfix/prefixtoinfix.component';
import { EvalutionpostfixComponent } from './calculate/evalutionpostfix/evalutionpostfix.component';
import { EvalutionprefixComponent } from './calculate/evalutionprefix/evalutionprefix.component';
import { RouterLinkActive } from '@angular/router';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ViewQuestionComponent } from './pages/admin/view-question/view-question.component';
import { LeftPageComponent } from './pages/user/left-page/left-page.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    MobileComponent,
    BlockchainComponent,
    ArtificialComponent,
    RocketComponent,
    CyberSecurityComponent,
    ContentComponent,
    AdminDashboardComponent,
    NormalDashboardComponent,
    FounderComponent,
    LeftContentComponent,
    UnauthComponent,
    ProfileComponent,
    UserProfileComponent,
    PasswordForgetComponent,
    SendOtpComponent,
    SendEmailComponent,
    WebTechnologyComponent,
    LoginComponent,
    InfixtopostfixComponent,
    InfixtoprefixComponent,
    RightPageComponent,
    AnswerquestionComponent,
    ListofquestionanswerComponent,
    UpdateAnswerquestionComponent,
    DsaChapterComponent,
    PostfixtoinfixComponent,
    PrefixtoinfixComponent,
    EvalutionpostfixComponent,
    EvalutionprefixComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuestionComponent,
    AddQuizComponent,
    ViewQuestionComponent,
    LeftPageComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,   

  ],
  imports: [
   AppRoutingModule,
   BrowserAnimationsModule,
   BrowserModule,
   FormsModule,
   HttpClientModule,
   MatButtonModule,
   MatCardModule,
   MatCommonModule,
   MatDatepickerModule,
   RouterLinkActive,
   MatExpansionModule,
   MatMenuModule,
   MatToolbarModule,
   MatListModule,
   MatPaginatorModule,
   MatSnackBarModule,
   MatDividerModule,
   MatSelectModule,
   MatRadioModule,
   MatInputModule,
   MatFormFieldModule,
   MatDialogModule,
   MatIconModule,
   MatSlideToggleModule,
   MatProgressSpinnerModule,
   NgxUiLoaderModule,
   NgxUiLoaderHttpModule.forRoot({
    showForeground: true,
   }),

 
  ],
  //this is from auth.interceptor
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
