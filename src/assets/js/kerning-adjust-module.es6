/*!
 * js-kerning-adjust-module.js JavaScript Library v1.0
 * https://github.com/yama-dev/js-kerning-adjust-module
 * Copyright yama-dev
 * Licensed under the MIT license.
 * Date: 2016-11-07
 */
(function(){
class KERNING_ADJUST_MODULE {
  constructor(elem,options = {}){
    let _that = this;
    if(!window.console) {window.console = { log: function(msg){} };}
    //URLでの判別に利用
    this.currentUrl = location.href;
    //オプション設定用
    this.config = {
      mode                 : options.mode||'px',
      elem                 : elem||'.kam',
      defaultFontSize      : options.defaultFontSize||16,
      defaultLetterSpacing : options.defaultLetterSpacing||'normal',
      setLetterSpacing     : options.setLetterSpacing||'normal',
      dataFilePath         : options.dataFilePath||'./assets/js/kam-config.json',
      dataFontStatus       : null
    }
    //DebugMode
    if(this.currentUrl.search(/localhost/) !== -1 || this.currentUrl.search(/192.168/) !== -1){
      this.DebugMode();
    } else { }
    document.addEventListener('DOMContentLoaded', (event) => {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          _that.config.dataFontStatus = JSON.parse(xhr.responseText);
          _that.CacheElement();
          _that.BindEvent();
        }
      };
      xhr.open('GET','./kam-config.json',true);
      xhr.send(null);
    });
  }
  DebugMode(){
    console.log(this);
  }
  CacheElement(){
    this.$elem = document.querySelectorAll(this.config.elem);
  }
  BindEvent(){
    let _that = this;
    this.EventDispatcher();
  }
  EventDispatcher(){
    let _that = this;
    this.$elem.forEach(function(elem){
      _that.SetKerning(elem);
    });
  }
  SetKerning(t){
    let _str               = Array.prototype.slice.call(t.innerHTML);
    let _strFix            = '';
    let _currentFontStatus = '';
    for (let _i = 0; _i < _str.length; ++_i) {
      // Initialize FontStatus
      _currentFontStatus = '';

      // Set current font status
      for (var key in this.config.dataFontStatus) {
        if(key === _str[_i]){
          _currentFontStatus = this.config.dataFontStatus[key];
        }
      }

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
    }
    this.OutputKerning(t,_strFix);
 }
  OutputKerning(t,h){
    let _html = h;
    // Adjust HTML-tags
    _html = _html.replace(/<span><<\/span><span .*>b<\/span><span .*>r<\/span><span>><\/span>/g,'<br>');
    _html = _html.replace(/<span><<\/span><span .*>b<\/span><span .*>r<\/span><span>\/<\/span><span>><\/span>/g,'<br>');
    _html = _html.replace(/<span><<\/span><span .*>b<\/span><span .*>r<\/span><span> <\/span><span>\/<\/span><span>><\/span>/g,'<br>');
    t.innerHTML = _html;
  }
}
window.KERNING_ADJUST_MODULE = KERNING_ADJUST_MODULE || {};
})(window);
