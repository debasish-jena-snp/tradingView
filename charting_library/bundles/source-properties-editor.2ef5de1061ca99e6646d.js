(window.webpackJsonp=window.webpackJsonp||[]).push([["source-properties-editor"],{"2mql":function(e,t,n){"use strict";var o=n("TOwV"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return o.isMemo(e)?i:s[e.$$typeof]||r}s[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,o){if("string"!=typeof n){if(m){var r=f(n);r&&r!==m&&e(t,r,o)}var i=u(n);d&&(i=i.concat(d(n)));for(var s=c(t),h=c(n),b=0;b<i.length;++b){var v=i[b];if(!(a[v]||o&&o[v]||h&&h[v]||s&&s[v])){var _=p(n,v);try{l(t,v,_)}catch(g){}}}return t}return t}},"5VK0":function(e,t,n){e.exports={scrollWrap:"scrollWrap-1KEqJy8_",tabsWrap:"tabsWrap-1KEqJy8_",tabs:"tabs-1KEqJy8_",tab:"tab-1KEqJy8_",withHover:"withHover-1KEqJy8_",headerBottomSeparator:"headerBottomSeparator-1KEqJy8_"}},"5o6O":function(e,t,n){e.exports={tabs:"tabs-3I2ohC86",tab:"tab-3I2ohC86",noBorder:"noBorder-3I2ohC86",disabled:"disabled-3I2ohC86",active:"active-3I2ohC86",defaultCursor:"defaultCursor-3I2ohC86",slider:"slider-3I2ohC86",content:"content-3I2ohC86"}},CbZh:function(e,t,n){"use strict";n.r(t);var o=n("mrSG"),r=(n("YFKU"),n("q1tI")),a=n.n(r),i=n("i8i4"),s=n("FQhm"),c=n("Eyy1"),l=(n("bSeV"),n("qFKp")),u=n("Vdly"),d=n.n(u),p=n("ycFu"),f=n("tWVy"),m=n("aDg1");n("17x9");n("wx14"),n("zLVn"),n("2mql"),n("TOwV"),"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;n("ANjH");var h;h=i.unstable_batchedUpdates;var b=n("Iivm"),v=n("H172"),_=n("/KDZ"),g=(n("EsMY"),n("N5tr")),y=n("i/MG"),C=n("8d0Q"),I=n("lpmA");function T(e){var t=e.name,n=e.onRemove,a=e.onClick,i=Object(C.b)(),s=i[0],c=i[1],l=r.useCallback((function(){return a(t)}),[a,t]),u=r.useCallback((function(){n&&n(t)}),[n,t]);return r.createElement("div",Object(o.a)({},c),r.createElement(g.b,{className:I.defaultsButtonItem,isActive:!1,label:t,onClick:l,toolbox:n&&r.createElement(y.a,{hidden:!Modernizr.mobiletouch&&!s,onClick:u})}))}var P=n("HWhk");function E(e){var t=e.model,n=e.source;return a.a.createElement(_.a,{rule:"screen and (max-width: 768px)"},(function(e){return a.a.createElement(v.a,{className:!e&&I.themesButtonText,items:[{value:"defaults",readonly:!0,content:"",selectedContent:e?a.a.createElement(b.a,{className:I.themesButtonIcon,icon:P}):window.t("Template")},{readonly:!0,content:a.a.createElement(T,{onClick:o,name:window.t("Apply Defaults")})}],hideArrowButton:e,value:"defaults"})}));function o(){t.restorePropertiesForSource(n)}}function w(e){return a.a.createElement(E,Object(o.a)({},e))}
var S,D,x=n("tmL0"),A=n("CW80"),B=n("vHME"),N=n("3ClC"),O=n("qJq3"),k=n("Ss5c"),j=n("GVHu"),K=n("ybVX"),R=((S={})["Elliott Impulse Wave (12345)Degree"]="normal",S["Elliott Triangle Wave (ABCDE)Degree"]="normal",S["Elliott Triple Combo Wave (WXYXZ)Degree"]="normal",S["Elliott Correction Wave (ABC)Degree"]="normal",S["Elliott Double Combo Wave (WXY)Degree"]="normal",S.BarsPatternMode="normal",S.StudyInputSource="normal",S),q=((D={}).TextText="big",D.AnchoredTextText="big",D.NoteText="big",D.AnchoredNoteText="big",D.CalloutText="big",D.BalloonText="big",D),M=n("Q+1u"),V=n("bvfV");function W(e){return r.createElement(K.a.Provider,{value:q},r.createElement(K.b.Provider,{value:R},e.page&&r.createElement(M.a,{reference:e.pageRef,key:e.tableKey},e.page.definitions.value().map((function(e){return r.createElement(V.a,{key:e.id,definition:e})})))))}var F=n("ttKw"),H=function(e){function t(t){var n=e.call(this,t)||this;n._activePageRef=r.createRef(),n._getActionPageById=function(e){if(e)return n.props.pages.find((function(t){return t.id.toLowerCase()===e.toLowerCase()}))},n._onChangeActivePageDefinitions=function(){n.setState({tableKey:Date.now()},(function(){n._requestResize&&n._requestResize()}))},n._renderFooterLeft=function(){var e=n.props,t=e.source,o=e.model;return Object(A.isLineTool)(t)?r.createElement(w,{source:t,model:o}):r.createElement(_.a,{rule:"screen and (max-width: 419px)"},(function(e){return Object(N.isStudy)(t)&&r.createElement(B.a,{model:o,source:t,mode:e?"compact":"normal"})}))},n._subscribe=function(e){e&&e.definitions.subscribe(n._onChangeActivePageDefinitions)},n._unsubscribe=function(e){e&&e.definitions.unsubscribe(n._onChangeActivePageDefinitions)},n._getActiveTabSettingsName=function(){var e=n.props.source;return e instanceof O.Series?"properties_dialog.active_tab.chart":e instanceof k.LineDataSource?"properties_dialog.active_tab.drawing":e instanceof j.Study?"properties_dialog.active_tab.study":""},n._handleSelectPage=function(e){var t=n.state.activePageId,o=n._getActionPageById(t),r=n._getActionPageById(e),a=n._getActiveTabSettingsName();t!==e&&(n._unsubscribe(o),a&&d.a.setValue(a,e),n._subscribe(r),n.setState({activePageId:e,tableKey:Date.now()},(function(){n._requestResize&&n._requestResize(),n._focusActivePageFirstTextInput()})))},n._handleScroll=function(){f.a.fire()},n._handleSubmit=function(){n.props.onSubmit(),n._closePopupDialog()},n._closePopupDialog=function(){window.lineToolPropertiesToolbar&&window.lineToolPropertiesToolbar.refresh(),n.props.onClose()};var o,a=n.props.pages;if(n._getActionPageById(n.props.activePageId))o=Object(c.ensureDefined)(n.props.activePageId);else{var i=d.a.getValue(n._getActiveTabSettingsName(),""),s=n._getActionPageById(i);o=s?s.id:a[0].id}return n.state={activePageId:o,tableKey:Date.now()},window.lineToolPropertiesToolbar&&window.lineToolPropertiesToolbar.hide(),n}return Object(o.c)(t,e),t.prototype.componentDidMount=function(){var e=this.state.activePageId,t=this._getActionPageById(e);this._focusActivePageFirstTextInput(),this._subscribe(t)},
t.prototype.componentWillUnmount=function(){var e=this.props.activePageId,t=this._getActionPageById(e);clearTimeout(this._timeout),this._unsubscribe(t)},t.prototype.render=function(){var e,t=this.props,n=t.source,o=t.onCancel,a=this.state.activePageId,i=(null===(e=n.properties().title)||void 0===e?void 0:e.value())||n.title();return r.createElement(p.a,{dataName:"source-properties-editor",title:i,isOpened:!0,onSubmit:this._handleSubmit,onCancel:o,onClickOutside:this._handleSubmit,onClose:this._closePopupDialog,footerLeftRenderer:this._renderFooterLeft,render:this._renderChildren(a),submitOnEnterKey:!1})},t.prototype._renderChildren=function(e){var t=this;return function(n){var a=n.requestResize;t._requestResize=a;var i=t.props.pages,s={allIds:i.map((function(e){return e.id})),byId:i.reduce((function(e,t){var n;return Object(o.a)(Object(o.a)({},e),((n={})[t.id]={title:t.title},n))}),{})},c=i.find((function(t){return t.id===e}));return r.createElement(r.Fragment,null,r.createElement(m.a,{activeTabId:e,onSelect:t._handleSelectPage,tabs:s}),r.createElement(x.a,{className:F.scrollable,onScroll:t._handleScroll},r.createElement(W,{page:c,pageRef:t._activePageRef,tableKey:t.state.tableKey})))}},t.prototype._focusActivePageFirstTextInput=function(){if(!l.CheckMobile.any()&&this._activePageRef.current){var e=this._activePageRef.current.querySelector("input[type=text],textarea");e&&(this._timeout=setTimeout((function(){e.focus()}),0))}},t}(r.PureComponent),J=n("sQaR");n.d(t,"SourcePropertiesEditorRenderer",(function(){return L}));var L=function(e){function t(t){var n=e.call(this)||this;return n._timeout=null,n._handleClose=function(){i.unmountComponentAtNode(n._container),n._setVisibility(!1),n._onClose&&n._onClose(),n._subscription.unsubscribe(n,n._handleCollectionChanged)},n._handleSubmit=function(){var e=n._source;Object(A.isLineTool)(e)&&e.hasAlert.value()&&setTimeout((function(){e.localAndServerAlertsMismatch&&e.synchronizeAlert(!0)}))},n._handleCancel=function(){n._model.undoToCheckpoint(n._checkpoint)},n._propertyPages=t.propertyPages,n._model=t.model,n._activePageId=t.activePageId,n._onClose=t.onClose,n._source=t.source,n._checkpoint=n._ensureCheckpoint(t.undoCheckPoint),n._subscription=n._model.model().dataSourceCollectionChanged(),n._subscription.subscribe(n,n._handleCollectionChanged),n}return Object(o.c)(t,e),t.prototype.hide=function(e){e?this._handleCancel():this._handleSubmit(),this._handleClose()},t.prototype.isVisible=function(){return this.visible().value()},t.prototype.show=function(){i.render(r.createElement(H,{source:this._source,onSubmit:this._handleSubmit,onClose:this._handleClose,onCancel:this._handleCancel,pages:this._propertyPages,model:this._model,activePageId:this._activePageId}),this._container),this._setVisibility(!0),s.emit("drawings_settings_dialog",{objectType:"drawing",scriptTitle:this._source.title()})},t.prototype._handleCollectionChanged=function(){var e=this;null===this._timeout&&(this._timeout=setTimeout((function(){e._closeDialogIfSourceIsDeleted(),e._timeout=null})))},
t.prototype._closeDialogIfSourceIsDeleted=function(){null===this._model.model().dataSourceForId(this._source.id())&&this._handleClose()},t.prototype._ensureCheckpoint=function(e){return void 0===e&&(e=this._model.createUndoCheckpoint()),e},t}(J.a)},K3s3:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}));var o=n("mrSG"),r=n("q1tI"),a=n("TSYQ"),i=n("Eyy1"),s=n("5o6O"),c=s;function l(e){var t,n=a(e.className,s.tab,((t={})[s.active]=e.isActive,t[s.disabled]=e.isDisabled,t[s.defaultCursor]=!!e.shouldUseDefaultCursor,t[s.noBorder]=!!e.noBorder,t));return r.createElement("div",{className:n,onClick:e.onClick,ref:e.reference},e.children)}function u(e){return function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeTab={current:null},e}return Object(o.c)(n,t),n.prototype.componentDidUpdate=function(){Object(i.ensureNotNull)(this._slider).style.transition="transform 350ms",this._componentDidUpdate()},n.prototype.componentDidMount=function(){this._componentDidUpdate()},n.prototype.render=function(){var t=this,n=this.props.className,o=this._generateTabs();return r.createElement("div",{className:a(n,s.tabs),"data-name":this.props["data-name"]},o,r.createElement(e,{reference:function(e){t._slider=e}}))},n.prototype._generateTabs=function(){var e=this;return this.activeTab.current=null,r.Children.map(this.props.children,(function(t){var n=t,o=Boolean(n.props.isActive),a={reference:function(t){o&&(e.activeTab.current=t),n.props.reference&&n.props.reference(t)}};return r.cloneElement(n,a)}))},n.prototype._componentDidUpdate=function(){var e=Object(i.ensureNotNull)(this._slider).style;if(this.activeTab.current){var t=this.activeTab.current.offsetWidth,n=this.activeTab.current.offsetLeft;e.transform="translateX("+n+"px)",e.width=t+"px",e.opacity="1"}else e.opacity="0"},n}(r.PureComponent)}u((function(e){return r.createElement("div",{className:s.slider,ref:e.reference})}))},aDg1:function(e,t,n){"use strict";var o=n("mrSG"),r=(n("EsMY"),n("q1tI")),a=n("TSYQ"),i=n("K3s3"),s=n("nPPD"),c=n("dMmr"),l=Object(s.a)(i.a,c);var u=n("4Cm8"),d=n("5VK0");n.d(t,"a",(function(){return f}));var p=Object(i.c)((function(e){return r.createElement("div",{className:l.slider,ref:e.reference},r.createElement("div",{className:l.inner}))})),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._createClickHandler=function(e){return function(){t.props.onSelect(e)}},t}return Object(o.c)(t,e),t.prototype.render=function(){var e=this._generateDialogTabs();return r.createElement("div",{className:d.scrollWrap},r.createElement("div",{className:d.headerBottomSeparator}),r.createElement(u.a,{isVisibleFade:Modernizr.mobiletouch,isVisibleButtons:!Modernizr.mobiletouch,isVisibleScrollbar:!1},r.createElement("div",{className:d.tabsWrap},r.createElement(p,{className:d.tabs},e))))},t.prototype._generateDialogTabs=function(){var e=this,t=this.props,n=t.activeTabId,o=t.tabs;return o.allIds.map((function(t){var s=n===t
;return r.createElement(i.b,{key:t,className:a(d.tab,!s&&d.withHover),isActive:s,onClick:e._createClickHandler(t)},o.byId[t].title)}))},t}(r.PureComponent)},dMmr:function(e,t,n){e.exports={slider:"slider-3RfwXbxu",inner:"inner-3RfwXbxu"}},lpmA:function(e,t,n){e.exports={themesButtonText:"themesButtonText-3JA3MxY8",themesButtonIcon:"themesButtonIcon-3JA3MxY8",defaultsButtonText:"defaultsButtonText-3JA3MxY8",defaultsButtonItem:"defaultsButtonItem-3JA3MxY8"}},ttKw:function(e,t,n){e.exports={scrollable:"scrollable-2w4-r8AL"}},vHME:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n("mrSG"),r=n("q1tI"),a=n("TSYQ"),i=n.n(a),s=(n("YFKU"),n("Iivm")),c=n("H172"),l=n("N5tr"),u=n("HWhk"),d=n("wt3x"),p={reset:window.t("Reset Settings"),saveAsDefault:window.t("Save As Default"),defaults:window.t("Defaults")},f=function(e){function t(t){var n=e.call(this,t)||this;return n._getItems=function(){var e=n.props.mode;return[n._getPlaceHolderItem("compact"===e)].concat(n._propertyItems)},n._handleResetToDefaults=function(){n.props.model.restorePropertiesForSource(n.props.source)},n._handleSaveAsDefaults=function(){n.props.source.properties().saveDefaults()},n._propertyItems=[{value:"reset",readonly:!0,content:r.createElement(l.b,{className:d.defaultsButtonItem,isActive:!1,label:p.reset,onClick:n._handleResetToDefaults})},{value:"save",readonly:!0,content:r.createElement(l.b,{className:d.defaultsButtonItem,isActive:!1,label:p.saveAsDefault,onClick:n._handleSaveAsDefaults})}],n}return Object(o.c)(t,e),t.prototype.render=function(){var e=this.props.mode;return r.createElement(c.a,{className:i()("normal"===e&&d.defaultsButtonText),items:this._getItems(),hideArrowButton:"compact"===e,value:"defaults"})},t.prototype._getPlaceHolderItem=function(e){return{value:"defaults",readonly:!0,content:"",selectedContent:e?r.createElement(s.a,{className:d.defaultsButtonIcon,icon:u}):p.defaults}},t}(r.PureComponent)},wt3x:function(e,t,n){e.exports={defaultsButtonText:"defaultsButtonText-3mn75BN0",defaultsButtonItem:"defaultsButtonItem-3mn75BN0",defaultsButtonIcon:"defaultsButtonIcon-3mn75BN0"}}}]);