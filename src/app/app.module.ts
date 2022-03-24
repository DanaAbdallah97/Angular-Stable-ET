import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConcatusComponent } from './concatus/concatus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { tokeninterceptor } from './interceptor/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConcatusComponent,
    AboutusComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    SharedRoutingModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-bottom-center',
      preventDuplicates:true,
    }),
    FormsModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass:tokeninterceptor,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
