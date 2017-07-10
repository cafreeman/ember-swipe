import Ember from 'ember';
import * as P from 'prop-types';
import Swipe from 'swipe-js-iso';
import layout from '../templates/components/ember-swipe';

export default Ember.Component.extend({
  layout,

  propTypes: {
    swipeOptions: P.shape({
      startSlide: P.number,
      speed: P.number,
      auto: P.number,
      continuous: P.bool,
      disableScroll: P.bool,
      stopPropagation: P.bool,
      swiping: P.func,
      callback: P.func,
      transitionEnd: P.func
    }),
    getRefToSwipe: P.func,
    containerStyles: P.string
  },

  classNames: ['swipe-container'],

  classNameBindings: ['containerStyles'],

  getDefaultProps() {
    return {
      swipeOptions: {}
    };
  },

  didInsertElement() {
    this._super(...arguments);
    this.set('swipe', new Swipe(document.getElementById(this.get('elementId')), this.get('swipeOptions')));
    this.get('onDidInsertElement')(this.get('swipe'));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('swipe').kill();
    this.set('swipe', void 0);
  },

  actions: {
    next() {
      this.get('swipe').next();
    },

    prev() {
      this.get('swipe').prev();
    },

    slide(...args) {
      this.get('swipe').slide(...args);
    },

    getPos() {
      return this.get('swipe').getPos();
    },

    getNumSlides() {
      return this.get('swipe').getNumSlides();
    }
  }
});
