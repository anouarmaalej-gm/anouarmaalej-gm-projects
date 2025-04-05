(function(_ds){var window=this;var Cva=function(a){var b=a.duration,c=a.Op;a=a.Nn;b='<div class="caption">About this codelab</div><div class="about">'+(b?'<div class="about-item duration"><i class="material-icons">schedule</i>'+_ds.T(b)+"</div>":"");c&&(b+='<div class="about-item last-updated"><i class="material-icons">subject</i>',c="Last updated "+_ds.T(c),b+=c,b+="</div>");b+='<div class="about-item authors"><i class="material-icons">account_circle</i>';a?(c="Written by "+_ds.T(a),b+=c):b+="Written by a Googler";return(0,_ds.Q)(b+
"</div></div>")};var Dva=function(a){a=a||{};var b=a.By;const c=a.Op,d=a.Nn;a="";if(b){a+='<div class="codelab-title">';const e=b.length;for(let f=0;f<e;f++)a+='<div class="token">'+_ds.T(b[f])+"</div>";a+="</div>"}a+='<div class="about-card"><h2 class="title">About this codelab</h2>';c&&(a+='<div class="last-updated"><i class="material-icons">subject</i>',b="Last updated "+_ds.T(c),a+=b,a+="</div>");a+='<div class="authors"><i class="material-icons">account_circle</i>';d?(b="Written by "+_ds.T(d),a+=b):a+="Written by a Googler";
return(0,_ds.Q)(a+"</div></div>")};/*

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
var w$=function(a){a.hasAttribute("last-updated")&&(a.ea=a.getAttribute("last-updated"));a.hasAttribute("authors")&&(a.v=a.getAttribute("authors"));a.hasAttribute("codelab-title")&&(a.o=a.getAttribute("codelab-title"));var b;(b=a.ea)?(b=new Date(b),b=(new _ds.TU("MMM d, yyyy")).format(b)):b=null;_ds.G(a,Dva,{Op:b,Nn:a.v,By:a.o.split(":").join(":||").split("||")});a.j=!0},x$=class extends HTMLElement{constructor(){super();this.o=this.v="";this.j=!1;this.ea=""}connectedCallback(){this.j||w$(this)}disconnectedCallback(){}static get observedAttributes(){return["authors",
"last-updated","codelab-title"]}attributeChangedCallback(){w$(this)}};x$.prototype.attributeChangedCallback=x$.prototype.attributeChangedCallback;x$.prototype.disconnectedCallback=x$.prototype.disconnectedCallback;x$.prototype.connectedCallback=x$.prototype.connectedCallback;var Eva=class extends x${constructor(){super(...arguments);this.h=!1;this.locale=this.layout="";this.g=new _ds.Mg}async connectedCallback(){var a=await _ds.u();this.locale=a.getLocale()||"en";this.h=await a.hasMendelFlagAccess("MiscFeatureFlags","enable_codelabs_as_a_content_type");var b;this.layout=((b=document.querySelector("google-codelab"))==null?void 0:b.getAttribute("layout"))||"paginated";if(this.h||this.layout==="scrolling"){a=(new _ds.qw("{MINUTES, plural, =1 {1 minute}other {# minutes}}")).format({MINUTES:this.getAttribute("duration")||
"0"});(b=this.getAttribute("last-updated")||"")&&(b=(new Intl.DateTimeFormat(this.locale.replace("_","-"),{month:"long",day:"numeric",year:"numeric"})).format(new Date(b)));const c=this.getAttribute("authors")||"";_ds.G(this,Cva,{duration:a,Op:b,Nn:c})}else super.connectedCallback();this.g.resolve()}disconnectedCallback(){super.disconnectedCallback();this.g=new _ds.Mg}async attributeChangedCallback(a,b,c,d){await this.g.promise;this.h||this.layout==="scrolling"||super.attributeChangedCallback(a,b,
c,d)}};try{customElements.define("google-codelab-about",Eva)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteCodelabAbout",a)};})(_ds_www);
