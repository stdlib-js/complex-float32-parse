"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=o(function(c,s){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,p=require('@stdlib/complex-float32-ctor/dist'),t=require('@stdlib/string-base-replace/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function l(){return/^([-+]?(\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i?)?([-+])?((\d*\.?\d*(?:[eE][-+]?\d+)?|Infinity|NaN)i)?$/}function v(e){var r,i,a=0;if(!m(e))throw new TypeError(n('null3F',e));if(r=t(e,/\s/g,"").match(l()),!r)throw new Error(n('nullFg',e));return i=r[1]&&!r[1].endsWith("i")?parseFloat(r[1]):0,r[4]?a=(r[3]==="-"?-1:1)*parseFloat(t(r[4],/i$/,"")):r[1]&&r[1].endsWith("i")&&(a=parseFloat(t(r[1],/i$/,""))),new p(i,a)}s.exports=v
});var d=u();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
