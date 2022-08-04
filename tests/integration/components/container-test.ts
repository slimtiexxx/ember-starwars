import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{container}}`);

    await render(hbs`
      {{#container}}
        template block text
      {{/container}}
    `);

    assert.strictEqual(
      (this.element.textContent || '').trim(),
      'template block text'
    );
  });
});
