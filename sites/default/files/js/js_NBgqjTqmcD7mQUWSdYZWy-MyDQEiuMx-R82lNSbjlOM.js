/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/header-spacing.js. */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=356)}({356:function(e,t){function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,u=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw u}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Drupal.behaviors.themekitHeaderSpacing={attach:function(){var e=document.querySelector("#main-header");function t(){var e,t=document.querySelector("#main-header + div"),r=document.querySelector(".secondary-nav.fixed-header"),n=document.querySelector(".region-messages"),o=document.querySelector(".region-header");e=n.offsetHeight+o.offsetHeight,t.style.paddingTop="".concat(e,"px"),r&&(r.style.top="".concat(n.offsetHeight,"px"))}new MutationObserver((function(e){var n,o=r(e);try{for(o.s();!(n=o.n()).done;){var i=n.value;("childList"===i.type||"attributes"===i.type&&"none"===i.target.style.display)&&t()}}catch(e){o.e(e)}finally{o.f()}})).observe(e,{attributes:!0,childList:!0,subtree:!0}),t(),window.addEventListener("resize",t,!0)}}}});
/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/header-spacing.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/core/assets/vendor/js-cookie/js.cookie.min.js. */
/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));

/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/core/assets/vendor/js-cookie/js.cookie.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/core/misc/jquery.cookie.shim.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function ($, Drupal, cookies) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.0.0 and will be removed in Drupal 10.0.0. Use the core/js-cookie library instead. See https://www.drupal.org/node/3104677";
  var isFunction = function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  };
  var parseCookieValue = function parseCookieValue(value, parseJson) {
    if (value.indexOf('"') === 0) {
      value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    try {
      value = decodeURIComponent(value.replace(/\+/g, ' '));
      return parseJson ? JSON.parse(value) : value;
    } catch (e) {}
  };
  var reader = function reader(cookieValue, cookieName, converter, readUnsanitized, parseJson) {
    var value = readUnsanitized ? cookieValue : parseCookieValue(cookieValue, parseJson);
    if (converter !== undefined && isFunction(converter)) {
      return converter(value, cookieName);
    }
    return value;
  };
  $.cookie = function (key) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    Drupal.deprecationError({
      message: "jQuery.cookie() ".concat(deprecatedMessageSuffix)
    });
    if (value !== undefined && !isFunction(value)) {
      var attributes = _objectSpread(_objectSpread({}, $.cookie.defaults), options);
      if (typeof attributes.expires === 'string' && attributes.expires !== '') {
        attributes.expires = new Date(attributes.expires);
      }
      var cookieSetter = cookies.withConverter({
        write: function write(cookieValue) {
          return encodeURIComponent(cookieValue);
        }
      });
      value = $.cookie.json && !$.cookie.raw ? JSON.stringify(value) : String(value);
      return cookieSetter.set(key, value, attributes);
    }
    var userProvidedConverter = value;
    var cookiesShim = cookies.withConverter({
      read: function read(cookieValue, cookieName) {
        return reader(cookieValue, cookieName, userProvidedConverter, $.cookie.raw, $.cookie.json);
      }
    });
    if (key !== undefined) {
      return cookiesShim.get(key);
    }
    var results = cookiesShim.get();
    Object.keys(results).forEach(function (resultKey) {
      if (results[resultKey] === undefined) {
        delete results[resultKey];
      }
    });
    return results;
  };
  $.cookie.defaults = _objectSpread({
    path: ''
  }, cookies.defaults);
  $.cookie.json = false;
  $.cookie.raw = false;
  $.removeCookie = function (key, options) {
    Drupal.deprecationError({
      message: "jQuery.removeCookie() ".concat(deprecatedMessageSuffix)
    });
    cookies.remove(key, _objectSpread(_objectSpread({}, $.cookie.defaults), options));
    return !cookies.get(key);
  };
})(jQuery, Drupal, window.Cookies);
/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/core/misc/jquery.cookie.shim.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/core/misc/jquery.once.bc.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;
  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };
  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };
  var drupalOnce = once;
  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }
  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }
  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);
/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/core/misc/jquery.once.bc.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/modules/contrib/dismissible_message_bar/js/dismissible_message_bar.js. */
!function($,D,window,document,undefined) {
  "use strict";

  D.behaviors.dismissibleMessageBar = {
    attach: function (context, settings) {

      /**
       * Retrieve DMB Notification Settings.
       *
       * @return {Array}
       *   Array of defined DMB Settings.
       */
      const getNotificationSettings = function () {
        if (typeof(settings.dmbNotifications) !== 'undefined' && settings.dmbNotifications) {
          return settings.dmbNotifications;
        }
        return null;
      };

      /**
       * Retrieve DMB Notification Entity data.
       *
       * @return {Array}
       *   Array of defined DMB Entities.
       */
      const getNotificationEntities = function () {
        if (typeof(settings.dmbNotificationEntities) !== 'undefined' && settings.dmbNotificationEntities) {
          return settings.dmbNotificationEntities;
        }
        return null;
      };

      /**
       * Close notification functionality
       * @param $notification
       *   Notification element to be closed.
       */
      const closeNotification = function ($notification) {
        let notificationId = $notification.attr('dmb-notification-id'),
          cookieExpiration = $notification.attr('dmb-cookie-expiration'),
          acceptedNotifications = $.cookie('dismissible_message_bar');

        if (!acceptedNotifications) {
          acceptedNotifications = notificationId;
        } else {
          acceptedNotifications = acceptedNotifications.split('.');
          if (!acceptedNotifications.includes(notificationId)) {
            acceptedNotifications.push(notificationId);
          }
          acceptedNotifications = acceptedNotifications.join('.');
        }

        // Set the notification cookie with updated values
        const setAcceptedCookie = function () {
          $.cookie('dismissible_message_bar', acceptedNotifications, {
            expires: Number(cookieExpiration),
            path: '/'
          });
        };

        // Only set cookie if cookie-off class doesn't exist.
        if(!$('.cookie-off').length) {
          setAcceptedCookie();
        }

        $notification.slideUp();
        return false;
      };

      /**
       * Inject Notifications into their respective wrappers.
       */
      const injectNotifications = function (notificationSettings, $notificationWrapper, requestData) {
        // Inject notifications.
        if (notificationSettings !== null && $notificationWrapper !== null) {

          let data = getNotificationEntities();
          let dismissedNotifications = $.cookie('dismissible_message_bar') ? $.cookie('dismissible_message_bar').split('.') : [];
          let content = '';
          for (let key in data) {
            // Skip loop if the property is from prototype.
            if (!data.hasOwnProperty(key) || data[key].added === true) {
              continue;
            }

            if ($notificationWrapper.length > 0) {
              if (data[key].content !== null) {
                let showNotification = (data[key].sitewide === 1 || data[key].sitewide === "1");

                // Check content types.
                if (data[key].contentTypes !== null && data[key].contentTypes.length !== 0 && requestData.contentType !== '') {
                  if (data[key].contentTypes.includes(requestData.contentType)) {
                    showNotification = true;
                  }
                }

                // Check path limitations.
                if (data[key].sitewide !== null && (data[key].sitewide === 0 || data[key].sitewide === "0")) {
                  if (data[key].pathLimit !== null && window.location.pathname !== '') {
                    for (let paths in data[key].pathLimit) {
                      if (!data[key].pathLimit.hasOwnProperty(paths)) {
                        continue;
                      }

                      let searchPath = data[key].pathLimit[paths];
                      let isNot = false;
                      if (searchPath.indexOf("!") === 0) {
                        // This is a NOT path.
                        isNot = true;
                        searchPath = searchPath.slice(1);
                      }

                      if (searchPath === window.location.pathname) {
                        showNotification = !isNot;
                        break;
                      }
                      else {
                        if (searchPath.indexOf("*") !== -1) {
                          // This is a wildcard search. Replace the * with a .*
                          searchPath.replace(/\*/g, ".*");
                          if (window.location.pathname.search(searchPath) !== -1) {
                            showNotification = true;
                            break;
                          }
                        }
                      }
                    }
                  }
                }

                // Check if this notification has been dismissed
                if (dismissedNotifications.includes(data[key].id)) {
                  showNotification = false;
                }

                // Check date limitations
                if (showNotification) {
                  let nowDate = new Date();
                  if (data[key].startTime !== null && data[key].startTime !== "") {
                    let startDate = new Date(data[key].startTime);
                    if (startDate instanceof Date && !isNaN(startDate)) {
                      if (startDate.valueOf() > nowDate.valueOf()) {
                        // This notification should not appear yet.
                        showNotification = false;
                      }
                    }
                  }
                  if (showNotification && data[key].endTime !== null && data[key].endTime !== "") {
                    let endDate = new Date(data[key].endTime);
                    if (endDate instanceof Date && !isNaN(endDate)) {
                      if (nowDate.valueOf() > endDate.valueOf()) {
                        // This notification has passed.
                        showNotification = false;
                      }
                    }
                  }
                }

                if (showNotification) {
                  content += data[key].content;
                  data[key].added = true;
                }
              }
            }
          }

          if (content !== '') {
            $notificationWrapper.once('inject-dmb-notifications').append(content);
            $notificationWrapper.once('inject-dmb-notifications-trigger').trigger('injectDMBNotifications');
          }

        }

      };

      // Initialize notifications.
      let settingsObject = getNotificationSettings();
      let notificationSettingsArray = Object.values(settingsObject);
      for (let i in notificationSettingsArray) {
        let notificationSettings = notificationSettingsArray[i];
        let $notificationWrapper = null,
          $overlayWrapper = null,
          requestData = {
            contentType: '',
            contentPath: '',
            notificationType: '',
          };

        if (typeof(notificationSettings.notificationWrapper) !== 'undefined' && notificationSettings.notificationWrapper) {
          $notificationWrapper = $(notificationSettings.notificationWrapper);
        }

        if (typeof(notificationSettings.overlayWrapper) !== 'undefined' && notificationSettings.overlayWrapper) {
          $overlayWrapper = $(notificationSettings.overlayWrapper);
        }

        // These parameters have to be saved and passed into the handler.
        if (typeof(notificationSettings.contentType) !== 'undefined' && notificationSettings.contentType) {
          requestData.contentType = notificationSettings.contentType;
        }

        if (typeof(notificationSettings.contentPath) !== 'undefined' && notificationSettings.contentPath) {
          requestData.contentPath = notificationSettings.contentPath;
        }

        if (typeof(notificationSettings.notificationType) !== 'undefined' && notificationSettings.notificationType) {
          requestData.notificationType = notificationSettings.notificationType;
        }

        if ($notificationWrapper !== null) {

          $notificationWrapper.on('injectDMBNotifications', function () {
            let $autoDismiss = $notificationWrapper.find('[dmb-auto-dismiss="1"]');
            $autoDismiss.each(function () {
              let time = $(this).attr('dmb-dismiss-time') * 1000;
              let $notification = $(this);
              setTimeout(function () {
                closeNotification($notification);
              }, time);
            });

            $('.dmb-notification .close-dmb-notification').once().on('click touchstart', function (e) {
              e.preventDefault();
              closeNotification($(this).parent());
            });
          });
        }

        injectNotifications(notificationSettings, $notificationWrapper, requestData);

      }

    }
  };

}(jQuery,Drupal,window,document,'');

/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/modules/contrib/dismissible_message_bar/js/dismissible_message_bar.js. */;
