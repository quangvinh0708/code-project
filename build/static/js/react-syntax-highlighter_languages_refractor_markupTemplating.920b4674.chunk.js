(this["webpackJsonpcodepen-clone"]=this["webpackJsonpcodepen-clone"]||[]).push([[81],{332:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var p=0;p<i.length&&!(o>=r.length);p++){var s=i[p];if("string"===typeof s||s.content&&"string"===typeof s.content){var u=r[o],l=t.tokenStack[u],g="string"===typeof s?s:s.content,f=n(a,u),k=g.indexOf(f);if(k>-1){++o;var d=g.substring(0,k),h=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),m=g.substring(k+f.length),y=[];d&&y.push.apply(y,c([d])),y.push(h),m&&y.push.apply(y,c([m])),"string"===typeof s?i.splice.apply(i,[p,1].concat(y)):s.content=y}}else s.content&&c(s.content)}return i}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.920b4674.chunk.js.map