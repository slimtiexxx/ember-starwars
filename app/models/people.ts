import Model, { attr } from "@ember-data/model";

export default class PeopleModel extends Model {
  @attr declare name: string;
  @attr declare height: string;
  @attr declare mass: string;
  @attr declare hair_color: string;
  @attr declare skin_color: string;
  @attr declare eye_color: string;
  @attr declare birth_year: string;
  @attr declare gender: string;
  @attr declare homeworld: string;
}
// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'people': PeopleModel;
  }
}
