import{d as a}from"./index-356e4a49.js";import{S as p,e as u,a as l}from"./index-4d2997eb.js";import"./_commonjsHelpers-725317a4.js";const{global:y}=__STORYBOOK_MODULE_GLOBAL__,{simulatePageLoad:_,simulateDOMContentLoaded:O}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:g}=y,S=(r,e)=>{let{id:i,component:o}=e;if(typeof o=="string"){let t=o;return Object.keys(r).forEach(n=>{t=t.replace(`{{${n}}}`,r[n])}),t}if(o instanceof HTMLElement){let t=o.cloneNode(!0);return Object.keys(r).forEach(n=>{t.setAttribute(n,typeof r[n]=="string"?r[n]:JSON.stringify(r[n]))}),t}if(typeof o=="function")return o(r,e);throw console.warn(a`
    Storybook's HTML renderer only supports rendering DOM elements and strings.
    Received: ${o}
  `),new Error(`Unable to render story ${i}`)};function A({storyFn:r,kind:e,name:i,showMain:o,showError:t,forceRemount:n},s){let d=r();if(o(),typeof d=="string")s.innerHTML=d,_(s);else if(d instanceof g){if(s.firstChild===d&&n===!1)return;s.innerHTML="",s.appendChild(d),O()}else t({title:`Expecting an HTML snippet or DOM node from the story: "${i}" of "${e}".`,description:a`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}const{useEffect:m,addons:E}=__STORYBOOK_MODULE_PREVIEW_API__;function c(r){var o;let e=(o=r==null?void 0:r.parameters.docs)==null?void 0:o.source,i=r==null?void 0:r.parameters.__isArgsStory;return(e==null?void 0:e.type)===p.DYNAMIC?!1:!i||(e==null?void 0:e.code)||(e==null?void 0:e.type)===p.CODE}function h(r,e){var n,s;let i=r(),o=(s=(n=e==null?void 0:e.parameters.docs)==null?void 0:n.source)!=null&&s.excludeDecorators?e.originalStoryFn(e.args,e):i,t;return c(e)||(typeof o=="string"?t=o:o instanceof Element&&(t=o.outerHTML)),m(()=>{let{id:d,unmappedArgs:f}=e;t&&E.getChannel().emit(l,{id:d,args:f,source:t})}),i}var C=[h],D={docs:{story:{inline:!0},source:{type:p.DYNAMIC,language:"html",code:void 0,excludeDecorators:void 0}}},R=[u],H={renderer:"html",...D};export{R as argTypesEnhancers,C as decorators,H as parameters,S as render,A as renderToCanvas};
//# sourceMappingURL=config-c68034ef.js.map
