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
  }, { "./render": 2, "onpushstate": 4 }], 2: [function (require, module, exports) {
    var hyperHTML = require('hyperhtml');

    var view = {
      about: require('../../shared/view/about'),
      summary: require('../../shared/view/summary'),
      item: require('../../shared/view/item'),
      comment: require('../../shared/view/comment'),
      user: require('../../shared/view/user'),
      next: require('../../shared/view/next')
    };

    var wire = {
      main: hyperHTML.bind(document.querySelector('main')),
      user: hyperHTML.wire(),
      next: hyperHTML.wire()
    };

    module.exports = {
      main: function main(model) {
        return wire.main(_templateObject, model);
      },

      item: function item(model) {
        return view.item(hyperHTML.wire(model), model);
      },
      comment: function comment(model) {
        return view.comment(hyperHTML.wire(model), model);
      },

      about: function about(model) {
        return view.about(wire.main, model);
      },
      summary: function summary(model) {
        return view.summary(hyperHTML.wire(model), model);
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
  }, { "../../shared/view/about": 5, "../../shared/view/comment": 6, "../../shared/view/item": 7, "../../shared/view/next": 8, "../../shared/view/summary": 9, "../../shared/view/user": 10, "hyperhtml": 3 }], 3: [function (require, module, exports) {
    var hyperHTML = function (globalDocument) {
      'use strict';

      /*! (c) 2017 Andrea Giammarchi @WebReflection, (MIT) */

      // ---------------------------------------------
      // hyperHTML Public API
      // ---------------------------------------------

      // The document must be swap-able at runtime.
      // Needed by both basicHTML and nativeHTML

      hyperHTML.document = globalDocument;

      // hyperHTML.bind(el) ⚡️
      function hyperHTML(template) {
        var hyper = hypers.get(this);
        if (!hyper || hyper.template !== (FF ? unique(template) : template)) {
          hyper = upgrade.apply(this, arguments);
          hypers.set(this, hyper);
        }
        update.apply(hyper.updates, arguments);
        return this;
      }

      // hyperHTML.adopt(el) 🐣
      hyperHTML.adopt = function adopt(node) {
        return function () {
          notAdopting = false;
          hyperHTML.apply(node, arguments);
          notAdopting = true;
          return node;
        };
      };

      // hyperHTML.wire(obj, 'type:ID') ➰
      hyperHTML.wire = function wire(obj, type) {
        return arguments.length < 1 ? wireContent('html') : obj == null ? wireContent(type || 'html') : wireWeakly(obj, type || 'html');
      };

      // - - - - - - - - - - - - - - - - - - - - - - -

      // ---------------------------------------------
      // Constants
      // ---------------------------------------------

      // Node.CONSTANTS
      // without assuming Node is globally available
      // since this project is used on the backend too
      var ELEMENT_NODE = 1;
      var ATTRIBUTE_NODE = 2;
      var TEXT_NODE = 3;
      var COMMENT_NODE = 8;
      var DOCUMENT_FRAGMENT_NODE = 11;

      // SVG related
      var OWNER_SVG_ELEMENT = 'ownerSVGElement';
      var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

      var SHOULD_USE_ATTRIBUTE = /^style$/i;
      var EXPANDO = '_hyper_html: ';
      var UID = EXPANDO + (Math.random() * new Date() | 0) + ';';
      var UIDC = '<!--' + UID + '-->';

      // ---------------------------------------------
      // DOM Manipulation
      // ---------------------------------------------

      // return -1 if no differences are found
      // the index where differences starts otherwise
      function indexOfDifferences(a, b) {
        var i = 0,
            aLength = a.length,
            bLength = b.length;
        while (i < aLength) {
          if (i < bLength && a[i] === b[i]) i++;else return i;
        }
        return i === bLength ? -1 : i;
      }

      // accordingly with the content type
      // it replace the content of a node
      // with the give child
      function populateNode(parent, child) {
        switch (child.nodeType) {
          case ELEMENT_NODE:
            var childNodes = parent.childNodes;
            if (childNodes[0] === child) {
              removeNodeList(childNodes, 1);
              break;
            }
            resetAndPopulate(parent, child);
            break;
          case DOCUMENT_FRAGMENT_NODE:
            if (indexOfDifferences(parent.childNodes, child.childNodes) !== -1) {
              resetAndPopulate(parent, child);
            }
            break;
          case TEXT_NODE:
            parent.textContent = child.textContent;
            break;
        }
      }

      // remove a list of nodes from startIndex to list.length
      function removeNodeList(list, startIndex) {
        var length = list.length,
            child;
        while (startIndex < length--) {
          child = list[length];
          child.parentNode.removeChild(child);
        }
      }

      // erase a node content and populate it
      function resetAndPopulate(parent, child) {
        parent.textContent = '';
        parent.appendChild(child);
      }

      // append childNodes to a node from a specific index
      function updateViaArray(node, childNodes, i) {
        var fragment = emptyFragment(node);
        if (i !== 0) {
          removeNodeList(node.childNodes, i);
          appendNodes(fragment, childNodes.slice(i));
          node.appendChild(fragment);
        } else {
          appendNodes(fragment, childNodes);
          resetAndPopulate(node, fragment);
        }
      }

      // ---------------------------------------------
      // hyperHTML Operations
      // ---------------------------------------------

      // `<div>${'any'}</div>`
      function setAnyContent(node) {
        return function any(value) {
          switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
            case 'string':
            case 'number':
            case 'boolean':
              node.innerHTML = value;
              break;
            case 'function':
              any(value(node, node.children, 0));
              break;
            default:
              if (isArray(value)) {
                var i,
                    length = value.length;
                if (length === 1) {
                  any(value[0]);
                } else {
                  switch (length === 0 ? '' : _typeof(value[0])) {
                    case 'string':
                      any(value.join(''));
                      break;
                    case 'function':
                      var children = slice.call(node.children);
                      for (i = 0, length = value.length; i < length; i++) {
                        value[i] = value[i](node, children, i);
                      }
                      removeNodeList(children, i);
                      any(value.concat.apply([], value));
                      break;
                    default:
                      i = indexOfDifferences(node.childNodes, value);
                      if (i !== -1) updateViaArray(node, value, i);
                      break;
                  }
                }
              } else {
                populateNode(node, value);
              }
              break;
          }
        };
      }

      // `<div class="${'attr'}"></div>`
      function setAttribute(attribute, removeAttributes) {
        var name = attribute.name,
            node = attribute.ownerElement,
            isEvent = name.slice(0, 2) === 'on',
            isSpecial = name in node && !(
        // always use set attribute with SVGs
        OWNER_SVG_ELEMENT in node || SHOULD_USE_ATTRIBUTE.test(name)),
            oldValue;
        if (isSpecial) removeAttributes.push(node, name);
        return isSpecial ? function specialAttr(newValue) {
          if (oldValue !== newValue) {
            if (isEvent && oldValue && 'handleEvent' in oldValue) {
              handleEvent(node, 'remove', name, oldValue);
            }
            oldValue = newValue;
            if (isEvent && newValue && 'handleEvent' in newValue) {
              handleEvent(node, 'add', name, newValue);
            } else {
              node[name] = newValue;
            }
          }
        } : function attr(newValue) {
          if (oldValue !== newValue) {
            oldValue = newValue;
            attribute.value = newValue;
          }
        };
      }

      // `<div> ${'text'} </div>`
      function setTextContent(node) {
        var oldValue;
        return function text(newValue) {
          if (oldValue !== newValue) {
            oldValue = newValue;
            node.textContent = newValue;
          }
        };
      }

      // `<li>a</li>${'virtual'}<li>c</li>`
      function setVirtualContent(node, childNodes) {
        return function anyVirtual(value) {
          switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
            case 'string':
            case 'number':
            case 'boolean':
              removeNodeList(childNodes, 0);
              var fragment = createFragment(node, value);
              childNodes = slice.call(fragment.childNodes);
              node.parentNode.insertBefore(fragment, node);
              break;
            case 'function':
              anyVirtual(value(node.parentNode, childNodes, 0));
              break;
            default:
              if (isArray(value)) {
                var i,
                    length = value.length;
                if (length === 0) {
                  removeNodeList(childNodes, 0);
                  childNodes = [];
                } else {
                  switch (_typeof(value[0])) {
                    case 'string':
                      anyVirtual(value.join(''));
                      break;
                    case 'function':
                      var parentNode = node.parentNode;
                      for (i = 0, length = value.length; i < length; i++) {
                        value[i] = value[i](parentNode, childNodes, i);
                      }
                      anyVirtual(value.concat.apply([], value));
                      break;
                    default:
                      i = indexOfDifferences(childNodes, value);
                      if (i !== -1) {
                        var fragment = emptyFragment(node);
                        removeNodeList(childNodes, i);
                        value = value.slice(i);
                        appendNodes(fragment, value);
                        node.parentNode.insertBefore(fragment, node);
                        childNodes = childNodes.slice(0, i).concat(value);
                      }
                      break;
                  }
                }
              } else {
                removeNodeList(childNodes, 0);
                childNodes = value.nodeType === DOCUMENT_FRAGMENT_NODE ? slice.call(value.childNodes) : [value];
                node.parentNode.insertBefore(value, node);
              }
              break;
          }
        };
      }

      // ---------------------------------------------
      // DOM Traversing
      // ---------------------------------------------

      // look for attributes that contains the comment text
      function attributesSeeker(node, paths) {
        for (var attribute, value = IE ? UID : UIDC, attributes = node.attributes, i = 0, length = attributes.length; i < length; i++) {
          attribute = attributes[i];
          if (attribute.value === value) {
            paths.push(Path('attr',
            // with IE the order doesn't really matter
            // as long as the right attribute is addressed
            IE ? node.attributes[IEAttributes.shift()] : attribute));
          }
        }
      }

      // walk the fragment tree in search of comments
      function commentsSeeker(node, paths) {
        for (var child, text, childNodes = node.childNodes, length = childNodes.length, i = 0; i < length; i++) {
          child = childNodes[i];
          switch (child.nodeType) {
            case ELEMENT_NODE:
              attributesSeeker(child, paths);
              commentsSeeker(child, paths);
              break;
            case COMMENT_NODE:
              if (child.textContent === UID) {
                if (length === 1) {
                  paths.push(Path('any', node));
                } else if ((i < 1 || childNodes[i - 1].nodeType === ELEMENT_NODE) && (i + 1 === length || childNodes[i + 1].nodeType === ELEMENT_NODE)) {
                  paths.push(Path('virtual', child));
                } else {
                  text = createText(child, '');
                  child.parentNode.replaceChild(text, child);
                  paths.push(Path('text', text));
                }
              }
              break;
            case TEXT_NODE:
              if (SHOULD_USE_ATTRIBUTE.test(node.nodeName) && child.textContent === UIDC) {
                paths.push(Path('text', node));
              }
              break;
          }
        }
      }

      // ---------------------------------------------
      // Features detection / ugly UA sniffs
      // ---------------------------------------------

      // Firefox < 55 has non standard template literals.
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1108941
      // TODO: is there any better way to feature detect this ?
      var FF = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && /Firefox\/(\d+)/.test(navigator.userAgent) && parseFloat(RegExp.$1) < 55;

      // If attributes order is shuffled, threat the browser differently
      // Usually this is a well known IE only limitation but some older FF does the same.
      var IE = function () {
        var p = globalDocument.createElement('p');
        p.innerHTML = '<i data-i="" class=""></i>';
        return (/class/i.test(p.firstChild.attributes[0].name)
        );
      }();

      // ---------------------------------------------
      // Helpers
      // ---------------------------------------------

      // used to convert childNodes to Array
      var slice = [].slice;

      // return a single node or an Array or nodes
      function createContent(node) {
        for (var child, content = [], childNodes = node.childNodes, i = 0, length = childNodes.length; i < length; i++) {
          child = childNodes[i];
          if (child.nodeType === ELEMENT_NODE || trim.call(child.textContent).length !== 0) {
            content.push(child);
          }
        }
        return content.length === 1 ? content[0] : content;
      }

      // given a node, inject some html and return
      // the resulting template document fragment
      function createFragment(node, html) {
        return (OWNER_SVG_ELEMENT in node ? createSVGFragment : createHTMLFragment)(node, html);
      }

      // create fragment for HTML
      function createHTMLFragment(node, html) {
        var fragment;
        var document = node.ownerDocument;
        var container = document.createElement('template');
        var hasContent = 'content' in container;
        var needsTableWrap = false;
        if (!hasContent) {
          // DO NOT MOVE THE FOLLOWING LINE ELSEWHERE
          fragment = document.createDocumentFragment();
          // (a jsdom + nodejs tests coverage gotcha)

          // el.innerHTML = '<td></td>'; is not possible
          // if the content is a partial internal table content
          // it needs to be wrapped around once injected.
          // HTMLTemplateElement does not suffer this issue.
          needsTableWrap = /^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(html);
        }
        if (needsTableWrap) {
          // secure the RegExp.$1 result ASAP to avoid issues
          // in case a non-browser DOM library uses RegExp internally
          // when HTML content is injected (basicHTML / jsdom / others...)
          var selector = RegExp.$1;
          container.innerHTML = '<table>' + html + '</table>';
          appendNodes(fragment, slice.call(container.querySelectorAll(selector)));
        } else {
          container.innerHTML = html;
          if (hasContent) {
            fragment = container.content;
          } else {
            appendNodes(fragment, slice.call(container.childNodes));
          }
        }
        return fragment;
      }

      // create a fragment for SVG
      function createSVGFragment(node, html) {
        var document = node.ownerDocument;
        var fragment = document.createDocumentFragment();
        var container = document.createElementNS(SVG_NAMESPACE, 'svg');
        container.innerHTML = html;
        appendNodes(fragment, slice.call(container.childNodes));
        return fragment;
      }

      // given a node, it does what is says
      function createText(node, text) {
        return node.ownerDocument.createTextNode(text);
      }

      // given an info, tries to find out the best option
      // to replace or update the content
      function discoverNode(parentNode, virtual, info, childNodes) {
        for (var target = parentNode, document = parentNode.ownerDocument, path = info.path, virtualNode = getNode(virtual, path), i = 0, length = path.length; i < length; i++) {
          switch (path[i++]) {
            case 'attributes':
              var name = virtualNode.name;
              if (!parentNode.hasAttribute(name)) {
                parentNode.setAttribute(name, '');
              }
              target = parentNode.attributes[name];
              break;
            case 'childNodes':
              switch (info.type) {
                // TODO: supports multiple text per element ?
                case 'text':
                  var before = getTextContent(virtualNode, 'previous');
                  var after = getTextContent(virtualNode, 'next');
                  do {
                    target = parentNode.firstChild;
                    if (target && target.nodeType === TEXT_NODE) {
                      parentNode.removeChild(target);
                    } else {
                      break;
                    }
                  } while (target);
                  var fragment = document.createDocumentFragment();
                  if (before.length) {
                    fragment.appendChild(createText(parentNode, before));
                  }
                  target = fragment.appendChild(createText(parentNode, ''));
                  if (after.length) {
                    fragment.appendChild(createText(parentNode, after));
                  }
                  parentNode.insertBefore(fragment, parentNode.firstChild);
                  break;
                // TODO: supports multiple virtual content per element ?
                case 'virtual':
                  var children = getChildren(parentNode);
                  var virtualChildren = getChildren(virtualNode.parentNode);
                  target = virtualNode.previousElementSibling;
                  var before = target ? path.indexOf.call(virtualChildren, target) + 1 : -1;
                  target = virtualNode.nextElementSibling;
                  var after = target ? path.indexOf.call(virtualChildren, target) : -1;
                  target = document.createComment(UID);
                  switch (true) {
                    // `${'virtual'}` is actually resolved as `${'any'}`
                    // case before < 0 && after < 0: before = 0;

                    // `</a>${'virtual'}`
                    case after < 0:
                      after = children.length;
                      break;
                    // `${'virtual'}<b>`
                    case before < 0:
                      before = 0;
                    // `</a>${'virtual'}<b>`
                    default:
                      after = -(virtualChildren.length - after);
                      break;
                  }
                  childNodes.push.apply(childNodes, slice.call(children, before, after));
                  parentNode.insertBefore(target, childNodes.length ? childNodes[childNodes.length - 1].nextElementSibling : slice.call(children, after)[0]);
                  if (childNodes.length === 0) {
                    removePreviousText(parentNode, target);
                  }
                  break;
              }
              break;
            default:
              // if the node is not there, create it
              target = getChildren(parentNode)[path[i]] || parentNode.appendChild(parentNode.ownerDocument.createElement(getNode(virtual, path.slice(0, i + 1)).nodeName));
              parentNode = target;
              break;
          }
        }
        return target;
      }

      // create an empty fragment from a generic node
      function emptyFragment(node) {
        return node.ownerDocument.createDocumentFragment();
      }

      // given a node, returns text content before it or after it
      function getTextContent(node, direction) {
        var content = [];
        var method = direction === 'next' ? content.push : content.unshift;
        do {
          node = node[direction + 'Sibling'];
          if (node && node.nodeType === TEXT_NODE) {
            method.call(content, node.textContent);
          } else {
            return content.join('');
          }
        } while (true);
      }

      // add or remove event listeners from a node
      function handleEvent(node, action, ontype, eventListener) {
        node[action + 'EventListener'](ontype.slice(2), eventListener);
      }

      // remove a list of [node, attribute]
      function removeAttributeList(list) {
        for (var i = 0, length = list.length; i < length; i++) {
          list[i++].removeAttribute(list[i]);
        }
      }

      // remove all text nodes from a virtual space
      function removePreviousText(parentNode, node) {
        var previousSibling = node.previousSibling;
        if (previousSibling && previousSibling.nodeType === TEXT_NODE) {
          parentNode.removeChild(previousSibling);
          removePreviousText(parentNode, node);
        }
      }

      // specify the content to update
      function setContent(type, target, removeAttributes, childNodes) {
        var update;
        switch (type) {
          case 'any':
            update = setAnyContent(target);
            break;
          case 'attr':
            update = setAttribute(target, removeAttributes);
            break;
          case 'text':
            update = setTextContent(target);
            break;
          case 'virtual':
            update = setVirtualContent(target, childNodes);
            break;
        }
        return update;
      }

      // used for common path creation.
      function Path(type, node) {
        return { type: type, path: createPath(node) };
      }

      // ---------------------------------------------
      // Hybrid Shims
      // ---------------------------------------------

      // WeakMap with partial EXPANDO fallback
      var $WeakMap = (typeof WeakMap === "undefined" ? "undefined" : _typeof(WeakMap)) === (typeof $WeakMap === "undefined" ? "undefined" : _typeof($WeakMap)) ? function () {
        return {
          get: function get(obj) {
            return obj[EXPANDO];
          },
          set: function set(obj, value) {
            Object.defineProperty(obj, EXPANDO, {
              configurable: true,
              value: value
            });
          }
        };
      } : WeakMap;

      // Map with partial double Array fallback
      var $Map = (typeof Map === "undefined" ? "undefined" : _typeof(Map)) === (typeof $Map === "undefined" ? "undefined" : _typeof($Map)) ? function () {
        var k = [],
            v = [];
        return {
          get: function get(obj) {
            return v[k.indexOf(obj)];
          },
          // being used with unique template literals
          // there is never a case when a value is overwritten
          // no need to check upfront for the indexOf
          set: function set(obj, value) {
            v[k.push(obj) - 1] = value;
          }
        };
      } : Map;

      // TODO: which browser needs these partial polyfills here?
      var isArray = Array.isArray || function () {
        var toString = {}.toString;
        // I once had an engine returning [array Array]
        // and I've got scared since!
        var s = toString.call([]);
        return function (a) {
          return toString.call(a) === s;
        };
      }();

      var trim = EXPANDO.trim || function () {
        return this.replace(/^\s+|\s+$/g, '');
      };

      // ---------------------------------------------
      // Shared variables
      // ---------------------------------------------

      // normalize Firefox issue with template literals
      var templateObjects, unique;
      if (FF) {
        templateObjects = Object.create(null);
        unique = function unique(template) {
          var key = template.join(UID);
          return templateObjects[key] || (templateObjects[key] = template);
        };
      }

      // use native .append(...childNodes) where available
      var appendNodes = 'append' in globalDocument ? function (node, childNodes) {
        node.append.apply(node, childNodes);
      } : function appendNodes(node, childNodes) {
        for (var i = 0, length = childNodes.length; i < length; i++) {
          node.appendChild(childNodes[i]);
        }
      };

      // returns children or retrieve them in IE/Edge
      var getChildren = 'children' in globalDocument ? function (node) {
        return node.children;
      } : function (node) {
        for (var child, children = [], childNodes = node.childNodes, j = 0, i = 0, length = childNodes.length; i < length; i++) {
          child = childNodes[i];
          if (child.nodeType === ELEMENT_NODE) children[j++] = child;
        }
        return children;
      };

      // return the correct node walking through a path
      // fixes IE/Edge issues with attributes and children
      var getNode = IE ? function (parentNode, path) {
        for (var name, i = 0, length = path.length; i < length; i++) {
          name = path[i++];
          switch (name) {
            case 'children':
              parentNode = getChildren(parentNode)[path[i]];
              break;
            default:
              parentNode = parentNode[name][path[i]];
              break;
          }
        }
        return parentNode;
      } : function (parentNode, path) {
        for (var i = 0, length = path.length; i < length; i++) {
          parentNode = parentNode[path[i++]][path[i]];
        }
        return parentNode;
      };

      // fixes IE problems with comments
      if (IE) {
        var IEAttributes;
        var no = new RegExp('([^\\S][a-z]+[a-z0-9_-]*=)([\'"])' + UIDC + '\\2', 'g');
        var comments = function comments($0, $1, $2) {
          IEAttributes.push($1.slice(1, -1));
          return $1 + $2 + UID + $2;
        };
      }

      // [element] = {template, updates};
      var hypers = new $WeakMap();

      // [element] = {template, updates};
      var wires = new $WeakMap();

      // [template] = {fragment, paths};
      var templates = new $Map();

      // internal signal to switch adoption
      var notAdopting = true;

      // ---------------------------------------------
      // Template related utilities
      // ---------------------------------------------

      // given a unique template object
      // create, parse, and store retrieved info
      function createTemplate(template) {
        var paths = [];
        var html = template.join(UIDC);
        if (IE) {
          IEAttributes = [];
          html = html.replace(no, comments);
        }
        var fragment = createFragment(this, html);
        var info = { fragment: fragment, paths: paths };
        commentsSeeker(fragment, paths);
        templates.set(template, info);
        return info;
      }

      // given a generic node, returns a path capable
      // of retrieving such path back again.
      // TODO: worth passing the index when available ?
      function createPath(node) {
        var path = [];
        var parentNode;
        switch (node.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            parentNode = node;
            break;
          case TEXT_NODE:
          case COMMENT_NODE:
            parentNode = node.parentNode;
            path.unshift('childNodes', path.indexOf.call(parentNode.childNodes, node));
            break;
          case ATTRIBUTE_NODE:
          default:
            // jsdom here does not provide a nodeType 2 ...
            parentNode = node.ownerElement;
            path.unshift('attributes', node.name);
            break;
        }
        for (node = parentNode; parentNode = parentNode.parentNode; node = parentNode) {
          path.unshift('children', path.indexOf.call(getChildren(parentNode), node));
        }
        return path;
      }

      // given a root node and a list of paths
      // creates an array of updates to invoke
      // whenever the next interpolation happens
      function createUpdates(fragment, paths) {
        for (var info, target, updates = [], removeAttributes = [], i = 0, length = paths.length; i < length; i++) {
          info = paths[i];
          target = getNode(fragment, info.path);
          if (target.nodeType === DOCUMENT_FRAGMENT_NODE) {
            removeNodeList(target.childNodes, 0);
            target = this;
          }
          updates[i] = setContent(info.type, target, removeAttributes, []);
        }
        removeAttributeList(removeAttributes);
        return updates;
      }

      // like createUpdates but for nodes with already a content
      function discoverUpdates(fragment, paths) {
        for (var info, childNodes, updates = [], removeAttributes = [], i = 0, length = paths.length; i < length; i++) {
          childNodes = [];
          info = paths[i];
          updates[i] = setContent(info.type, discoverNode(this, fragment, info, childNodes), removeAttributes, childNodes);
        }
        removeAttributeList(removeAttributes);
        return updates;
      }

      // invokes each update function passing interpolated value
      function update() {
        for (var i = 1, length = arguments.length; i < length; i++) {
          this[i - 1](arguments[i]);
        }
      }

      // create a template, if unknown
      // upgrade a node to use such template for future updates
      function upgrade(template) {
        if (FF) template = unique(template);
        var updates;
        var info = templates.get(template) || createTemplate.call(this, template);
        if (notAdopting) {
          var fragment = info.fragment.cloneNode(true);
          updates = createUpdates.call(this, fragment, info.paths);
          resetAndPopulate(this, fragment);
        } else {
          updates = discoverUpdates.call(this, info.fragment, info.paths);
        }
        return { template: template, updates: updates };
      }

      // ---------------------------------------------
      // Wires
      // ---------------------------------------------

      // create a new wire for generic DOM content
      function wireContent(type) {
        var adopter, content, container, fragment, render, setup, template;

        function before(document) {
          fragment = document.createDocumentFragment();
          container = type === 'svg' ? document.createElementNS(SVG_NAMESPACE, 'svg') : fragment;
          render = hyperHTML.bind(container);
        }

        function after() {
          if (setup) {
            setup = false;
            if (type === 'svg') {
              appendNodes(fragment, slice.call(container.childNodes));
            }
            content = createContent(fragment);
          }
          return content;
        }

        return type === 'adopt' ? function adopt(statics) {
          var args = arguments;
          if (FF) statics = unique(statics);
          if (template !== statics) {
            setup = true;
            template = statics;
            adopter = function adopter(parentNode, children, i) {
              if (setup) {
                if (i < children.length) {
                  container = children[i];
                  fragment = {
                    ownerDocument: container.ownerDocument,
                    childNodes: [container],
                    children: [container]
                  };
                  render = hyperHTML.adopt(fragment);
                } else {
                  if (OWNER_SVG_ELEMENT in parentNode) type = 'svg';
                  before(parentNode.ownerDocument);
                }
              }
              render.apply(null, args);
              return after();
            };
          }
          return adopter;
        } : function update(statics) {
          if (FF) statics = unique(statics);
          if (template !== statics) {
            setup = true;
            template = statics;
            before(hyperHTML.document);
          }
          render.apply(null, arguments);
          return after();
        };
      }

      // setup a weak reference if needed and return a wire by ID
      function wireWeakly(obj, type) {
        var wire = wires.get(obj);
        var i = type.indexOf(':');
        var id = type;
        if (-1 < i) {
          id = type.slice(i + 1);
          type = type.slice(0, i) || 'html';
        }
        if (!wire) {
          wire = {};
          wires.set(obj, wire);
        }
        return wire[id] || (wire[id] = wireContent(type));
      }

      // ---------------------------------------------
      // ⚡️ ️️The End ➰
      // ---------------------------------------------
      return hyperHTML;
    }(document);

    // umd.KISS
    try {
      module.exports = hyperHTML;
    } catch (o_O) {}
  }, {}], 4: [function (require, module, exports) {
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
  }, {}], 5: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject2);
    };
  }, {}], 6: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject3, "/user/" + model.by, model.by, model.timeBetween, model.text, model.comments.length ? 'children' : 'hidden', model.comments);
    };
  }, {}], 7: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject4, model.url, model.title, model.hostname ? "(" + model.hostname.replace(/^www\./, '') + ")" : '', model.score, "/user/" + model.by, model.by, model.timeBetween, model.descendants ? model.descendants + " comments" : 'No comments yet', model.comments);
    };
  }, {}], 8: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject5, model.next);
    };
  }, {}], 9: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject6, model.url ? model.url : "/item/" + model.id, model.title, model.hostname ? "(" + model.hostname.replace(/^www\./, '') + ")" : '', model.score, "/user/" + model.by, model.by, model.timeBetween + " ago | <a href='/item/" + model.id + "'>" + (model.descendants || 0) + " comments</a>", model.index);
    };
  }, {}], 10: [function (require, module, exports) {
    module.exports = function (render, model) {
      return render(_templateObject7, model.id, model.ago, model.karma, 'https://news.ycombinator.com/submitted?id=' + model.id, 'https://news.ycombinator.com/threads?id=' + model.id, 'https://news.ycombinator.com/favorites?id=' + model.id, 'about' + (model.about ? '' : ' hidden'), model.about || '');
    };
  }, {}] }, {}, [1]);