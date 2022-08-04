import Model, { attr } from '@ember-data/model';

export default class StarshipModel extends Model {
  @attr declare name: string;
  @attr declare model: string;
  @attr declare manufacturer: string;
  @attr declare cost_in_credits: string;
  @attr declare length: string;
  @attr declare max_atmosphering_speed: string;
  @attr declare crew: string;
  @attr declare passengers: string;
  @attr declare cargo_capacity: string;
  @attr declare consumables: string;
  @attr declare hyperdrive_rating: string;
  @attr declare MGLT: string;
  @attr declare starship_class: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'starship': StarshipModel;
  }
}
