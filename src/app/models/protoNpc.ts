import { DicePool } from './dicePool';
export class ProtoNpc{
  id:number;

  //default traits
  stats:DicePool[];

  //unassigned default traits
  traits: DicePool[];

  //unassigned default relationships.
  relationships: DicePool[] = [
    {name:"Blood",pool_size:1,die_size:6}
  ];
}
