(function(f){var h=window.AmazonUIPageJS||window.P,l=h._namespace||h.attributeErrors,d=l?l("WheresMyPackageJSBuzz",""):h;d.guardFatal?d.guardFatal(f)(d,window):d.execute(function(){f(d,window)})})(function(f,h,l){f.when("A","a-modal","wmp-v2-constants").execute(function(d,e,a){d.declarative(a.MODAL_NAME,"click",function(b){var c=e.get(a.MODAL_NAME);c&&c.isActive()?c.update({header:b.data.header,url:b.data.url}).show():(e.remove(a.MODAL_NAME),e.create(d.$("\x3cdiv /\x3e"),{activate:"onclick",cache:!1,
dataStrategy:"ajax",header:b.data.header,name:a.MODAL_NAME,url:b.data.url,width:a.MODAL_WIDTH}).show())})});"use strict";f.when("A","wmp-submit-request","wmp-v2-constants","wmp-v2-common","ready").execute(function(d,e,a,b){d.declarative("wmp-v2-refund-replace-submit","click",function(c){c.$event.preventDefault();b.hideMessage();var f=d.$(a.PRE_SUBMIT_VIEW_CLASS).find("input[name\x3d"+a.REFUND_REPLACE_OPTION_NAME+"]:radio:checked").val(),g=a.ERROR_MESSAGE_ID;f===a.REFUND_OPTION_VALUE?g=a.REFUND_SUCCESS_MESSAGE_ID:
f===a.REPLACE_OPTION_VALUE&&(g=a.REPLACE_SUCCESS_MESSAGE_ID);"1"===c.data.requestSuccessOverride?b.showMessage(c.data.submitMessageUrl,g):e(f,c.data.submitParams).done(function(){b.showMessage(c.data.submitMessageUrl,g)}).fail(function(){b.showMessage(c.data.submitMessageUrl,a.ERROR_MESSAGE_ID)})});d.declarative("wmp-v2-refund-submit","click",function(c){c.$event.preventDefault();b.hideMessage();"1"===c.data.requestSuccessOverride?b.showMessage(c.data.submitMessageUrl,a.REFUND_SUCCESS_MESSAGE_ID):
e(a.REFUND_OPTION_VALUE,c.data.submitParams).done(function(){b.showMessage(c.data.submitMessageUrl,a.REFUND_SUCCESS_MESSAGE_ID)}).fail(function(){b.showMessage(c.data.submitMessageUrl,a.ERROR_MESSAGE_ID)})});d.declarative("wmp-v2-replace-submit","click",function(c){c.$event.preventDefault();b.hideMessage();"1"===c.data.requestSuccessOverride?b.showMessage(c.data.submitMessageUrl,a.REPLACE_SUCCESS_MESSAGE_ID):e(a.REPLACE_OPTION_VALUE,c.data.submitParams).done(function(){b.showMessage(c.data.submitMessageUrl,
a.REPLACE_SUCCESS_MESSAGE_ID)}).fail(function(){b.showMessage(c.data.submitMessageUrl,a.ERROR_MESSAGE_ID)})})});"use strict";f.when("A","wmp-v2-constants","ready").register("wmp-v2-common",function(d,e){return{hideMessage:function(){d.$("."+e.ERROR_MESSAGE_CLASS).addClass(e.AUI_HIDDEN_CLASS)},showMessage:function(a,b){var c=d.$("."+e.ERROR_MESSAGE_CLASS);b===e.ERROR_MESSAGE_ID&&c.size()?c.removeClass(e.AUI_HIDDEN_CLASS):-1!==a.indexOf("?")?h.location.href=a+"\x26"+e.MESSAGE_ID_URL_PARAM+"\x3d"+b:
h.location.href=a+"?"+e.MESSAGE_ID_URL_PARAM+"\x3d"+b}}});"use strict";f.when("A","wmp-common-constants").register("wmp-v2-constants",function(d,e){var a={};d.map(e,function(b,c){a[c]=b});d.map({PRE_SUBMIT_VIEW_CLASS:".wmp-v2-refund-replace-pre-submit",MESSAGE_ID_URL_PARAM:"wmpMessageId",ERROR_MESSAGE_ID:"1",REFUND_SUCCESS_MESSAGE_ID:"2",REPLACE_SUCCESS_MESSAGE_ID:"3",ERROR_MESSAGE_CLASS:"wmp-error-message",AUI_HIDDEN_CLASS:"aok-hidden",MODAL_NAME:"wheres-my-package-modal",MODAL_WIDTH:520},function(b,
c){a[c]=b});return a});"use strict";f.when("A").register("wmp-common-constants",function(d){return{REFUND_REPLACE_OPTION_NAME:"wmp_option",REFUND_OPTION_VALUE:"Refund",REPLACE_OPTION_VALUE:"Replacement"}});"use strict";f.when("A").register("wmp-submit-request",function(d){return function(e,a){var b=new d.$.Deferred;a.option=e;d.ajax("/gp/shared-cs/ajax/wmp/submitter.html",{method:"post",dataType:"json",params:a,timeout:5E3,cache:!1,contentType:"application/x-www-form-urlencoded; charset\x3dutf-8",
success:function(a){1===a.success?b.resolve():b.reject()},error:function(){b.reject()}});return b.promise()}});"use strict";f.when("A").register("wmp-find-pop-cmpt",function(d){return function(e,a){e=e.parents(".a-popover").data("a-popover-id");return a.get(e)}});"use strict";f.when("A","wmp-find-pop-cmpt").register("wmp-hide-pop-cmpt",function(d,e){return function(a,b){(a=e(a,b))&&"function"===typeof a.hide&&a.hide()}});"use strict";f.when("A","a-modal","ready").execute(function(d,e){d=d.$;d(document).delegate("#scfiModalDismiss",
"click",function(a){e.get("scfiButton_modal").hide();a.preventDefault()})});"use strict";f.when("A","wmp-common-constants").register("wmp-popover-constants",function(d,e){var a={};d.map(e,function(b,c){a[c]=b});d.map({INTRO_VIEW_CLASS:"wmp-step-intro",PRE_SUBMIT_VIEW_CLASS:"wmp-popover-step-pre-submit",WAIT_VIEW_CLASS:"wmp-popover-step-waiting",REFUND_SUCCESS_VIEW_CLASS:"wmp-popover-step-refund-success",REPLACE_SUCCESS_VIEW_CLASS:"wmp-popover-step-replace-success",ERROR_VIEW_CLASS:"wmp-popover-step-error"},
function(b,c){a[c]=b});return a});"use strict";f.when("A","ready").register("wmp-popover-common",function(d){function e(a,b){var c=a.parents("."+b);1>c.length&&(c=a.parents(".a-popover").find("."+b));return c}return{getView:e,switchViews:function(a,b,c){a=e(a,b);c=a.siblings("."+c);a.hide();c.show()}}});"use strict";f.when("A","wmp-popover-constants","wmp-popover-common","ready").execute(function(d,e,a){function b(b){b.$event.preventDefault();a.switchViews(b.$target,e.INTRO_VIEW_CLASS,e.PRE_SUBMIT_VIEW_CLASS)}
d.declarative("wmp-popover-init-refund-replace","click",b);d.declarative("wmp-popover-init-refund","click",b);d.declarative("wmp-popover-init-replace","click",b)});"use strict";f.when("A","wmp-submit-request","wmp-popover-constants","wmp-popover-common","ready").execute(function(d,e,a,b){d.declarative("wmp-popover-submit-refund-replace","click",function(c){c.$event.preventDefault();var d=b.getView(c.$target,a.PRE_SUBMIT_VIEW_CLASS).find("input[name\x3d"+a.REFUND_REPLACE_OPTION_NAME+"]:radio:checked").val();
b.switchViews(c.$target,a.PRE_SUBMIT_VIEW_CLASS,a.WAIT_VIEW_CLASS);e(d,c.data.submitParams).done(function(){b.switchViews(c.$target,a.WAIT_VIEW_CLASS,d===a.REFUND_OPTION_VALUE?a.REFUND_SUCCESS_VIEW_CLASS:a.REPLACE_SUCCESS_VIEW_CLASS)}).fail(function(){b.switchViews(c.$target,a.WAIT_VIEW_CLASS,a.ERROR_VIEW_CLASS)})});d.declarative("wmp-popover-submit-refund","click",function(c){c.$event.preventDefault();b.switchViews(c.$target,a.PRE_SUBMIT_VIEW_CLASS,a.WAIT_VIEW_CLASS);e(a.REFUND_OPTION_VALUE,c.data.submitParams).done(function(){b.switchViews(c.$target,
a.WAIT_VIEW_CLASS,a.REFUND_SUCCESS_VIEW_CLASS)}).fail(function(){b.switchViews(c.$target,a.WAIT_VIEW_CLASS,a.ERROR_VIEW_CLASS)})});d.declarative("wmp-popover-submit-replace","click",function(c){c.$event.preventDefault();b.switchViews(c.$target,a.PRE_SUBMIT_VIEW_CLASS,a.WAIT_VIEW_CLASS);e(a.REPLACE_OPTION_VALUE,c.data.submitParams).done(function(){b.switchViews(c.$target,a.WAIT_VIEW_CLASS,a.REPLACE_SUCCESS_VIEW_CLASS)}).fail(function(){b.switchViews(c.$target,a.WAIT_VIEW_CLASS,a.ERROR_VIEW_CLASS)})})});
"use strict";f.when("A","a-popover","wmp-hide-pop-cmpt").execute(function(d,e,a){d.declarative("wmp-popover-cancel","click",function(b){b.$event.preventDefault();a(b.$target,e)})});"use strict";f.when("A","wmp-common-constants").register("wmp-expander-constants",function(d,e){var a={};d.map(e,function(b,c){a[c]=b});d.map({CONTENTS_CLASS:"wmp-expander-content",FALLBACK_VIEW_CLASS:"wmp-expander-step-fallback",WAIT_VIEW_CLASS:"wmp-expander-step-waiting",DATA_LOAD_PARAMS:"load-params",DATA_IS_LOADED:"is-loaded",
DATA_FOR_TPL_HEADING:"heading",WAITING_TPL_ID:"wmp-expander-template-waiting",REFUND_SUCCESS_TPL_ID:"wmp-expander-template-refund-success",REPLACE_SUCCESS_TPL_ID:"wmp-expander-template-replace-success",ERROR_TPL_ID:"wmp-expander-template-error"},function(b,c){a[c]=b});return a});"use strict";f.when("A","wmp-expander-constants","ready").execute(function(d,e){function a(a){var b=new d.$.Deferred;d.ajax("/gp/shared-cs/wmp/ajax-handler/expander-contents",{method:"get",dataType:"html",params:a,timeout:5E3,
cache:!1,contentType:"text/html; charset\x3dutf-8",success:function(a){b.resolve(a)},error:function(){b.reject()}});return b.promise()}d.on("a:expander:wheres_my_package:toggle:expand",function(b){var c=b.expander.$expander;if(!c.data(e.DATA_IS_LOADED)){b=c.data(e.DATA_LOAD_PARAMS);var d=c.find("."+e.CONTENTS_CLASS),f=c.find("."+e.FALLBACK_VIEW_CLASS),k=c.find("."+e.WAIT_VIEW_CLASS);f.hide();k.show();a(b).done(function(a){k.hide();d.append(a);c.data(e.DATA_IS_LOADED,1)}).fail(function(){k.hide();
f.show()})}})});"use strict";f.when("A","a-modal","wmp-hide-pop-cmpt").execute(function(d,e,a){d.declarative("wmp-expander-cancel","click",function(b){b.$event.preventDefault();a(b.$target,e)})});"use strict";f.when("A","wmp-expander-constants","ready").register("wmp-expander-templates",function(d,e){var a={};d.each([e.WAITING_TPL_ID,e.REFUND_SUCCESS_TPL_ID,e.REPLACE_SUCCESS_TPL_ID,e.ERROR_TPL_ID],function(b){var c=d.$("#"+b),f=c.data(e.DATA_FOR_TPL_HEADING);c=c.html();a[b]={header:f,content:c,footer:""}});
return{fetch:function(b){return a[b]}}});"use strict";f.when("A","a-modal","wmp-find-pop-cmpt","wmp-expander-constants","wmp-expander-templates","wmp-submit-request").execute(function(d,e,a,b,c,f){function g(a,b){b=c.fetch(b);a.update(b)}d.declarative("wmp-expander-submit-refund-replace","click",function(c){c.$event.preventDefault();var d=a(c.$target,e),k=d.getContent().find("input[name\x3d"+b.REFUND_REPLACE_OPTION_NAME+"]:radio:checked").val();g(d,b.WAITING_TPL_ID);f(k,c.data.submitParams).done(function(){g(d,
k===b.REFUND_OPTION_VALUE?b.REFUND_SUCCESS_TPL_ID:b.REPLACE_SUCCESS_TPL_ID)}).fail(function(){g(d,b.ERROR_TPL_ID)})});d.declarative("wmp-expander-submit-refund","click",function(c){c.$event.preventDefault();var d=a(c.$target,e);g(d,b.WAITING_TPL_ID);f(b.REFUND_OPTION_VALUE,c.data.submitParams).done(function(){g(d,b.REFUND_SUCCESS_TPL_ID)}).fail(function(){g(d,b.ERROR_TPL_ID)})});d.declarative("wmp-expander-submit-replace","click",function(c){c.$event.preventDefault();var d=a(c.$target,e);g(d,b.WAITING_TPL_ID);
f(b.REPLACE_OPTION_VALUE,c.data.submitParams).done(function(){g(d,b.REPLACE_SUCCESS_TPL_ID)}).fail(function(){g(d,b.ERROR_TPL_ID)})})})});
/* ******** */
(function(e){var l=window.AmazonUIPageJS||window.P,f=l._namespace||l.attributeErrors,b=f?f("YourAccountOrderHistoryJSBuzz",""):l;b.guardFatal?b.guardFatal(e)(b,window):b.execute(function(){e(b,window)})})(function(e,l,f){e.when("A").register("cookie-utils",function(b){return{set:function(a,b,d){if(a){if(d&&0<d){var c=new Date;c.setTime(c.getTime()+d);document.cookie=encodeURIComponent(a)+"\x3d"+encodeURIComponent(b)+"; expires\x3d"+c.toUTCString()+";path\x3d/"}else document.cookie=encodeURIComponent(a)+
"\x3d"+encodeURIComponent(b)+";path\x3d/";return!0}return!1}}});"use strict";e.when("A","jQuery","cookie-utils").execute(function(b,a,c){b.declarative("set-shipment-info-cookies","click",function(b){b=a(b.$currentTarget).closest(".js-shipment-info-container").find(".js-shipment-info");var d=b.attr("data-yodeliveryestimate")||"",k=b.attr("data-yoshortstatuscode")||"",g=b.attr("data-yostatusstring")||"";b='{"primaryStatus":"'+(parseInt(b.attr("data-isstatuswithwarning"),2)?g:d)+'","shortStatus":"'+
k+'"}';c.set("yoShipmentInfo",b,15E3)})});"use strict";e.when("A","a-modal").execute(function(b,a){b.declarative("close-archive-order-modal","click",function(b){b.$event.preventDefault();(b=a.get("archive-order-modal"))&&"function"===typeof b.hide&&b.hide()})});"use strict";e.when("A","csm-marker-logger").register("b2b-account-dropdown",function(b,a){function c(a){b.declarative(a,"change",function(a){a=a.$target.context.form;var c=b.$("#b2bDropdown"),d="/ref\x3db2b_yo_dd_",h=c.find("option:selected").val()||
"unknown",e={yourself:"all",unknown:"unk"};d="delegatedCustId"===c.attr("name")?d+("pd_"+(e[h]||"del")):d+h.substr(0,3).toLowerCase();a.action+=d;a.submit()})}c("b2b-account-change");a.recordUet("fn");return{assignAction:c}});"use strict";e.when("A","jQuery").execute(function(b,a){b.declarative("remaining-customizations-action","click",function(a){a.$currentTarget.parent().find(".remaining_customization_info").show();a.$currentTarget.hide();a.$event.preventDefault()})});"use strict";e.when("A","csm-marker-logger").register("order-period-dropdown",
function(b,a){function c(a){b.declarative(a,"change",function(a){a.$target.context.form.submit()})}c("time-period-change");c("household-cid-change");a.recordUet("fn");return{assignAction:c}});"use strict";e.when("A","ready").register("popover-page-data",function(b){var a=b.state("initial-popover-data");return{getDefaultTimePeriodValue:function(){return a?a.defaultTimePeriodValue:f},getSelectedTimePeriodValue:function(){return a?a.selectedTimePeriodValue:f},isCancelled:function(){return a?a.isCancelled:
f},isOpen:function(){return a?a.isOpen:f},isDigital:function(){return a?a.isDigital:f},isFresh:function(){return a?a.isFresh:f},getCancelledValue:function(){return a?a.cancelledValue:"cancelled"},getOpenValue:function(){return a?a.openValue:"open"},getFreshValue:function(){return a?a.freshValue:"freshOrders"},getAmazonPayUrl:function(){return a?a.amazonPayUrl:f},isHideBiaBanner:function(){return a?a.hideBiaBanner:!1},isWeblabOn:function(b){return a?a[b]:!1},b2bContext:{getSelectedB2BGroupKeyLabel:function(){return a?
a.selectedB2BGroupKeyLabel:f},getSelectedB2BGroupKey:function(){return a?a.selectedB2BGroupKey:f},getB2BOrderFilterText:function(){return a?a.b2bOrderFilterText:f},isB2BFilterByConditionCapability:function(){return a?a.isB2BFilterByConditionCapability:f},isB2B:function(){return a?a.isB2B:f}}}});"use strict";e.when("A","popover-page-data","b2b-order-filter","csm-marker-logger","ready").register("filter-popover",function(b,a,c,d){function h(){return b.$("#filterTypeSection input:checked").closest(".yo-filters-radio-button").data("type")}
var k=b.$("#timePeriodSection"),g=b.$("#orderFilterForm"),p=g.find("#digitalOrdersHidden"),e=g.find("#unifiedOrdersHidden"),q=g.find("#janeOrdersHidden"),f=g.find("#orderFilterHidden"),r=b.$("#orderFilterSection");if(a.isCancelled()||a.isOpen()){a.isCancelled()?f.attr("value",a.getCancelledValue()):f.attr("value",a.getOpenValue());var m=a.getDefaultTimePeriodValue();r.find('input[type\x3d"radio"][value\x3d"'+m+'"]').parent("label").find("i").addClass("a-icon-touch-radio-active");k.hide()}else m=a.getSelectedTimePeriodValue()?
a.getSelectedTimePeriodValue():a.getDefaultTimePeriodValue(),f.attr("value",m);var n=new c;n.init();b.declarative("popover-time-range-select","click",function(b){m=b.data.range;b=a.getFreshValue();b="undefined"!==typeof b&&h()===b?b+"-"+m:m;f.attr("value",b)});b.declarative("digital-or-physical-order-select","click",function(a){p.attr("value",a.data.digital);e.attr("value",a.data.unified);q.attr("value",a.data.jane);f.attr("value",m);k.slideDown("fast")});b.declarative("open-or-cancel-order-select",
"click",function(a){p.removeAttr("value");e.removeAttr("value");q.removeAttr("value");f.attr("value",a.data.filterType);k.slideUp("fast")});b.declarative("order-type-by-date-select","click",function(a){f.attr("value",a.data.filterType+"-"+m);k.slideDown("fast")});b.declarative("apply-OH-filter","click",function(b){"amazonPay"===h()?(b=a.getAmazonPayUrl()||"amazonpay-error",l.location.replace(b)):g.submit()});d.recordUet("fn");return{getFilterLabel:function(){var a=b.$("#filterTypeSection input:checked").closest(".yo-filters-radio-button"),
d=a.data("type");a=a.data("label");return"open"!==d&&"cancelled"!==d&&"janeOrders"!==d||n.isB2B()&&!n.isB2BFilterByConditionCapability()?(d=b.$("#timePeriodSection input:checked").closest(".yo-filters-radio-button"),d.data("range"),d=d.data("label"),n.isB2B()?n.replaceFilterLabelWithB2BDataTablet(d):d):n.isB2B()?n.replaceFilterLabelWithB2BDataTablet(a):a}}});"use strict";e.when("A","popover-page-data","ready").register("b2b-order-filter",function(b,a){var c=function(){this.$filterForm=b.$("#orderFilterForm");
this.$filterTypeSection=b.$("#filterTypeSection");this.$timePeriodSection=b.$("#timePeriodSection");this.selectedB2BGroupKeyHidden};c.prototype.init=function(){var a=this;a.isB2B()&&(a.selectedB2BGroupKeyHidden=a.$filterForm.find("#selectedB2BGroupKeyHidden"),a._changeB2BFilterTypeAndTimePeriodVisibility(!1),b.declarative("b2b-view-orders-paid-by-option","click",function(b){a._setSelectedB2BGroupKey(b.data.selectedB2BGroupKey);a._changeB2BFilterTypeAndTimePeriodVisibility(!0)}))};c.prototype._getB2BSelectedOptionData=
function(){return b.$("#b2bViewYourOrderOption input:checked").closest(".yo-filters-radio-button").parent().data("b2b-view-orders-paid-by-option")};c.prototype.isB2BFilterByConditionCapability=function(){if(this._getB2BSelectedOptionData())return 1===this._getB2BSelectedOptionData().isB2BFilterByConditionCapability;this._logB2BFilterFatal();return!1};c.prototype._getSelectedB2BGroupKeyLabel=function(){if(this._getB2BSelectedOptionData())return this._getB2BSelectedOptionData().optionLabel;this._logB2BFilterFatal()};
c.prototype._logB2BFilterFatal=function(){l.ueLogError&&l.ueLogError({logLevel:"FATAL",attribution:"b2b-order-filter-js",message:"B2B filtering DOM element #b2bViewYourOrderOption not found. There was a rendering issue possible causes: Sable LSE or a change in YourAccountOrderHistoryMason.b"})};c.prototype.isB2B=function(){return 1===a.b2bContext.isB2B()};c.prototype._changeB2BFilterTypeAndTimePeriodVisibility=function(a){var b=this.isB2BFilterByConditionCapability(),d=this.getFilterType();d="open"!==
d&&"cancelled"!==d;b?!0===a?(this.$filterTypeSection.slideDown("fast"),d?this.$timePeriodSection.slideDown("fast"):this.$timePeriodSection.slideUp("fast")):(this.$filterTypeSection.show(),this.$timePeriodSection.toggle(d)):!0===a?(this.$filterTypeSection.slideUp("fast"),this.$timePeriodSection.slideDown("fast")):(this.$filterTypeSection.hide(),this.$timePeriodSection.show())};c.prototype._setSelectedB2BGroupKey=function(a){this.selectedB2BGroupKeyHidden.attr("value",a||"")};c.prototype.getFilterType=
function(){return b.$("#filterTypeSection input:checked").closest(".yo-filters-radio-button").data("type")};c.prototype.replaceFilterLabelWithB2BDataMobile=function(b){this._getSelectedB2BGroupKeyLabel()&&a.b2bContext.getB2BOrderFilterText()&&(b=a.b2bContext.getB2BOrderFilterText().replace("${orderFilterSubtext}",b).replace("${selectedB2BGroupKeyLabel}",this._getSelectedB2BGroupKeyLabel()));return b};c.prototype.replaceFilterLabelWithB2BDataTablet=function(a){this._getSelectedB2BGroupKeyLabel()&&
(a=this._getSelectedB2BGroupKeyLabel()+", "+a);return a};return c});"use strict";e.when("A").execute(function(b){b.on("a:popover:afterUpdatePosition:recipient",function(a){try{var b=a.popover,d=b.$popover,h=b.$trigger.find(".trigger-text"),k=h.offset().left+h.width()/2-d.width()/2,g={top:d.offset().top,left:k};d.offset(g)}catch(p){}})});"use strict";e.when("A","ready").register("ie-detect",function(b){function a(a,h){h=0<b.$(h).length;c[a]=h}var c={};return{isIE6OrOlder:function(){c.IE6OrOlder===
f&&a("IE6OrOlder",".a-lt-ie7");return c.IE6OrOlder},isIE7OrOlder:function(){c.IE7OrOlder===f&&a("IE7OrOlder",".a-lt-ie8");return c.IE7OrOlder},isIE8OrOlder:function(){c.IE8OrOlder===f&&a("IE8OrOlder",".a-lt-ie9");return c.IE8OrOlder},isIE9OrOlder:function(){c.IE9OrOlder===f&&a("IE9OrOlder",".a-lt-ie10");return c.IE9OrOlder}}});"use strict";e.when("A").register("track-package-dom-helper",function(b){return{findElements:function(a){a=a.parents(".shipment");return{shipmentEl:a,detailsEl:a.find(".tracking-details"),
buttonEl:a.find(".track-package-button"),contentsEl:a.find(".tracking-details .contents"),hideEl:a.find(".tracking-details .hide")}},findParamsForPackagesFromTrackEl:function(a){return a.parent(".a-declarative").data("show-tracking-details")},removeTag:function(a,c){a=b.$(a);a=a.map(function(a,h){a=b.$(h).prop("tagName");return c.toUpperCase()===a?null:h});a.find(c.toLowerCase()).remove();return a},convertToDivs:function(a,c){var d=new RegExp("\x3c\\s*"+c.join("|\x3c\\s*"),"gi");c=new RegExp("\x3c\\s*\\/\\s*"+
c.join("\\s*\x3e|\x3c\\s*\\/\\s*")+"\\s*\x3e","gi");a=b.$(a)[0];a.outerHTML=a.outerHTML.replace(d,"\x3cdiv").replace(c,"\x3c/div\x3e")}}});"use strict";e.when("A","ie-detect").register("track-package-toggler",function(b,a){var c=!a.isIE9OrOlder();return{showDetails:function(a){c?(a.hideEl.hide(),b.slideDown(a.detailsEl,100,"ease-out",function(){a.hideEl.show()})):a.detailsEl.show();a.buttonEl.css("visibility","hidden")},hideDetails:function(a){c?(a.hideEl.hide(),b.slideUp(a.detailsEl,100,"ease-out",
function(){a.hideEl.show()})):a.detailsEl.hide();a.buttonEl.css("visibility","visible")}}});"use strict";e.when("A").register("track-package-details-status",function(b){return{detailsLoadedOk:function(a){return b.$(a).data("trackDetailsLoaded")||!1},detailsLoadFailed:function(a){return!1===b.$(a).data("trackDetailsLoaded")},setIsLoaded:function(a,c){b.$(a).data("trackDetailsLoaded",c)}}});"use strict";e.when("A","track-package-dom-helper","ready").register("track-package-details-parser",function(b,
a){var c=b.$("#trackPkgDetailsTemplate").html();b.$("#yourOrders, #orderDetails").delegate("a.reloader","click",function(a){a.preventDefault();l.location.reload()});return{parseResult:function(d,h){var k=b.$(d.html),g=k.find(".trackTable");k.find(".eyeHead").remove();k=a.removeTag(k,"script");h&&g.size()&&g.addClass("fauxTable").each(function(){a.convertToDivs(this,"table tbody thead tfoot th tr td".split(" "))});k.find("a").each(function(){var a=b.$(this);"#"!==a.attr("href")||a.hasClass("reloader")||
a.attr("href",d.shipTrackPageUrl)});h=b.$(c);h.find("a.ship-track-link").attr("href",d.shipTrackPageUrl);h.find(".details").append(k);return h}}});"use strict";e.when("A","track-package-details-status","track-package-details-parser","ready").register("track-package-details-loader",function(b,a,c){function d(a){var c=new b.$.Deferred;return{ajaxHandle:b.ajax("/gp/widgets/shiptrack/display-tracking-info.html",{method:"get",dataType:"json",params:a.ajaxParams,timeout:1E4,cache:!1,success:function(b){b&&
b.html?c.resolve({html:b.html,shipTrackPageUrl:a.shipTrackPageUrl}):c.reject()},error:function(){c.reject()}}),promise:c.promise()}}function h(a){var c=b.$(g);c.find("a.ship-track-link").attr("href",a);return c}var k=b.$("#trackPkgLoadingTemplate").html(),g=b.$("#trackPkgAjaxErrorTemplate").html();return{load:function(g,e){if(!b.objectIsEmpty(g)&&!a.detailsLoadedOk(e)){a.detailsLoadFailed(e)&&e.html(k);var p=[],f=b.map(g,function(a){a=d(a);p.push(a.ajaxHandle);return a.promise});b.$.when.apply(b.$,
f).done(function(){var d=Array.prototype.slice.call(arguments);e.empty();b.each(d,function(a){e.append(c.parseResult(a,g[0].useFauxTrackTable))});a.setIsLoaded(e,!0)}).fail(function(){b.each(p,function(a){a.abort()});e.html(h(g[0].shipTrackPageUrl));a.setIsLoaded(e,!1)})}}}});"use strict";e.when("A","track-package-dom-helper","track-package-toggler","track-package-details-loader").execute(function(b,a,c,d){b.declarative("show-tracking-details","click",function(b){b.$event.preventDefault();var h=a.findElements(b.$target);
c.showDetails(h);d.load(b.data,h.contentsEl)});b.declarative("hide-tracking-details","click",function(b){b.$event.preventDefault();b=a.findElements(b.$target);c.hideDetails(b)});b.declarative("retry-tracking-details","click",function(b){b.$event.preventDefault();b=a.findElements(b.$target);var c=a.findParamsForPackagesFromTrackEl(b.buttonEl);d.load(c,b.contentsEl)})});"use strict";e.when("A","a-dropdown").execute(function(b,a){b.declarative("legal-invoice-download","change",function(b){b=a.getSelect(b.$target);
var c=b.val();""!==c&&(l.location=c,b.setValue(""))})});"use strict";e.when("A","a-dropdown","a-modal","ready").execute(function(b,a,c){b.declarative("problem-button-dropdown","change",function(c){c=c.$target;var d=c.find("option:selected"),e=d.data("actionname"),g=d.data("url");a.getSelect(c).setValue("");e?b.trigger("a:declarative:"+e+":click",{data:{header:d.data("header")||"",url:g}}):g&&(l.location=g)})});"use strict";e.when("A","jQuery").execute(function(b,a){b.on.ready(function(){a(".js-charge-expander-heading").click(function(c){var d=
a(c.target).parent().data("fundId");c="expander-for-fundId-"+d;var e=b.state("page-state-for-fund-id-"+d),k=e.divId,g=e.orderId;b.on("a:expander:"+c+":toggle:expand",function(){var c=document.getElementById(k),e={orderId:g,fundId:d},h=function(b){c.innerHTML=b;a(c).data("filled",1)};c&&(a(c).removeClass("aok-hidden"),1!==a(c).data("filled")&&b.post("/gp/your-account/order-details/handlers/ajax/charge-breakdown.html",{params:e,success:h}))});b.on("a:expander:"+c+":toggle:collapse",function(){var b=
document.getElementById(k);b&&a(b).addClass("aok-hidden")})})})});"use strict";e.when("A","ready").register("profile-image-cmpt",function(b){return{getProfileImageURL:function(a){return(a=b.state("household-image-url-"+a))?a.url:""}}});e.when("a-dropdown","profile-image-cmpt").execute(function(b,a){if(b=b.getSelect("household-member-dropdown")){var c=b.val();c&&(b=document.getElementById("household-dropdown-profile-image"))&&(a=a.getProfileImageURL(c))&&(b.src=a)}});e.when("A","profile-image-cmpt").execute(function(b,
a){b.on("a:dropdown:household-member-dropdown:select",function(c){document.getElementById("household-address-service-alert")&&b.$("#household-address-service-alert").removeClass("aok-hidden");if(c.value){var d=document.getElementById("household-dropdown-profile-image");d&&(c=a.getProfileImageURL(c.value))&&(d.src=c)}})});"use strict";e.when("A","jQuery","ready").execute("household-approval-comments-chars-remaining",function(b,a){function c(a,b){var c=a.val().length;a=a.attr("maxlength");b.text(c+
"/"+a)}b.declarative("household-show-characters-remaining","keypress keyup input change",function(a){c(a.$target,a.$currentTarget.find(".js-text-area-characters"))});a('.js-household-approval-comments-container textarea[name\x3d"approvalComments"]').bind("paste",function(){var d=a(this),e=d.closest(".js-household-approval-comments-container");b.defer(function(){c(d,e.find(".js-text-area-characters"))})})});"use strict";e.when("A").register("csm-marker-logger",function(b){return{recordUet:function(a){"function"===
typeof l.uet&&l.uet(a)}}});"use strict";e.when("A","csm-counter-utils","ready").execute(function(b,a){var c=l.uept,d=c&&c.pageType?c.pageType:"FezPageType",e=c&&c.subPageType?c.subPageType:"FezSubPageType";b.declarative("bia_button","click",function(b){a.incrementCount("Bia:Click");a.incrementCount("Bia:Click:"+d+":"+e)})});"use strict";e.when("A","ready").register("csm-counter-utils",function(b){var a=l.ue,c=function(b){if(a&&"function"===typeof a.count)return a.count(b)||0},d=function(b,c){a&&"function"===
typeof a.count&&(null==c&&(c=0),a.count(b,c))};return{getCount:c,setCount:d,incrementCount:function(a,b){null==b&&(b=1);var g=c(a);d(a,g+b)}}});"use strict";e.when("A").register("yo-holiday-animation",function(b){function a(a,b){return Math.random()*(b-a)+a}function c(a){a.width=a.clientWidth;a.height=a.clientHeight}var d=["rgb(241,215,141)","rgb(197,162,85)","rgb(209,174,99)"],e=function(a,b,c){this.canvasNode=a;this.weight=b;this.verticalSpeed=c;this.dim={width:this.canvasNode.width,height:this.canvasNode.height};
this.randomize();this.yPos=-1*Math.floor(Math.random()*(this.dim.height-0+1))};e.prototype.move=function(){this.xPos+=this.xDelta;if(10>this.xPos||this.xPos>this.dim.width-10)this.xDelta=-this.xDelta;this.yPos+=this.verticalSpeed;this.yPos>this.dim.height&&this.reset()};e.prototype.draw=function(a){var b=this.weight;this.yPos>this.startShrinkingAt&&(b=this.weight*(1-(this.yPos-this.startShrinkingAt)/this.shrinkDistance));0>=b&&(b=0,this.reset());a.beginPath();a.arc(this.xPos,this.yPos,b,0,2*Math.PI,
!1);a.fillStyle=this.fillStyle;a.fill()};e.prototype.reset=function(){this.dim={width:this.canvasNode.width,height:this.canvasNode.height};this.yPos=-2*this.weight;this.randomize()};e.prototype.randomize=function(){this.xPos=Math.floor(Math.random()*(this.dim.width-10-10+1)+10);this.xDelta=.25*Math.tan(a(-Math.PI/4,Math.PI/4));this.startShrinkingAt=this.dim.height*a(.4,.7);this.shrinkDistance=.15*this.dim.height;this.fillStyle=d[Math.floor(Math.random()*(d.length-1+1))]};var f=function(a,d,f){c(a);
this.flakes=[];for(var g=0;g<d;g++)this.flakes.push(new e(a,f.weight,f.speed));b.$(l).resize(b.debounce(function(){c(a)},250));this.canvasNode=a;this.ctx=a.getContext("2d")};f.prototype.animateFrame=function(){var a=this.canvasNode.width,b=this.canvasNode.height;this.ctx.save();this.ctx.clearRect(0,0,a,b);this.ctx.restore();for(a=0;a<this.flakes.length;a++)b=this.flakes[a],b.move(),b.draw(this.ctx)};return function(a){function b(){c.forEach(function(a){a.animateFrame()});requestAnimationFrame(b)}
var c=[];this.init=function(){var d=document.createElement("canvas");if(d.getContext&&d.getContext("2d")&&l.requestAnimationFrame){d=document.querySelectorAll(a.canvasSelector);for(var e=0;e<d.length;e++)c.push(new f(d[e],a.numberOfFlakes,{weight:a.flakeSize,speed:a.flakeSpeed}));b()}}}})});
/* ******** */
