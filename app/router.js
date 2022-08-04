import EmberRouter from '@ember/routing/router';
import config from 'star-wars/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('game', { path: '/game/:namespace' });
  this.route('not-found', { path: '/*path' });
});
