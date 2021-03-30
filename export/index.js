(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.exportFromJSON = factory());
}(this, (function () { 'use strict';

  function isArray(data) {
      return Object.prototype.toString.call(data) === '[object Array]';
  }
  function assert(condition, msg) {
      if (!condition)
          throw new Error(msg);
  }
  function getValues(data) {
      return Object.keys(data).map(function (key) { return data[key]; });
  }
  function getKeys(data) {
      return Object.keys(data);
  }
  function getEntries(data) {
      return Object.keys(data).map(function (key) { return [key, data[key]]; });
  }
  function normalizeFileName(fileName, extension) {
      var suffix = '.' + extension;
      var extensionPattern = new RegExp("(\\" + extension + ")?$");
      return fileName.replace(/\s+/, '_').replace(extensionPattern, suffix);
  }
  function normalizeXMLName(name) {
      '555xmlHello .  world!'.trim().replace(/^([0-9,;]|(xml))+/, '');
      return name.replace(/[^_a-zA-Z 0-9:\-\.]/g, '').replace(/^([ 0-9-:\-\.]|(xml))+/i, '').replace(/ +/g, '-');
  }
  function indent(spaces) {
      return Array(spaces + 1).join(' ');
  }
  function stripHTML(text) {
      return text.replace(/([<>&])/g, function (_, $1) {
          switch ($1) {
              case '<': return '&lt;';
              case '>': return '&gt;';
              case '&': return '&amp;';
              default: return '';
          }
      });
  }

  function generateDataURI(content, type) {
      switch (type) {
          case 'txt': {
              return 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
          }
          case 'json': {
              return 'data:application/json;charset=utf-8,' + encodeURIComponent(content);
          }
          case 'csv': {
              return 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(content);
          }
          case 'xls': {
              return 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(content);
          }
          case 'xml': {
              return 'data:application/xml;charset=utf-8,' + encodeURIComponent(content);
          }
          default: {
              return '';
          }
      }
  }
  function downloadFile(content, type, fileName) {
      if (fileName === void 0) { fileName = 'download'; }
      var dataURI = generateDataURI(content, type);
      var anchor = document.createElement('a');
      anchor.href = dataURI;
      anchor.download = fileName;
      anchor.setAttribute('style', 'visibility:hidden');
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  }

  function _prepareData(data) {
      var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide a valid JSON';
      try {
          return typeof data === 'string' ? JSON.parse(data) : data;
      }
      catch (_a) {
          throw new Error(MESSAGE_VALID_JSON_FAIL);
      }
  }
  function _createJSONData(data, replacer, space) {
      if (replacer === void 0) { replacer = null; }
      var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide valid JSON object';
      try {
          return JSON.stringify(data, replacer, space);
      }
      catch (_a) {
          throw new Error(MESSAGE_VALID_JSON_FAIL);
      }
  }
  function _createTableMap(data) {
      return data.map(getEntries).reduce(function (tMap, rowKVs, rowIndex) {
          return rowKVs.reduce(function (map, kv) {
              var key = kv[0];
              var value = kv[1];
              var columnValues = map[key] || Array.from({ length: data.length }).map(function (_) { return ''; });
              columnValues[rowIndex] =
                  (typeof value !== 'string' ? JSON.stringify(value) : value) || '';
              map[key] = columnValues;
              return map;
          }, tMap);
      }, Object.create(null));
  }
  function createCSVData(data, delimiter) {
      if (delimiter === void 0) { delimiter = ','; }
      if (!data.length)
          return '';
      var tableMap = _createTableMap(data);
      var head = getKeys(tableMap).join(delimiter) + '\r\n';
      var columns = getValues(tableMap).map(function (column) { return column.map(function (value) { return "\"" + value.replace(/\"/g, '""') + "\""; }); });
      var rows = columns.reduce(function (mergedColumn, column) { return mergedColumn.map(function (value, rowIndex) { return "" + value + delimiter + column[rowIndex]; }); });
      return head + rows.join('\r\n');
  }
  function _renderTableHTMLText(data) {
      assert(data.length > 0);
      var tableMap = _createTableMap(data);
      var head = getKeys(tableMap);
      var columns = getValues(tableMap).map(function (column) { return column.map(function (value) { return "<td>" + value + "</td>"; }); });
      var rows = columns.reduce(function (mergedColumn, column) { return mergedColumn.map(function (value, rowIndex) { return "" + value + column[rowIndex]; }); });
      return "\n    <table>\n      <thead>\n        <tr><th><b>" + head.join('</b></th><th><b>') + "</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>" + rows.join("</tr>\n        <tr>") + "</tr>\n      </tbody>\n    </table>\n  ";
  }
  function createXLSData(data) {
      if (!data.length)
          return '';
      var content = "<html>\n  <head>\n    <meta charset=\"UTF-8\">\n  </head >\n  <body>\n    " + _renderTableHTMLText(data) + "\n  </body>\n</html >\n";
      return content;
  }
  function createXMLData(data) {
      var content = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!DOCTYPE base>\n" + _renderXML(data, 'base') + "\n";
      return content;
  }
  function _renderXML(data, tagName, arrayElementTag, spaces) {
      if (arrayElementTag === void 0) { arrayElementTag = 'element'; }
      if (spaces === void 0) { spaces = 0; }
      var tag = normalizeXMLName(tagName);
      var indentSpaces = indent(spaces);
      if (data === null || data === undefined) {
          return indentSpaces + "<" + tag + " />";
      }
      var content = isArray(data)
          ? data.map(function (item) { return _renderXML(item, arrayElementTag, arrayElementTag, spaces + 2); }).join('\n')
          : typeof data === 'object'
              ? getEntries(data)
                  .map(function (_a) {
                  var _b = __read(_a, 2), key = _b[0], value = _b[1];
                  return _renderXML(value, key, arrayElementTag, spaces + 2);
              }).join('\n')
              : indentSpaces + '  ' + stripHTML(String(data));
      var contentWithWrapper = indentSpaces + "<" + tag + ">\n" + content + "\n" + indentSpaces + "</" + tag + ">";
      return contentWithWrapper;
  }

  function exportFromJSON(_a) {
      var data = _a.data, _b = _a.fileName, fileName = _b === void 0 ? 'download' : _b, _c = _a.exportType, exportType = _c === void 0 ? 'txt' : _c, _d = _a.replacer, replacer = _d === void 0 ? null : _d, _e = _a.space, space = _e === void 0 ? 4 : _e, _f = _a.processor, processor = _f === void 0 ? downloadFile : _f, _g = _a.withBOM, withBOM = _g === void 0 ? false : _g, _h = _a.delimiter, delimiter = _h === void 0 ? ',' : _h;
      var MESSAGE_IS_ARRAY_FAIL = 'Invalid export data. Please provide an array of object';
      var MESSAGE_UNKNOWN_EXPORT_TYPE = "Can't export unknown data type " + exportType + ".";
      var safeData = _prepareData(data);
      var JSONData = _createJSONData(safeData, replacer, space);
      switch (exportType) {
          case 'txt': {
              return processor(JSONData, exportType, normalizeFileName(fileName, 'txt'));
          }
          case 'json': {
              return processor(JSONData, exportType, normalizeFileName(fileName, 'json'));
          }
          case 'csv': {
              assert(isArray(safeData), MESSAGE_IS_ARRAY_FAIL);
              var BOM = '\ufeff';
              var CSVData = createCSVData(safeData, delimiter);
              var content = withBOM ? BOM + CSVData : CSVData;
              return processor(content, exportType, normalizeFileName(fileName, 'csv'));
          }
          case 'xls': {
              assert(isArray(safeData), MESSAGE_IS_ARRAY_FAIL);
              var content = createXLSData(safeData);
              return processor(content, exportType, normalizeFileName(fileName, 'xls'));
          }
          case 'xml': {
              var content = createXMLData(safeData);
              return processor(content, exportType, normalizeFileName(fileName, 'xml'));
          }
          default:
              throw new Error(MESSAGE_UNKNOWN_EXPORT_TYPE);
      }
  }
  (function (exportFromJSON) {
      exportFromJSON.types = {
          txt: 'txt',
          json: 'json',
          csv: 'csv',
          xls: 'xls',
          xml: 'xml',
      };
      exportFromJSON.processors = { downloadFile: downloadFile };
  })(exportFromJSON || (exportFromJSON = {}));
  var exportFromJSON$1 = exportFromJSON;

  return exportFromJSON$1;

})));
