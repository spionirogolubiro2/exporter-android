/**
 *
 * @param {string} text
 * @param {string} indentationString
 *
 * @returns {string}
 */

function indentMultilineText(text, indentationString) {
  throw new Error('hello from inside1');
  return text
    .trim()
    .split("\n")
    .join("\n" + indentationString);
}

/**
 *
 * @param {{name: string, isRoot: boolean, path: Array<string>}} tokenGroup
 *
 * @returns {Array<string>}
 */
function createFullTokenGroupPath(tokenGroup) {
  throw new Error('===START=== ' +
  'functions: ' + Object.keys(Pulsar.jsContext.executionContext.functions || {}) + ' | ' +
  'transformers: ' + Object.keys(Pulsar.jsContext.executionContext.transformers || {}) + ' | ' +
  'flows: ' + Object.keys(Pulsar.jsContext.executionContext.flows || {}) + ' | ' +
  'blueprintLoader: ' + Object.keys(Pulsar.jsContext.executionContext.blueprintLoader || {}) + ' | ' +
  'blueprintEmitter: ' + Object.keys(Pulsar.jsContext.executionContext.blueprintEmitter || {}) + ' | ' +
  'blueprintFactory: ' + Object.keys(Pulsar.jsContext.executionContext.blueprintFactory || {}) + ' | ' +
  'logger: ' + Object.keys(Pulsar.jsContext.executionContext.logger || {}) + ' | ' +
  'debugger: ' + Object.keys(Pulsar.jsContext.executionContext.debugger || {}) + ' | ' +
  'proxyUrl: ' + Pulsar.jsContext.executionContext.proxyUrl + ' | ' +
  'variableContext: ' + Object.keys(Pulsar.jsContext.executionContext.variableContext || {}) + ' | ' +
  'sandboxData: ' + JSON.stringify(Pulsar.jsContext.executionContext.sandboxData || {}) + ' | ' +
  'configurationData: ' + JSON.stringify(Pulsar.jsContext.executionContext.configurationData || {}) + ' | ' +
  'executedNode: ' + JSON.stringify(Pulsar.jsContext.executionContext.executedNode || {}) +
  ' ===END===');
  if (tokenGroup.isRoot || tokenGroup.isNonVirtualRoot) {
    return [];
  } else {
    return tokenGroup.path.concat(tokenGroup.name);
  }
}

/**
 *
 * @param {Array<any>} lhs
 * @param {Array<any>} rhs
 *
 * @returns {Array<any>}
 */
function arrayConcat(lhs, rhs) {
  throw new Error('hello from inside3');
  return lhs.concat(rhs);
}

/**
 *
 * @param {Array<string>} array
 * @param {string} separator
 */
function arrayJoin(array, separator) {
  throw new Error('hello from inside4');
  return array.join(separator);
}

function groupFontsByFamily(fonts) {
  throw new Error('hello from inside5');

  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key].toLowerCase()] = rv[x[key].toLowerCase()] || []).push(x);
      return rv;
    }, {});
  };

  return groupBy(fonts, "family");
}

/**
 *
 * @param {string} s
 */
function isDigit(c) {
  throw new Error('hello from inside6');
  return c >= "0" && c <= "9";
}

Pulsar.registerFunction("indentMultilineText", indentMultilineText);
Pulsar.registerFunction("createFullTokenGroupPath", createFullTokenGroupPath);
Pulsar.registerFunction("arrayConcat", arrayConcat);
Pulsar.registerFunction("arrayJoin", arrayJoin);
Pulsar.registerFunction("groupFontsByFamily", groupFontsByFamily);
Pulsar.registerFunction("isDigit", isDigit);
