import { NgModule } from '@angular/core';

import { JnApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JnApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JnApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JnApplicationSharedCommonModule {}
