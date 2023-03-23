/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/global/js/vendor/closestPolyfill.js. */
/**
 * A polyfill for using .closest() on node lists in IE and Edge.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill}
 */

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;

        do {
            if (Element.prototype.matches.call(el, s))
                return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    }
    ;
}

/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/global/js/vendor/closestPolyfill.js. */
;/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/commons.js. */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commons"], {

    /***/
    "./node_modules/micromodal/dist/micromodal.es.js": /*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
    /*! exports provided: default */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value"in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                _defineProperties(Constructor, staticProps);
            return Constructor;
        }

        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }

        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr))
                return _arrayLikeToArray(arr);
        }

        function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
                return Array.from(iter);
        }

        function _unsupportedIterableToArray(o, minLen) {
            if (!o)
                return;
            if (typeof o === "string")
                return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor)
                n = o.constructor.name;
            if (n === "Map" || n === "Set")
                return Array.from(n);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length)
                len = arr.length;

            for (var i = 0, arr2 = new Array(len); i < len; i++)
                arr2[i] = arr[i];

            return arr2;
        }

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var MicroModal = function() {

            var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

            var Modal = /*#__PURE__*/
            function() {
                function Modal(_ref) {
                    var targetModal = _ref.targetModal
                      , _ref$triggers = _ref.triggers
                      , triggers = _ref$triggers === void 0 ? [] : _ref$triggers
                      , _ref$onShow = _ref.onShow
                      , onShow = _ref$onShow === void 0 ? function() {}
                    : _ref$onShow
                      , _ref$onClose = _ref.onClose
                      , onClose = _ref$onClose === void 0 ? function() {}
                    : _ref$onClose
                      , _ref$openTrigger = _ref.openTrigger
                      , openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger
                      , _ref$closeTrigger = _ref.closeTrigger
                      , closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger
                      , _ref$openClass = _ref.openClass
                      , openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass
                      , _ref$disableScroll = _ref.disableScroll
                      , disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll
                      , _ref$disableFocus = _ref.disableFocus
                      , disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus
                      , _ref$awaitCloseAnimat = _ref.awaitCloseAnimation
                      , awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat
                      , _ref$awaitOpenAnimati = _ref.awaitOpenAnimation
                      , awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati
                      , _ref$debugMode = _ref.debugMode
                      , debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

                    _classCallCheck(this, Modal);

                    // Save a reference of the modal
                    this.modal = document.getElementById(targetModal);
                    // Save a reference to the passed config

                    this.config = {
                        debugMode: debugMode,
                        disableScroll: disableScroll,
                        openTrigger: openTrigger,
                        closeTrigger: closeTrigger,
                        openClass: openClass,
                        onShow: onShow,
                        onClose: onClose,
                        awaitCloseAnimation: awaitCloseAnimation,
                        awaitOpenAnimation: awaitOpenAnimation,
                        disableFocus: disableFocus
                    };
                    // Register click events only if pre binding eventListeners

                    if (triggers.length > 0)
                        this.registerTriggers.apply(this, _toConsumableArray(triggers));
                    // pre bind functions for event listeners

                    this.onClick = this.onClick.bind(this);
                    this.onKeydown = this.onKeydown.bind(this);
                }
                /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */

                _createClass(Modal, [{
                    key: "registerTriggers",
                    value: function registerTriggers() {
                        var _this = this;

                        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
                            triggers[_key] = arguments[_key];
                        }

                        triggers.filter(Boolean).forEach(function(trigger) {
                            trigger.addEventListener('click', function(event) {
                                return _this.showModal(event);
                            });
                        });
                    }
                }, {
                    key: "showModal",
                    value: function showModal() {
                        var _this2 = this;

                        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                        this.activeElement = document.activeElement;
                        this.modal.setAttribute('aria-hidden', 'false');
                        this.modal.classList.add(this.config.openClass);
                        this.scrollBehaviour('disable');
                        this.addEventListeners();

                        if (this.config.awaitOpenAnimation) {
                            var handler = function handler() {
                                _this2.modal.removeEventListener('animationend', handler, false);

                                _this2.setFocusToFirstNode();
                            };

                            this.modal.addEventListener('animationend', handler, false);
                        } else {
                            this.setFocusToFirstNode();
                        }

                        this.config.onShow(this.modal, this.activeElement, event);
                    }
                }, {
                    key: "closeModal",
                    value: function closeModal() {
                        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                        var modal = this.modal;
                        this.modal.setAttribute('aria-hidden', 'true');
                        this.removeEventListeners();
                        this.scrollBehaviour('enable');

                        if (this.activeElement && this.activeElement.focus) {
                            this.activeElement.focus();
                        }

                        this.config.onClose(this.modal, this.activeElement, event);

                        if (this.config.awaitCloseAnimation) {
                            var openClass = this.config.openClass;
                            // <- old school ftw

                            this.modal.addEventListener('animationend', function handler() {
                                modal.classList.remove(openClass);
                                modal.removeEventListener('animationend', handler, false);
                            }, false);
                        } else {
                            modal.classList.remove(this.config.openClass);
                        }
                    }
                }, {
                    key: "closeModalById",
                    value: function closeModalById(targetModal) {
                        this.modal = document.getElementById(targetModal);
                        if (this.modal)
                            this.closeModal();
                    }
                }, {
                    key: "scrollBehaviour",
                    value: function scrollBehaviour(toggle) {
                        if (!this.config.disableScroll)
                            return;
                        var body = document.querySelector('body');

                        switch (toggle) {
                        case 'enable':
                            Object.assign(body.style, {
                                overflow: ''
                            });
                            break;

                        case 'disable':
                            Object.assign(body.style, {
                                overflow: 'hidden'
                            });
                            break;
                        }
                    }
                }, {
                    key: "addEventListeners",
                    value: function addEventListeners() {
                        this.modal.addEventListener('touchstart', this.onClick);
                        this.modal.addEventListener('click', this.onClick);
                        document.addEventListener('keydown', this.onKeydown);
                    }
                }, {
                    key: "removeEventListeners",
                    value: function removeEventListeners() {
                        this.modal.removeEventListener('touchstart', this.onClick);
                        this.modal.removeEventListener('click', this.onClick);
                        document.removeEventListener('keydown', this.onKeydown);
                    }
                }, {
                    key: "onClick",
                    value: function onClick(event) {
                        if (event.target.hasAttribute(this.config.closeTrigger)) {
                            this.closeModal(event);
                        }
                    }
                }, {
                    key: "onKeydown",
                    value: function onKeydown(event) {
                        if (event.keyCode === 27)
                            this.closeModal(event);
                        // esc

                        if (event.keyCode === 9)
                            this.retainFocus(event);
                        // tab
                    }
                }, {
                    key: "getFocusableNodes",
                    value: function getFocusableNodes() {
                        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
                        return Array.apply(void 0, _toConsumableArray(nodes));
                    }/**
       * Tries to set focus on a node which is not a close trigger
       * if no other nodes exist then focuses on first close trigger
       */

                }, {
                    key: "setFocusToFirstNode",
                    value: function setFocusToFirstNode() {
                        var _this3 = this;

                        if (this.config.disableFocus)
                            return;
                        var focusableNodes = this.getFocusableNodes();
                        // no focusable nodes

                        if (focusableNodes.length === 0)
                            return;
                        // remove nodes on whose click, the modal closes
                        // could not think of a better name :(

                        var nodesWhichAreNotCloseTargets = focusableNodes.filter(function(node) {
                            return !node.hasAttribute(_this3.config.closeTrigger);
                        });
                        if (nodesWhichAreNotCloseTargets.length > 0)
                            nodesWhichAreNotCloseTargets[0].focus();
                        if (nodesWhichAreNotCloseTargets.length === 0)
                            focusableNodes[0].focus();
                    }
                }, {
                    key: "retainFocus",
                    value: function retainFocus(event) {
                        var focusableNodes = this.getFocusableNodes();
                        // no focusable nodes

                        if (focusableNodes.length === 0)
                            return;
                        /**
         * Filters nodes which are hidden to prevent
         * focus leak outside modal
         */

                        focusableNodes = focusableNodes.filter(function(node) {
                            return node.offsetParent !== null;
                        });
                        // if disableFocus is true

                        if (!this.modal.contains(document.activeElement)) {
                            focusableNodes[0].focus();
                        } else {
                            var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

                            if (event.shiftKey && focusedItemIndex === 0) {
                                focusableNodes[focusableNodes.length - 1].focus();
                                event.preventDefault();
                            }

                            if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
                                focusableNodes[0].focus();
                                event.preventDefault();
                            }
                        }
                    }
                }]);

                return Modal;
            }();
            /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
            // Keep a reference to the opened modal

            var activeModal = null;
            /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

            var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
                var triggerMap = [];
                triggers.forEach(function(trigger) {
                    var targetModal = trigger.attributes[triggerAttr].value;
                    if (triggerMap[targetModal] === undefined)
                        triggerMap[targetModal] = [];
                    triggerMap[targetModal].push(trigger);
                });
                return triggerMap;
            };
            /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */

            var validateModalPresence = function validateModalPresence(id) {
                if (!document.getElementById(id)) {
                    console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
                    console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
                    return false;
                }
            };
            /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */

            var validateTriggerPresence = function validateTriggerPresence(triggers) {
                if (triggers.length <= 0) {
                    console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
                    console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
                    return false;
                }
            };
            /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */

            var validateArgs = function validateArgs(triggers, triggerMap) {
                validateTriggerPresence(triggers);
                if (!triggerMap)
                    return true;

                for (var id in triggerMap) {
                    validateModalPresence(id);
                }

                return true;
            };
            /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */

            var init = function init(config) {
                // Create an config object with default openTrigger
                var options = Object.assign({}, {
                    openTrigger: 'data-micromodal-trigger'
                }, config);
                // Collects all the nodes with the trigger

                var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]")));
                // Makes a mappings of modals with their trigger nodes

                var triggerMap = generateTriggerMap(triggers, options.openTrigger);
                // Checks if modals and triggers exist in dom

                if (options.debugMode === true && validateArgs(triggers, triggerMap) === false)
                    return;
                // For every target modal creates a new instance

                for (var key in triggerMap) {
                    var value = triggerMap[key];
                    options.targetModal = key;
                    options.triggers = _toConsumableArray(value);
                    activeModal = new Modal(options);
                    // eslint-disable-line no-new
                }
            };
            /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */

            var show = function show(targetModal, config) {
                var options = config || {};
                options.targetModal = targetModal;
                // Checks if modals and triggers exist in dom

                if (options.debugMode === true && validateModalPresence(targetModal) === false)
                    return;
                // clear events in case previous modal wasn't close

                if (activeModal)
                    activeModal.removeEventListeners();
                // stores reference to active modal

                activeModal = new Modal(options);
                // eslint-disable-line no-new

                activeModal.showModal();
            };
            /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */

            var close = function close(targetModal) {
                targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
            };

            return {
                init: init,
                show: show,
                close: close
            };
        }();
        window.MicroModal = MicroModal;

        /* harmony default export */
        __webpack_exports__["default"] = (MicroModal);

        /***/
    }
    )

}]);

/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/commons.js. */
;/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/global.js. */
!function(e) {
    var t = {};
    function o(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, o),
        i.l = !0,
        i.exports
    }
    o.m = e,
    o.c = t,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                o.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "",
    o(o.s = 340)
}({
    133: function(e, t, o) {
        !function() {
            "use strict";
            e.exports = {
                polyfill: function() {
                    var e = window
                      , t = document;
                    if (!("scrollBehavior"in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                        var o, n = e.HTMLElement || e.Element, i = {
                            scroll: e.scroll || e.scrollTo,
                            scrollBy: e.scrollBy,
                            elementScroll: n.prototype.scroll || a,
                            scrollIntoView: n.prototype.scrollIntoView
                        }, r = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now, l = (o = e.navigator.userAgent,
                        new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(o) ? 1 : 0);
                        e.scroll = e.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? v.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : i.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                        }
                        ,
                        e.scrollBy = function() {
                            void 0 !== arguments[0] && (s(arguments[0]) ? i.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : v.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                        }
                        ,
                        n.prototype.scroll = n.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== s(arguments[0])) {
                                    var e = arguments[0].left
                                      , t = arguments[0].top;
                                    v.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                        throw new SyntaxError("Value could not be converted");
                                    i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }
                        ,
                        n.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }
                        ,
                        n.prototype.scrollIntoView = function() {
                            if (!0 !== s(arguments[0])) {
                                var o = u(this)
                                  , n = o.getBoundingClientRect()
                                  , r = this.getBoundingClientRect();
                                o !== t.body ? (v.call(this, o, o.scrollLeft + r.left - n.left, o.scrollTop + r.top - n.top),
                                "fixed" !== e.getComputedStyle(o).position && e.scrollBy({
                                    left: n.left,
                                    top: n.top,
                                    behavior: "smooth"
                                })) : e.scrollBy({
                                    left: r.left,
                                    top: r.top,
                                    behavior: "smooth"
                                })
                            } else
                                i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                    }
                    function a(e, t) {
                        this.scrollLeft = e,
                        this.scrollTop = t
                    }
                    function s(e) {
                        if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior)
                            return !0;
                        if ("object" == typeof e && "smooth" === e.behavior)
                            return !1;
                        throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }
                    function c(e, t) {
                        return "Y" === t ? e.clientHeight + l < e.scrollHeight : "X" === t ? e.clientWidth + l < e.scrollWidth : void 0
                    }
                    function d(t, o) {
                        var n = e.getComputedStyle(t, null)["overflow" + o];
                        return "auto" === n || "scroll" === n
                    }
                    function f(e) {
                        var t = c(e, "Y") && d(e, "Y")
                          , o = c(e, "X") && d(e, "X");
                        return t || o
                    }
                    function u(e) {
                        for (; e !== t.body && !1 === f(e); )
                            e = e.parentNode || e.host;
                        return e
                    }
                    function h(t) {
                        var o, n, i, l, a = (r() - t.startTime) / 468;
                        l = a = a > 1 ? 1 : a,
                        o = .5 * (1 - Math.cos(Math.PI * l)),
                        n = t.startX + (t.x - t.startX) * o,
                        i = t.startY + (t.y - t.startY) * o,
                        t.method.call(t.scrollable, n, i),
                        n === t.x && i === t.y || e.requestAnimationFrame(h.bind(e, t))
                    }
                    function v(o, n, l) {
                        var s, c, d, f, u = r();
                        o === t.body ? (s = e,
                        c = e.scrollX || e.pageXOffset,
                        d = e.scrollY || e.pageYOffset,
                        f = i.scroll) : (s = o,
                        c = o.scrollLeft,
                        d = o.scrollTop,
                        f = a),
                        h({
                            scrollable: s,
                            method: f,
                            startTime: u,
                            startX: c,
                            startY: d,
                            x: n,
                            y: l
                        })
                    }
                }
            }
        }()
    },
    340: function(e, t, o) {
        o(341),
        o(342),
        o(343),
        o(344),
        o(345)
    },
    341: function(e, t) {
        document.getElementById("skip-to-content").querySelector(".skip-to-content-link").addEventListener("click", (function(e) {
            e.preventDefault();
            var t = document.querySelector(e.target.getAttribute("href"));
            t.setAttribute("tabindex", "-1"),
            t.focus(),
            t.addEventListener("blur focusout", (function(e) {
                e.target.removeAttribute("tabindex")
            }
            ))
        }
        ))
    },
    342: function(e, t) {
        Drupal.behaviors.externalLink = {
            attach: function(e) {
                for (var t = e.querySelectorAll("a"), o = 0; o < t.length; o += 1) {
                    if (!new RegExp("".concat(window.location.host)).test(t[o].href) && "" !== t[o].href && !t[o].href.startsWith("tel:")) {
                        var n = t[o].innerText;
                        if (t[o].setAttribute("target", "_blank"),
                        t[o].hasAttribute("aria-label")) {
                            var i = t[o].getAttribute("aria-label");
                            t[o].setAttribute("aria-label", "".concat(i, " (opens in new window)"))
                        } else if (t[o].hasAttribute("title")) {
                            var r = t[o].getAttribute("title");
                            t[o].setAttribute("aria-label", "".concat(r, " (opens in new window)"))
                        } else
                            t[o].setAttribute("aria-label", "".concat(n, " (opens in new window)"))
                    }
                }
            }
        }
    },
    343: function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o(133)
          , i = o.n(n);
        Drupal.behaviors.themekitSmoothScroll = {
            attach: function(e) {
                var t = e.querySelectorAll('a[href^="#"]')
                  , o = document.querySelector("header");
                function n(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , n = this.getAttribute("href");
                    if (!n.startsWith("#tab--") && "#" !== n) {
                        var i = function(e) {
                            return Math.floor(e.getBoundingClientRect().top)
                        };
                        e.preventDefault();
                        var r = t ? t.getAttribute("href") : this.getAttribute("href")
                          , l = document.querySelector(r);
                        if (!l)
                            return;
                        var a = i(l)
                          , s = o.offsetHeight;
                        if (document.querySelector(".secondary-nav")) {
                            var c = document.querySelector(".secondary-nav");
                            s = c.offsetHeight;
                            var d = o.querySelector(".region-messages");
                            d && (s = c.offsetHeight + d.offsetHeight)
                        }
                        window.scrollBy({
                            top: a - s,
                            left: 0,
                            behavior: "smooth"
                        });
                        var f = setInterval((function() {
                            var e = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
                            (0 === i(l) || e) && (l.tabIndex = "-1",
                            l.focus(),
                            clearInterval(f))
                        }
                        ), 100)
                    }
                }
                i.a.polyfill(),
                t.forEach((function(e) {
                    e.addEventListener("click", n)
                }
                ))
            }
        }
    },
    344: function(e, t) {
        Drupal.behaviors.themekitGaIdsOnLinks = {
            attach: function(e) {
                var t = e.classList && e.classList.contains("text-formatted") ? e : e.querySelectorAll(".text-formatted");
                t.length && t.forEach((function(e) {
                    if (e.closest("div[data-ga-id]")) {
                        var t = e.closest("div[data-ga-id]").dataset.gaId;
                        e.querySelectorAll("a").forEach((function(e, o) {
                            e.setAttribute("data-ga-id", "".concat(t, "--inline_link-").concat(o))
                        }
                        ))
                    }
                }
                ))
            }
        }
    },
    345: function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o(47);
        Drupal.behaviors.themekitEmailPrefsModal = {
            attach: function(e, t) {
                var o = window.location.search;
                if (new URLSearchParams(o).get("email_prefs") && !document.body.classList.contains("email-preferences-confirmed")) {
                    var i = t.email_prefs_conf.message
                      , r = '\n      <div id="email-preferences-modal" class="modal micromodal-slide default" aria-hidden="true" >\n        <div class="modal__overlay" tabindex="-1" dtat-micromodal-close>\n          <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="email-preferences-modal-title" >\n            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>\n            <main id="email-preferences-modal-content" class="modal__content">\n              <h3 id="email-preferences-form-title" class="field--name-field-heading-formatted">Success!</h3>\n              <div class="field--name-field-description">\n                '.concat(i, "\n              </div>\n            </main>\n          </div>\n        </div>\n      </div>")
                      , l = e === document ? e : document;
                    l.body.insertAdjacentHTML("afterbegin", r),
                    l.body.classList.add("email-preferences-confirmed"),
                    n.a.init(),
                    n.a.show("email-preferences-modal")
                }
            }
        }
    },
    47: function(e, t, o) {
        "use strict";
        function n(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function i(e) {
            return function(e) {
                if (Array.isArray(e))
                    return r(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return r(e, t);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === o && e.constructor && (o = e.constructor.name);
                if ("Map" === o || "Set" === o)
                    return Array.from(o);
                if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                    return r(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var o = 0, n = new Array(t); o < t; o++)
                n[o] = e[o];
            return n
        }
        var l, a, s, c, d, f = (l = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
        a = function() {
            function e(t) {
                var o = t.targetModal
                  , n = t.triggers
                  , r = void 0 === n ? [] : n
                  , l = t.onShow
                  , a = void 0 === l ? function() {}
                : l
                  , s = t.onClose
                  , c = void 0 === s ? function() {}
                : s
                  , d = t.openTrigger
                  , f = void 0 === d ? "data-micromodal-trigger" : d
                  , u = t.closeTrigger
                  , h = void 0 === u ? "data-micromodal-close" : u
                  , v = t.openClass
                  , m = void 0 === v ? "is-open" : v
                  , g = t.disableScroll
                  , p = void 0 !== g && g
                  , b = t.disableFocus
                  , y = void 0 !== b && b
                  , w = t.awaitCloseAnimation
                  , E = void 0 !== w && w
                  , S = t.awaitOpenAnimation
                  , k = void 0 !== S && S
                  , A = t.debugMode
                  , L = void 0 !== A && A;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.modal = document.getElementById(o),
                this.config = {
                    debugMode: L,
                    disableScroll: p,
                    openTrigger: f,
                    closeTrigger: h,
                    openClass: m,
                    onShow: a,
                    onClose: c,
                    awaitCloseAnimation: E,
                    awaitOpenAnimation: k,
                    disableFocus: y
                },
                r.length > 0 && this.registerTriggers.apply(this, i(r)),
                this.onClick = this.onClick.bind(this),
                this.onKeydown = this.onKeydown.bind(this)
            }
            var t, o, r;
            return t = e,
            (o = [{
                key: "registerTriggers",
                value: function() {
                    for (var e = this, t = arguments.length, o = new Array(t), n = 0; n < t; n++)
                        o[n] = arguments[n];
                    o.filter(Boolean).forEach((function(t) {
                        t.addEventListener("click", (function(t) {
                            return e.showModal(t)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "showModal",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (this.activeElement = document.activeElement,
                    this.modal.setAttribute("aria-hidden", "false"),
                    this.modal.classList.add(this.config.openClass),
                    this.scrollBehaviour("disable"),
                    this.addEventListeners(),
                    this.config.awaitOpenAnimation) {
                        var o = function t() {
                            e.modal.removeEventListener("animationend", t, !1),
                            e.setFocusToFirstNode()
                        };
                        this.modal.addEventListener("animationend", o, !1)
                    } else
                        this.setFocusToFirstNode();
                    this.config.onShow(this.modal, this.activeElement, t)
                }
            }, {
                key: "closeModal",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , t = this.modal;
                    if (this.modal.setAttribute("aria-hidden", "true"),
                    this.removeEventListeners(),
                    this.scrollBehaviour("enable"),
                    this.activeElement && this.activeElement.focus && this.activeElement.focus(),
                    this.config.onClose(this.modal, this.activeElement, e),
                    this.config.awaitCloseAnimation) {
                        var o = this.config.openClass;
                        this.modal.addEventListener("animationend", (function e() {
                            t.classList.remove(o),
                            t.removeEventListener("animationend", e, !1)
                        }
                        ), !1)
                    } else
                        t.classList.remove(this.config.openClass)
                }
            }, {
                key: "closeModalById",
                value: function(e) {
                    this.modal = document.getElementById(e),
                    this.modal && this.closeModal()
                }
            }, {
                key: "scrollBehaviour",
                value: function(e) {
                    if (this.config.disableScroll) {
                        var t = document.querySelector("body");
                        switch (e) {
                        case "enable":
                            Object.assign(t.style, {
                                overflow: ""
                            });
                            break;
                        case "disable":
                            Object.assign(t.style, {
                                overflow: "hidden"
                            })
                        }
                    }
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    this.modal.addEventListener("touchstart", this.onClick),
                    this.modal.addEventListener("click", this.onClick),
                    document.addEventListener("keydown", this.onKeydown)
                }
            }, {
                key: "removeEventListeners",
                value: function() {
                    this.modal.removeEventListener("touchstart", this.onClick),
                    this.modal.removeEventListener("click", this.onClick),
                    document.removeEventListener("keydown", this.onKeydown)
                }
            }, {
                key: "onClick",
                value: function(e) {
                    e.target.hasAttribute(this.config.closeTrigger) && this.closeModal(e)
                }
            }, {
                key: "onKeydown",
                value: function(e) {
                    27 === e.keyCode && this.closeModal(e),
                    9 === e.keyCode && this.retainFocus(e)
                }
            }, {
                key: "getFocusableNodes",
                value: function() {
                    var e = this.modal.querySelectorAll(l);
                    return Array.apply(void 0, i(e))
                }
            }, {
                key: "setFocusToFirstNode",
                value: function() {
                    var e = this;
                    if (!this.config.disableFocus) {
                        var t = this.getFocusableNodes();
                        if (0 !== t.length) {
                            var o = t.filter((function(t) {
                                return !t.hasAttribute(e.config.closeTrigger)
                            }
                            ));
                            o.length > 0 && o[0].focus(),
                            0 === o.length && t[0].focus()
                        }
                    }
                }
            }, {
                key: "retainFocus",
                value: function(e) {
                    var t = this.getFocusableNodes();
                    if (0 !== t.length)
                        if (t = t.filter((function(e) {
                            return null !== e.offsetParent
                        }
                        )),
                        this.modal.contains(document.activeElement)) {
                            var o = t.indexOf(document.activeElement);
                            e.shiftKey && 0 === o && (t[t.length - 1].focus(),
                            e.preventDefault()),
                            !e.shiftKey && t.length > 0 && o === t.length - 1 && (t[0].focus(),
                            e.preventDefault())
                        } else
                            t[0].focus()
                }
            }]) && n(t.prototype, o),
            r && n(t, r),
            e
        }(),
        s = null,
        c = function(e) {
            if (!document.getElementById(e))
                return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."),
                console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')),
                !1
        }
        ,
        d = function(e, t) {
            if (function(e) {
                e.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."),
                console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
            }(e),
            !t)
                return !0;
            for (var o in t)
                c(o);
            return !0
        }
        ,
        {
            init: function(e) {
                var t = Object.assign({}, {
                    openTrigger: "data-micromodal-trigger"
                }, e)
                  , o = i(document.querySelectorAll("[".concat(t.openTrigger, "]")))
                  , n = function(e, t) {
                    var o = [];
                    return e.forEach((function(e) {
                        var n = e.attributes[t].value;
                        void 0 === o[n] && (o[n] = []),
                        o[n].push(e)
                    }
                    )),
                    o
                }(o, t.openTrigger);
                if (!0 !== t.debugMode || !1 !== d(o, n))
                    for (var r in n) {
                        var l = n[r];
                        t.targetModal = r,
                        t.triggers = i(l),
                        s = new a(t)
                    }
            },
            show: function(e, t) {
                var o = t || {};
                o.targetModal = e,
                !0 === o.debugMode && !1 === c(e) || (s && s.removeEventListeners(),
                (s = new a(o)).showModal())
            },
            close: function(e) {
                e ? s.closeModalById(e) : s.closeModal()
            }
        });
        window.MicroModal = f,
        t.a = f
    }
});
/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/global.js. */
;/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/footer.js. */
!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(o, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 358)
}({
    358: function(e, t) {
        Drupal.behaviors.regionalSelect = {
            attach: function(e) {
                var t = e.classList && e.classList.contains("region-footer") ? e : e.querySelector(".region-footer");
                if (t) {
                    var n = t.querySelector(".menu--footer-regional-select > .menu");
                    if (n) {
                        var o = n.querySelector(".menu-item--expanded > a");
                        o.addEventListener("click", (function(e) {
                            e.preventDefault(),
                            n.classList.toggle("show-dropdown")
                        }
                        )),
                        o.addEventListener("keydown", (function(e) {
                            13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(),
                            n.classList.toggle("show-dropdown"))
                        }
                        )),
                        document.addEventListener("click", (function(e) {
                            !n.contains(e.target) && n.classList.contains("show-dropdown") && n.classList.remove("show-dropdown")
                        }
                        ))
                    }
                }
            }
        }
    }
});
/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/footer.js. */
;/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/table.js. */
!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n),
        a.l = !0,
        a.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                n.d(r, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 385)
}({
    385: function(e, t) {
        Drupal.behaviors.themekitTableMobileDrilldown = {
            attach: function(e) {
                var t = e.classList && e.classList.contains("text-formatted") ? e : e.querySelectorAll(".text-formatted");
                t.length && t.forEach((function(e) {
                    e.querySelectorAll("table.mobile-drilldown").forEach((function(e) {
                        var t = document.createElement("div");
                        t.classList = "table-wrapper",
                        e.parentNode.insertBefore(t, e),
                        t.appendChild(e);
                        var n = e.querySelector("caption");
                        null !== n && t.parentNode.insertBefore(n, t);
                        var r = e.querySelectorAll("thead th");
                        if (null === r) {
                            var a = document.createElement("div");
                            a.className = "mobile-drilldown-table";
                            var o = document.createElement("button");
                            o.className = "mobile-heading",
                            o.innerHTML = r.item(0).innerHTML;
                            var l = document.createElement("div");
                            l.className = "list",
                            l.appendChild(o);
                            var i = e.querySelectorAll("tbody tr");
                            0 !== e.querySelectorAll("tbody tr th").length ? (i.forEach((function(e) {
                                var t = e.querySelector("th")
                                  , n = document.createElement("div")
                                  , o = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                                  , i = "".concat(t.textContent.replace(/\s/g, "-").toLowerCase(), "__").concat(o);
                                n.className = "row",
                                n.id = i;
                                var c = document.createElement("button");
                                c.innerHTML = t.textContent,
                                c.setAttribute("data-row", i),
                                c.addEventListener("click", (function(e) {
                                    var t = e.target.getAttribute("data-row")
                                      , n = document.querySelector(".row#".concat(t));
                                    n.classList.add("active"),
                                    a.style.minHeight = "".concat(n.offsetHeight, "px")
                                }
                                )),
                                l.appendChild(c);
                                var d = document.createElement("button");
                                d.className = "back",
                                d.innerHTML = t.textContent,
                                d.addEventListener("click", (function() {
                                    n.classList.remove("active"),
                                    a.style.minHeight = ""
                                }
                                )),
                                n.appendChild(d),
                                e.querySelectorAll("td").forEach((function(e, t) {
                                    var a = document.createElement("div");
                                    a.className = "cell";
                                    var o = document.createElement("label");
                                    o.innerHTML = r.item(t + 1).innerHTML;
                                    var l = document.createElement("span");
                                    l.innerHTML = e.innerHTML,
                                    a.appendChild(o),
                                    a.appendChild(l),
                                    n.appendChild(a)
                                }
                                )),
                                a.appendChild(n)
                            }
                            )),
                            a.prepend(l),
                            e.parentNode.insertBefore(a, e.nextSibling)) : t.classList.add("mobile-overflow")
                        } else
                            t.classList.add("mobile-overflow")
                    }
                    ))
                }
                ))
            }
        }
    }
});
/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/table.js. */
;/* Source and licensing information for the line(s) below can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/main-menu.js. */
!function(t) {
    var e = {};
    function s(i) {
        if (e[i])
            return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, s),
        o.l = !0,
        o.exports
    }
    s.m = t,
    s.c = e,
    s.d = function(t, e, i) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(t, e) {
        if (1 & e && (t = s(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (s.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                s.d(i, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return i
    }
    ,
    s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return s.d(e, "a", e),
        e
    }
    ,
    s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    s.p = "",
    s(s.s = 355)
}({
    136: function(t, e, s) {
        "use strict";
        function i(t, e, s, i) {
            this.domNode = t,
            this.linkList = e,
            this.parentItem = s,
            this.keyCode = i
        }
        function o(t, e, s, i) {
            this.domNode = t,
            this.menu = e,
            this.items = s,
            this.keyCode = i
        }
        function n(t, e) {
            this.domNode = t,
            this.keyCode = e
        }
        s.d(e, "a", (function() {
            return n
        }
        )),
        i.prototype.init = function() {
            var t = this;
            this.firstChars = [],
            this.linkList.forEach((function(e) {
                t.firstChars.push(e.textContent.trim().charAt(0).toLowerCase())
            }
            )),
            this.domNode.addEventListener("keydown", this.handleKeydown.bind(this))
        }
        ,
        i.prototype.handleKeydown = function(t) {
            var e, s = t.key, i = !1;
            switch (t.keyCode) {
            case this.keyCode.DOWN:
                this.setFocusToNextItem(this.domNode),
                i = !0;
                break;
            case this.keyCode.LEFT:
                this.openPrevItem(),
                i = !0;
                break;
            case this.keyCode.RIGHT:
                this.openNextItem(),
                i = !0;
                break;
            case this.keyCode.UP:
                this.setFocusToPreviousItem(this.domNode),
                i = !0;
                break;
            case this.keyCode.HOME:
            case this.keyCode.PAGEUP:
                this.setFocusToFirstItem(),
                i = !0;
                break;
            case this.keyCode.END:
            case this.keyCode.PAGEDOWN:
                this.setFocusToLastItem(),
                i = !0;
                break;
            default:
                1 === (e = s).length && e.match(/\S/) && (this.setFocusByFirstCharacter(this.domNode, s),
                i = !0)
            }
            i && (t.stopPropagation(),
            t.preventDefault())
        }
        ,
        i.prototype.openNextItem = function() {
            var t = this.parentItem.parentElement.nextElementSibling;
            t && (t.querySelector('a[aria-haspopup="true"]').setAttribute("aria-expanded", "true"),
            this.setFocusToItem(t.querySelector(".level--1 a")),
            this.parentItem.setAttribute("aria-expanded", "false"))
        }
        ,
        i.prototype.openPrevItem = function() {
            var t = this.parentItem.parentElement.previousElementSibling;
            t && (t.querySelector('a[aria-haspopup="true"]').setAttribute("aria-expanded", "true"),
            this.setFocusToItem(t.querySelector(".level--1 a")),
            this.parentItem.setAttribute("aria-expanded", "false"))
        }
        ,
        i.prototype.setFocusToItem = function(t) {
            t.focus()
        }
        ,
        i.prototype.setFocusToFirstItem = function() {
            this.setFocusToItem(this.linkList[0])
        }
        ,
        i.prototype.setFocusToLastItem = function() {
            this.setFocusToItem(this.linkList[this.linkList.length - 1])
        }
        ,
        i.prototype.setFocusToPreviousItem = function(t) {
            var e = this.getIndex(t, this.linkList);
            e > 0 ? this.setFocusToItem(this.linkList[e - 1]) : this.setFocusToItem(this.linkList[this.linkList.length - 1])
        }
        ,
        i.prototype.setFocusToNextItem = function(t) {
            var e = this.getIndex(t, this.linkList);
            e < this.linkList.length - 1 ? this.setFocusToItem(this.linkList[e + 1]) : this.setFocusToItem(this.linkList[0])
        }
        ,
        i.prototype.getIndex = function(t, e) {
            var s = -1;
            return e.forEach((function(e, i) {
                e === t && (s = i)
            }
            )),
            s
        }
        ,
        i.prototype.setFocusByFirstCharacter = function(t, e) {
            var s, i, o = e.toLowerCase();
            (s = this.getIndex(t, this.linkList) + 1) === this.linkList.length && (s = 0),
            -1 === (i = this.getIndexFirstChars(s, o)) && (i = this.getIndexFirstChars(0, o)),
            i > -1 && this.setFocusToItem(this.linkList[i])
        }
        ,
        i.prototype.getIndexFirstChars = function(t, e) {
            for (var s = t; s < this.firstChars.length; s += 1)
                if (e === this.firstChars[s])
                    return s;
            return -1
        }
        ,
        o.prototype.init = function() {
            var t = this;
            this.firstChars = [],
            this.childLinks = this.domNode.nextElementSibling.querySelectorAll("a"),
            this.firstItem = this.childLinks[0],
            this.lastItem = this.childLinks[this.childLinks.length - 1],
            this.items.forEach((function(e) {
                t.firstChars.push(e.textContent.trim().charAt(0).toLowerCase())
            }
            )),
            this.domNode.addEventListener("keydown", this.handleKeydown.bind(this)),
            this.domNode.addEventListener("click", this.handleClick.bind(this)),
            this.domNode.addEventListener("touchend", this.handleClick.bind(this)),
            this.childLinks.forEach((function(e) {
                new i(e,t.childLinks,t.domNode,t.keyCode).init()
            }
            ))
        }
        ,
        o.prototype.handleKeydown = function(t) {
            var e, s = t.key, i = !1;
            switch (t.keyCode) {
            case this.keyCode.SPACE:
            case this.keyCode.RETURN:
            case this.keyCode.DOWN:
                this.toggleExpanded("first"),
                i = !0;
                break;
            case this.keyCode.LEFT:
                this.setFocusToPreviousItem(this.domNode),
                i = !0;
                break;
            case this.keyCode.RIGHT:
                this.setFocusToNextItem(this.domNode),
                i = !0;
                break;
            case this.keyCode.UP:
                this.toggleExpanded("last"),
                i = !0;
                break;
            case this.keyCode.HOME:
            case this.keyCode.PAGEUP:
                this.menu.setFocusToFirstItem(),
                i = !0;
                break;
            case this.keyCode.END:
            case this.keyCode.PAGEDOWN:
                this.menu.setFocusToLastItem(),
                i = !0;
                break;
            default:
                1 === (e = s).length && e.match(/\S/) && (this.setFocusByFirstCharacter(this.domNode, s),
                i = !0)
            }
            i && (t.stopPropagation(),
            t.preventDefault())
        }
        ,
        o.prototype.closeAll = function() {
            var t = this.menu.querySelector('a[aria-expanded="true"]');
            t && t.setAttribute("aria-expanded", "false")
        }
        ,
        o.prototype.toggleExpanded = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , e = this.domNode.getAttribute("aria-expanded");
            "true" === e ? this.domNode.setAttribute("aria-expanded", "false") : (this.closeAll(),
            this.domNode.setAttribute("aria-expanded", "true"),
            "first" === t ? this.setFocusToFirstItem() : "last" === t && this.setFocusToLastItem())
        }
        ,
        o.prototype.handleClick = function(t) {
            t.preventDefault(),
            this.toggleExpanded()
        }
        ,
        o.prototype.setFocusToItem = function(t) {
            t.focus()
        }
        ,
        o.prototype.setFocusToFirstItem = function() {
            this.setFocusToItem(this.firstItem)
        }
        ,
        o.prototype.setFocusToLastItem = function() {
            this.setFocusToItem(this.lastItem)
        }
        ,
        o.prototype.setFocusToPreviousItem = function(t) {
            var e = t.parentElement.previousElementSibling;
            e && this.setFocusToItem(e.querySelector("a"))
        }
        ,
        o.prototype.setFocusToNextItem = function(t) {
            var e = t.parentElement.nextElementSibling;
            e && this.setFocusToItem(e.querySelector("a"))
        }
        ,
        o.prototype.getIndex = function(t, e) {
            var s = -1;
            return e.forEach((function(e, i) {
                e === t && (s = i)
            }
            )),
            s
        }
        ,
        o.prototype.setFocusByFirstCharacter = function(t, e) {
            var s, i, o = e.toLowerCase();
            (s = this.getIndex(t, this.items) + 1) === this.items.length && (s = 0),
            -1 === (i = this.getIndexFirstChars(s, o)) && (i = this.getIndexFirstChars(0, o)),
            i > -1 && this.setFocusToItem(this.items[i])
        }
        ,
        o.prototype.getIndexFirstChars = function(t, e) {
            for (var s = t; s < this.firstChars.length; s += 1)
                if (e === this.firstChars[s])
                    return s;
            return -1
        }
        ,
        n.prototype.init = function() {
            var t = this;
            this.domNode.addEventListener("keydown", this.handleKeydown.bind(this));
            var e = this.domNode.querySelectorAll('a[aria-haspopup="true"]');
            e.forEach((function(s) {
                new o(s,t.domNode,e,t.keyCode).init()
            }
            ))
        }
        ,
        n.prototype.handleKeydown = function(t) {
            var e = !1;
            switch (t.keyCode) {
            case this.keyCode.ESC:
                this.closeAll(),
                e = !1
            }
            e && (t.stopPropagation(),
            t.preventDefault())
        }
        ,
        n.prototype.closeAll = function() {
            var t = this.domNode.querySelector('a[aria-expanded="true"]');
            t && t.setAttribute("aria-expanded", "false")
        }
    },
    355: function(t, e, s) {
        "use strict";
        s.r(e),
        function(t) {
            var e = s(136);
            Drupal.behaviors.themekitMainMenu = {
                attach: function(s) {
                    var i = s.classList && s.classList.contains("region-header") ? s : s.querySelector(".region-header");
                    if (i && 0 !== i.length) {
                        var o = Object.freeze({
                            TAB: 9,
                            RETURN: 13,
                            ESC: 27,
                            SPACE: 32,
                            PAGEUP: 33,
                            PAGEDOWN: 34,
                            END: 35,
                            HOME: 36,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40
                        })
                          , n = i.querySelector(".navigation-menu .level--0")
                          , r = document.querySelector("body")
                          , a = i.querySelector(".menu-trigger")
                          , h = new e.a(n,o);
                        t(n, s).once("theme_kit_menu").each((function() {
                            h.init(),
                            window.addEventListener("click", (function(t) {
                                if (t.target !== n && !n.contains(t.target)) {
                                    var e = n.querySelector('a[aria-expanded="true"]');
                                    e && e.setAttribute("aria-expanded", "false")
                                }
                            }
                            )),
                            a.addEventListener("click", (function() {
                                i.classList.toggle("open"),
                                r.classList.toggle("overflow-hidden")
                            }
                            )),
                            window.onscroll = function() {
                                window.scrollY > 50 ? document.querySelector("body").classList.add("scrolled") : document.querySelector("body").classList.remove("scrolled")
                            }
                        }
                        ))
                    }
                }
            }
        }
        .call(this, s(53))
    },
    53: function(t, e) {
        t.exports = jQuery
    }
});
/* Source and licensing information for the above line(s) can be found at https://www.worldfinancialgroup.com/themes/custom/themekit/dist/js/main-menu.js. */
;