import { alert, notice, info, success, error } from '../../node_modules/@pnotify/core';
import { defaults } from '../../node_modules/@pnotify/core';
defaults.closerHover = false;
defaults.styling = 'angeler';
defaults.icons = 'angeler';

export const pN = {
  basicSet: {
    hide: false,
    sticker: false,
    shadow: true,
  },
  controlInput: {
    TITLE: 'WRONG ENTER',
    TEXT: 'Please use only English layout',
    ADD__CLASS: 'notice-position angeler-extended',
  },
  invReq: {
    TITLE: 'САМСИНГ ВЕНТ ВРОНГ))) : get error 404',
    TEXT: 'Incorrect text input, please try again',
    ADD__CLASS: 'error-position angeler-extended',
  },
  tooMuchAns: {
    TITLE: 'Too many matches found',
    TEXT: 'Please enter a more specific query',
    ADD__CLASS: 'notice-position angeler-extended',
  },
  setCreator: function (setData) {
    this.basicSet.title = setData.TITLE;
    this.basicSet.text = setData.TEXT;
    this.basicSet.addClass = setData.ADD__CLASS;
    return this.basicSet;
  },
  noticePn: notice,
  errorPn: error,
};
