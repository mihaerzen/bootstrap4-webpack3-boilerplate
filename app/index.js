import 'bootstrap';
import Holder from 'holderjs';
import $ from 'jquery';

import './styles/index.scss';

/*
 * I didn't use arrow callback because in the current version of webpack
 * on production build it returns an error.
 */
$(function onReady() { // eslint-disable-line prefer-arrow-callback
  Holder.addTheme('thumb', {
    background: '#55595c',
    foreground: '#eceeef',
    text: 'Thumbnail',
  });
});
