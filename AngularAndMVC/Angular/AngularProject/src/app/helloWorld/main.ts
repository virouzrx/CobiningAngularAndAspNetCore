import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '../../environments/environment';
import { HelloWorldModule } from './helloWorld.module';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(HelloWorldModule)
  .catch((err) => console.error(err));
