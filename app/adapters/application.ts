import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'star-wars/config/environment';

export default class Application extends JSONAPIAdapter {
  namespace = ENV.API_NAMESPACE;
  host = ENV.API_URL;
  headers = {
    accept: 'application/json'
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    'application': Application;
  }
}
