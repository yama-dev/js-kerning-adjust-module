/*!
 * js-kerning-adjust-module.js JavaScript Library v0.2.0
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
      defaultFontSize      : options.defaultFontSize||'',
      dataFilePath         : options.dataFilePath||'./kam-config.json',
      dataFontStatus       : options.dataFontStatus||''
    }
    //DebugMode
    if(this.currentUrl.search(/localhost/) !== -1 || this.currentUrl.search(/192.168/) !== -1){
      this.DebugMode();
    } else { }
    document.addEventListener('DOMContentLoaded', (event) => {
      if(this.config.dataFontStatus){
        this.CacheElement();
        this.BindEvent();
      } else {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            this.config.dataFontStatus = JSON.parse(xhr.responseText);
            this.CacheElement();
            this.BindEvent();
          }
        };
        xhr.open('GET','./kam-config.json',true);
        xhr.send(null);
      }
    });
  }
  DebugMode(){
    console.log(this);
  }
  CacheElement(){
    this.$elem = Array.prototype.slice.call(document.querySelectorAll(this.config.elem), 0); 
  }
  BindEvent(){
    this.EventDispatcher();
  }
  EventDispatcher(){
    this.$elem.forEach((elem) => {
      let fontSizeBefore = window.getComputedStyle(elem).fontSize.replace(/px/g,'');
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
          _strFix += '<span';
          if(_currentFontStatus != ''){
            _strFix += ' style="';
            if(_currentFontStatus[0] != null && _currentFontStatus[0] != null && _currentFontStatus[0] != undefined){
              _strFix += ' font-size:' + (this.config.defaultFontSize + Number(_currentFontStatus[0])) + 'px; ';
            }
            if(_currentFontStatus[1] != null && _currentFontStatus[1] != null && _currentFontStatus[1] != undefined){
              _strFix += ' letter-spacing:' + Number(_currentFontStatus[1]) + 'px; ';
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
    this.OutputKerning(t,_strFix);
  }
  OutputKerning(t,h){
    let _html = h;
    t.innerHTML = _html;
  }
}

window.KERNING_ADJUST_MODULE = KERNING_ADJUST_MODULE || {};
