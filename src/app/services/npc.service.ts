import { Injectable } from '@angular/core';
import { DicePool } from '../models/dicePool';
import { ProtoNpc } from '../models/protoNpc';

@Injectable()
export class NpcService {
  protoNpcs:ProtoNpc[] = [
    {id:1,
      stats:[
        {name:"Acuity",pool_size:3,die_size:6},
        {name:"Body",pool_size:2,die_size:6},
        {name:"Heart",pool_size:5,die_size:6},
        {name:"Will",pool_size:5,die_size:6}
      ],
      traits: [
        {name:"Unassigned",pool_size:2,die_size:4},
        {name:"Unassigned",pool_size:1,die_size:6},
        {name:"Unassigned",pool_size:1,die_size:10},
        {name:"Unassigned",pool_size:1,die_size:10},
      ],
      relationships: [
        {name:"Blood",pool_size:3,die_size:6},
        {name:"Unassigned",pool_size:2,die_size:6},
        {name:"Unassigned",pool_size:1,die_size:8}
      ]
    },
    {id:2,
      stats:[
        {name:"Acuity",pool_size:3,die_size:6},
        {name:"Body",pool_size:2,die_size:6},
        {name:"Heart",pool_size:5,die_size:6},
        {name:"Will",pool_size:5,die_size:6}
      ],
      traits: [
        {name:"Unassigned",pool_size:2,die_size:4},
        {name:"Unassigned",pool_size:1,die_size:6},
        {name:"Unassigned",pool_size:1,die_size:10},
        {name:"Unassigned",pool_size:1,die_size:10},
      ],
      relationships: [
        {name:"Blood",pool_size:3,die_size:6},
        {name:"Unassigned",pool_size:2,die_size:6},
        {name:"Unassigned",pool_size:1,die_size:8}
      ]
    },
    {id:3,
      stats:[
        {name:"Acuity",pool_size:3,die_size:6},
        {name:"Body",pool_size:2,die_size:6},
        {name:"Heart",pool_size:5,die_size:6},
        {name:"Will",pool_size:5,die_size:6}
      ],
      traits: [
        {name:"Unassigned",pool_size:2,die_size:4},
        {name:"Unassigned",pool_size:1,die_size:6},
        {name:"Unassigned",pool_size:1,die_size:10},
        {name:"Unassigned",pool_size:1,die_size:10},
      ],
      relationships: [
        {name:"Blood",pool_size:3,die_size:6},
        {name:"Unassigned",pool_size:2,die_size:6},
        {name:"Unassigned",pool_size:1,die_size:8}
      ]
    }
  ];
  freeDice:DicePool[] = [
    {name:"free",pool_size:2,die_size:4},
    {name:"free",pool_size:2,die_size:8},
    {name:"free",pool_size:4,die_size:6}
  ];

  constructor() { }

}
