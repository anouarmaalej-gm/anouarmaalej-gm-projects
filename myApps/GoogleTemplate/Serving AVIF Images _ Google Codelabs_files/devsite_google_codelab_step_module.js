(function(_ds){var window=this;var X$=function(a){var b=a.step;const c=a.label;a='<h2 is-upgraded class="step-title"><a href="#'+_ds.V(b)+'">';b=_ds.T(b+1)+". "+_ds.T(c);return(0,_ds.Q)(a+b+"</a></h2>")};/*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var mwa=function(a){if(!a.oa){a.setAttribute("tabindex","-1");var b=a.getElementsByTagName("google-codelab-about");b.length>0&&(a.h=b[0],a.h.parentNode.removeChild(a.h));a.v=_ds.zl(document,"div");a.v.classList.add("instructions");a.g=_ds.zl(document,"div");a.g.classList.add("inner");_ds.Gl(a.g,a);a.v.appendChild(a.g);_ds.Bl(a);(b=a.g.querySelector(".step-title"))||(b=_ds.J(X$,{step:a.qa,label:a.ma}));a.j=b;_ds.Dl(a.g,b,0);a.g.querySelectorAll("pre code").forEach(c=>{if(window.prettyPrintOne instanceof
Function){const d=window.prettyPrintOne(c.innerHTML),e=_ds.Gk(_ds.Ck(_ds.Bk(new _ds.Hk)));_ds.Of(c,_ds.ng(e,d))}else c.classList.add("prettyprint");a.ua.listen(c,"copy",()=>{const d=new CustomEvent("google-codelab-action",{detail:{category:"snippet",action:"copy",label:c.textContent.substring(0,500)}});document.body.dispatchEvent(d)})});a.h&&a.appendChild(a.h);a.appendChild(a.v);a.oa=!0}},nwa=function(a){return a.replace(/&amp;#(\d+);/g,function(b,c){return String.fromCharCode(c)})},Y$=class extends HTMLElement{constructor(){super();
this.g=this.v=null;this.oa=!1;this.qa=0;this.ma="";this.h=this.j=null;this.ua=new _ds.B}connectedCallback(){mwa(this)}disconnectedCallback(){}static get observedAttributes(){return["label","step"]}attributeChangedCallback(a){if(a==="label"||a==="step")this.hasAttribute("label")&&(this.ma=nwa(this.getAttribute("label"))),this.hasAttribute("step")&&(this.qa=parseInt(this.getAttribute("step")||"",10)),this.j&&(a=_ds.J(X$,{step:this.qa,label:this.ma}),_ds.Fl(a,this.j),this.j=a)}};
Y$.prototype.attributeChangedCallback=Y$.prototype.attributeChangedCallback;Y$.prototype.disconnectedCallback=Y$.prototype.disconnectedCallback;Y$.prototype.connectedCallback=Y$.prototype.connectedCallback;var owa=class extends Y${constructor(){super(...arguments);this.ea=!1;this.layout="";this.o=new _ds.Mg}async connectedCallback(){this.ea=await (await _ds.u()).hasMendelFlagAccess("MiscFeatureFlags","enable_codelabs_as_a_content_type");var a;this.layout=((a=document.querySelector("google-codelab"))==null?void 0:a.getAttribute("layout"))||"paginated";if(this.ea||this.layout==="scrolling"){a=this.querySelectorAll("h2:not(.step-title),h3");for(var b of a)b.classList.add("hide-from-toc");b=document.querySelectorAll("devsite-toc");
for(const c of b)c.Ol("true")}else super.connectedCallback();this.o.resolve()}disconnectedCallback(){super.disconnectedCallback();this.o=new _ds.Mg}async attributeChangedCallback(a,b,c,d){await this.o.promise;this.ea||this.layout==="scrolling"||super.attributeChangedCallback(a,b,c,d)}};try{customElements.define("google-codelab-step",owa)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteCodelabStep",a)};})(_ds_www);
