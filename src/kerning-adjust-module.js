'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * jquery-kerning-adjust-module.js JavaScript Library v1.0
 * https://github.com/yama-dev/jquery-kerning-adjust-module
 * Copyright yama-dev
 * Licensed under the MIT license.
 * Date: 2016-11-07
 */
(function () {
  var KERNING_ADJUST_MODULE = function () {
    function KERNING_ADJUST_MODULE(elem) {
      var _dataFontStatus;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, KERNING_ADJUST_MODULE);

      if (!window.console) {
        window.console = { log: function log(msg) {} };
      }
      //URLでの判別に利用
      this.currentUrl = location.href;
      //オプション設定用
      this.config = {
        mode: options.mode || 'px',
        elem: elem || '.kam',
        defaultFontSize: options.defaultFontSize || 16,
        defaultLetterSpacing: options.defaultLetterSpacing || 'normal',
        setLetterSpacing: options.setLetterSpacing || 'normal',
        dataFontStatus: (_dataFontStatus = {
          'ぁ': [-2, -2, null],
          'あ': [-2, -2, null],
          'ぃ': [-2, -2, null],
          'い': [-2, -2, null],
          'ぅ': [-2, -2, null],
          'う': [-2, -2, null],
          'ぇ': [-2, -2, null],
          'え': [-2, -2, null],
          'ぉ': [-2, -2, null],
          'お': [-2, -2, null],
          'か': [-2, -2, null],
          'が': [-2, -2, null],
          'き': [-2, -2, null],
          'ぎ': [-2, -2, null],
          'く': [-2, -2, null],
          'ぐ': [-2, -2, null],
          'け': [-2, -2, null],
          'げ': [-2, -2, null],
          'こ': [-2, -2, null],
          'ご': [-2, -2, null],
          'さ': [-2, -2, null],
          'ざ': [-2, -2, null],
          'し': [-2, -2, null],
          'じ': [-2, -2, null],
          'す': [-2, -2, null],
          'ず': [-2, -2, null],
          'せ': [-2, -2, null],
          'ぜ': [-2, -2, null],
          'そ': [-2, -2, null],
          'ぞ': [-2, -2, null],
          'た': [-2, -2, null],
          'だ': [-2, -2, null],
          'ち': [-2, -2, null],
          'ぢ': [-2, -2, null],
          'っ': [-2, -2, null],
          'つ': [-2, -2, null],
          'づ': [-2, -2, null],
          'て': [-2, -2, null],
          'で': [-2, -2, null],
          'と': [-2, -2, null],
          'ど': [-2, -2, null],
          'な': [-2, -2, null],
          'に': [-2, -2, null],
          'ぬ': [-2, -2, null],
          'ね': [-2, -2, null],
          'の': [-2, -2, null],
          'は': [-2, -2, null],
          'ば': [-2, -2, null],
          'ぱ': [-2, -2, null],
          'ひ': [-2, -2, null],
          'び': [-2, -2, null],
          'ぴ': [-2, -2, null],
          'ふ': [-2, -2, null],
          'ぶ': [-2, -2, null],
          'ぷ': [-2, -2, null],
          'へ': [-2, -2, null],
          'べ': [-2, -2, null],
          'ぺ': [-2, -2, null],
          'ほ': [-2, -2, null],
          'ぼ': [-2, -2, null],
          'ぽ': [-2, -2, null],
          'ま': [-2, -2, null],
          'み': [-2, -2, null],
          'む': [-2, -2, null],
          'め': [-2, -2, null],
          'も': [-2, -2, null],
          'ゃ': [-2, -2, null],
          'や': [-2, -2, null],
          'ゅ': [-2, -2, null],
          'ゆ': [-2, -2, null],
          'ょ': [-2, -2, null],
          'よ': [-2, -2, null],
          'ら': [-2, -2, null],
          'り': [-2, -2, null],
          'る': [-2, -2, null],
          'れ': [-2, -2, null],
          'ろ': [-2, -2, null],
          'ゎ': [-2, -2, null],
          'わ': [-2, -2, null],
          'ゐ': [-2, -2, null],
          'ゑ': [-2, -2, null],
          'を': [-2, -2, null],
          'ん': [-2, -2, null],
          'ァ': [-2, -2, null],
          'ア': [-2, -2, null],
          'ィ': [-2, -2, null],
          'イ': [-2, -2, null],
          'ゥ': [-2, -2, null],
          'ウ': [-2, -2, null],
          'ェ': [-2, -2, null],
          'エ': [-2, -2, null],
          'ォ': [-2, -2, null],
          'オ': [-2, -2, null],
          'カ': [-2, -2, null],
          'ガ': [-2, -2, null],
          'キ': [-2, -2, null],
          'ギ': [-2, -2, null],
          'ク': [-2, -2, null],
          'グ': [-2, -2, null],
          'ケ': [-2, -2, null],
          'ゲ': [-2, -2, null],
          'コ': [-2, -2, null],
          'ゴ': [-2, -2, null],
          'サ': [-2, -2, null],
          'ザ': [-2, -2, null],
          'シ': [-2, -2, null],
          'ジ': [-2, -2, null],
          'ス': [-2, -2, null],
          'ズ': [-2, -2, null],
          'セ': [-2, -2, null],
          'ゼ': [-2, -2, null],
          'ソ': [-2, -2, null],
          'ゾ': [-2, -2, null],
          'タ': [-2, -2, null],
          'ダ': [-2, -2, null],
          'チ': [-2, -2, null],
          'ヂ': [-2, -2, null],
          'ッ': [-2, -2, null],
          'ツ': [-2, -2, null],
          'ヅ': [-2, -2, null],
          'テ': [-2, -2, null],
          'デ': [-2, -2, null],
          'ト': [-2, -2, null],
          'ド': [-2, -2, null],
          'ナ': [-2, -2, null],
          'ニ': [-2, -2, null],
          'ヌ': [-2, -2, null],
          'ネ': [-2, -2, null],
          'ノ': [-2, -2, null],
          'ハ': [-2, -2, null],
          'バ': [-2, -2, null],
          'パ': [-2, -2, null],
          'ヒ': [-2, -2, null],
          'ビ': [-2, -2, null],
          'ピ': [-2, -2, null],
          'フ': [-2, -2, null],
          'ブ': [-2, -2, null],
          'プ': [-2, -2, null],
          'ヘ': [-2, -2, null],
          'ベ': [-2, -2, null],
          'ペ': [-2, -2, null],
          'ホ': [-2, -2, null],
          'ボ': [-2, -2, null],
          'ポ': [-2, -2, null],
          'マ': [-2, -2, null],
          'ミ': [-2, -2, null],
          'ム': [-2, -2, null],
          'メ': [-2, -2, null],
          'モ': [-2, -2, null],
          'ャ': [-2, -2, null],
          'ヤ': [-2, -2, null],
          'ュ': [-2, -2, null],
          'ユ': [-2, -2, null],
          'ョ': [-2, -2, null],
          'ヨ': [-2, -2, null],
          'ラ': [-2, -2, null],
          'リ': [-2, -2, null],
          'ル': [-2, -2, null],
          'レ': [-2, -2, null],
          'ロ': [-2, -2, null],
          'ヮ': [-2, -2, null],
          'ワ': [-2, -2, null],
          'ヰ': [-2, -2, null],
          'ヱ': [-2, -2, null],
          'ヲ': [-2, -2, null],
          'ン': [-2, -2, null],
          'ヴ': [-2, -2, null],
          'ヵ': [-2, -2, null],
          'ヶ': [-2, -2, null],
          'Ａ': [0, 0, null],
          'Ｂ': [0, 0, null],
          'Ｃ': [0, 0, null],
          'Ｄ': [0, 0, null],
          'Ｅ': [0, 0, null],
          'Ｆ': [0, 0, null],
          'Ｇ': [0, 0, null],
          'Ｈ': [0, 0, null],
          'Ｉ': [0, 0, null],
          'Ｊ': [0, 0, null],
          'Ｋ': [0, 0, null],
          'Ｌ': [0, 0, null],
          'Ｍ': [0, 0, null],
          'Ｎ': [0, 0, null],
          'Ｏ': [0, 0, null],
          'Ｐ': [0, 0, null],
          'Ｑ': [0, 0, null],
          'Ｒ': [0, 0, null],
          'Ｓ': [0, 0, null],
          'Ｔ': [0, 0, null],
          'Ｕ': [0, 0, null],
          'Ｖ': [0, 0, null],
          'Ｗ': [0, 0, null],
          'Ｘ': [0, 0, null],
          'Ｙ': [0, 0, null],
          'Ｚ': [0, 0, null],
          'ａ': [0, 0, null],
          'ｂ': [0, 0, null],
          'ｃ': [0, 0, null],
          'ｄ': [0, 0, null],
          'ｅ': [0, 0, null],
          'ｆ': [0, 0, null],
          'ｇ': [0, 0, null],
          'ｈ': [0, 0, null],
          'ｉ': [0, 0, null],
          'ｊ': [0, 0, null],
          'ｋ': [0, 0, null],
          'ｌ': [0, 0, null],
          'ｍ': [0, 0, null],
          'ｎ': [0, 0, null],
          'ｏ': [0, 0, null],
          'ｐ': [0, 0, null],
          'ｑ': [0, 0, null],
          'ｒ': [0, 0, null],
          'ｓ': [0, 0, null],
          'ｔ': [0, 0, null],
          'ｕ': [0, 0, null],
          'ｖ': [0, 0, null],
          'ｗ': [0, 0, null],
          'ｘ': [0, 0, null],
          'ｙ': [0, 0, null],
          'ｚ': [0, 0, null],
          '０': [0, 0, null],
          '１': [0, 0, null],
          '２': [0, 0, null],
          '３': [0, 0, null],
          '４': [0, 0, null],
          '５': [0, 0, null],
          '６': [0, 0, null],
          '７': [0, 0, null],
          '８': [0, 0, null],
          '９': [0, 0, null],
          'ー': [0, 0, null],
          '～': [0, 0, null],
          '、': [0, 0, null],
          '。': [0, 0, null],
          '（': [0, 0, null],
          '）': [0, 0, null],
          '・': [0, 0, null],
          '：': [0, 0, null],
          '；': [0, 0, null],
          '｜': [0, 0, null]
        }, _dataFontStatus['\uFF09'] = [0, 0, null], _dataFontStatus['\uFF08'] = [0, 0, null], _dataFontStatus['［'] = [0, 0, null], _dataFontStatus['］'] = [0, 0, null], _dataFontStatus['｛'] = [0, 0, null], _dataFontStatus['｝'] = [0, 0, null], _dataFontStatus['【'] = [0, 0, null], _dataFontStatus['】'] = [0, 0, null], _dataFontStatus['〈'] = [0, 0, null], _dataFontStatus['〉'] = [0, 0, null], _dataFontStatus['《'] = [0, 0, null], _dataFontStatus['》'] = [0, 0, null], _dataFontStatus['「'] = [0, 0, null], _dataFontStatus['」'] = [0, 0, null], _dataFontStatus['『'] = [0, 0, null], _dataFontStatus['』'] = [0, 0, null], _dataFontStatus['A'] = [0, 0, null], _dataFontStatus['B'] = [0, 0, null], _dataFontStatus['C'] = [0, 0, null], _dataFontStatus['D'] = [0, 0, null], _dataFontStatus['E'] = [0, 0, null], _dataFontStatus['F'] = [0, 0, null], _dataFontStatus['G'] = [0, 0, null], _dataFontStatus['H'] = [0, 0, null], _dataFontStatus['I'] = [0, 0, null], _dataFontStatus['J'] = [0, 0, null], _dataFontStatus['K'] = [0, 0, null], _dataFontStatus['L'] = [0, 0, null], _dataFontStatus['M'] = [0, 0, null], _dataFontStatus['N'] = [0, 0, null], _dataFontStatus['O'] = [0, 0, null], _dataFontStatus['P'] = [0, 0, null], _dataFontStatus['Q'] = [0, 0, null], _dataFontStatus['R'] = [0, 0, null], _dataFontStatus['S'] = [0, 0, null], _dataFontStatus['T'] = [0, 0, null], _dataFontStatus['U'] = [0, 0, null], _dataFontStatus['V'] = [0, 0, null], _dataFontStatus['W'] = [0, 0, null], _dataFontStatus['X'] = [0, 0, null], _dataFontStatus['Y'] = [0, 0, null], _dataFontStatus['Z'] = [0, 0, null], _dataFontStatus['a'] = [0, 0, null], _dataFontStatus['b'] = [0, 0, null], _dataFontStatus['c'] = [0, 0, null], _dataFontStatus['d'] = [0, 0, null], _dataFontStatus['e'] = [0, 0, null], _dataFontStatus['f'] = [0, 0, null], _dataFontStatus['g'] = [0, 0, null], _dataFontStatus['h'] = [0, 0, null], _dataFontStatus['i'] = [0, 0, null], _dataFontStatus['j'] = [0, 0, null], _dataFontStatus['k'] = [0, 0, null], _dataFontStatus['l'] = [0, 0, null], _dataFontStatus['m'] = [0, 0, null], _dataFontStatus['n'] = [0, 0, null], _dataFontStatus['o'] = [0, 0, null], _dataFontStatus['p'] = [0, 0, null], _dataFontStatus['q'] = [0, 0, null], _dataFontStatus['r'] = [0, 0, null], _dataFontStatus['s'] = [0, 0, null], _dataFontStatus['t'] = [0, 0, null], _dataFontStatus['u'] = [0, 0, null], _dataFontStatus['v'] = [0, 0, null], _dataFontStatus['w'] = [0, 0, null], _dataFontStatus['x'] = [0, 0, null], _dataFontStatus['y'] = [0, 0, null], _dataFontStatus['z'] = [0, 0, null], _dataFontStatus['0'] = [0, 0, null], _dataFontStatus['1'] = [0, 0, null], _dataFontStatus['2'] = [0, 0, null], _dataFontStatus['3'] = [0, 0, null], _dataFontStatus['4'] = [0, 0, null], _dataFontStatus['5'] = [0, 0, null], _dataFontStatus['6'] = [0, 0, null], _dataFontStatus['7'] = [0, 0, null], _dataFontStatus['8'] = [0, 0, null], _dataFontStatus['9'] = [0, 0, null], _dataFontStatus['ｰ'] = [0, 0, null], _dataFontStatus['､'] = [0, 0, null], _dataFontStatus['｡'] = [0, 0, null], _dataFontStatus['('] = [0, 0, null], _dataFontStatus[')'] = [0, 0, null], _dataFontStatus['/'] = [0, 0, null], _dataFontStatus[':'] = [0, 0, null], _dataFontStatus[';'] = [0, 0, null], _dataFontStatus['|'] = [0, 0, null], _dataFontStatus)
      };
      //DebugMode
      if (this.currentUrl.search(/localhost/) !== -1 || this.currentUrl.search(/192.168/) !== -1) {
        this.DebugMode();
      } else {}
      this.CacheElement();
      this.BindEvent();
    }

    KERNING_ADJUST_MODULE.prototype.DebugMode = function DebugMode() {
      console.log(this);
    };

    KERNING_ADJUST_MODULE.prototype.CacheElement = function CacheElement() {
      this.$elem = $(this.config.elem);
    };

    KERNING_ADJUST_MODULE.prototype.BindEvent = function BindEvent() {
      var _this = this;

      var _that = this;
      $(window).on('load', function () {
        _this.EventDispatcher();
      });
    };

    KERNING_ADJUST_MODULE.prototype.EventDispatcher = function EventDispatcher() {
      var _that = this;
      this.$elem.each(function () {
        _that.SetKerning(this);
      });
    };

    KERNING_ADJUST_MODULE.prototype.SetKerning = function SetKerning(t) {
      var _str = Array.prototype.slice.call(t.innerHTML);
      var _strFix = '';
      var _currentFontStatus = '';
      for (var _i = 0; _i < _str.length; ++_i) {
        // Initialize FontStatus
        _currentFontStatus = '';

        // Set current font status
        for (var key in this.config.dataFontStatus) {
          if (key === _str[_i]) {
            _currentFontStatus = this.config.dataFontStatus[key];
          }
        }

        // Set HTML-text
        // -> Add css
        // -> Replace html
        _strFix += '<span';
        if (_currentFontStatus != '') {
          _strFix += ' style="';
          if (_currentFontStatus[0] != 0 && _currentFontStatus[0] != null && _currentFontStatus[0] != undefined) {
            _strFix += ' font-size:' + (this.config.defaultFontSize + Number(_currentFontStatus[0])) + 'px; ';
          }
          if (_currentFontStatus[1] != 0 && _currentFontStatus[1] != null && _currentFontStatus[1] != undefined) {
            _strFix += ' letter-spacing:' + Number(_currentFontStatus[1]) + 'px; ';
          }
          _strFix += '"';
        }
        _strFix += '>';
        _strFix += _str[_i];
        _strFix += '</span>';
      }
      this.OutputKerning(t, _strFix);
    };

    KERNING_ADJUST_MODULE.prototype.OutputKerning = function OutputKerning(t, h) {
      var _html = h;
      // Adjust HTML-tags
      _html = _html.replace(/<span><<\/span><span .*>b<\/span><span .*>r<\/span><span>><\/span>/g, '<br>');
      _html = _html.replace(/<span><<\/span><span .*>b<\/span><span .*>r<\/span><span>\/<\/span><span>><\/span>/g, '<br>');
      _html = _html.replace(/<span><<\/span><span .*>b<\/span><span .*>r<\/span><span> <\/span><span>\/<\/span><span>><\/span>/g, '<br>');
      $(t).html(_html);
    };

    return KERNING_ADJUST_MODULE;
  }();

  window.KERNING_ADJUST_MODULE = KERNING_ADJUST_MODULE || {};
})(window);