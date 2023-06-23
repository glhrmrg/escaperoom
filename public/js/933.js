"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[933],{2301:(e,t,n)=>{n.d(t,{P:()=>u});var r=n(4350),a=n(8354),o={class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"};var u=(0,r._)({},[["render",function(e,t){return(0,a.o)(),(0,a.f)("button",o,[(0,a.r)(e.$slots,"default")])}]])},5380:(e,t,n)=>{n.d(t,{_:()=>s,a:()=>c,b:()=>o});var r=n(8354),a={class:"text-sm text-red-600"},o={__name:"InputError",props:{message:{type:String}},setup:function(e){return function(t,n){return(0,r.i)(((0,r.o)(),(0,r.f)("div",null,[(0,r.b)("p",a,(0,r.t)(e.message),1)],512)),[[r.p,e.message]])}}},u={class:"block font-medium text-sm text-gray-700"},i={key:0},l={key:1},s={__name:"InputLabel",props:{value:{type:String}},setup:function(e){return function(t,n){return(0,r.o)(),(0,r.f)("label",u,[e.value?((0,r.o)(),(0,r.f)("span",i,(0,r.t)(e.value),1)):((0,r.o)(),(0,r.f)("span",l,[(0,r.r)(t.$slots,"default")]))])}}},f=["value"],c={__name:"TextInput",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup:function(e,t){var n=t.expose,a=(0,r.m)(null);return(0,r.k)((function(){a.value.hasAttribute("autofocus")&&a.value.focus()})),n({focus:function(){return a.value.focus()}}),function(t,n){return(0,r.o)(),(0,r.f)("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:e.modelValue,onInput:n[0]||(n[0]=function(e){return t.$emit("update:modelValue",e.target.value)}),ref_key:"input",ref:a},null,40,f)}}}},3933:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(8354),a=n(5380),o=n(2301),u=(0,r.b)("header",null,[(0,r.b)("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),(0,r.b)("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),i={key:0},l={class:"text-sm mt-2 text-gray-800"},s={class:"mt-2 font-medium text-sm text-green-600"},f={class:"flex items-center gap-4"},c={key:0,class:"text-sm text-gray-600"},m={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup:function(e){var t=(0,r.K)().props.auth.user,n=(0,r.T)({name:t.name,email:t.email});return function(m,d){return(0,r.o)(),(0,r.f)("section",null,[u,(0,r.b)("form",{onSubmit:d[2]||(d[2]=(0,r.e)((function(e){return(0,r.u)(n).patch(m.route("profile.update"))}),["prevent"])),class:"mt-6 space-y-6"},[(0,r.b)("div",null,[(0,r.a)(a._,{for:"name",value:"Name"}),(0,r.a)(a.a,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:(0,r.u)(n).name,"onUpdate:modelValue":d[0]||(d[0]=function(e){return(0,r.u)(n).name=e}),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),(0,r.a)(a.b,{class:"mt-2",message:(0,r.u)(n).errors.name},null,8,["message"])]),(0,r.b)("div",null,[(0,r.a)(a._,{for:"email",value:"Email"}),(0,r.a)(a.a,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:(0,r.u)(n).email,"onUpdate:modelValue":d[1]||(d[1]=function(e){return(0,r.u)(n).email=e}),required:"",autocomplete:"username"},null,8,["modelValue"]),(0,r.a)(a.b,{class:"mt-2",message:(0,r.u)(n).errors.email},null,8,["message"])]),e.mustVerifyEmail&&null===(0,r.u)(t).email_verified_at?((0,r.o)(),(0,r.f)("div",i,[(0,r.b)("p",l,[(0,r.d)(" Your email address is unverified. "),(0,r.a)((0,r.u)(r.j),{href:m.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:(0,r.w)((function(){return[(0,r.d)(" Click here to re-send the verification email. ")]})),_:1},8,["href"])]),(0,r.i)((0,r.b)("div",s," A new verification link has been sent to your email address. ",512),[[r.p,"verification-link-sent"===e.status]])])):(0,r.g)("",!0),(0,r.b)("div",f,[(0,r.a)(o.P,{disabled:(0,r.u)(n).processing},{default:(0,r.w)((function(){return[(0,r.d)("Save")]})),_:1},8,["disabled"]),(0,r.a)(r.q,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:(0,r.w)((function(){return[(0,r.u)(n).recentlySuccessful?((0,r.o)(),(0,r.f)("p",c,"Saved.")):(0,r.g)("",!0)]})),_:1})])],32)])}}}},4350:(e,t,n)=>{function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,u,i=[],l=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw a}}return i}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{_:()=>u});var u=function(e,t){var n,o=e.__vccOpts||e,u=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,u=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw u}}}}(t);try{for(u.s();!(n=u.n()).done;){var i=r(n.value,2),l=i[0],s=i[1];o[l]=s}}catch(e){u.e(e)}finally{u.f()}return o}}}]);