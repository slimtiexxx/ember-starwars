import Route from '@ember/routing/route';
import { service } from '@ember/service';
import {
  generateRandomNamespace,
  getRandomID,
  NameSpaces,
} from 'star-wars/utils/utils';
import PeopleModel from 'star-wars/models/people';
import StarshipModel from 'star-wars/models/starship';
import GameController from 'star-wars/controllers/game';
import Transition from '@ember/routing/-private/transition';

interface ModelParams {
  namespace: NameSpaces | any;
}

export interface GameModel {
  namespace: NameSpaces;
  playerOne: PeopleModel | StarshipModel;
  playerTwo: PeopleModel | StarshipModel;
}

export default class GameRoute extends Route {
  @service declare store;

  async model(params: ModelParams): Promise<GameModel> {
    const namespace: NameSpaces = !Object.values(NameSpaces).includes(
      params.namespace
    )
      ? generateRandomNamespace()
      : params.namespace;

    return {
      namespace,
      playerOne: await this.store.findRecord(namespace, getRandomID(namespace)),
      playerTwo: await this.store.findRecord(namespace, getRandomID(namespace)),
    };
  }

  setupController(
    controller: GameController,
    model: GameModel,
    transition: Transition
  ) {
    super.setupController(controller, model, transition);

    controller.set('refresh', this.refresh.bind(this));
  }

  resetController(
    controller: GameController,
    isExiting: boolean,
    transition: Transition
  ) {
    super.resetController(controller, isExiting, transition);

    controller.set('winner', '');
    controller.set('draw', false);
  }
}
