/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./newSrc/script/filterCard.js":
/*!*************************************!*\
  !*** ./newSrc/script/filterCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_icons_dvigatel_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icons/dvigatel.svg */ \"./newSrc/images/icons/dvigatel.svg\");\n/* harmony import */ var _images_icons_transmission_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icons/transmission.svg */ \"./newSrc/images/icons/transmission.svg\");\n/* harmony import */ var _images_icons_type_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/type.svg */ \"./newSrc/images/icons/type.svg\");\n/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mocks */ \"./newSrc/script/mocks.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar typeNameNode = document.querySelector(\".search_js\");\nvar typeBodyNodes = document.querySelectorAll(\".type_body_js\");\nvar formFilter = document.querySelector(\".filter_form_js\");\nvar inputs = formFilter.querySelectorAll(\"input[type=text]\");\nvar inputCheckBoxAndRadio = formFilter.querySelectorAll(\"input[type=radio], input[type=checkbox]\");\n\n\n\n\nvar backet = [];\nvar initialFilters = {\n  name: \"\",\n  year: null,\n  isNew: true,\n  engine_max: null,\n  engine_min: null,\n  drive: \"Все\",\n  typeBody: \"\",\n  price_max: null,\n  price_min: null\n};\nvar filters = _objectSpread({}, initialFilters);\nfunction createCard(obj) {\n  return \"\\n    <div class=\\\"flex-row card-title\\\">\\n        <div class=\\\"\\\">\\n            <h3 class=\\\"title-model\\\">\\n                \".concat(obj.name, \"\\n            </h3>\\n            <p class=\\\"title-year\\\">\\n            \").concat(obj.year, \"\\n            </p>\\n        </div>\\n        \").concat(obj.isNew ? '<span class=\"newCar\">New</span>' : \"\", \"\\n    </div>\\n    <img class=\\\"card-img\\\" src='\").concat(obj.img, \"' alt=\\\"\").concat(obj.name, \"\\\">\\n    <div class=\\\"card-info flex-row\\\">\\n        <div class=\\\"flex-row\\\">\\n            <img class=\\\"detail-img\\\" src= \").concat(_images_icons_dvigatel_svg__WEBPACK_IMPORTED_MODULE_0__, \" alt=\\\"\\u0414\\u043E\\u043F \\u0438\\u043D\\u0444\\u043E \\u0444\\u043E\\u0442\\u043E\\\">\\n            <p class=\\\"detail-info\\\">\").concat(obj.engine, \" L</p>\\n        </div>\\n        <div class=\\\"flex-row\\\">\\n            <img class=\\\"detail-img\\\" src= \").concat(_images_icons_transmission_svg__WEBPACK_IMPORTED_MODULE_1__, \" alt=\\\"\\u0414\\u043E\\u043F \\u0438\\u043D\\u0444\\u043E \\u0444\\u043E\\u0442\\u043E\\\">\\n            <p class=\\\"detail-info\\\">\").concat(obj.drive, \"</p>\\n        </div>\\n        <div class=\\\"flex-row\\\">\\n            <img class=\\\"detail-img\\\" src= \").concat(_images_icons_type_svg__WEBPACK_IMPORTED_MODULE_2__, \" alt=\\\"\\u0414\\u043E\\u043F \\u0438\\u043D\\u0444\\u043E \\u0444\\u043E\\u0442\\u043E\\\">\\n            <p class=\\\"detail-info\\\">\").concat(obj.typeBody, \"</p>\\n        </div>\\n    </div>\\n    <button class=\\\"btn-reset card-btn\\\" id=\\\"\").concat(obj.id, \"\\\">\\u20AC \").concat(obj.price.toLocaleString(), \"</button>\\n    <button class = \\\"btn-more\\\">\\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0435\\u0435</button>\\n    <p class = 'description'>\").concat(obj.description, \"</p>\");\n}\n\n// Отображение дополнительной информации про машину по клику на \"Подробнее\"\n\ndocument.addEventListener('click', function (e) {\n  if (e.target.classList.contains('btn-more')) {\n    e.preventDefault();\n    console.log(e.target);\n    var description = e.target.closest('.wrapper-card').querySelector('.description');\n    description.classList.toggle('description-visible');\n  }\n});\nfunction printCards() {\n  var newCard = _mocks__WEBPACK_IMPORTED_MODULE_3__.data;\n  newCard = newCard.filter(function (el) {\n    if (filters.price_max && filters.price_max < el.price) {\n      return false;\n    }\n    if (filters.price_min && filters.price_min > el.price) {\n      return false;\n    }\n    if (filters.engine_max && filters.engine_max < el.engine) {\n      // console.log(filters.engine_max, el.engine, typeof filters.engine_max);\n      return false;\n    }\n    if (filters.engine_min && filters.engine_min > el.engine) {\n      return false;\n    }\n    if (filters.isNew !== null && filters.isNew !== el.isNew) {\n      return false;\n    }\n    if (filters.drive !== \"Все\" && filters.drive !== el.drive) {\n      return false;\n    }\n    if (filters.year !== null && filters.year !== el.year) {\n      return false;\n    }\n    if (filters.typeBody && filters.typeBody !== el.typeBody) {\n      return false;\n    }\n    if (filters.name && !el.name.toLowerCase().trim().includes(filters.name.toLowerCase().trim())) {\n      return false;\n    }\n    // console.log(newCard)\n    return true;\n  });\n\n  // console.log(newCard);\n\n  var autoWrapperJs = document.querySelector(\".auto-wrapper-js\");\n  autoWrapperJs.innerHTML = \"\"; // для очистки поля с машинами\n  newCard.forEach(function (obj) {\n    var card = document.createElement(\"div\");\n    // card.classList = [\"wrapper-card\", \"flex-collumn\", \"hide\"];\n    card.classList.add(\"wrapper-card\", \"flex-column\");\n    card.innerHTML = createCard(obj);\n    autoWrapperJs.append(card);\n  });\n  addToBacket();\n}\n\n// Фильтр по кузову\n\nvar filterOfTypeBody = function filterOfTypeBody() {\n  typeBodyNodes.forEach(function (typeBodyNode) {\n    typeBodyNode.addEventListener(\"click\", function (event) {\n      console.log(event.currentTarget); // currentTarget - сам объект клика, на который повешено событие (в нашем случае кнопка)\n\n      // console.log(data)\n      if (event.currentTarget.value !== \"Всё\") {\n        filters.typeBody = event.currentTarget.value;\n        typeBodyNodes.forEach(function (node) {\n          node.classList.remove(\"active\");\n        });\n        event.currentTarget.classList.add(\"active\");\n      } else {\n        filters = _objectSpread({}, initialFilters);\n        typeNameNode.value = \"\";\n        typeBodyNodes.forEach(function (node) {\n          node.classList.remove(\"active\");\n        });\n        inputs.forEach(function (inputNode) {\n          inputNode.value = \"\";\n        });\n        inputCheckBoxAndRadio.forEach(function (node) {\n          if (node.name === \"isNew\" && filters.isNew) {\n            node.checked = true;\n          } else if (node.name === \"isNew\") {\n            node.checked = false;\n          }\n          if (node.name === \"drive\" && node.value === filters.drive) {\n            node.checked = true;\n          } else if (node.name === \"drive\") {\n            node.checked = false;\n          }\n        });\n      }\n      printCards();\n    });\n  });\n  // console.log(typeBodyNodes);\n};\n\n// Фильтр по названию\n\nvar filterOfName = function filterOfName() {\n  typeNameNode.addEventListener(\"input\", function (event) {\n    if (event.currentTarget.value.trim() !== \"\") {\n      filters.name = event.currentTarget.value.trim();\n    }\n    printCards();\n  });\n};\nvar openFilter = function openFilter() {\n  var formFilter = document.querySelector(\".filter_form_js\");\n  document.querySelector(\".open_filter_js\").addEventListener(\"click\", function () {\n    if (formFilter.classList.contains(\"visible\")) {\n      formFilter.classList.remove(\"visible\");\n      formFilter.addEventListener('transitionend', function (e) {\n        formFilter.style.display = \"none\";\n      }, {\n        once: true\n      });\n    } else {\n      formFilter.style.display = \"flex\";\n      requestAnimationFrame(function () {\n        formFilter.classList.add(\"visible\");\n      });\n    }\n  });\n};\n\n// Окно формы фильтра\n\nvar formOfFilter = function formOfFilter() {\n  formFilter.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    inputs.forEach(function (input) {\n      // console.log(input.value, input.name);\n\n      filters[input.name] = input.value || !isNaN(input.value) ? +input.value : null; // + = перевод в число\n    });\n    // console.log(event.target);\n    inputCheckBoxAndRadio.forEach(function (input) {\n      // console.log(input.value, input.name, input.checked);\n      if (input.name === \"isNew\") {\n        filters[input.name] = input.checked;\n      } else if (input.checked) {\n        filters[input.name] = input.value;\n      }\n      // filterValues[input.name] = input.value ?? 0; // ?? -если равно null или undefined = 0\n    });\n    printCards();\n  });\n};\n\n// Корзина\nvar btnBacket = document.getElementById('backet');\nvar backetModal = document.getElementById('backet_Modal');\nvar backetList = document.querySelector('.backet_list');\n// const btnPlus = document.getElementById('plus');\nvar btnMinus = document.getElementById('minus');\n\n// Открыть корзину\nvar openBacket = function openBacket() {\n  backetModal.classList.add(\"open\");\n  // console.log(backetList);\n  backetContent();\n};\nvar backetContent = function backetContent() {\n  var backetList = document.querySelector(\".backet_list .cart\"); // пробел перед .card - обращение к дочернему элементу\n  // const total = document.querySelector('.backet_list .total');\n  backetList.innerHTML = \"\";\n  var groupedItems = groupBacketItem();\n  groupedItems.forEach(function (el) {\n    var backetItem = document.createElement(\"li\");\n    backetItem.id = el.id;\n    backetItem.classList.add('basketItem');\n    backetItem.innerHTML = \"\\n      <div>\\n        <img class= 'smallPicture' src = '\".concat(el.img, \"'>\\n      </div>\\n      <div class= 'basket_Item_Info'> \\n        <p>\\u041C\\u043E\\u0434\\u0435\\u043B\\u044C: \").concat(el.name, \";</p>\\n        <p>\\u0426\\u0435\\u043D\\u0430: \\u20AC \").concat(el.price, \";</p>\\n        <p>\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E: \").concat(el.count, \" \\u0448\\u0442.</p>\\n      </div>\");\n    backetList.append(backetItem);\n    backetItem.append(changeCount('plus'));\n    backetItem.append(changeCount('minus'));\n  });\n  var totalPrice = document.createElement('h3');\n  totalPrice.classList.add('totalPrice');\n  totalPrice.innerText = \"\\u0418\\u0442\\u043E\\u0433\\u043E: \\u20AC \".concat(groupedItems.reduce(function (total, el) {\n    return total += el.count ? el.count * el.price : el.price;\n  }, 0));\n  backetList.append(totalPrice);\n  var clearCart = document.querySelector('.clearCart');\n  clearCart.addEventListener('click', function () {\n    backetList.innerHTML = \"\";\n    backet = [];\n    saveToStorage(backet);\n    btnBacket.setAttribute('data-backet', 0);\n  });\n  attachModalEvents();\n  // changeBacketItemsByBtn()\n};\nbtnBacket.addEventListener(\"click\", openBacket);\nvar changeCount = function changeCount(plusOrMinus) {\n  var button = document.createElement(\"button\");\n  // button.id = plusOrMinus;\n  button.classList.add(plusOrMinus);\n  // console.log(plusOrMinus);\n  button.innerText = plusOrMinus === 'plus' ? '+' : '-';\n  var groupedItems = groupBacketItem();\n  button.addEventListener('click', function () {\n    groupedItems = groupedItems.map(function (el) {\n      if (el.id === Number(button.parentElement.id)) {\n        // console.log({...el, count: el.count});\n\n        return _objectSpread(_objectSpread({}, el), {}, {\n          count: plusOrMinus === 'plus' ? el.count + 1 : el.count - 1\n        });\n      } else {\n        return el;\n      }\n    });\n    groupedItems = groupedItems.filter(function (el) {\n      return el.count > 0;\n    });\n    backet = groupedItems.flatMap(function (el) {\n      return Array(el.count).fill(_objectSpread({\n        id: el.id\n      }, el));\n    });\n    backetContent();\n    saveToStorage(backet);\n    changeBacketItemsByBtn();\n\n    // const totalItems = backet.reduce((total, el) =>\n    //     (total + (el.count || 1)/el.count), 0);\n    // btnBacket.setAttribute('data-backet', totalItems);\n  });\n  return button;\n};\n\n// Изменение счетчика у корзины через кнопки \"+\" и \"-\"\nvar changeBacketItemsByBtn = function changeBacketItemsByBtn() {\n  var totalItems = backet.reduce(function (total, el) {\n    return total + (el.count || 1) / el.count;\n  }, 0); //логика костыльная такая, потому что без деления на кол-во элементов числа прибавлялись квадратными корнями\n  // console.log(totalItems)\n  btnBacket.setAttribute('data-backet', totalItems);\n};\n\n// Группировка элементов в корзине\nvar groupBacketItem = function groupBacketItem() {\n  var groupBacket = {};\n  backet.forEach(function (item) {\n    if (groupBacket[item.id]) {\n      groupBacket[item.id].count += 1;\n    } else {\n      groupBacket[item.id] = _objectSpread(_objectSpread({}, item), {}, {\n        count: 1\n      });\n    }\n  });\n  // console.log(Object.values(groupBacket))\n  return Object.values(groupBacket);\n};\n\n// Добавление событий на модальное окно\nvar attachModalEvents = function attachModalEvents() {\n  backetModal.querySelector('.close').addEventListener('click', closeBacket);\n  document.addEventListener('keydown', handleEscape);\n  backetModal.addEventListener('click', handleOutside);\n};\n\n// Событие на Escape\nvar handleEscape = function handleEscape(event) {\n  if (event.key === \"Escape\") {\n    closeBacket();\n  }\n};\n\n// Событие на клик за модальное окно\nvar handleOutside = function handleOutside(event) {\n  var isClickOutside = !!event.target.closest('.modal-content');\n  // console.log(isClickOutside)\n  if (!isClickOutside) {\n    closeBacket();\n  }\n};\n\n// Обход бага с закрытием модального окна при нажатии на кнопки \"+\" или \"-\"\nbacketList.addEventListener('click', function (event) {\n  event.stopPropagation();\n});\n\n// Закрыть корзину\nvar closeBacket = function closeBacket() {\n  backetModal.classList.remove(\"open\");\n  detachModalEvents();\n};\n\n// Очистка событий модального окна\nvar detachModalEvents = function detachModalEvents() {\n  backetModal.querySelector('.close').removeEventListener('click', openBacket);\n  document.removeEventListener('keydown', handleEscape);\n  backetModal.removeEventListener('click', handleOutside);\n};\n\n//Добавление карточки в корзину\n\nvar cardBtns = document.getElementsByClassName(\"card-btn\");\nvar addToBacket = function addToBacket() {\n  // console.log(cardBtns.length)\n  if (cardBtns.length) {\n    var _iterator = _createForOfIteratorHelper(cardBtns),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var btn = _step.value;\n        btn.addEventListener(\"click\", function (event) {\n          var elBacket = _mocks__WEBPACK_IMPORTED_MODULE_3__.data.find(function (el) {\n            return el.id === +event.target.id;\n          });\n          // console.log(typeof event.target.id);\n          // console.log(elBacket)\n\n          if (elBacket) {\n            backet.push(elBacket);\n            saveToStorage(backet);\n            // console.log(btnBacket.getAttribute('data-backet'))\n            var dataBacket = btnBacket.getAttribute('data-backet');\n            btnBacket.setAttribute('data-backet', Number(dataBacket) + 1);\n          }\n        });\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n};\n\n//Сохранение в localStorage\n\nvar saveToStorage = function saveToStorage(item) {\n  var items = JSON.parse(localStorage.getItem('items')) || [];\n  localStorage.setItem('items', JSON.stringify(item));\n};\nvar loadTodos = function loadTodos() {\n  var items = JSON.parse(localStorage.getItem('items'));\n  if (items) {\n    // console.log(items)\n    backet = items;\n    btnBacket.setAttribute('data-backet', backet.length);\n  }\n};\ndocument.addEventListener('DOMContentLoaded', loadTodos);\n\n// Раздел обратной связи\nvar openCallback = function openCallback() {\n  var callbackForm = document.querySelector('.callback_form_js');\n  var btnsCallback = document.querySelectorAll('.btn_callback_js');\n  btnsCallback.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      if (callbackForm.classList.contains(\"callback_visible\")) {\n        callbackForm.classList.remove(\"callback_visible\");\n        callbackForm.addEventListener('transitionend', function (e) {\n          callbackForm.style.display = \"none\";\n        }, {\n          once: true\n        });\n      } else {\n        callbackForm.style.display = \"grid\";\n        requestAnimationFrame(function () {\n          callbackForm.classList.add(\"callback_visible\");\n        });\n      }\n    });\n  });\n};\n\n// Перенос к разделу обратной связи\n\ndocument.getElementById('scroll_to_button').addEventListener('click', function () {\n  document.getElementById('target').scrollIntoView({\n    behavior: 'smooth'\n  });\n});\n\n//Проверка на заполнение формы обратной связи\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var forms = document.querySelectorAll('.form_validate_js');\n  forms.forEach(function (form) {\n    var nameInput = form.querySelector('.name_filled_js');\n    var phoneInput = form.querySelector('.phone_filled_js');\n    var emailInput = form.querySelector('.email_filled_js');\n    var checkbox = form.querySelector('input[name=\"agree\"]');\n    var submitButton = form.querySelector('.submit_btn_js');\n\n    // submitButton.disabled = true;\n\n    var validateForm = function validateForm() {\n      var isNameFilled = nameInput.value.trim() !== '';\n      var isPhoneFilled = phoneInput.value.trim() !== '';\n      var isEmailFilled = emailInput.value.trim() !== '';\n      var isCheckboxFilled = checkbox.checked;\n      submitButton.disabled = !(isNameFilled && isPhoneFilled && isEmailFilled && isCheckboxFilled);\n    };\n    nameInput.addEventListener('input', validateForm);\n    phoneInput.addEventListener('input', validateForm);\n    emailInput.addEventListener('input', validateForm);\n    checkbox.addEventListener('change', validateForm);\n    validateForm();\n  });\n});\nvar initApp = function initApp() {\n  //Печать карточек + фильтры\n  printCards();\n  filterOfTypeBody();\n  filterOfName();\n  openFilter();\n  formOfFilter();\n  openCallback();\n\n  //Открытие модального окна\n  openBacket();\n  closeBacket();\n  //\n  //   addToBacket()\n};\ninitApp();\n\n//# sourceURL=webpack://ferrarishop/./newSrc/script/filterCard.js?");

/***/ }),

/***/ "./newSrc/script/footer.js":
/*!*********************************!*\
  !*** ./newSrc/script/footer.js ***!
  \*********************************/
/***/ (() => {

eval("var socialCard = document.getElementById('socialCard');\nfunction updateClasses() {\n  if (window.innerWidth <= 768) {\n    myElement.classList.remove('specificity-card');\n  }\n}\nvar coll = document.getElementsByClassName('btn-detail-toggle');\nfor (var i = 0; i < coll.length; i++) {\n  coll[i].addEventListener('click', function () {\n    this.classList.toggle('act');\n    var card = this.parentElement;\n    var openCard = this.firstElementChild;\n    var closeCard = this.lastElementChild;\n    var content = this.nextElementSibling;\n    openCard.classList.toggle('open-module');\n    closeCard.classList.toggle('close-module');\n    content.classList.toggle('cards-text');\n    card.classList.toggle('benefit-cards');\n  });\n}\n\n//# sourceURL=webpack://ferrarishop/./newSrc/script/footer.js?");

/***/ }),

/***/ "./newSrc/script/index.js":
/*!********************************!*\
  !*** ./newSrc/script/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./newSrc/styles/style.scss\");\n/* harmony import */ var _filterCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterCard.js */ \"./newSrc/script/filterCard.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./newSrc/script/footer.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_logo_logoPNG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/logo/logoPNG.png */ \"./newSrc/images/logo/logoPNG.png\");\n/* harmony import */ var _videos_video1_webm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../videos/video1.webm */ \"./newSrc/videos/video1.webm\");\n\n\n\n\n\n\n//Блок констант\nvar logo = document.querySelector('.logo');\nvar banner = document.querySelector('.banner');\nvar burger = document.querySelector('.burger-btn');\nvar nav = document.querySelector('.header-nav');\n\n// Функция отображения логотипа\nvar showLogo = function showLogo(source) {\n  var logoPicture = document.createElement('img');\n  if (source) {\n    logoPicture.src = source;\n    logoPicture.classList.add('logo_img');\n    logo.appendChild(logoPicture);\n  } else {\n    logoPicture.alt = 'LuxCars';\n  }\n  return logoPicture;\n};\n\n//Функция отображения видео в баннере\nvar videoBanner = function videoBanner(videoFile) {\n  if (!videoFile) {} else {\n    var _videoElement = document.createElement('video');\n    _videoElement.src = videoFile;\n    _videoElement.controls = false;\n    _videoElement.autoplay = true;\n    _videoElement.playsInline = true;\n    _videoElement.loop = true;\n    _videoElement.style.width = '100%';\n    _videoElement.muted = true;\n    banner.prepend(_videoElement);\n    _videoElement.play();\n  }\n  var videoElement;\n  return videoElement;\n};\n\n//Бургер-меню\nvar burgerShowHide = function burgerShowHide(e) {\n  e.preventDefault();\n  if (nav.classList.contains('header-nav-active')) {\n    nav.classList.remove('header-nav-active');\n  } else {\n    nav.classList.add('header-nav-active');\n  }\n};\n\n/* ********** */\nshowLogo(_images_logo_logoPNG_png__WEBPACK_IMPORTED_MODULE_3__);\nvideoBanner(_videos_video1_webm__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nburger.addEventListener('click', burgerShowHide);\n\n//# sourceURL=webpack://ferrarishop/./newSrc/script/index.js?");

/***/ }),

/***/ "./newSrc/script/mocks.js":
/*!********************************!*\
  !*** ./newSrc/script/mocks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data)\n/* harmony export */ });\n/* harmony import */ var _images_models_Ferrari_12Cilindri1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/models/Ferrari 12Cilindri1.png */ \"./newSrc/images/models/Ferrari 12Cilindri1.png\");\n/* harmony import */ var _images_models_Ferrari_Roma_11_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/models/Ferrari Roma 11.png */ \"./newSrc/images/models/Ferrari Roma 11.png\");\n/* harmony import */ var _images_models_Ferrari_Purosangue1_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/models/Ferrari-Purosangue1 (1).png */ \"./newSrc/images/models/Ferrari-Purosangue1 (1).png\");\n/* harmony import */ var _images_models_Ferrari_SF90_Stradale1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/models/Ferrari SF90 Stradale1.png */ \"./newSrc/images/models/Ferrari SF90 Stradale1.png\");\n/* harmony import */ var _images_models_Ferrari_GTC4Lusso_I1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/models/Ferrari GTC4Lusso I1.png */ \"./newSrc/images/models/Ferrari GTC4Lusso I1.png\");\n/* harmony import */ var _images_models_Ferrari_FF_11_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/models/Ferrari FF 11.png */ \"./newSrc/images/models/Ferrari FF 11.png\");\n/* harmony import */ var _images_models_Ferrari_F80_red_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/models/Ferrari F80 red 1.png */ \"./newSrc/images/models/Ferrari F80 red 1.png\");\n/* harmony import */ var _images_models_ferrari_california_red_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/models/ferrari-california-red -1.png */ \"./newSrc/images/models/ferrari-california-red -1.png\");\n\n\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  name: \"Ferrari 12Cilindri\",\n  year: \"2024\",\n  isNew: true,\n  img: _images_models_Ferrari_12Cilindri1_png__WEBPACK_IMPORTED_MODULE_0__,\n  engine: \"6.5\",\n  drive: \"Задний\",\n  typeBody: \"Кабриолет\",\n  price: 650000,\n  description: 'Ferrari 12Cilindri сочетает в себе активную и пассивную аэродинамику для улучшения значений коэффициента лобового сопротивления по сравнению с 812 Superfast. Сзади расположен спойлер для улучшения прижимной силы на высоких скоростях. Боковая часть спойлера может наклоняться на 10° до скорости 60 км/ч (38 миль/ч), действуя как аэродинамический тормоз и создавая 50 кг прижимной силы на высоких скоростях. Ferrari 12Cilindri разгоняется до 100 км/ч за 2,9 секунды, а до 200 км/ч — за 7,9 секунды. Максимальная скорость составляет 340 км/ч'\n}, {\n  id: 2,\n  name: \"Ferrari Roma\",\n  year: \"2020\",\n  isNew: true,\n  img: _images_models_Ferrari_Roma_11_png__WEBPACK_IMPORTED_MODULE_1__,\n  engine: \"3.9\",\n  drive: \"Задний\",\n  typeBody: \"Кабриолет\",\n  price: 375000,\n  description: 'Автомобиль Ferrari Roma приводится в движение восьмицилиндровым двигателем Ferrari F154 объёмом 3,9 л (3855 см3) с турбонаддувом мощностью 456 кВт (620 л. с.) при 5750—7500 об/мин и крутящим моментом 761 Н⋅м при 3000—5750 об/мин. Двигатель сочетается в паре с восьмиступенчатой трансмиссией с двойным сцеплением. Заявленная максимальная скорость 320 км/ч'\n}, {\n  id: 3,\n  name: \"Ferrari Purosangue\",\n  year: \"2022\",\n  isNew: true,\n  img: _images_models_Ferrari_Purosangue1_1_png__WEBPACK_IMPORTED_MODULE_2__,\n  engine: \"6.5\",\n  drive: \"Полный\",\n  typeBody: \"Внедорожник\",\n  price: 1000000,\n  description: 'Purosangue оснащен бензиновым двигателем F140IA V12 объёмом 6,5 л с максимальной мощностью 533 кВт (715 л. с., 725 л. с.) при 7750 об/мин и максимальным крутящим моментом 716 Нм (73,0 кгм; 528 фунт-фут) при 6250 об/мин. Ferrari заявляет, что он разгоняется до 100 км/ч (62 миль в час) за 3,3 секунды и достигает максимальной скорости 311 км/ч (193 мили в час).'\n}, {\n  id: 4,\n  name: \"Ferrari SF90 Stradale\",\n  year: \"2019\",\n  isNew: true,\n  img: _images_models_Ferrari_SF90_Stradale1_png__WEBPACK_IMPORTED_MODULE_3__,\n  engine: \"4.0\",\n  drive: \"Полный\",\n  typeBody: \"Купе\",\n  price: 850000,\n  description: 'Ferrari SF90 XX оснащён восьмицилиндровым ДВС мощностью 797 л. с. и электродвигателем мощностью 230 л. с. Максимальная скорость составляет 250 км/ч'\n}, {\n  id: 5,\n  name: \"Ferrari GTC4Lusso I\",\n  year: \"2020\",\n  isNew: true,\n  img: _images_models_Ferrari_GTC4Lusso_I1_png__WEBPACK_IMPORTED_MODULE_4__,\n  engine: \"6.3\",\n  drive: \"Полный\",\n  typeBody: \"Хэтчбек\",\n  price: 500000,\n  description: '12-цилиндровый двигатель GTC4Lusso отличают рекордные для сегмента характеристики: силовой агрегат развивает впечатляющие 690 л.с. при 8000 об/мин, максимальный крутящий момент составляет 697 Нм при 5750 об/мин, при этом 80% тяги доступны уже с 1750 об/мин, обеспечивая невероятную отзывчивость двигателя даже на малых оборотах.'\n}, {\n  id: 6,\n  name: \"Ferrari FF 1\",\n  year: \"2016\",\n  isNew: true,\n  img: _images_models_Ferrari_FF_11_png__WEBPACK_IMPORTED_MODULE_5__,\n  engine: \"6.3\",\n  drive: \"Полный\",\n  typeBody: \"Хэтчбек\",\n  price: 200000,\n  description: 'На Ferrari FF стоит самый большой по объёму двигатель, когда-либо выпускавшийся компанией — атмосферный (безнаддувный) V12 с углом развала цилиндров 65° рабочим объёмом 6,3 литра. Этот агрегат выдает мощность 660 л. с. (485,4 кВт) при 8000 оборотах в минуту и крутящий момент 683 Н·м при 6000 оборотах в минуту. FF оснащена 7-ступенчатой роботизированной коробкой передач DSG с двойным сцеплением, подобной тем, что стоят на Ferrari California и Ferrari 458 Italia.'\n}, {\n  id: 7,\n  name: \"Ferrari F80\",\n  year: \"2024\",\n  isNew: true,\n  img: _images_models_Ferrari_F80_red_1_png__WEBPACK_IMPORTED_MODULE_6__,\n  engine: \"3.0\",\n  drive: \"Полный\",\n  typeBody: \"Купе\",\n  price: 250000,\n  description: 'Ferrari F80 оснащён 3,0-литровым двигателем V6[5] с углом развала цилиндров 120°. Без системы рекуперативного торможения двигатель развивает мощность 900 л. с.[6], а с системой рекуперативного торможения — 1200 л. с.[7] Таким образом, F80 является самым мощным гиперкаром Ferrari (ранее такой статус имел Ferrari SF90 Stradale с двигателем мощностью 1030 л. с.). Благодаря массе 1525 кг автомобиль Ferrari F80 способен разгоняться до 100 км/ч всего за 2,15 секунды. Максимальная скорость составляет более 350 км/ч.'\n}, {\n  id: 8,\n  name: \"Ferrari California\",\n  year: \"2017\",\n  isNew: true,\n  img: _images_models_ferrari_california_red_1_png__WEBPACK_IMPORTED_MODULE_7__,\n  engine: \"3.9\",\n  drive: \"Задний\",\n  typeBody: \"Кабриолет\",\n  price: 150000,\n  description: 'Двигатель атмосферный 4.3 L V8 с углом 90°, мощностью 460 л.с (7750 об/мин) 485 Нм (5000 об/мин) крутящего момента, благодаря непосредственному впрыску топлива увеличилась мощность, снизился выброс CO2, и улучшилась «оборотистость» двигателя. Система глушения двигателя при остановке снизила расход топлива[1]. Впервые использовали 7-ступенчатую КПП с двойным сцеплением DCT, это делает переключения передач более мягкими и быстрыми, по сравнению с одиночным сцеплением.'\n}];\n\n//# sourceURL=webpack://ferrarishop/./newSrc/script/mocks.js?");

/***/ }),

/***/ "./newSrc/videos/video1.webm":
/*!***********************************!*\
  !*** ./newSrc/videos/video1.webm ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"videos/video1.9bad624605168e2d0bd38fed92f4166a.webm\");\n\n//# sourceURL=webpack://ferrarishop/./newSrc/videos/video1.webm?");

/***/ }),

/***/ "./newSrc/styles/style.scss":
/*!**********************************!*\
  !*** ./newSrc/styles/style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ferrarishop/./newSrc/styles/style.scss?");

/***/ }),

/***/ "./newSrc/images/icons/dvigatel.svg":
/*!******************************************!*\
  !*** ./newSrc/images/icons/dvigatel.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/dvigatel.9e50b282f252e1ebca5b.svg\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/icons/dvigatel.svg?");

/***/ }),

/***/ "./newSrc/images/icons/transmission.svg":
/*!**********************************************!*\
  !*** ./newSrc/images/icons/transmission.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/transmission.fbe4ea4e81d4140f1bba.svg\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/icons/transmission.svg?");

/***/ }),

/***/ "./newSrc/images/icons/type.svg":
/*!**************************************!*\
  !*** ./newSrc/images/icons/type.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/type.a9c9ea67d47ed423cd4e.svg\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/icons/type.svg?");

/***/ }),

/***/ "./newSrc/images/logo/logoPNG.png":
/*!****************************************!*\
  !*** ./newSrc/images/logo/logoPNG.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/logoPNG.49e32e15427c67923261.png\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/logo/logoPNG.png?");

/***/ }),

/***/ "./newSrc/images/models/Ferrari 12Cilindri1.png":
/*!******************************************************!*\
  !*** ./newSrc/images/models/Ferrari 12Cilindri1.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Ferrari 12Cilindri1.426755f0b3b7b5cb9394.png\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/models/Ferrari_12Cilindri1.png?");

/***/ }),

/***/ "./newSrc/images/models/Ferrari F80 red 1.png":
/*!****************************************************!*\
  !*** ./newSrc/images/models/Ferrari F80 red 1.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Ferrari F80 red 1.2544d9a0727f75622b7f.png\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/models/Ferrari_F80_red_1.png?");

/***/ }),

/***/ "./newSrc/images/models/Ferrari FF 11.png":
/*!************************************************!*\
  !*** ./newSrc/images/models/Ferrari FF 11.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Ferrari FF 11.c80deded4b2b5acbdf9a.png\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/models/Ferrari_FF_11.png?");

/***/ }),

/***/ "./newSrc/images/models/Ferrari GTC4Lusso I1.png":
/*!*******************************************************!*\
  !*** ./newSrc/images/models/Ferrari GTC4Lusso I1.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Ferrari GTC4Lusso I1.9e2faad03a274198e78c.png\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/models/Ferrari_GTC4Lusso_I1.png?");

/***/ }),

/***/ "./newSrc/images/models/Ferrari Roma 11.png":
/*!**************************************************!*\
  !*** ./newSrc/images/models/Ferrari Roma 11.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Ferrari Roma 11.5e2035bc665fa560dbaf.png\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/models/Ferrari_Roma_11.png?");

/***/ }),

/***/ "./newSrc/images/models/Ferrari SF90 Stradale1.png":
/*!*********************************************************!*\
  !*** ./newSrc/images/models/Ferrari SF90 Stradale1.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Ferrari SF90 Stradale1.2bbe21017ec6e84c3749.png\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/models/Ferrari_SF90_Stradale1.png?");

/***/ }),

/***/ "./newSrc/images/models/Ferrari-Purosangue1 (1).png":
/*!**********************************************************!*\
  !*** ./newSrc/images/models/Ferrari-Purosangue1 (1).png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Ferrari-Purosangue1 (1).f70fa65f3eef3ef840a7.png\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/models/Ferrari-Purosangue1_(1).png?");

/***/ }),

/***/ "./newSrc/images/models/ferrari-california-red -1.png":
/*!************************************************************!*\
  !*** ./newSrc/images/models/ferrari-california-red -1.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ferrari-california-red -1.6f7a6ab5599eb1e13ff7.png\";\n\n//# sourceURL=webpack://ferrarishop/./newSrc/images/models/ferrari-california-red_-1.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./newSrc/script/index.js");
/******/ 	
/******/ })()
;