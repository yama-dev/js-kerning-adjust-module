/*!
 * js-kerning-adjust-module.js JavaScript Library v0.2.1
 * https://github.com/yama-dev/js-kerning-adjust-module
 * Copyright yama-dev
 * Licensed under the MIT license.
 */

class KERNING_ADJUST_MODULE {

  constructor(options = {}){
    //URLでの判別に利用
    this.currentUrl = location.href;
    //オプション設定用
    this.config = {
      elem                 : options.elem||'.kam',
      defaultFontSize      : options.defaultFontSize||0,
      dataFilePath         : options.dataFilePath||'./kam-config.json',
      dataFontStatus       : options.dataFontStatus||''
    }

    // SetPlayer
    if(document.readyState == 'complete'){
      this.BindEvent();
    } else {
      document.addEventListener('DOMContentLoaded', (event) => {
        this.BindEvent();
      });
    }

  }

  CacheElement(){
    this.$elem = Array.prototype.slice.call(document.querySelectorAll(this.config.elem), 0); 
  }

  BindEvent(){
    this.CacheElement();
    if(this.config.dataFontStatus){
      this.EventDispatcher();
    } else {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          this.config.dataFontStatus = JSON.parse(xhr.responseText);
          this.EventDispatcher();
        }
      };
      xhr.open('GET','./kam-config.json',true);
      xhr.send(null);
    }
  }

  EventDispatcher(){
    this.$elem.forEach((elem) => {
      let fontSizeBefore = Number(window.getComputedStyle(elem).fontSize.replace(/px/g,''));
      this.config.defaultFontSize = fontSizeBefore ? fontSizeBefore : 16;
      this.SetKerning(elem);
    });
  }

  SetKerning(t){
    let _str               = Array.prototype.slice.call(t.innerHTML);
    let _strFix            = '';
    let _currentFontStatus = '';
    let _tagFlg            = false;
    for (let _i = 0; _i < _str.length; ++_i) {
      // Initialize FontStatus
      _currentFontStatus = '';

      // HTMLタグの中を置換しない(開始)
      if(!_tagFlg && _str[_i].match(/\</)) _tagFlg = true;

      if(!_str[_i].match(/\s/g) && !_tagFlg){
        // Set current font status
        for (var key in this.config.dataFontStatus) {
          if(key === _str[_i]){
            _currentFontStatus = this.config.dataFontStatus[key];
          }
        }

        if(_currentFontStatus){
          // Set HTML-text
          // -> Add css
          // -> Replace html
          _strFix += '<span class="js-kam"';
          if(_currentFontStatus != ''){
            _strFix += ' style="';
            if(_currentFontStatus[0] != '' && _currentFontStatus[0] != null && _currentFontStatus[0] != undefined){
              _strFix += 'font-size:' + (this.config.defaultFontSize + _currentFontStatus[0]) + 'px; ';
            }
            if(_currentFontStatus[1] != '' && _currentFontStatus[1] != null && _currentFontStatus[1] != undefined){
              _strFix += 'letter-spacing:' + _currentFontStatus[1] + 'px; ';
            }
            _strFix += '"';
          }
          _strFix += '>';
          _strFix += _str[_i];
          _strFix += '</span>';
        } else {
          _strFix += _str[_i];
        }
      } else {
        _strFix += _str[_i];
      }

      // HTMLタグの中を置換しない(解除)
      if(_tagFlg && _str[_i].match(/\>/)) _tagFlg = false;
    }
    this.Render(t,_strFix);
  }

  Render(t,h){
    let _html = h;
    t.innerHTML = _html;
  }

}

window.KERNING_ADJUST_MODULE = KERNING_ADJUST_MODULE || {};
