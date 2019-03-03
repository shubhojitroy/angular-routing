import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { HeaderComponent } from './childcomponents/header/header.component';
import { FooterComponent } from './childcomponents/footer/footer.component';
import { PrivacyPolicyComponent } from './childcomponents/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './childcomponents/terms-of-use/terms-of-use.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    ProductListComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
