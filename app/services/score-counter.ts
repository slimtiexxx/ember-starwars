import Service from '@ember/service';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ScoreCounterService extends Service {
  @tracked
  playerOne = 0;

  @tracked
  playerTwo = 0;

  @action
  increaseScore(playerName: 'playerOne' | 'playerTwo'): void {
    this[playerName] = this[playerName] += 1;
  }

  @action
  resetScore(): void {
    this.playerOne = 0;
    this.playerTwo = 0;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'score-counter': ScoreCounterService;
  }
}
