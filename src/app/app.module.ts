import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutes } from './app.routes';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTabsModule, MatToolbarModule, MatTableModule} from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthenticationGuard } from './app.guard';
import { DailyTechnicalsComponent } from './pages/daily-technicals/daily-technicals.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './app.auth';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DailyTechnicalsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, FormsModule,
    //Material Design Modules
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTabsModule, MatToolbarModule, MatTableModule,

    //AngularFire Modules
    // imports firebase/app needed for everything, 
    // imports firebase/firestore, only needed for database features
    AngularFireDatabaseModule, 
     // imports firebase/auth, only needed for auth features,
    AngularFireAuthModule,
     // imports firebase/storage, only needed for storage features,
    AngularFireStorageModule,
    AngularFirestoreModule,
    

    //Other miscallaneous stuff
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthenticationGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
