# ember-swipe

This Ember addon is a direct port of the fantastic [react-swipe](https://github.com/voronianski/react-swipe) to Ember.

It provides a wrapper for [Swipe.js](https://github.com/voronianski/swipe-js-iso) and gives you a component that makes it easy to create a swipeable slider in your UI.

# Installation

`ember install ember-swipe`

You will also need to add the following styles to your stylesheet:

```css
.swipe-container {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.swipe-wrapper {
  overflow: hidden;
  position: relative;
}
.swipe-wrapper > div {
  float:left;
  width:100%;
  position: relative;
}
```
