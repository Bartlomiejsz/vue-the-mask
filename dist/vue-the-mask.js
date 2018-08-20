(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["VueTheMask"]=t():e["VueTheMask"]=t()})("undefined"!==typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="wmdO")}({FsIF:function(e,t,n){if("undefined"!==typeof window){let e;(e=window.document.currentScript)&&(e=e.src.match(/(.+\/)[^/]+\.js$/))&&(n.p=e[1])}},wmdO:function(e,t,n){"use strict";n.r(t);n("FsIF");var r={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:e=>e.toLocaleUpperCase()},a:{pattern:/[a-zA-Z]/,transform:e=>e.toLocaleLowerCase()},"!":{escape:!0}};function a(e,t,n=!0,r){e=e||"",t=t||"";var a=0,o=0,s="";while(a<t.length&&o<e.length){var i=t[a],u=r[i],l=e[o];u&&!u.escape?(u.pattern.test(l)&&(s+=u.transform?u.transform(l):l,a++),o++):(u&&u.escape&&(a++,i=t[a]),n&&(s+=i),l===i&&o++,a++)}var c="";while(a<t.length&&n){i=t[a];if(r[i]){c="";break}c+=i,a++}return s+c}function o(e,t,n){return t=t.slice().sort((e,t)=>e.length-t.length),function(r,a,o=!0){var s=0;while(s<t.length){var i=t[s];s++;var u=t[s];if(!(u&&e(r,u,!0,n).length>i.length))return e(r,i,o,n)}return""}}var s=function(e,t,n=!0,r){return Array.isArray(t)?o(a,t,r)(e,t,n,r):a(e,t,n,r)};function i(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var u=function(e,t){var n=t.value;if((Array.isArray(n)||"string"===typeof n)&&(n={mask:n,tokens:r}),"INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");if(1!==a.length)throw new Error("v-mask directive requires 1 input, found "+a.length);e=a[0]}e.oninput=function(t){if(t.isTrusted){var r=e.selectionEnd,a=e.value[r-1];e.value=s(e.value,n.mask,!0,n.tokens);while(r<e.value.length&&e.value.charAt(r-1)!==a)r++;e===document.activeElement&&(e.setSelectionRange(r,r),setTimeout(function(){e.setSelectionRange(r,r)},0)),e.dispatchEvent(i("input"))}};var o=s(e.value,n.mask,!0,n.tokens);o!==e.value&&(e.value=o,e.dispatchEvent(i("input")))},l={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:()=>r}},directives:{mask:u},data(){return{lastValue:null,display:this.value}},watch:{value(e){e!==this.lastValue&&(this.display=e)},masked(){this.refresh(this.display)}},computed:{config(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput(e){e.isTrusted||this.refresh(e.target.value)},refresh(e){this.display=e;e=s(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},f=[];function d(e,t,n,r,a,o,s,i){e=e||{};var u=typeof e.default;"object"!==u&&"function"!==u||(e=e.default);var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o),s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):a&&(l=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var f=c.render;c.render=function(e,t){return l.call(t),f(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}var p=!1,h=null,v=null,m=null,k=d(l,c,f,p,h,v,m),y=k.exports;function g(e){e.component(y.name,y),e.directive("mask",u)}var _=g;"undefined"!==typeof window&&window.Vue&&window.Vue.use(g),n.d(t,"TheMask",function(){return y}),n.d(t,"mask",function(){return u}),n.d(t,"tokens",function(){return r});t["default"]=_}})["default"]});