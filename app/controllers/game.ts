import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { GameModel } from "star-wars/routes/game";
import { NameSpaces } from "star-wars/utils/utils";
import StarshipModel from "star-wars/models/starship";
import PeopleModel from "star-wars/models/people";
import { inject as service } from "@ember/service";
import ScoreCounterService from "star-wars/services/score-counter";

export default class GameController extends Controller {
  @service('score-counter') declare scoreCounterService: ScoreCounterService;
  declare model: GameModel;
  declare refresh: () => void;

  @tracked
  declare winner: string;
  @tracked
  declare draw: boolean;

  get categoryImage() {
    switch (this.model.namespace) {
      case NameSpaces.Starship:
        return '/images/space-ship.png';
      case NameSpaces.People:
        return '/images/darth-vader.png';
      default:
        return '/images/random.png';
    }
  }

  get gameEnded(): boolean {
    return !!(this.winner) || this.draw
  }

  @action
  async playAgain(): Promise<void> {
    this.refresh();
    this.winner = '';
    this.draw = false;
  }

  racePlayersByAttribute(playerOne: any, playerTwo: any, attribute: string): void {
    const playerOneValue = parseInt(playerOne[attribute], 10);
    const playerTwoValue = parseInt(playerTwo[attribute], 10);

    if (playerOneValue === playerTwoValue) {
      this.draw = true;

      return;
    }

    if (playerOneValue > playerTwoValue) {
      this.winner = this.model.playerOne.name;
      this.scoreCounterService.increaseScore('playerOne');
    } else {
      this.scoreCounterService.increaseScore('playerTwo');
      this.winner = this.model.playerTwo.name;
    }
  }

  @action
  async challengePlayers(): Promise<void> {
    if (this.model.namespace === NameSpaces.Starship) {
      this.racePlayersByAttribute(this.model.playerOne, this.model.playerTwo, 'crew');
    }

    if (this.model.namespace === NameSpaces.People) {
      this.racePlayersByAttribute(this.model.playerOne, this.model.playerTwo, 'mass');
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'game': GameController;
  }
}
