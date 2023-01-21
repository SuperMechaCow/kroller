const jp = require("jsonpath");
/**
 * small Helper if search term type exists this should return the datanode
 * @param {String} type what we want to search
 * @returns an array of found DataNodes
 */
function helperGrabRules(bsData, type) {
  let nodes = jp.paths(bsData, `$..[?(${type})]`);
  let foundNodes = [];
  for (let node of nodes) {
    node.pop();
    foundNodes.push(jp.query(bsData, jp.stringify(node))[0]);
  }
  return foundNodes;
}

/**
 * Calculates the Levenshtein distance between two strings
 * @param {string} a - The first string to compare
 * @param {string} b - The second string to compare
 * @returns {number} - The Levenshtein distance between the two strings
 */
function levenshteinDistance(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1
          )
        ); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

exports.helperGrabRules = helperGrabRules;
exports.levenshteinDistance = levenshteinDistance;
