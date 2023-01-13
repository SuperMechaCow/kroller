const jp = require("jsonpath");
/**
 * small Helper if search term type exists this should return the datanode
 * @param {String} type what we want to search
 * @returns an array of found DataNodes
 */
function helperGrabRules(bsData, type) {
  let nodes = jp.paths(bsData, `$..[?(@.${type})]`);
  let foundNodes = [];
  for (let node of nodes) {
    node.pop();
    foundNodes.push(jp.query(bsData, jp.stringify(node))[0]);
  }
  return foundNodes;
}

exports.helperGrabRules = helperGrabRules;
