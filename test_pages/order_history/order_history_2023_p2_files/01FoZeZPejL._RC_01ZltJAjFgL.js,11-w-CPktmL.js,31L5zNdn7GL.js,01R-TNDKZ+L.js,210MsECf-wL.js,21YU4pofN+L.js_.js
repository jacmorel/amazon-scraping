(function(c){var a=window.AmazonUIPageJS||window.P,e=a._namespace||a.attributeErrors,d=e?e("CSMMetricsLoggerJS",""):a;d.guardFatal?d.guardFatal(c)(d,window):d.execute(function(){c(d,window)})})(function(c,a,e){c.when("A","csm-marker-logger").register("csm-ajax-metrics",function(a,b){return a.createClass({_scope:null,scope:function(a){if(a)this._scope=a;else return this._scope},init:function(a){this.scope(a)},setPreAjax:function(){b.recordUet("bb",this.scope(),{wb:1})},setPostAjax:function(){b.recordUet("be",
this.scope(),{wb:1})},publishAjaxMetrics:function(){b.recordUex("ld",this.scope(),{wb:1})}})});"use strict";c.when("A").register("csm-counter-metrics",function(d){var b=function(b){a.ue&&"function"===typeof a.ue.count&&a.ue.count(b,(a.ue.count(b)||0)+1)},c=function(b){"function"===typeof a.uex&&a.uex("ld",b,{wb:1})};return{increment:b,postBack:c,incrementAndPostBack:function(a){b(a);c(a)}}});"use strict";c.when("A").register("csm-marker-logger",function(c){return{recordUet:function(b,c,d,e){"function"===
typeof a.uet&&a.uet(b,c,d,e)},recordUex:function(b,c,d,e){"function"===typeof a.uex&&a.uex(b,c,d,e)}}});"use strict";c.when("A").register("csm-reftag-metrics",function(a){return{recordReftag:function(b){a.post("/gp/mobile/tag?ref\x3d"+b)}}})});
/* ******** */
(function(b){var d=window.AmazonUIPageJS||window.P,e=d._namespace||d.attributeErrors,a=e?e("BuyItAgainRightRailJS",""):d;a.guardFatal?a.guardFatal(b)(a,window):a.execute(function(){b(a,window)})})(function(b,d,e){b.when("A","right-rail","ready").register("right-rail-bia-content",function(a){return a.createClass({_biaContent:null,_orders:null,_biaItems:null,onDomReady:function(){this._biaContent=a.$(".bia-content");this._orders=a.$(".order-card");this._biaItems=this._biaContent.find(".a-spacing-medium");
if(this._biaItems.length&&this._orders.size()){for(var b=this._orders.first(),c=this._orders.last(),b=c.height()+c.offset().top-b.offset().top,c=this._biaItems.length-1;1<=c;c--)this._biaContent.height()>b&&a.$(this._biaItems.get(c)).hide();this._biaContent.css("visibility","visible")}else this._biaContent.remove()}})});"use strict";b.when("right-rail-bia-content").register("right-rail-bia-content-initializer",function(a){(new a).onDomReady()})});
/* ******** */
(function(c){var f=window.AmazonUIPageJS||window.P,g=f._namespace||f.attributeErrors,d=g?g("HolidayBannerJS",""):f;d.guardFatal?d.guardFatal(c)(d,window):d.execute(function(){c(d,window)})})(function(c,f,g){c.when("A").register("yo-holiday-animation",function(d){function c(a,b){var e=Math.random()*(b-a+1)+a;return Math.floor(e)}function g(a,b){return Math.random()*(b-a)+a}function k(a){a.width=a.clientWidth;a.height=a.clientHeight}var l=["rgb(241,215,141)","rgb(197,162,85)","rgb(209,174,99)"],h=function(a,
b,e){this.canvasNode=a;this.weight=b;this.verticalSpeed=e;this.dim={width:this.canvasNode.width,height:this.canvasNode.height};this.randomize();this.yPos=-1*c(0,this.dim.height)};h.prototype.move=function(){this.xPos+=this.xDelta;if(10>this.xPos||this.xPos>this.dim.width-10)this.xDelta=-this.xDelta;this.yPos+=this.verticalSpeed;this.yPos>this.dim.height&&this.reset()};h.prototype.draw=function(a){var b=this.weight;this.yPos>this.startShrinkingAt&&(b=this.weight*(1-(this.yPos-this.startShrinkingAt)/
this.shrinkDistance));0>=b&&(b=0,this.reset());a.beginPath();a.arc(this.xPos,this.yPos,b,0,2*Math.PI,!1);a.fillStyle=this.fillStyle;a.fill()};h.prototype.reset=function(){this.dim={width:this.canvasNode.width,height:this.canvasNode.height};this.yPos=-2*this.weight;this.randomize()};h.prototype.randomize=function(){this.xPos=c(10,this.dim.width-10);this.xDelta=.25*Math.tan(g(-Math.PI/4,Math.PI/4));this.startShrinkingAt=this.dim.height*g(.4,.7);this.shrinkDistance=.15*this.dim.height;this.fillStyle=
l[c(0,l.length-1)]};var n=function(a,b,e){k(a);this.flakes=[];for(var m=0;m<b;m++)this.flakes.push(new h(a,e.weight,e.speed));d.$(f).resize(d.debounce(function(){k(a)},250));this.canvasNode=a;this.ctx=a.getContext("2d")};n.prototype.animateFrame=function(){var a=this.canvasNode.width,b=this.canvasNode.height;this.ctx.save();this.ctx.clearRect(0,0,a,b);this.ctx.restore();for(a=0;a<this.flakes.length;a++)b=this.flakes[a],b.move(),b.draw(this.ctx)};return function(a){function b(){e.forEach(function(a){a.animateFrame()});
f.requestAnimationFrame(b)}var e=[];this.init=function(){var c=document.createElement("canvas");if(c.getContext&&c.getContext("2d")&&f.requestAnimationFrame){for(var c=document.querySelectorAll(a.canvasSelector),d=0;d<c.length;d++)e.push(new n(c[d],a.numberOfFlakes,{weight:a.flakeSize,speed:a.flakeSpeed}));b()}}}})});
/* ******** */
(function(g){var k=window.AmazonUIPageJS||window.P,h=k._namespace||k.attributeErrors,c=h?h("YourOrdersCommonJS",""):k;c.guardFatal?c.guardFatal(g)(c,window):c.execute(function(){g(c,window)})})(function(g,k,h){g.when("A","yo.loading-display","ready").register("yo.content-loader",function(c,d){var b=function(a,b,c){c=c||{};this._counterLogger=a;this._ajaxMetricsLogger=b;this._statesByOperation=c.statesByOperation||{};this._loadingDisplay=d};b.DEFAULT_AJAX_TIMEOUT_IN_MILLISECONDS=15E3;b.YOUR_ORDERS_ORDERS_VIEW_ENDPOINT=
"/your-orders/orders";b.YOUR_ORDERS_DELIVERIES_VIEW_ENDPOINT="/your-orders/deliveries";b.OPERATIONS={LOAD_NEXT_PAGE:"load_next_page"};b.currentIndex=h;b.hasIndexMatched=!1;b.prototype.loadNextOrdersViewPage=function(){if(!this._isOperationActive(b.OPERATIONS.LOAD_NEXT_PAGE)){var a=c.state("page-state")||{};a.nextStartIndex!==h&&(b.currentIndex!==a.nextStartIndex?(b.currentIndex=a.nextStartIndex,b.hasIndexMatched=!1):b.currentIndex===a.nextStartIndex&&(a.nextStartIndex=h,b.hasIndexMatched||c.trigger("yo:page-state:no-next-page"),
b.hasIndexMatched=!0));if(a.nextStartIndex){var f={},e={};e.startIndex=a.nextStartIndex;e.orderFilter=a.orderFilter;e.timeFilter=a.timeFilter;e.enablePosy=a.enablePosy;a.debugContext&&(Object.keys(a.debugContext).forEach(function(b){e[b]=a.debugContext[b]}),f.ajaxTimeout=4E4);f.ajaxParameters=e;f.ajaxMetricsLogger=this._ajaxMetricsLogger;this._loadingDisplay.start();return this._loadContentAsynchronously(b.YOUR_ORDERS_ORDERS_VIEW_ENDPOINT,b.OPERATIONS.LOAD_NEXT_PAGE,f)}}};b.prototype.loadNextDeliveriesViewPage=
function(){if(!this._isOperationActive(b.OPERATIONS.LOAD_NEXT_PAGE)){var a=c.state("page-state")||{};a.nextPageToken!==h&&(b.currentIndex!==a.nextPageToken?(b.currentIndex=a.nextPageToken,b.hasIndexMatched=!1):b.currentIndex===a.nextPageToken&&(a.nextPageToken=h,b.hasIndexMatched||c.trigger("yo:deliveries:page-state:no-next-page"),b.hasIndexMatched=!0));if(a.nextPageToken){var f={},e={};e.pageToken=a.nextPageToken;e.orderFilter=a.orderFilter;e.timeFilter=a.timeFilter;e.pastPurchaseCount=a.pastPurchaseCount;
a.debugContext&&(Object.keys(a.debugContext).forEach(function(b){e[b]=a.debugContext[b]}),f.ajaxTimeout=4E4);f.ajaxParameters=e;f.ajaxMetricsLogger=this._ajaxMetricsLogger;this._loadingDisplay.start();return this._loadContentAsynchronously(b.YOUR_ORDERS_DELIVERIES_VIEW_ENDPOINT,b.OPERATIONS.LOAD_NEXT_PAGE,f)}}};b.prototype._loadContentAsynchronously=function(a,f,e){e=e||{};var d=e.ajaxParameters||{},g=e.ajaxTimeout||b.DEFAULT_AJAX_TIMEOUT_IN_MILLISECONDS,h=e.ajaxMetricsLogger,k=this,l=c.$.Deferred(c.$.proxy(this._attachAjaxOperationHandlers,
this));h.setPreAjax();e=c.ajax(a,{headers:{Accept:"application/json"},method:"get",timeout:g,params:d,success:function(){l.resolveWith(k,[{ajaxMetricsLogger:h,operation:f}])},abort:function(){l.rejectWith(k,[{ajaxMetricsLogger:h,failureType:"abort",operation:f,url:a}])},error:function(b,c){l.rejectWith(k,[{ajaxMetricsLogger:h,failureType:"error",operation:f,url:a,xhr:b,statusText:c}])}});this._setOperationState(f,{active:!0,handle:e});return l.promise({ajaxHandle:e})};b.prototype._attachAjaxOperationHandlers=
function(a){a.done(this._onSuccess).fail(this._onFail).always(this._onFinish)};b.prototype._onFinish=function(a){this._setOperationState(a.operation,{active:!1})};b.prototype._onSuccess=function(a){a.ajaxMetricsLogger.setPostAjax();a.ajaxMetricsLogger.publishAjaxMetrics();this._loadingDisplay.stop()};b.prototype._onFail=function(a){a.ajaxMetricsLogger.setPostAjax();"error"===a.failureType&&(this._counterLogger.incrementAndPostBack("yourordersjs:ajax:contentloader:"+a.operation+":error"),this._abortAllActiveAjaxOperations(),
this._loadingDisplay.stop(),"Request Timeout"===a.statusText||a.xhr&&a.xhr.http&&400<=a.xhr.http.status&&500!==a.xhr.http.status)&&(k.location.href=a.url,this._counterLogger.incrementAndPostBack("yourordersjs:ajax:contentloader:"+a.operation+":refresh"))};b.prototype._abortAllActiveAjaxOperations=function(){for(var a in this._statesByOperation)this._statesByOperation.hasOwnProperty(a)&&this._abortOperation(a)};b.prototype._abortOperation=function(a){(a=this._statesByOperation[a])&&a.active&&a.handle&&
a.handle.abort&&a.handle.abort()};b.prototype._isOperationActive=function(a){return this._statesByOperation[a]&&this._statesByOperation[a].active};b.prototype._setOperationState=function(a,b){this._statesByOperation[a]=b};return b});"use strict";g.when("A","ready").register("yo.loading-display",function(c,d){function b(a){this.$element=a}c=c.$(".next-page-spinner-container");b.prototype={start:function(){this.$element.show()},stop:function(){this.$element.hide()}};return new b(c)});"use strict";g.when("A",
"yo.search-and-filter-selectors").register("yo.search-and-filter.component.filter-flags-form",function(c,d){return c.createClass({_domNode:null,onDomReady:function(){this._domNode=c.$(d.filterFlagsForm);c.state("filter-flags-form-state",{filterReftagPrefix:this._domNode.find('input[name\x3d"ref_"]').val()})},submit:function(b,a){"amazon_pay"===a.value?k.location.assign(a.redirectUrl):(this._updateOrderFilterTextBox(b.value,a.value),this._updateJaneAndDigitalTextBoxes(a.value),this._updateReftagTextBox(b,
a),this._domNode.submit())},_updateOrderFilterTextBox:function(b,a){var c=this._domNode.find('input[name\x3d"orderFilter"]');"cancelled"===a||"open"===a?c.val(a):"fresh"===a?c.val("freshOrders-"+b):c.val(b)},_updateJaneAndDigitalTextBoxes:function(b){this._domNode.find('input[name\x3d"digitalOrders"]').val("digital"===b?"1":"0");this._domNode.find('input[name\x3d"janeOrders"]').val("jane"===b?"1":"0")},_updateReftagTextBox:function(b,a){var d=c.state("filter-flags-form-state").filterReftagPrefix;
"cancelled"!==a.value&&"open"!==a.value&&(d+="_"+b.ref);d+="_"+a.ref;this._domNode.find('input[name\x3d"ref_"]').val(d)}})});"use strict";g.when("A","a-button","a-secondary-view","yo.search-and-filter-selectors","yo.search-and-filter.component.order-type-filter","yo.search-and-filter.component.time-filter","yo.search-and-filter.component.filter-flags-form").register("yo.search-and-filter.component.order-filter-view",function(c,d,b,a,f,e,g){return c.createClass({_doApply:!1,_domNode:null,_filterFlagsForm:null,
_orderTypeFilter:null,_timeFilter:null,init:function(a,b,c){this._filterFlagsForm=a||new g;this._orderTypeFilter=b||new f;this._timeFilter=c||new e},onDomReady:function(){this._filterFlagsForm.onDomReady();this._orderTypeFilter.onDomReady();this._timeFilter.onDomReady();this._domNode=c.$(a.orderFilterView);this._domNode.click(c.$.proxy(this._onContainerClick,this));c.declarative("order-filter-submit","click",c.$.proxy(this._applyFilters,this));c.on("a:popover:show:filterView",c.$.proxy(function(){this._doApply=
!1},this));c.on("a:popover:afterSlideOut:filterView",c.$.proxy(function(){this._doApply&&(this._filterFlagsForm.submit(this._timeFilter.getSelectedFilterData(),this._orderTypeFilter.getSelectedFilterData()),this._doApply=!1)},this))},_applyFilters:function(){d(a.applyFilterButton).disable();this._doApply=!0;b.get("filterView").hide()},_onContainerClick:function(b){b=d(a.applyFilterButton);b.isEnabled()||b.enable()}})});"use strict";g.when("A","yo.search-and-filter.mixin.selected-filter-data-mixin",
"yo.search-and-filter-selectors").register("yo.search-and-filter.component.order-type-filter",function(c,d,b){var a={_handlerMap:{},init:function(){this._handlerMap={open:{select:this._onOpenFilterSelected,deselect:this._onOpenFilterDeselected},cancelled:{select:this._onCancelFilterSelected,deselect:this._onCancelFilterDeselected},amazon_pay:{select:this._onAmazonPayFilterSelected,deselect:this._onAmazonPayFilterDeselected},"default":{select:function(){},deselect:function(){}}};return this},get:function(a){return this._handlerMap[a]||
this._handlerMap["default"]},_onOpenFilterSelected:function(){c.$(b.timeFilterContainer).hide()},_onOpenFilterDeselected:function(){c.$(b.timeFilterContainer).show()},_onCancelFilterSelected:function(){c.$(b.timeFilterContainer).hide()},_onCancelFilterDeselected:function(){c.$(b.timeFilterContainer).show()},_onAmazonPayFilterSelected:function(){c.$(b.timeFilterContainer).hide()},_onAmazonPayFilterDeselected:function(){c.$(b.timeFilterContainer).show()}}.init(),f=c.createClass({_currentlySelectedTypeFilter:"all",
_radioButtonGroupSelector:null,onDomReady:function(){this._radioButtonGroupSelector=b.orderTypeFilterRadioButtons;var a=c.$(b.orderTypeFilterContainer);a.delegate(b.orderTypeFilterRadioButtons,"click",c.$.proxy(this._onRadioButtonClick,this));a.find(this._radioButtonGroupSelector+":checked").click()},_onRadioButtonClick:function(a){a=c.$(a.target).val();a!==this._currentlySelectedTypeFilter&&(this._deselectTypeFilter(this._currentlySelectedTypeFilter),this._selectTypeFilter(a),this._currentlySelectedTypeFilter=
a)},_selectTypeFilter:function(b){a.get(b).select()},_deselectTypeFilter:function(b){a.get(b).deselect()}});c.mixin(f.prototype,d);return f});"use strict";g.when("A","yo.search-and-filter-selectors").register("yo.search-and-filter.component.search-bar",function(c,d){return c.createClass({_searchInputContainer:null,_searchInput:null,onDomReady:function(){this._searchInputContainer=c.$(d.searchInputContainer);this._searchInput=c.$(d.searchInput);this._searchInputContainer.focusin(c.$.proxy(this._onFocusIn,
this));this._searchInputContainer.focusout(c.$.proxy(this._onFocusOut,this));this._searchInput.keyup(c.$.proxy(this._onKeyUp,this));this._isSearchInputFocused()&&this._onFocusIn()},_isSearchInputFocused:function(){return this._searchInput.is(":focus")},_onKeyUp:function(b){""!==c.$(b.target).val()?c.hide(d.openFilterLinkContainer):c.show(d.openFilterLinkContainer)},_onFocusIn:function(b){""!==this._searchInput.val()&&c.hide(d.openFilterLinkContainer)},_onFocusOut:function(b){c.show(d.openFilterLinkContainer)}})});
"use strict";g.when("A","yo.search-and-filter.mixin.selected-filter-data-mixin","yo.search-and-filter-selectors").register("yo.search-and-filter.component.time-filter",function(c,d,b){var a=c.createClass({_radioButtonGroupSelector:null,onDomReady:function(){this._radioButtonGroupSelector=b.timeFilterRadioButtons}});c.mixin(a.prototype,d);return a});"use strict";g.when("A").register("yo.search-and-filter.mixin.selected-filter-data-mixin",function(c){return{getSelectedFilterData:function(){var d=c.$(this._radioButtonGroupSelector+
":checked"),b=d.closest(".js-radio").attr("data-ref"),a=d.closest(".js-radio").attr("data-redirecturl");return{value:d.val(),ref:b,redirectUrl:a}}}});"use strict";g.register("yo.search-and-filter-selectors",function(){return{searchInputContainer:".js-search-bar-input",searchInput:"#search-input",orderFilterView:".js-order-filter-view",orderTypeFilterContainer:".js-order-type-filter-container",orderTypeFilterRadioButtons:'[name\x3d"orderTypeFilterGroup"]',timeFilterContainer:".js-time-filter-container",
timeFilterRadioButtons:'[name\x3d"timeFilterGroup"]',applyFilterButton:".js-apply-filter-button",openFilterLinkContainer:".js-open-filter-link-container",filterFlagsForm:".js-filter-flags-form"}})});
/* ******** */
(function(c){var e=window.AmazonUIPageJS||window.P,d=e._namespace||e.attributeErrors,a=d?d("YourAccountMultiItemLayoutBuzzAssets",""):e;a.guardFatal?a.guardFatal(c)(a,window):a.execute(function(){c(a,window)})})(function(c,e,d){c.when("A","ready").register("more-items-placeholder",function(a){var b=function(f,b){var c=this;this.$placeholder=f.find("."+b+"-more-items-placeholder");this.$grid=f.find("."+b+"-grid");this.$items=this.$grid.find("."+b+"-grid-item");this.$overflowItemCount=this.$placeholder.find("."+
b+"-more-items-count");this.itemCount=this.$items.size();this.lastOverflowItemCount=0;this.$placeholder.remove();this.itemCount&&(this.refresh(),a.on.resize(function(){c.refresh()}))};b.prototype.refresh=function(){var a=this.getOverflowItemCount();a!==this.lastOverflowItemCount&&(this.$placeholder.remove(),0<a&&(this.$overflowItemCount.text(a+1),this.$items.eq(this.itemCount-a-1).prepend(this.$placeholder),this.$placeholder.show()),this.lastOverflowItemCount=a)};b.prototype.getOverflowItemCount=
function(){var b=this.$grid.offset().top,c=this.$grid.height();return a.reduce(this.$items.get(),function(e,d){d=a.$(d).offset().top-b;return e+(d>=c?1:0)},0)};return b});c.when("A","more-items-placeholder","ready").execute(function(a,b){a.$(".multi-item-multi-row").each(function(){new b(a.$(this),"multi-item-multi-row")});a.$(".multi-item-single-row").each(function(){new b(a.$(this),"multi-item-single-row")})})});
/* ******** */
(function(d){var l=window.AmazonUIPageJS||window.P,h=l._namespace||l.attributeErrors,a=h?h("YourAccountOrderCareAmzlBuzzAssets",""):l;a.guardFatal?a.guardFatal(d)(a,window):a.execute(function(){d(a,window)})})(function(d,l,h){"use strict";d.when("A").register("amzl-form-validator",function(a){function e(c){this.$form=a.$(c);this.requiredInputNames=this.getRequiredInputNames()}e.prototype.hasRequiredValues=function(){var c=this.getFormData();return 0===a.$.grep(this.requiredInputNames,function(b){return 0===
a.trim(c[b]||"").length}).length};e.prototype.isValid=function(){return this.hasRequiredValues()};e.prototype.getRequiredInputNames=function(){return this.$form.find(".js-flag-required:visible, input[type\x3dhidden].js-flag-required").map(function(){var c=a.$(this);return c.attr("name")||c.find("input, select").attr("name")||c.siblings("input, select").attr("name")}).get()};e.prototype.getFormData=function(){var c=this.$form.serializeArray(),b={};a.each(c,function(a){b[a.name]=a.value});return b};
return e});"use strict";d.when("A","button-with-disabled-message","amzl-form-validator").register("amzl-form",function(a,e,c){var b=function(a,b){a.find(".amzl-error-message").removeClass("aok-hidden");b&&b.enable()},f=function(a,b){var c=b.isEnabled();a&&!c?b.enable():!a&&c&&b.disable()},d=function(b,k,d){b=a.$(b);var g=b.find(".amzl-submit-button.hide-if-no-js");if(b.size()&&g.size()){d&&g.val(d);var n=new e(g,k||g.find("input").data("disabled_message"));var m=new c(b);f(m.isValid(),n);b.undelegate(".validate").delegate("input, select",
"change.validate keyup.validate keydown.validate keypress.validate",function(){f(m.isValid(),n)})}},p=function(b){var c=a.$(b),e=c.find(".amzl-action-container"),g=c.find(".amzl-error-message");e.size()&&c.delegate(".amzl-action-container-handle","change",function(b){b=a.$(b.target);var f=b.val(),k=b.closest(".a-radio").data();b.is(":checked")&&(b.closest(".amzl-action-container-handle").addClass("amzl-action-container-handle--selected").siblings(".amzl-action-container-handle").removeClass("amzl-action-container-handle--selected"),
e.addClass("aok-hidden").filter(".amzl-action-container-"+f).removeClass("aok-hidden"),d(c,k.instructionstext,k.submittext),g.addClass("aok-hidden"))})},h=function(c,e){var d=c.$target.closest("form"),f=d.attr("action"),g=d.attr("method"),k=d.serialize();a.ajax(f+"?"+k,{method:g,success:function(a){a&&"success"===a.status?l.location.href=d.find("input[name\x3dsuccessUrl]").val():b(d,e)},error:function(){b(d,e)}});!e&&c.$event.preventDefault()};if(0!==a.$("#debounceWeblabOn").length||0!==a.$("#postShipDebounce").length){var q=
a.debounce(h,500,!0);a.declarative("amzl-action-form","submit",function(b){1!==b.data.processSubmit&&b.$event.preventDefault();var a=b.$target.closest("form").find(".amzl-submit-button.hide-if-no-js");a=new e(a,a.find("input").data("processing_message"));a.disable();q(b,a)})}else a.declarative("amzl-action-form","submit",h);return function(b){b=a.$(b);b.size()&&(d(b),p(b))}});d.when("A","amzl-form","ready").execute(function(a,e){e(a.$(".amzl-action-form"))});"use strict";d.when("A","a-modal","amzl-form",
"ready").register("amzl-modal",function(a,e,c){a.on("a:popover:ajaxContentLoaded:amzl-modal",function(b){c(b.popover.$container.find(".amzl-action-form"))});return function(b,c,d){var f=c.url;c.get&&(f+=-1===f.indexOf("?")?"?":"\x26",f+=a.$.param(c.get));e.create(b,{name:"amzl-modal",header:c.title,url:f,width:d||500,dataStrategy:"ajax"}).show()}});d.when("A","a-dropdown","amzl-modal","ready").execute(function(a,e,c){a.declarative("amzl-actions-dropdown","change",function(b){var a=b.$target,d=a.val();
d&&(b=b.data[d],d=b.declarativeAction&&b.declarativeAction.action_params||{},c(a.find("option:selected"),b,d.modalWidth),e.getSelect(a).setValue(""))})});d.when("A","amzl-modal","ready").execute(function(a,e){a.declarative("amzl-actions-link","click",function(a){var b=a.$target;e(b,{title:b.text(),url:b.attr("href")},a.data.modalWidth);a.$event.preventDefault()});a.declarative("amzl-access-code-link","click",function(a){var b=a.$currentTarget.find("a");e(b,{title:b.find(".amzlAction-modalTitle").text(),
url:b.attr("href")},a.data.modalWidth);a.$event.preventDefault()})});"use strict";d.when("A","ready").execute(function(a){a.on("a:button-group:amzl-reschedule-date-picker:toggle",function(e){var c=e.selectedButton.$button.closest(".simple-date-picker__date").data("epoch"),b=e.selectedButton.$button.closest(".simple-date-picker__date").data("end_epoch"),d=e.selectedButton.$button.closest(".simple-date-picker__date").data("service_offering_token");e=e.selectedButton.$button.closest(".simple-date-picker__date").data("timezone");
a.$(".amzl-reschedule-start-time-input").val(c).trigger("change");a.$(".amzl-reschedule-end-time-input").val(b).trigger("change");a.$(".amzl-reschedule-timezone-input").val(e).trigger("change");a.$(".amzl-reschedule-service-offering-token-input").val(d).trigger("change")})});"use strict";d.when("A","a-button","a-tooltip").register("button-with-disabled-message",function(a,d,c){function b(b,c){this.$button=a.$(b);this.auiButton=d(this.$button);this.disabledMessage=c;this.auiButton.isEnabled()||this.disable()}
b.prototype.disable=function(){this.auiButton.disable();c.remove(this.$button);c.create(this.$button,{content:this.disabledMessage});return this};b.prototype.enable=function(){this.auiButton.enable();c.remove(this.$button);return this};b.prototype.isEnabled=function(){return this.auiButton.isEnabled()};return b})});
/* ******** */
(function(d){var e=window.AmazonUIPageJS||window.P,f=e._namespace||e.attributeErrors,a=f?f("YourOrdersOrdersViewJS",""):e;a.guardFatal?a.guardFatal(d)(a,window):a.execute(function(){d(a,window)})})(function(d,e,f){d.when("A","ready").register("yo.page-initializer",function(a){var b=function(a,b,d,e){this._pageStateMonitor=a;this._scrollMonitor=b;this._contentLoader=d;this._visibilityController=e;this._isInitialized=!1};b.prototype.initialize=function(){if(!this._isInitialized){var b=a.$.proxy(this._contentLoader.loadNextOrdersViewPage,
this._contentLoader);a.on("yo:scroll:bottom",b);a.on("yo:page-state:no-next-page",this._visibilityController.showNavFooter);this._pageStateMonitor.enable();this._scrollMonitor.enable();this._isInitialized=!0}};return b});"use strict";d.when("A").register("yo.page-state-monitor",function(a){var b=function(b,c){b.nextStartIndex||a.trigger("yo:page-state:no-next-page")},c=function(){this._isEnabled=!1};c.prototype.enable=function(){if(!this._isEnabled){var c=a.state("chunkState")||{};a.state("page-state",
c);c.nextStartIndex||a.trigger("yo:page-state:no-next-page");a.state.bind("chunkState",function(b,c){a.state("page-state");a.state("page-state",{nextStartIndex:b.nextStartIndex,orderFilter:b.orderFilter,timeFilter:b.timeFilter,debugContext:b.debugContext})});a.state.bind("page-state",b);this._isEnabled=!0}};return c});"use strict";d.when("A","yo.selectors","ready").register("yo.scroll-monitor",function(a,b){var c=function(a){this._enabled=!1;var b=this;this._checkScrollCallback=function(a){b._checkScroll(a)}};
c.prototype.enable=function(){this._enabled||(a.on.scroll(this._checkScrollCallback),this._enabled=!0,this._checkCurrentScroll())};c.prototype.disable=function(){this._enabled&&(a.off("scroll",this._checkScrollCallback),this._enabled=!1)};c.prototype._checkScroll=function(c){var d=c.scrollTop+c.height,e=a.$(b.mobileOrdersViewContainer);c=e.offset().top+e.height()-2*c.height;d>c&&a.trigger("yo:scroll:bottom")};c.prototype._checkCurrentScroll=function(){this._checkScroll({scrollTop:a.$(e).scrollTop(),
height:a.$(e).height()})};return c});"use strict";d.register("yo.selectors",function(){return{mobileOrdersViewContainer:".your-orders-mobile-content-container",endOfItemsDivider:"#your-orders-mobile-content-container__end-of-items-divider",navFooter:"footer.nav-mobile"}});"use strict";d.when("A","yo.selectors","ready").register("yo.visibility-controller",function(a,b){var c=function(){};c.prototype.showNavFooter=function(){a.$(b.navFooter).show();a.$(b.endOfItemsDivider).show()};return c});"use strict";
d.when("A").register("yo.debug-handler",function(a){a.on("yo:debug-info:is-ready",function(){var b=a.$("#debug-info-template");a.$(".debug-info").last().html(b.html());b.remove()});return{}});"use strict";d.when("yo.time-filter-form","csm-marker-logger","time-filter-form-ready").register("yo.time-filter-form-initializer",function(a,b){(new a).onDomReady();b.recordUet("fn")});"use strict";d.when("A").register("yo.time-filter-form",function(a){return a.createClass({_domNode:null,onDomReady:function(){this._domNode=
a.$(".js-time-filter-form");a.on("a:dropdown:selected:timeFilter",a.$.proxy(this._submit,this))},_submit:function(b){var c=this._domNode.find('input[name\x3d"ref_"]');b=a.$(b.nativeItemNode).attr("data-ref");b=c.val()+"_"+b;c.val(b);this._domNode.submit()}})});"use strict";d.when("right-rail").register("right-rail-initializer",function(a){(new a).onDomReady()});"use strict";d.when("A","ready").register("right-rail",function(a){return a.createClass({_rightRail:null,_mainContent:null,_yourOrdersContainer:null,
_window:null,_firstOrder:null,_rightRailWidth:null,_mainContentWidth:null,_wholeContentWidth:null,onDomReady:function(){this._rightRail=a.$(".js-yo-right-rail");this._mainContent=a.$(".js-yo-main-content");this._yourOrdersContainer=a.$(".js-yo-container");this._firstOrder=a.$(".js-order-card").first();this._window=a.$(e);this._rightRail.find("div").size()&&(this._rightRailWidth=this._rightRail.outerWidth(!0),this._mainContentWidth=this._mainContent.outerWidth(!0),this._wholeContentWidth=parseInt(this._rightRail.css("margin-left"))+
this._mainContentWidth+this._rightRailWidth,this._setTop(),this._adjustToWindow(),this._window.resize(a.$.proxy(this._adjustToWindow,this)))},_adjustToWindow:function(){var a=this._window.width();if(this._wholeContentWidth<a){var c=a-this._mainContentWidth-this._rightRailWidth;c<this._rightRailWidth?this._yourOrdersContainer.width(a-2*c):this._yourOrdersContainer.width(this._mainContentWidth);this._rightRail.show()}else this._yourOrdersContainer.width(this._mainContentWidth),this._rightRail.hide()},
_setTop:function(){var a=this._firstOrder.offset().top-this._yourOrdersContainer.offset().top;this._rightRail.css({top:a+"px"})}})});"use strict";d.when("right-rail-top").register("right-rail-top-initializer",function(a){(new a).onDomReady()});"use strict";d.when("A","ready").register("right-rail-top",function(a){return a.createClass({_rightRailTop:null,_mainContent:null,_yourOrdersContainer:null,_window:null,_searchBar:null,_rightRailTopWidth:null,_mainContentWidth:null,_wholeContentWidth:null,onDomReady:function(){this._rightRailTop=
a.$(".js-yo-right-rail-top");this._mainContent=a.$(".js-yo-main-content");this._yourOrdersContainer=a.$(".js-yo-container");this._searchBar=a.$(".search-bar").first();this._window=a.$(e);this._rightRailTop.find("div").size()&&(this._rightRailTopWidth=this._rightRailTop.outerWidth(!0),this._mainContentWidth=this._mainContent.outerWidth(!0),this._wholeContentWidth=parseInt(this._rightRailTop.css("margin-left"))+this._mainContentWidth+this._rightRailTopWidth,this._setTop(),this._adjustToWindow(),this._window.resize(a.$.proxy(this._adjustToWindow,
this)))},_adjustToWindow:function(){var a=this._window.width();if(this._wholeContentWidth<a){var c=a-this._mainContentWidth-this._rightRailTopWidth;c<this._rightRailTopWidth?this._yourOrdersContainer.width(a-2*c):this._yourOrdersContainer.width(this._mainContentWidth);this._rightRailTop.show()}else this._yourOrdersContainer.width(this._mainContentWidth),this._rightRailTop.hide()},_setTop:function(){var a=this._searchBar.offset().top-this._yourOrdersContainer.offset().top;this._rightRailTop.css({top:a+
"px"})}})})});
/* ******** */
