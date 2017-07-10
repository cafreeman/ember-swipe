import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    this.set('slides', Array.apply(null, Array(10)).map((v, i) => `This is slide ${i}`));
  },

  actions: {
    getSlideRef(slide) {
      this.set('slide', slide)
    },

    nextSlide() {
      this.get('slide').next();
    },

    previousSlide() {
      this.get('slide').prev();
    }
  }
});
