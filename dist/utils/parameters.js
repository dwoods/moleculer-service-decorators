"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
function getParameterBody(func) {
    const funcStr = func.toString().replace(STRIP_COMMENTS, "");
    const paramsStart = funcStr.indexOf("(") + 1;
    let numParenthesis = 1;
    let paramSeekPos = paramsStart;
    while (numParenthesis > 0 && paramSeekPos <= funcStr.length) {
        if (funcStr.charAt(paramSeekPos) === "(") {
            numParenthesis += 1;
        }
        else if (funcStr.charAt(paramSeekPos) === ")") {
            numParenthesis -= 1;
        }
        paramSeekPos += 1;
    }
    return funcStr.substring(paramsStart, paramSeekPos - 1);
}
function getParams(func) {
    const paramBody = getParameterBody(func);
    const chunks = [];
    let parenthesisCounter = 0;
    let chunkStart = 0;
    for (let i = 0; i < paramBody.length; i++) {
        if (paramBody.charAt(i) === "(") {
            parenthesisCounter += 1;
        }
        else if (paramBody.charAt(i) === ")") {
            parenthesisCounter -= 1;
        }
        else if (parenthesisCounter === 0 && paramBody.charAt(i) === ",") {
            chunks.push(paramBody.substring(chunkStart, i).trim());
            chunkStart = i + 1;
        }
    }
    if (paramBody.length > 0) {
        chunks.push(paramBody.substring(chunkStart, paramBody.length).trim());
    }
    return chunks;
}
/**
 * Returns the parameters of the given function as a list of strings
 * @param {any JS function} func
 */
function getParamNames(func) {
    const params = getParams(func);
    return params.map((param) => {
        return param.split("=")[0].trim();
    });
}
exports.getParamNames = getParamNames;
