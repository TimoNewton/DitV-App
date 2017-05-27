import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NpcsComponent } from './npcs/npcs.component';
import { NpcComponent } from './npcs/npc/npc.component';
import { ProtoNpcBatchComponent } from './proto-npc-batch/proto-npc-batch.component';
import { NpcService } from './services/npc.service';

@NgModule({
  declarations: [
    AppComponent,
    NpcsComponent,
    NpcComponent,
    ProtoNpcBatchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ NpcService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
