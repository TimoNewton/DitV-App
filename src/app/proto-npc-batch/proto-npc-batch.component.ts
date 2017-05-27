import { Component, OnInit } from '@angular/core';
import { NpcService } from '../services/npc.service';
import { DicePool } from '../models/dicePool';
import { ProtoNpc } from '../models/protoNpc';

@Component({
  selector: 'app-proto-npc-batch',
  templateUrl: './proto-npc-batch.component.html',
  styleUrls: ['./proto-npc-batch.component.css']
})
export class ProtoNpcBatchComponent implements OnInit {

  free_dice : DicePool[];
  proto_npcs: ProtoNpc[];

  constructor(private npcService: NpcService) { }

  ngOnInit() {
    this.free_dice = this.npcService.freeDice;
    this.proto_npcs = this.npcService.protoNpcs

  }

}
