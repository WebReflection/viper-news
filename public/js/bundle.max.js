"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(["", ""], ["", ""]),
    _templateObject2 = _taggedTemplateLiteral(["\n<h1>About this site</h1>\n<p>\n  Hacker News clones are the new TodoMVC.\n  <a href=\"https://svelte-hn.now.sh/\">Svelte</a> has one,\n  and most you can see here has been forked from it,\n  <a href='https://vue-hn.now.sh'>Vue</a> has one,\n  <a href='https://next-news.now.sh'>Next</a> has one,\n  <a href='https://react-hn.appspot.com'>React</a> and\n  <a href='https://preact-hn.appspot.com'>Preact</a> have theirs.\n  And now, <strong>viperHTML</strong> has one.\n</p>\n<p>\n  <a href=\"https://github.com/WebReflection/viperHTML\">viperHTML</a> is the isomorphic version of <a href=\"https://github.com/WebReflection/hyperHTML\">hyperHTML</a>,\n  a new just-in-time template literals compiler that targets DOM nodes on the client and string interpolations on the server.\n\n  The result is a natural, fast, compact and easy way to create Web apps, offering a solution for your project views.\n  It plays well with both vanilla JS and frameworks, and it's widely compatible for boh browsers and servers.\n</p>\n<p>\n  This app is designed to test viperHTML's ideas and see if there are any essential features that we're missing,\n  and to act as an example for people looking to build their own viperHTML based apps.\n  You can see the <a href='https://github.com/WebReflection/viper-news'>source code</a>.\n</p>"], ["\n<h1>About this site</h1>\n<p>\n  Hacker News clones are the new TodoMVC.\n  <a href=\"https://svelte-hn.now.sh/\">Svelte</a> has one,\n  and most you can see here has been forked from it,\n  <a href='https://vue-hn.now.sh'>Vue</a> has one,\n  <a href='https://next-news.now.sh'>Next</a> has one,\n  <a href='https://react-hn.appspot.com'>React</a> and\n  <a href='https://preact-hn.appspot.com'>Preact</a> have theirs.\n  And now, <strong>viperHTML</strong> has one.\n</p>\n<p>\n  <a href=\"https://github.com/WebReflection/viperHTML\">viperHTML</a> is the isomorphic version of <a href=\"https://github.com/WebReflection/hyperHTML\">hyperHTML</a>,\n  a new just-in-time template literals compiler that targets DOM nodes on the client and string interpolations on the server.\n\n  The result is a natural, fast, compact and easy way to create Web apps, offering a solution for your project views.\n  It plays well with both vanilla JS and frameworks, and it's widely compatible for boh browsers and servers.\n</p>\n<p>\n  This app is designed to test viperHTML's ideas and see if there are any essential features that we're missing,\n  and to act as an example for people looking to build their own viperHTML based apps.\n  You can see the <a href='https://github.com/WebReflection/viper-news'>source code</a>.\n</p>"]),
    _templateObject3 = _taggedTemplateLiteral(["\n<article class='comment'>\n  <span class='meta'><a href='", "'> ", " </a> ", " ago</span>\n  <div class='body'>\n    <p>", "</p>\n  </div>\n  <ul class='", "'>", "</ul>\n</article>"], ["\n<article class='comment'>\n  <span class='meta'><a href='", "'> ", " </a> ", " ago</span>\n  <div class='body'>\n    <p>", "</p>\n  </div>\n  <ul class='", "'>", "</ul>\n</article>"]),
    _templateObject4 = _taggedTemplateLiteral(["\n<article class=\"item\">\n  <a class=\"main-link\" href=\"", "\">\n    ", "\n    <small> ", " </small>\n  </a>\n  <p class=\"meta\">\n    ", " points by <a href=\"", "\"> ", " </a> ", " ago\n  </p>\n</article>\n<h3>\n  ", "\n</h3>\n<div class='comments'>", "</div>"], ["\n<article class=\"item\">\n  <a class=\"main-link\" href=\"", "\">\n    ", "\n    <small> ", " </small>\n  </a>\n  <p class=\"meta\">\n    ", " points by <a href=\"", "\"> ", " </a> ", " ago\n  </p>\n</article>\n<h3>\n  ", "\n</h3>\n<div class='comments'>", "</div>"]),
    _templateObject5 = _taggedTemplateLiteral(["\n<a class='more' href='", "'>More...</a>"], ["\n<a class='more' href='", "'>More...</a>"]),
    _templateObject6 = _taggedTemplateLiteral(["\n<article>\n  <h2>\n    <a href='", "'>\n      ", "\n      <small> ", " </small>\n    </a>\n  </h2>\n  <p>\n    ", " points by <a href='", "'> ", " </a>", "</p>\n  <span class='index'>\n    ", "\n  </span>\n</article>"], ["\n<article>\n  <h2>\n    <a href='", "'>\n      ", "\n      <small> ", " </small>\n    </a>\n  </h2>\n  <p>\n    ", " points by <a href='", "'> ", " </a>", "</p>\n  <span class='index'>\n    ", "\n  </span>\n</article>"]),
    _templateObject7 = _taggedTemplateLiteral(["\n<h1> ", " </h1>\n<p>...joined <strong> ", " </strong>, and has <strong> ", " </strong> karma</p>\n<p>\n  <a href=\"", "\"> submissions </a> /\n  <a href=\"", "\"> comments </a> /\n  <a href=\"", "\"> favourites </a>\n</p>\n<div class=\"", "\">\n  <p>", "</p>\n</div>"], ["\n<h1> ", " </h1>\n<p>...joined <strong> ", " </strong>, and has <strong> ", " </strong> karma</p>\n<p>\n  <a href=\"", "\"> submissions </a> /\n  <a href=\"", "\"> comments </a> /\n  <a href=\"", "\"> favourites </a>\n</p>\n<div class=\"", "\">\n  <p>", "</p>\n</div>"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    var title = 'viperHTML 🐍 Hacker News';
    var viperHTML = require('viperhtml');
    var render = require('./render');

    // basically this is the router
    var showPage = function showPage() {
      var main = document.querySelector('main');

      // asking for users
      if (/^\/user\/([^?#]+)/.test(location.pathname)) {
        var id = lastClick = RegExp.$1;
        main.classList.add('opaque');
        render.header('user');
        fetch(location.pathname + '.json').then(function (body) {
          return body.json();
        }).then(function (user) {
          // avoid races with latest clicked section
          if (id === lastClick) {
            document.title = "Profile: " + user.id + " | " + title;
            render.main(render.user(user));
            scrollTo(0, 0);
            main.classList.remove('opaque');
          }
        });
      }

      // asking for a specific item
      else if (/^\/item\/(\d+)/.test(location.pathname)) {
          var _id = lastClick = RegExp.$1;
          main.classList.add('opaque');
          fetch(location.pathname + '.json').then(function (body) {
            return body.json();
          }).then(function (data) {
            // avoid races with latest clicked section
            if (_id === lastClick) {
              document.title = data.title;
              data.comments = data.comments.filter(filterComment).map(mapComment);
              render.main(render.item(data));
              scrollTo(0, 0);
              main.classList.remove('opaque');
            }
          });
        }

        // asking for stories / about
        else if (/^\/([a-z]+)(\/\d+)?$/.test(location.pathname)) {
            var story = lastClick = RegExp.$1;
            main.classList.add('opaque');
            render.header(story);
            switch (story) {
              case 'about':
                setTimeout(function () {
                  if (story === lastClick) {
                    render.about([]);
                    scrollTo(0, 0);
                    main.classList.remove('opaque');
                  }
                }, 300);
                break;
              default:
                fetch(location.pathname + '.json').then(function (body) {
                  return body.json();
                }).then(function (data) {
                  // avoid races with latest clicked section
                  if (story === lastClick) {
                    document.title = title;
                    render.main(data.items.map(render.summary).concat(data.next ? render.next(data) : []));
                    scrollTo(0, 0);
                    main.classList.remove('opaque');
                  }
                });
                break;
            }
          }
    };

    // router helpers
    var lastClick = void 0;

    var filterComment = function filterComment(comment) {
      return !comment.deleted;
    };

    var mapComment = function mapComment(comment) {
      comment.comments = (comment.comments || []).filter(filterComment).map(mapComment);
      return render.comment(comment);
    };

    // routing is simply triggered by push/pop states
    // FYI: onpushstate module is plain awesome
    //      https://github.com/WebReflection/onpushstate
    require('onpushstate');
    addEventListener('pushstate', showPage);
    addEventListener('popstate', showPage);

    if ('serviceWorker' in navigator) addEventListener('load', function () {
      return navigator.serviceWorker.register('/sw.js');
    }, { once: true });

    /*
    // add favicon circus in the mix
    // after checking for ServiceWorker capabilities
    addEventListener(
      'load',
      () => {
        const favicon = () => document.head.appendChild(
          (viperHTML.wire()`
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
            <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
            <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
          `).reduce(
            (f, children) => (f.appendChild(children), f),
            document.createDocumentFragment()
          )
        );
    
        if ('serviceWorker' in navigator)
          navigator.serviceWorker.register('/sw.js').then(favicon);
        else
          favicon();
      },
      {once: true}
    );
    */
  }, { "./render": 2, "onpushstate": 5, "viperhtml": 6 }], 2: [function (require, module, exports) {
    var viperHTML = require('viperhtml');

    var view = {
      about: require('../../shared/view/about'),
      summary: require('../../shared/view/summary'),
      item: require('../../shared/view/item'),
      comment: require('../../shared/view/comment'),
      user: require('../../shared/view/user'),
      next: require('../../shared/view/next')
    };

    var wire = {
      main: viperHTML.bind(document.querySelector('main')),
      user: viperHTML.wire(),
      next: viperHTML.wire()
    };

    module.exports = {
      main: function main(model) {
        return wire.main(_templateObject, model);
      },

      item: function item(model) {
        return view.item(viperHTML.wire(model), model);
      },
      comment: function comment(model) {
        return view.comment(viperHTML.wire(model), model);
      },

      about: function about(model) {
        return view.about(wire.main, model);
      },
      summary: function summary(model) {
        return view.summary(viperHTML.wire(model), model);
      },

      // it could've been like the server-side one
      // here showing off other patterns/potentials
      header: function header(story) {
        return [].forEach.call(document.querySelectorAll('header a'), function (a) {
          a.classList[~a.getAttribute('href').indexOf("/" + story) ? 'add' : 'remove']('selected');
        });
      },
      user: function user(model) {
        return view.user(wire.user, model);
      },
      next: function next(model) {
        return view.next(wire.next, model);
      }
    };
  }, { "../../shared/view/about": 8, "../../shared/view/comment": 9, "../../shared/view/item": 10, "../../shared/view/next": 11, "../../shared/view/summary": 12, "../../shared/view/user": 13, "viperhtml": 6 }], 3: [function (require, module, exports) {
    /*jslint indent: 2 */
    var html = function (O) {
      'use strict';
      // Andrea Giammarchi - MIT Style License

      var reEscape = /[&<>'"]/g,
          reUnescape = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
          oEscape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      },
          oUnescape = {
        '&amp;': '&',
        '&#38;': '&',
        '&lt;': '<',
        '&#60;': '<',
        '&gt;': '>',
        '&#62;': '>',
        '&apos;': "'",
        '&#39;': "'",
        '&quot;': '"',
        '&#34;': '"'
      },
          fnEscape = function fnEscape(m) {
        return oEscape[m];
      },
          fnUnescape = function fnUnescape(m) {
        return oUnescape[m];
      },
          replace = ''.replace;
      return (O.freeze || O)({
        escape: function escape(s) {
          return replace.call(s, reEscape, fnEscape);
        },
        unescape: function unescape(s) {
          return replace.call(s, reUnescape, fnUnescape);
        }
      });
    }(Object);

    try {
      module.exports = html;
    } catch (ignore) {}
  }, {}], 4: [function (require, module, exports) {
    var hyperHTML = function () {
      'use strict';

      /*! (C) 2017 Andrea Giammarchi @WebReflection (MIT) */

      // hyperHTML \o/
      //
      // var render = hyperHTML.bind(document.body);
      // setInterval(() => render`
      //  <h1>⚡️ hyperHTML ⚡️</h1>
      //  <p>
      //    ${(new Date).toLocaleString()}
      //  </p>
      // `, 1000);

      function hyperHTML(statics) {
        return EXPANDO in this && this[EXPANDO].s === statics ? update.apply(this, arguments) : upgrade.apply(this, arguments);
      }

      // A wire ➰ is a bridge between a document fragment
      // and its inevitably lost list of rendered nodes
      //
      // var render = hyperHTML.wire();
      // render`
      //  <div>Hello Wired!</div>
      // `;
      //
      // Every single invocation will return that div
      // or the list of elements it contained as Array.
      // This simplifies most task where hyperHTML
      // is used to create the node itself, instead of
      // populating an already known and bound one.
      hyperHTML.wire = function wire(obj) {
        return arguments.length < 1 ? wireContent() : wireWeakly(obj);
      };

      // - - - - - - - - - - - - - - - - - -  - - - - -

      // -------------------------
      // DOM parsing & traversing
      // -------------------------

      // setup attributes for updates
      //
      // <p class="${state.class}" onclick="${event.click}"></p>
      //
      // Note: always use quotes around attributes, even for events,
      //       booleans, or numbers, otherwise this function fails.
      function attributesSeeker(node, actions) {
        for (var attribute, value = IE ? uid : uidc, attributes = slice.call(node.attributes), i = 0, length = attributes.length; i < length; i++) {
          attribute = attributes[i];
          if (attribute.value === value) {
            // with IE the order doesn't really matter
            // as long as the right attribute is addressed
            actions.push(setAttribute(node, IE ? node.getAttributeNode(IEAttributes.shift()) : attribute));
          }
        }
      }

      // traverse the whole node in search of editable content
      // decide what each future update should change
      //
      // <div atr="${some.attribute}">
      //    <h1>${some.HTML}</h1>
      //    <p>
      //      ${some.text}
      //    </p>
      // </div>
      function lukeTreeWalker(node, actions) {
        for (var child, text, childNodes = slice.call(node.childNodes), length = childNodes.length, i = 0; i < length; i++) {
          child = childNodes[i];
          switch (child.nodeType) {
            case 1:
              attributesSeeker(child, actions);
              lukeTreeWalker(child, actions);
              break;
            case 8:
              if (child.textContent === uid) {
                if (length === 1) {
                  actions.push(setAnyContent(node));
                  node.removeChild(child);
                } else if ((i < 1 || childNodes[i - 1].nodeType === 1) && (i + 1 === length || childNodes[i + 1].nodeType === 1)) {
                  actions.push(setVirtualContent(child));
                } else {
                  text = node.ownerDocument.createTextNode('');
                  actions.push(setTextContent(text));
                  node.replaceChild(text, child);
                }
              }
              break;
          }
        }
      }

      // -------------------------
      // DOM manipulating
      // -------------------------

      // update regular bound nodes
      //
      // var render = hyperHTML.bind(node);
      // function update() {
      //  render`template`;
      // }
      function setAnyContent(node) {
        return function any(value) {
          switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
            case 'string':
              node.innerHTML = value;
              break;
            case 'number':
            case 'boolean':
              node.textContent = value;
              break;
            default:
              if (Array.isArray(value)) {
                if (value.length === 1) {
                  any(value[0]);
                } else if (typeof value[0] === 'string') {
                  any(value.join(''));
                } else {
                  var i = indexOfDiffereces(node.childNodes, value);
                  if (-1 < i) {
                    updateViaArray(node, value, i);
                  }
                }
              } else {
                populateNode(node, value);
              }
              break;
          }
        };
      }

      // update attributes node
      //
      // render`<a href="${url}" onclick="${click}">${name}</a>`;
      //
      // Note: attributes with `on` prefix are set directly as callbacks.
      //       These won't ever be transformed into strings while other
      //       attributes will be automatically sanitized.
      function setAttribute(node, attribute) {
        var name = attribute.name,
            isSpecial = SPECIAL_ATTRIBUTE.test(name);
        if (isSpecial) node.removeAttribute(name);
        return isSpecial ? function event(value) {
          node[name] = value;
        } : function attr(value) {
          attribute.value = value;
        };
      }

      // update the "emptiness"
      // this function is used when template literals
      // have sneaky html/fragment capable
      // updates in the wild (no spaces around)
      //
      // render`
      //  <p>Content before</p>${
      //  'any content in between'
      //  }<p>Content after</p>
      // `;
      //
      // Note: this is the most expensive
      //       update of them all.
      function setVirtualContent(node) {
        var fragment = document.createDocumentFragment(),
            childNodes = [];
        return function any(value) {
          var i,
              parentNode = node.parentNode;
          switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
            case 'string':
            case 'number':
            case 'boolean':
              removeNodeList(childNodes, 0);
              injectHTML(fragment, value);
              childNodes = slice.call(fragment.childNodes);
              parentNode.insertBefore(fragment, node);
              break;
            default:
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  any(value[0]);
                } else if (typeof value[0] === 'string') {
                  any(value.join(''));
                } else {
                  i = indexOfDiffereces(childNodes, value);
                  if (-1 < i) {
                    removeNodeList(childNodes, i);
                    value = value.slice(i);
                    appendNodes(fragment, value);
                    parentNode.insertBefore(fragment, node);
                    childNodes.push.apply(childNodes, value);
                  }
                }
              } else {
                removeNodeList(childNodes, 0);
                childNodes = value.nodeType === 11 ? slice.call(value.childNodes) : [value];
                parentNode.insertBefore(value, node);
              }
              break;
          }
        };
      }

      // basic closure to update nodes textContent
      //
      // render`
      //  <p>
      //    ${'spaces around means textContent'}
      //  </p>`;
      function setTextContent(node) {
        return function text(value) {
          node.textContent = value;
        };
      }

      // -------------------------
      // Helpers
      // -------------------------

      // it does exactly what it says
      function appendNodes(node, childNodes) {
        for (var i = 0, length = childNodes.length; i < length; i++) {
          node.appendChild(childNodes[i]);
        }
      }

      // given two collections, find
      // the first index that has different content.
      // If the two lists are the same, return -1
      // to indicate no differences were found.
      function indexOfDiffereces(a, b) {
        if (a === b) return -1;
        var i = 0,
            aLength = a.length,
            bLength = b.length;
        while (i < aLength) {
          if (i < bLength && a[i] === b[i]) i++;else return i;
        }
        return i === bLength ? -1 : i;
      }

      // inject HTML into a template node
      // and populate a fragment with resulting nodes
      //
      // IE9~IE11 are not compatible with the template tag.
      // If the content is a partial part of a table there is a fallback.
      // Not the most elegant/robust way but good enough for common cases.
      // (I don't want to include a whole DOM parser for IE only here).
      function injectHTML(fragment, html) {
        var fallback = IE && /^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(html),
            template = fragment.ownerDocument.createElement('template');
        template.innerHTML = fallback ? '<table>' + html + '</table>' : html;
        if (fallback) {
          template = { childNodes: template.querySelectorAll(RegExp.$1) };
        }
        appendNodes(fragment, slice.call((template.content || template).childNodes));
      }

      // accordingly with the kind of child
      // it put its content into a parent node
      function populateNode(parent, child) {
        switch (child.nodeType) {
          case 1:
            var childNodes = parent.childNodes;
            if (childNodes.length !== 1 || childNodes[0] !== child) {
              resetAndPopulate(parent, child);
            }
            break;
          case 11:
            if (-1 < indexOfDiffereces(parent.childNodes, child.childNodes)) {
              resetAndPopulate(parent, child);
            }
            break;
          case 3:
            parent.textContent = child.textContent;
            break;
        }
      }

      // it does exactly what it says
      function removeNodeList(list, startIndex) {
        var length = list.length,
            child;
        while (startIndex < length--) {
          child = list[length];
          child.parentNode.removeChild(child);
        }
      }

      // drop all nodes and append a node
      function resetAndPopulate(parent, child) {
        parent.textContent = '';
        parent.appendChild(child);
      }

      // the first time a hyperHTML.wire() is invoked
      // remember the list of nodes that should be updated
      // at every consequent render call.
      // The resulting function might return the very first node
      // or the Array of all nodes that might need updates.
      function setupAndGetContent(node) {
        for (var child, children = [], childNodes = node.childNodes, i = 0, length = childNodes.length; i < length; i++) {
          child = childNodes[i];
          if (1 === child.nodeType || 0 < trim.call(child.textContent).length) {
            children.push(child);
          }
        }
        length = children.length;
        return length < 2 ? (child = length < 1 ? node : children[0], function () {
          return child;
        }) : function () {
          return children;
        };
      }

      // remove and/or and a list of nodes through an array
      function updateViaArray(node, childNodes, i) {
        var fragment = node.ownerDocument.createDocumentFragment();
        if (0 < i) {
          removeNodeList(node.childNodes, i);
          appendNodes(fragment, childNodes.slice(i));
          node.appendChild(fragment);
        } else {
          appendNodes(fragment, childNodes);
          resetAndPopulate(node, fragment);
        }
      }

      // create a new wire for generic DOM content
      function wireContent() {
        var content, fragment, render, setup, template;
        return function update(statics) {
          if (template !== statics) {
            setup = true;
            template = statics;
            fragment = document.createDocumentFragment();
            render = hyperHTML.bind(fragment);
          }
          render.apply(null, arguments);
          if (setup) {
            setup = false;
            content = setupAndGetContent(fragment);
          }
          return content();
        };
      }

      // get or create a wired weak reference
      function wireWeakly(obj) {
        return wm.get(obj) || (wm.set(obj, wireContent()), wireWeakly(obj));
      }

      // -------------------------
      // Template setup
      // -------------------------

      // each known hyperHTML update is
      // kept as simple as possible.
      function update() {
        for (var i = 1, length = arguments.length, updates = this[EXPANDO].u; i < length; i++) {
          updates[i - 1](arguments[i]);
        }
        return this;
      }

      // but the first time, it needs to be setup.
      // From now on, only update(statics) will be called
      // unless this node won't be used for other renderings.
      function upgrade(statics) {
        var updates = [],
            html = statics.join(uidc);
        if (IE) {
          IEAttributes = [];
          injectHTML(this, html.replace(no, comments));
        } else if (this.nodeType === 1) {
          this.innerHTML = html;
        } else {
          injectHTML(this, html);
        }
        lukeTreeWalker(this, updates);
        this[EXPANDO] = { s: statics, u: updates };
        return update.apply(this, arguments);
      }

      // -------------------------
      // the trash bin
      // -------------------------

      // IE used to suck.
      /*
      // even in a try/catch this throw an error
      // since it's reliable though, I'll keep it around
      function isIE() {
        var p = document.createElement('p');
        p.innerHTML = '<i onclick="<!---->">';
        return p.childNodes[0].onclick == null;
      }
      //*/

      // remove and/or and a list of nodes through a fragment
      /* temporarily removed until it's demonstrated it's needed
      function updateViaFragment(node, fragment, i) {
        if (0 < i) {
          removeNodeList(node.childNodes, i);
          var slim = fragment.cloneNode();
          appendNodes(slim, slice.call(fragment.childNodes, i));
          node.appendChild(fragment, slim);
        } else {
          resetAndPopulate(node, fragment);
        }
      }
      //*/

      // -------------------------
      // local variables
      // -------------------------

      var
      // decide special attributes behavior
      SPECIAL_ATTRIBUTE = /^(?:on[a-z]+|async|autofocus|autoplay|capture|checked|controls|deferred|disabled|formnovalidate|hidden|loop|multiple|muted|required)$/,

      // avoids WeakMap to avoid memory pressure, use CSS compatible syntax for IE
      EXPANDO = '_hyper_html: ',

      // use a pseudo unique id to avoid conflicts and normalize CSS style for IE
      uid = EXPANDO + (Math.random() * new Date() | 0) + ';',

      // use comment nodes with pseudo unique content to setup
      uidc = '<!--' + uid + '-->',

      // threat it differently
      IE = 'documentMode' in document,
          no = IE && new RegExp('([^\\S][a-z]+[a-z0-9_-]*=)([\'"])' + uidc + '\\2', 'g'),
          comments = IE && function ($0, $1, $2) {
        IEAttributes.push($1.slice(1, -1));
        return $1 + $2 + uid + $2;
      },

      // verify empty textContent on .wire() setup
      trim = EXPANDO.trim || function () {
        return this.replace(/^\s+|\s+$/g, '');
      },

      // convert DOM.childNodes into arrays to avoid
      // DOM mutation backfiring on loops
      slice = [].slice,

      // used for weak references
      // if WeakMap is not available
      // it uses a configurable, non enumerable,
      // quick and dirty expando property.
      wm = (typeof WeakMap === "undefined" ? "undefined" : _typeof(WeakMap)) === (typeof wm === "undefined" ? "undefined" : _typeof(wm)) ? {
        get: function get(obj) {
          return obj[EXPANDO];
        },
        set: function set(obj, value) {
          Object.defineProperty(obj, EXPANDO, {
            configurable: true,
            value: value
          });
        }
      } : new WeakMap(),
          IEAttributes;

      // Simply to avoid duplicated RegExp in viperHTML
      hyperHTML.SPECIAL_ATTRIBUTE = SPECIAL_ATTRIBUTE;

      // -------------------------
      // ⚡️ ️️The End ➰
      // -------------------------
      return hyperHTML;
    }();

    // umd.KISS
    try {
      module.exports = hyperHTML;
    } catch (o_O) {}
  }, {}], 5: [function (require, module, exports) {
    /*! (C) 2017 Andrea Giammarchi - @WebReflection - ISC License */
    /**
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
     * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
     * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
     * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
     * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
     * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
     * PERFORMANCE OF THIS SOFTWARE.
     */
    document.addEventListener('click', function (e) {
      // find the link node
      var anchor = e.target.closest('a');
      if (
      // it was found
      anchor &&
      // it's for the current page
      /^(?:_self)?$/i.test(anchor.target) &&
      // it's not a download
      !anchor.hasAttribute('download') &&
      // it's not a resource handled externally
      anchor.getAttribute('rel') !== 'external') {
        // all states are simply fully resolved URLs
        // pushstate will be the new page with old one as state
        // popstate will be old page with previous one as state.
        var next = new URL(anchor.href);
        var curr = location;
        // only if in the same origin
        if (next.origin === curr.origin) {
          // verify it's not just an anchor change
          var redirect = next.pathname + next.search;
          var hash = next.hash;
          var scrollIntoView = true;
          // in every case prevent the default action
          e.preventDefault();
          // but don't stop propagation, other listeners
          // might want to be triggered regardless the history
          if (redirect === curr.pathname + curr.search) {
            // anchors should do what anchors do, only if valid
            // https://www.w3.org/TR/html4/types.html#type-name
            if (/^#[a-z][a-z0-9.:_-]+$/i.test(hash)) {
              var target = document.querySelector(hash + ',[name="' + hash.slice(1) + '"]');
              if (target) {
                // verify if other listeners tried to prevent the default
                e.preventDefault = function () {
                  scrollIntoView = false;
                };
                // after this event has captured and bubbled the DOM
                setTimeout(function () {
                  // if nobody else prevented the default
                  // simulate what an anchor would've done
                  if (scrollIntoView) target.scrollIntoView(true);
                });
              }
            }
            // replace the history to ignore the popstate on anchor
            history.replaceState(history.state, document.title, redirect + hash);
          } else {
            // trigger a new pushstate notification
            var evt = new CustomEvent('pushstate');
            evt.state = curr.href;
            // being sure it happens after so the new location should be available
            setTimeout(function () {
              // dispatch the event
              dispatchEvent(evt);
              // also trigger Level 0 if possible
              if (window.onpushstate) onpushstate(evt);
            });
            history.pushState(evt.state, document.title, redirect + hash);
          }
        }
      }
    }, true);
  }, {}], 6: [function (require, module, exports) {
    /*! (C) 2017 Andrea Giammarchi @WebReflection (MIT) */
    module.exports = (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' ? require('hyperhtml') : require('./viperhtml.js');
  }, { "./viperhtml.js": 7, "hyperhtml": 4 }], 7: [function (require, module, exports) {
    (function (global) {
      'use strict';

      /*! (C) 2017 Andrea Giammarchi @WebReflection (MIT) */

      // viperHTML \o/
      //
      // var render = viperHTML.bind(object);
      // render`
      //  <h1>⚡️ viperHTML ⚡️</h1>
      //  <p>
      //    ${(new Date).toLocaleString()}
      //  </p>
      // `;

      function viperHTML(statics) {
        var viper = vipers.get(this);
        return viper && viper.s === statics ? (isAsync(this) ? this.update : update).apply(viper, arguments) : upgrade.apply(this, arguments);
      }

      // A wire ➰ is a shortcut to relate a specific object,
      // or a runtime created one, to a specific template.
      //
      // var render = viperHTML.wire();
      // render`
      //  <div>Hello Wired!</div>
      // `;
      viperHTML.wire = function wire(object) {
        return arguments.length < 1 ? viperHTML.bind({}) : wires.get(object) || (wires.set(object, wire()), wire(object));
      };

      // An asynchronous wire ➰ is a weakly referenced callback,
      // to be invoked right before the template literals
      // to return a rendered capable of resolving chunks.
      viperHTML.async = function getAsync(object) {
        return arguments.length < 1 ? createAsync() : asyncs.get(object) || (asyncs.set(object, getAsync()), getAsync(object));
      };

      // - - - - - - - - - - - - - - - - - -  - - - - -

      // -------------------------
      // DOM investigation
      // -------------------------

      // if a gap is in between a node declaration
      // and its attribute definition this is true
      function isAttribute(copies, i) {
        return ATTRIBUTE_BEFORE.test(copies.slice(0, i).join('')) && ATTRIBUTE_AFTER.test(copies.slice(i).join(''));
      }

      // if a gap is in between html elements
      // allow any sort of HTML content
      function isHTML(statics, i) {
        return statics[i - 1].slice(-1) === '>' && statics[i][0] === '<';
      }

      // -------------------------
      // Helpers
      // -------------------------

      // instrument a wire to work asynchronously
      // passing along an optional resolved chunks
      // interceptor callback
      function createAsync() {
        var wired = new Async(),
            wire = viperHTML.bind(wired),
            chunksReceiver;
        wired.update = function () {
          this.a = chunksReceiver;
          return chunks.apply(this, arguments);
        };
        return function (callback) {
          chunksReceiver = callback || String;
          return wire;
        };
      }

      // if a node is an attribute, return the right function
      // accordingly if that's an escape or a callback
      function getUpdateForAttribute(copies, i) {
        var name = copies[i - 1].replace(ATTRIBUTE_NAME, '$1');
        return SPECIAL_ATTRIBUTE.test(name) ? ATTRIBUTE_EVENT.test(name) ? updateEvent() : updateBoolean(name, copies, i) : escape;
      }

      // if an interpolated value is an Array
      // return Promise or join by empty string
      function getUpdateForHTML(bound) {
        return isAsync(bound) ? function (value) {
          return value;
        } : joinIfArray;
      }

      // multiple content joined as single string
      function joinIfArray(value) {
        return isArray(value) ? value.join('') : value;
      }

      // return the right callback to update a boolean attribute
      // after modifying the template to ignore such attribute if falsy
      function updateBoolean(name, copies, i) {
        copies[i - 1] = copies[i - 1].slice(0, -(name.length + 3));
        copies[i] = copies[i].slice(1);
        name = ' ' + name;
        return function (value) {
          return value ? name : '';
        };
      }

      // return the right callback to invoke an event
      // stringifying the callback and invoking it
      // to simulate a proper DOM behavior
      function updateEvent() {
        return function (value) {
          var isFunction = typeof value === 'function';
          return isFunction ? 'return (' + escape(JS_SHORTCUT.test(value) && !JS_FUNCTION.test(value) ? 'function ' + value : '' + value) + ').call(this, event)' : value || '';
        };
      }

      // -------------------------
      // Template setup
      // -------------------------

      // resolves through promises and
      // invoke a notifier per each resolved chunk
      // the context will be a viper
      function chunks() {
        for (var update, out = [], asyncCallback = this.a, copies = this.c, updates = this.u, all = Promise.resolve(copies[0]), chain = function chain(after) {
          return all.then(function (through) {
            notify(through);
            return after;
          });
        }, getValue = function getValue(value) {
          if (isArray(value)) {
            value.forEach(getValue);
          } else {
            all = chain(Promise.resolve(value).then(joinIfArray).then(update));
          }
        }, notify = function notify(chunk) {
          out.push(chunk);
          asyncCallback(chunk);
        }, i = 1, length = arguments.length; i < length; i++) {
          update = updates[i - 1];
          getValue(arguments[i]);
          all = chain(copies[i]);
        }
        return all.then(notify).then(function () {
          return out;
        });
      }

      // each known hyperHTML update is
      // kept as simple as possible.
      // the context will be a viper
      function update() {
        for (var c = this.c, u = this.u, out = [c[0]], i = 1, length = arguments.length; i < length; i++) {
          out[i] = u[i - 1](arguments[i]) + c[i];
        }
        return out.join('');
      }

      // but the first time, it needs to be setup.
      // From now on, only update(statics) will be called
      // unless this context won't be used for other renderings.
      // the context will be the one bound to viperHTML
      function upgrade(statics) {
        for (var updates = [], copies = updates.slice.call(statics), viper = { s: statics, u: updates, c: copies }, i = 1, length = statics.length; i < length; i++) {
          updates[i - 1] = isHTML(statics, i) ? getUpdateForHTML(this) : isAttribute(copies, i) ? getUpdateForAttribute(copies, i) : escape;
        }
        vipers.set(this, viper);
        return viperHTML.apply(this, arguments);
      }

      // -------------------------
      // local variables
      // -------------------------

      // hyperHTML might have document in the wild to feature detect IE
      // viperHTML should not suffer browser feature detection
      // this file is used only if no document is available
      // so let's make it temporarily a thing

      global.document = {};

      var ATTRIBUTE_BEFORE = /<[a-z]\S*[^\S]+(?:[a-z-]+(?:=(?:(["'])[^\1]*?\1|[^"'\s]+))?[^\S]+)*?[a-z-]+=["']$/i,
          ATTRIBUTE_AFTER = /^"(?:[^\S]+[a-z-]+(?:=(?:(["'])[^\1]*?\1|[^"'\s]+))?)*?[^\S]*>/i,
          ATTRIBUTE_NAME = /^[\s\S]*?([a-z-]+)="$/i,
          ATTRIBUTE_EVENT = /^on[a-z]+$/,
          JS_SHORTCUT = /^[a-z$_]\S*?\(/,
          JS_FUNCTION = /^function\S*?\(/,
          SPECIAL_ATTRIBUTE = require('hyperhtml').SPECIAL_ATTRIBUTE,
          htmlEscape = require('html-escaper').escape,
          asyncs = new WeakMap(),
          vipers = new WeakMap(),
          wires = new WeakMap(),
          escape = function escape(s) {
        return htmlEscape(String(s));
      },
          isAsync = function isAsync(o) {
        return o instanceof Async;
      },
          isArray = Array.isArray;

      // let's cleanup this property now
      delete global.document;

      // just to mimic hyperHTML public statics
      viperHTML.SPECIAL_ATTRIBUTE = SPECIAL_ATTRIBUTE;

      module.exports = viperHTML;

      // local class to easily recognize async wires
      function Async() {}
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }, { "html-escaper": 3, "hyperhtml": 4 }], 8: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject2);
    };
  }, {}], 9: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject3, "/user/" + model.by, model.by, model.timeBetween, model.text, model.comments.length ? 'children' : 'hidden', model.comments);
    };
  }, {}], 10: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject4, model.url, model.title, model.hostname ? "(" + model.hostname.replace(/^www\./, '') + ")" : '', model.score, "/user/" + model.by, model.by, model.timeBetween, model.descendants ? model.descendants + " comments" : 'No comments yet', model.comments);
    };
  }, {}], 11: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject5, model.next);
    };
  }, {}], 12: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject6, model.url ? model.url : "/item/" + model.id, model.title, model.hostname ? "(" + model.hostname.replace(/^www\./, '') + ")" : '', model.score, "/user/" + model.by, model.by, model.timeBetween + " ago | <a href='/item/" + model.id + "'>" + (model.descendants || 0) + " comments</a>", model.index);
    };
  }, {}], 13: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject7, model.id, model.ago, model.karma, 'https://news.ycombinator.com/submitted?id=' + model.id, 'https://news.ycombinator.com/threads?id=' + model.id, 'https://news.ycombinator.com/favorites?id=' + model.id, 'about' + (model.about ? '' : ' hidden'), model.about || '');
    };
  }, {}] }, {}, [1]);