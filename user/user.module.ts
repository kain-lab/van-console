import { NgModule } from '@angular/core';
import { ShareModule } from '@vanx/framework';
import { FrameworkComponentModule } from '@vanx/framework/component';
import { UserService } from './user.service';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [
    ShareModule,
    FrameworkComponentModule
  ],
  declarations: [
    UserIndexComponent,
    UserAddComponent,
    UserEditComponent
  ],
  exports: [
    UserIndexComponent,
    UserAddComponent,
    UserEditComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule {
}
