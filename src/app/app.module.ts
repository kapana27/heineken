import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ShowStorePage } from '../pages/show-store/show-store';
import { AddstorePage } from '../pages/addstore/addstore';
import { StoreModalPage } from '../pages/store-modal/store-modal';
import { StorelistPage} from '../pages/storelist/storelist';
import { TradePage} from '../pages/trade/trade';
import { ChannelPage} from '../pages/channel/channel';
import { ScorePage } from '../pages/score/score';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { StoresProvider } from '../providers/stores/stores';
import { AddStoreProvider } from '../providers/add-store/add-store';
import { ScoreProvider } from '../providers/score/score';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ShowStorePage,
    AddstorePage,
    StorelistPage,
    StoreModalPage,
    TradePage,
    ChannelPage,
    ScorePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ShowStorePage,
    AddstorePage,
    StorelistPage,
    StoreModalPage,
    TradePage,
    ChannelPage,
    ScorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    StoresProvider,
    AddStoreProvider,
    ScoreProvider
  ]
})
export class AppModule {}
