(window.webpackJsonp=window.webpackJsonp||[]).push([["study-market"],{"++0f":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>'},"+EG+":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var i=n("mrSG"),r=n("q1tI"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.c)(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return r.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})},t}(r.Component),o=r.createContext(null)},"+l/S":function(e,t,n){},"0NLZ":function(e,t,n){e.exports={container:"container-12vIMEmh"}},"2A9e":function(e){e.exports=JSON.parse('{"button":"button-1iktpaT1","content":"content-2PGssb8d","noOutline":"noOutline-d9Yp4qvi","appearance-default":"appearance-default-dMjF_2Hu","intent-primary":"intent-primary-1-IOYcbg","intent-success":"intent-success-25a4XZXM","intent-default":"intent-default-2ZbSqQDs","intent-warning":"intent-warning-24j5HMi0","intent-danger":"intent-danger-1EETHCla","appearance-stroke":"appearance-stroke-12lxiUSM","appearance-text":"appearance-text-DqKJVT3U","appearance-inverse":"appearance-inverse-r1Y2JQg_","size-s":"size-s-3mait84m","size-m":"size-m-2G7L7Qat","size-l":"size-l-2NEs9_xt","size-p":"size-p-3D4rn3v0","full-width":"full-width-1wU8ljjC","with-icon":"with-icon-yumghDr-","icon":"icon-1grlgNdV"}')},"2x13":function(e,t,n){e.exports={wrapper:"wrapper-DggvOZTm",container:"container-DggvOZTm",tab:"tab-DggvOZTm",active:"active-DggvOZTm",title:"title-DggvOZTm",icon:"icon-DggvOZTm",titleText:"titleText-DggvOZTm",nested:"nested-DggvOZTm",isTablet:"isTablet-DggvOZTm",isMobile:"isMobile-DggvOZTm"}},"8Rai":function(e,t,n){"use strict";var i=n("q1tI"),r=function(e,t){var n=void 0===t?{}:t,i=n.bubbles,r=void 0!==i&&i,a=n.cancelable,o=void 0!==a&&a,c=n.detail,s=void 0===c?null:c;try{return new window.CustomEvent(e,{bubbles:r,cancelable:o,detail:s})}catch(u){var l=document.createEvent("CustomEvent");return l.initCustomEvent(e,r,o,s),l}},a=n("R5JZ");function o(e){var t=e.click,n=e.mouseDown,o=e.touchEnd,c=e.touchStart,s=e.handler,l=e.reference,u=e.ownerDocument,d=void 0===u?document:u,p=Object(i.useRef)(null),m=Object(i.useRef)(new r("timestamp").timeStamp);return Object(i.useLayoutEffect)((function(){var e={click:t,mouseDown:n,touchEnd:o,touchStart:c},i=l?l.current:p.current;return Object(a.a)(m.current,i,s,d,e)}),[t,n,o,c,s]),l||p}n.d(t,"a",(function(){return o}))},"9DSJ":function(e,t,n){e.exports={"tablet-small-breakpoint":"screen and (max-width: 419px)",dialog:"dialog-3kc5LZDR",dialogLibrary:"dialogLibrary-3kc5LZDR",listContainer:"listContainer-3kc5LZDR",scroll:"scroll-3kc5LZDR",sidebarContainer:"sidebarContainer-3kc5LZDR",backButton:"backButton-3kc5LZDR",noContentBlock:"noContentBlock-3kc5LZDR"}},AiMB:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),
n.d(t,"b",(function(){return u}));var i=n("mrSG"),r=n("q1tI"),a=n("i8i4"),o=n("e3/o"),c=n("jAh7"),s=n("+EG+"),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._uuid=Object(o.guid)(),t}return Object(i.c)(t,e),t.prototype.componentWillUnmount=function(){this._manager().removeWindow(this._uuid)},t.prototype.render=function(){var e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",a.createPortal(r.createElement(u.Provider,{value:this},this.props.children),e)},t.prototype.moveToTop=function(){this._manager().moveToTop(this._uuid)},t.prototype._manager=function(){return null===this.context?Object(c.getRootOverlapManager)():this.context},t.contextType=s.b,t}(r.PureComponent),u=r.createContext(null)},An2S:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return f}));var i=n("mrSG"),r=n("q1tI"),a=n.n(r),o=n("TSYQ"),c=n.n(o),s=n("Iivm"),l=n("++0f"),u=n("2x13");function d(e){return{isMobile:"mobile"===e,isTablet:"tablet"===e}}function p(e){var t=e.mode,n=e.className,r=Object(i.e)(e,["mode","className"]),o=d(t),s=o.isMobile,l=o.isTablet,p=c()(u.container,l&&u.isTablet,s&&u.isMobile,n);return a.a.createElement("div",Object(i.a)({},r,{className:p,"data-role":"dialog-sidebar"}))}function m(e){return a.a.createElement("div",Object(i.a)({className:u.wrapper},e))}function f(e){var t=e.mode,n=e.title,r=e.icon,o=e.isActive,p=e.onClick,m=Object(i.e)(e,["mode","title","icon","isActive","onClick"]),f=d(t),h=f.isMobile,v=f.isTablet;return a.a.createElement("div",Object(i.a)({},m,{className:c()(u.tab,v&&u.isTablet,h&&u.isMobile,o&&u.active),onClick:p}),a.a.createElement(s.a,{className:u.icon,icon:r}),!v&&a.a.createElement("span",{className:u.title},a.a.createElement("span",{className:u.titleText},n),h&&a.a.createElement(s.a,{className:u.nested,icon:l})))}},Iivm:function(e,t,n){"use strict";var i=n("mrSG"),r=n("q1tI");const a=r.forwardRef((e,t)=>{const{icon:n=""}=e,a=Object(i.e)(e,["icon"]);return r.createElement("span",Object.assign({},a,{ref:t,dangerouslySetInnerHTML:{__html:n}}))});n.d(t,"a",(function(){return a}))},PMRz:function(e,t,n){e.exports={"tablet-small-breakpoint":"screen and (max-width: 419px)",container:"container-3Ywm3-oo",selected:"selected-3Ywm3-oo",disabled:"disabled-3Ywm3-oo",favorite:"favorite-3Ywm3-oo",actions:"actions-3Ywm3-oo",highlighted:"highlighted-3Ywm3-oo",light:"light-3Ywm3-oo","highlight-animation-theme-light":"highlight-animation-theme-light-3Ywm3-oo",dark:"dark-3Ywm3-oo","highlight-animation-theme-dark":"highlight-animation-theme-dark-3Ywm3-oo",main:"main-3Ywm3-oo",paddingLeft:"paddingLeft-3Ywm3-oo",isActive:"isActive-3Ywm3-oo",author:"author-3Ywm3-oo",likes:"likes-3Ywm3-oo"}},cu5P:function(e,t,n){e.exports={title:"title-1gYObTuJ",disabled:"disabled-1gYObTuJ",icon:"icon-1gYObTuJ",locked:"locked-1gYObTuJ",
open:"open-1gYObTuJ",actionIcon:"actionIcon-1gYObTuJ",selected:"selected-1gYObTuJ",codeIcon:"codeIcon-1gYObTuJ"}},iYOJ:function(e,t,n){e.exports={title:"title-hq9up-8e",small:"small-hq9up-8e",normal:"normal-hq9up-8e",large:"large-hq9up-8e"}},idtP:function(e,t,n){e.exports={container:"container-39xfFXyr",image:"image-39xfFXyr",title:"title-39xfFXyr",description:"description-39xfFXyr"}},jPOK:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("q1tI"),r=n("TSYQ"),a=n("Owlf");n("SzKR");function o(e){var t=r("tv-spinner","tv-spinner--shown","tv-spinner--size_"+(e.size||a.a));return i.createElement("div",{className:t,style:e.style,role:"progressbar"},i.createElement("div",{className:"tv-spinner__spinner-layer"},i.createElement("div",{className:"tv-spinner__background tv-spinner__width_element"}),i.createElement("div",{className:"tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left"}),i.createElement("div",{className:"tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right"})))}},mwqF:function(e,t,n){"use strict";var i=n("mrSG"),r=n("q1tI"),a=n("TSYQ");function o(e,t){const{intent:n="primary",size:i="m",appearance:r="default",useFullWidth:o=!1,tabIndex:c=0,icon:s,className:l}=t;return a(l,e.button,e["size-"+i],e["intent-"+n],e["appearance-"+r],o&&e["full-width"],-1===c&&e.noOutline,s&&"s"!==i&&e["with-icon"])}var c=n("2A9e");n("+l/S");function s(e){const{className:t,intent:n,size:s,appearance:l,disabled:u,useFullWidth:d,reference:p,icon:m,children:f,tabIndex:h}=e,v=Object(i.e)(e,["className","intent","size","appearance","disabled","useFullWidth","reference","icon","children","tabIndex"]),b=o(c,{intent:n,size:s,appearance:l,disabled:u,useFullWidth:d,tabIndex:h,icon:m});return r.createElement("button",Object.assign({className:a(b,t),disabled:u,ref:p,tabIndex:h},v),m&&"s"!==s&&r.createElement("span",{className:c.icon},m),r.createElement("span",{className:c.content},f))}n.d(t,"a",(function(){return s}))},vbTm:function(e,t,n){e.exports={container:"container-gb0TB1FN"}},vqb8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("q1tI"),r=function(e){var t="watchedValue"in e?e.watchedValue:void 0,n="defaultValue"in e?e.defaultValue:e.watchedValue.value(),r=Object(i.useState)(t?t.value():n),a=r[0],o=r[1];return Object(i.useEffect)((function(){if(t){o(t.value());var e=function(e){return o(e)};return t.subscribe(e),function(){return t.unsubscribe(e)}}return function(){}}),[t]),a}},zbLM:function(e,t,n){"use strict";n.r(t);var i=n("mrSG"),r=n("q1tI"),a=n.n(r),o=n("i8i4"),c=n.n(o),s=n("YFKU"),l=n("mMWL"),u=(n("+GxX"),n("CW80")),d=n("0YCj"),p=n.n(d),m=n("Kxc7");function f(e,t){return void 0===t&&(t=!0),e.filter((function(e){var n=!!t||!function(e){return e.isStrategy}(e);return function(e){0;return!e.isHidden||!1}(e)&&n}))}function h(e){var t={};return e.forEach((function(e){var n=e.packageName;n in t?t[n].push(e):t[n]=[e]})),t}function v(e,t){var n=e.title.toLowerCase(),i=t.title.toLowerCase();return n<i?-1:n>i?1:0}var b={
earning:new RegExp("EPS"),earnings:new RegExp("EPS"),"trailing twelve months":new RegExp("TTM")};function g(e){var t,n=e.id,i=e.description,r=e.shortDescription,a=e.description_localized,o=e.is_hidden_study,c=e.version,l=m.enabled("graying_disabled_tools_enabled")&&(null===(t=window.ChartApiInstance)||void 0===t?void 0:t.studiesAccessController.isToolGrayed(r));return{id:n,title:a||Object(s.t)(i,{context:"study"}),shortDescription:r,shortTitle:r,isStrategy:p.a.isScriptStrategy(e),isHidden:o,descriptor:{type:"java",studyId:e.id},packageName:p.a.getPackageName(n),isGrayed:l,version:c}}var y=n("TSYQ"),_=n.n(y),O=n("jPOK"),w=n("g89m"),E=n("qFKp"),j=n("QHWU"),S=n("An2S"),k=n("0NLZ");function C(e){var t=e.reference,n=e.className,r=Object(i.e)(e,["reference","className"]);return a.a.createElement("div",Object(i.a)({ref:t,className:_()(k.container,n)},r,{"data-role":"dialog-content"}))}var N=n("cu5P");function T(e){var t=e.children,n=e.className,i=e.disabled;return a.a.createElement("span",{className:_()(N.title,i&&N.disabled,n)},t)}var x=a.a.createContext(null),D=n("1LIl"),I=n("vqb8"),R=n("oiZD"),Y=n("zM7N"),P=n("pr86"),F=n("/3z9"),L=n("PMRz");function M(e){var t=Object(r.useContext)(x),n=e.style,i=e.layoutMode,o=e.item,c=e.query,s=e.regExpRules,l=e.isSelected,u=e.isHighlighted,d=e.reference,p=e.onClick,m=(e.renderActions,o.isFavorite),f=(o.isStrategy,o.isLocked,o.public),h=void 0!==m,v=q(p,o),b=Object(r.useCallback)((function(e){return e.stopPropagation()}),[]),g=(null==t?void 0:t.toggleFavorite)?q(t.toggleFavorite,o):void 0,y=Object(I.a)({watchedValue:R.watchedTheme})===Y.a.Dark?L.dark:L.light,O=_()(L.container,o.isGrayed&&L.disabled,l&&L.selected,u&&L.highlighted,u&&y);return a.a.createElement("div",{ref:d,className:O,onClick:v,style:n,"data-role":"list-item","data-disabled":o.isGrayed,"data-title":o.title,"data-id":o.id},a.a.createElement("div",{className:_()(L.main,!h&&L.paddingLeft)},h&&a.a.createElement(P.a,{className:_()(L.favorite,m&&L.isActive),isFilled:m,onClick:g}),a.a.createElement(T,{disabled:o.isGrayed},a.a.createElement(D.a,{queryString:c,rules:s,text:o.title})),!1),f&&a.a.createElement("a",{href:f.authorLink,className:L.author,target:"_blank",onClick:b},f.authorName),"mobile"!==i&&f&&a.a.createElement("span",{className:L.likes},f.likesCount),!1)}function q(e,t){return function(n){var i=0===Object(F.modifiersFromEvent)(n)&&0===n.button;!n.defaultPrevented&&e&&i&&(n.preventDefault(),e(t))}}var z=n("iYOJ");function Z(e){var t=e.title,n=e.type,i=e.className;return a.a.createElement("h3",{className:_()(z.title,"Small"===n&&z.small,"Normal"===n&&z.normal,"Large"===n&&z.large,i)},t)}var J=n("vbTm");function G(e){var t=e.style,n=e.children;return a.a.createElement("div",{style:t,className:J.container},n)}var A=n("Iivm"),W=n("mwqF"),B=n("idtP");function K(e){var t=e.className,n=e.icon,i=e.title,r=e.description,o=e.buttonText,c=e.buttonAction;return a.a.createElement("div",{className:_()(B.container,t)},n&&a.a.createElement(A.a,{icon:n,className:B.image}),i&&a.a.createElement("h3",{className:B.title
},i),r&&a.a.createElement("p",{className:B.description},r),o&&c&&a.a.createElement(W.a,{onClick:c},o))}function V(e){var t=Object(r.useState)(null),n=t[0],i=t[1];function a(e){return e.findIndex((function(e){return(null==n?void 0:n.id)===e.id}))}return[n,i,function(){i(function(){var t,i=a(e),r=i===e.length-1;return null===n||-1===i?null!==(t=e[0])&&void 0!==t?t:null:r?e[i]:e[i+1]}())},function(){i(function(){var t,i=a(e);return null===n||0===i||-1===i?null!==(t=e[0])&&void 0!==t?t:null:e[i-1]}())}]}var H=n("H9Gg"),Q=n("9DSJ");function U(e){var t=e.reference,n=e.data,i=e.isOpened,o=e.onClose,c=e.applyStudy,l=Object(r.useState)(""),u=l[0],d=l[1],p=Object(r.useMemo)((function(){return Object(H.a)(u,b)}),[u]),m=Object(r.useMemo)((function(){return u?Object(H.c)({data:n,rules:p,queryString:u,primaryKey:"shortDescription",secondaryKey:"title",optionalPrimaryKey:"shortTitle"}):n}),[u,p,n]),f=function(e,t,n,i){var a=0,o=Object(r.useState)(null),c=o[0],s=o[1],l=Object(r.useRef)(null),u=Object(r.useRef)(null),d=V(t),p=d[0],m=d[1],f=d[2],h=d[3],v=Object(r.useRef)(null);return Object(r.useEffect)((function(){e?b(0):m(null)}),[e]),Object(r.useEffect)((function(){void 0!==i&&(b(0),m(null))}),[i]),Object(r.useEffect)((function(){return c&&(a=setTimeout((function(){s(null)}),1500)),function(){clearInterval(a)}}),[c]),{highlightedItem:c,scrollContainerRef:l,selectedNodeReference:u,selectedItem:p,searchInputRef:v,onClickStudy:function(e){if(!n)return;n(e),m(e),s(e)},handleKeyDown:function(e){var t=function(e,t){if(null===e.current||null===t.current)return[0,0];var n=e.current.getBoundingClientRect(),i=t.current.getBoundingClientRect(),r=n.height,a=n.top-i.top,o=n.bottom-i.bottom+r<0?0:r,c=a-r>0?0:r,s=t.current.scrollTop;return[s-c,s+o]}(u,l),i=t[0],r=t[1];40===Object(F.hashFromEvent)(e)&&(e.preventDefault(),f(),b(r));38===Object(F.hashFromEvent)(e)&&(e.preventDefault(),h(),b(i));if(13===Object(F.hashFromEvent)(e)&&p){if(!n)return;n(p),s(p)}}};function b(e){null!==l.current&&l.current.scrollTo&&l.current.scrollTo(0,e)}}(i,m,c),h=f.highlightedItem,v=f.selectedItem,g=f.selectedNodeReference,y=f.scrollContainerRef,k=f.searchInputRef,N=f.onClickStudy,T=f.handleKeyDown,x=""===u&&!m.length;return Object(r.useEffect)((function(){var e;i||d(""),E.CheckMobile.any()||null===(e=k.current)||void 0===e||e.focus()}),[i]),a.a.createElement(w.a,{isOpened:i,onClose:o,onClickOutside:o,className:_()(Q.dialogLibrary),render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j.a,{reference:k,placeholder:Object(s.t)("Search"),onChange:D,onFocus:I}),a.a.createElement(S.c,null,a.a.createElement(C,{reference:y,className:Q.scroll},x?a.a.createElement(O.a,null):m.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(G,null,a.a.createElement(Z,{title:Object(s.t)("Script name")})),m.map((function(e){var t=(null==v?void 0:v.id)===e.id;return a.a.createElement(M,{key:e.id,item:e,onClick:function(){return N(e)},query:u,regExpRules:p,reference:t?g:void 0,isSelected:(null==v?void 0:v.id)===e.id,isHighlighted:(null==h?void 0:h.id)===e.id})
}))):a.a.createElement(K,{className:Q.noContentBlock,description:Object(s.t)("No indicators matched your criteria.")}))))},title:Object(s.t)("Indicators"),dataName:"indicators-dialog",onKeyDown:T,ref:t});function D(e){d(e.target.value)}function I(){var e;u.length>0&&(null===(e=k.current)||void 0===e||e.select())}}var X=n("FQhm"),$=n("hY0g"),ee=n.n($),te=function(){function e(e){this._searchInputRef=a.a.createRef(),this._dialog=a.a.createRef(),this._visibility=new ee.a(!1),this._container=document.createElement("div"),this._isForceRender=!1,this._parentSource=null,this._isDestroyed=!1,this._chartWidgetCollection=e}return e.prototype.isDestroyed=function(){return this._isDestroyed},e.prototype.visible=function(){return this._visibility.readonly()},e.prototype.updateUserStudies=function(){},e.prototype.resetAllStudies=function(){},e.prototype.updateFavorites=function(){},e.prototype.open=function(e){this._parentSource=null!=e?e:null,this._setProps({isOpened:!0}),this._visibility.setValue(!0),X.emit("indicators_dialog")},e.prototype.show=function(){this.open()},e.prototype.hide=function(){this._parentSource=null,this._setProps({isOpened:!1}),this._visibility.setValue(!1)},e.prototype.destroy=function(){this._isDestroyed=!0,c.a.unmountComponentAtNode(this._container)},e.prototype._shouldPreventRender=function(){return this._isDestroyed||!this._isForceRender&&!this._getProps().value().isOpened},e.prototype._getRenderData=function(){return{props:this._getProps().value(),container:this._getContainer()}},e.prototype._applyStudy=function(e){var t,n,r=this;e.isGrayed?X.emit("onGrayedObjectClicked",{type:"study",name:e.shortDescription}):(E.CheckMobile.any()||null===(t=this._searchInputRef.current)||void 0===t||t.select(),function(e,t,n){return Object(i.b)(this,void 0,void 0,(function(){var r,a,o;return Object(i.d)(this,(function(i){return"java"===(r=t.descriptor).type&&null!==(a=Object(u.tryFindStudyLineToolNameByStudyId)(r.studyId))?(l.tool.setValue(a),[2,null]):(o=e.activeChartWidget.value())?[2,o.insertStudy(t.descriptor,n,t.shortDescription)]:[2,null]}))}))}(this._chartWidgetCollection,e,null!==(n=this._parentSource)&&void 0!==n?n:void 0).then((function(){var e;E.CheckMobile.any()||null===(e=r._searchInputRef.current)||void 0===e||e.focus()})))},e.prototype._setProps=function(e){var t=this._getProps().value(),n=t.isOpened;this._isForceRender=n&&"isOpened"in e&&!e.isOpened;var r=Object(i.a)(Object(i.a)({},t),e);this._getProps().setValue(r)},e.prototype._requestBuiltInJavaStudies=function(){return this._chartWidgetCollection.activeChartWidget.value().metaInfoRepository().findAllJavaStudies()},e.prototype._focus=function(){var e;this._getProps().value().isOpened&&(null===(e=this._dialog.current)||void 0===e||e.focus())},e.prototype._getContainer=function(){return this._container},e.prototype._getDialog=function(){return this._dialog},e}();n.d(t,"IndicatorsLibraryContainer",(function(){return ne}));var ne=function(e){function t(t,n){var i=e.call(this,t)||this;return i._studies={},i._options={onWidget:!1},
i._getStudies=function(e){return i._studies[e]||[]},n&&(i._options=n),i._props=new ee.a({data:[],applyStudy:i._applyStudy.bind(i),isOpened:!1,reference:i._getDialog(),onClose:i.hide.bind(i)}),i._getProps().subscribe(i._render.bind(i)),i._init(),i}return Object(i.c)(t,e),t.prototype._getProps=function(){return this._props},t.prototype._init=function(){return Object(i.b)(this,void 0,void 0,(function(){var e,t,n,r;return Object(i.d)(this,(function(a){switch(a.label){case 0:return[4,this._requestBuiltInJavaStudies()];case 1:return e=a.sent(),this._studies=h(f(e.map(g))),[3,3];case 2:t=a.sent().pineBuiltInStudies,n=h(f(t.map(mapPineStudy),!1)),this._studies=Object(i.a)(Object(i.a)({},this._studies),n),a.label=3;case 3:return r=Object(i.f)(this._getStudies("tv-basicstudies"),this._getStudies("Script$STD")).filter((function(e){return!e.isStrategy})).sort(v),this._setProps({data:r}),[2]}}))}))},t.prototype._render=function(){if(!this._shouldPreventRender()){var e=this._getRenderData(),t=e.props,n=e.container;c.a.render(a.a.createElement(U,Object(i.a)({},t)),n)}},t}(te)}}]);