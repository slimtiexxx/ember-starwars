import Component from '@glimmer/component';
import { NameSpaces } from 'star-wars/utils/utils';
import PeopleModel from 'star-wars/models/people';
import StarshipModel from 'star-wars/models/starship';

interface PlayerCardArgs {
  player: PeopleModel & StarshipModel;
  type: NameSpaces;
}

export default class PlayerCard extends Component<PlayerCardArgs> {
  get attributes(): any {
    const player = <any>this.args.player;
    const keys: string[] = []
    player.eachAttribute((key: string) => key && keys.push(key));

    return player.getProperties(keys)
  }
}
