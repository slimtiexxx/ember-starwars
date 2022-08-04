import JSONSerializer from '@ember-data/serializer/json';
import DS from "ember-data";
import PeopleModel from "star-wars/models/people";
import StarshipModel from "star-wars/models/starship";

export default class Application extends JSONSerializer {
  normalizeResponse(store: DS.Store, primaryModelClass: PeopleModel | StarshipModel, payload: any, id: string | number, requestType: string): {} {

    delete payload.pilots;
    delete payload.films;
    delete payload.created;
    delete payload.edited;
    delete payload.url;
    delete payload.species;
    delete payload.vehicles;
    delete payload.starships;

    return super.normalizeResponse(store, primaryModelClass, {...payload, id}, id, requestType);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your serializers.
declare module 'ember-data/types/registries/serializer' {
  export default interface SerializerRegistry {
    'application': Application;
  }
}
