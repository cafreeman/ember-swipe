import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe.skip('Integration | Component | ember swipe', function() {
  setupComponentTest('ember-swipe', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#ember-swipe}}
    //     template content
    //   {{/ember-swipe}}
    // `);

    this.render(hbs`{{ember-swipe}}`);
    expect(this.$()).to.have.length(1);
  });
});
