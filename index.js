const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-swipe',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/swipe.js');
    this.import('vendor/shims/swipe.js');
  },

  treeForVendor(vendorTree) {
    const swipeTree = new Funnel(path.dirname(require.resolve('swipe-js-iso')), {
      files: ['swipe.js'],
    });

    return new MergeTrees([vendorTree, swipeTree]);
  }
};
