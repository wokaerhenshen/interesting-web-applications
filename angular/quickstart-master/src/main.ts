import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//bootstrap means load Appmodule first
//Go to load the appmodule first
//we don't adjust this file.
platformBrowserDynamic().bootstrapModule(AppModule);
