(function (e) {
  function t(e) {
    (this.forms = [].slice.call(document.querySelectorAll(".al-form"))),
      (this.settings = e || {}),
      (this.isLabel = "true" == this._getPerameterFromJSON("label")),
      (this.noCountryCode = "true" == this._getPerameterFromJSON("no_code")),
      (this.countriesWithoutPlus = ["OM"]);
    var t = this;
    return (
      setTimeout(function () {
        var e = t._getCountry();
        t._setCountrySettings(e);
      }, 300),
      (this.isLang = this._getPerameterFromJSON("lang")),
      this.isLabel ||
        (this.setRelativeForm(this.forms), this._setStylesTooltips()),
      this._addEvents(),
      this
    );
  }
  var o = {
    phonesCode: {
      AE: 971,
      AL: 355,
      AT: 43,
      BA: 387,
      GB: 44,
      ME: 382,
      BD: 880,
      BE: 32,
      BG: 359,
      CY: 357,
      CZ: 420,
      DE: 49,
      DZ: 213,
      EE: 372,
      ES: 34,
      FI: 358,
      FR: 33,
      GR: 30,
      HR: 385,
      HU: 36,
      ID: 62,
      IN: 91,
      IT: 39,
      LT: 370,
      LV: 371,
      MA: 212,
      MY: 60,
      NG: 234,
      RW: 250,
      UG: 256,
      NL: 31,
      PH: 63,
      PL: 48,
      PT: 351,
      RO: 40,
      MD: 373,
      RS: 381,
      RU: 7,
      UZ: 998,
      SI: 386,
      SK: 421,
      TH: 66,
      TN: 216,
      VN: 84,
      XK: 383,
      JO: 962,
      CI: 225,
      KH: 855,
      OM: 968,
      SG: 65,
      TR: 90,
      CO: 57,
      AR: 54,
      TW: 886,
      HK: 852,
      MK: 389,
      MX: 52,
      PE: 51,
      KE: 254,
      MM: 95,
      PK: 92,
      IR: 98,
      ZA: 27,
      LK: 94,
      IQ: 964,
      NP: 977,
      CL: 56,
      KW: 965,
      SA: 966,
      BH: 973,
      EG: 20,
      CH: 41,
      CN: 86,
      GT: 502,
      EC: 593,
      GH: 233,
    },
    phoneMinLength: 9,
    phoneMaxLength: 20,
    allowedBtnCodes: [
      43, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 32, 40, 41, 229, 8, 13,
    ],
    massages: {
      EN: {
        fillName: "Enter your name",
        fillPhone: "Enter your number",
        incorrectPhone: "Error, incorrect number",
      },
      GB: {
        fillName: "Enter your name",
        fillPhone: "Enter your number",
        incorrectPhone: "Error, incorrect number",
      },
      RU: {
        fillName: "Введите ФИО",
        fillPhone: "Введите номер",
        incorrectPhone: "Ошибка, некорректный номер",
      },
      UZ: {
        fillName: "Введите ФИО",
        fillPhone: "Введите номер",
        incorrectPhone: "Ошибка, некорректный номер",
      },
      ES: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto",
      },
      EC: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto",
      },
      FR: {
        fillName: "Entrez votre nom et prénom",
        fillPhone: "Entrez le numéro de téléphone",
        incorrectPhone: "Erreur, numéro incorrect",
      },
      CI: {
        fillName: "Entrez votre nom et prénom",
        fillPhone: "Entrez le numéro de téléphone",
        incorrectPhone: "Erreur, numéro incorrect",
      },
      IT: {
        fillName: "Inserire il nome ed il cognome",
        fillPhone: "Inserire il numero di telefono",
        incorrectPhone: "Errore, numero sbagliato",
      },
      PT: {
        fillName: "Introduza seu nome e sobrenome",
        fillPhone: "Introduza o número de telemovel",
        incorrectPhone: "Error, número incorrecto",
      },
      GR: {
        fillName: "Εισάγετε το όνομα και το επώνυμο",
        fillPhone: "Εισάγετε τον αριθμό τηλεφώνου",
        incorrectPhone: "Σφάλμα, λάθος νούμερο",
      },
      CY: {
        fillName: "Εισάγετε το όνομα και το επώνυμο",
        fillPhone: "Εισάγετε τον αριθμό τηλεφώνου",
        incorrectPhone: "Σφάλμα, λάθος νούμερο",
      },
      BG: {
        fillName: "Име",
        fillPhone: "Телефон номер",
        incorrectPhone: "Грешка, невалиден номер",
      },
      SI: {
        fillName: "Napišite svoje ime in priimek",
        fillPhone: "Napišite svojo telefonsko številko",
        incorrectPhone: "Napačna številka",
      },
      SK: {
        fillName: "Zadajte Meno a Priezvisko",
        fillPhone: "Zadajte telefónne číslo",
        incorrectPhone: "Chyba, zlé číslo",
      },
      CZ: {
        fillName: "Zadejte Jméno Příjmení",
        fillPhone: "Zadejte telefonní číslo",
        incorrectPhone: "Chyba, není platné číslo",
      },
      HU: {
        fillName: "Vezetéknév, keresztnév",
        fillPhone: "Telefon",
        incorrectPhone: "Hiba, helytelen számot adott meg",
      },
      RO: {
        fillName: "Nume de tip",
        fillPhone: "Introduceţi numărul de",
        incorrectPhone: "Număr de telefon greșit",
      },
      MD: {
        fillName: "Nume de tip",
        fillPhone: "Introduceţi numărul de",
        incorrectPhone: "Număr invalid eroare",
      },
      PL: {
        fillName: "Wpisz swoje imię i nazwisko",
        fillPhone: "Podaj swoj numer",
        incorrectPhone: "Błąd , nieprawidłowy numer",
      },
      DE: {
        fillName: "Geben Sie Ihren Namen ein",
        fillPhone: "Geben Sie Ihre Telefonnummer ein",
        incorrectPhone: "Eingabefehler, die Nummer ist inkorrekt",
        lessNineSymbols: "Eingabefehler, die Nummer ist inkorrekt",
      },
      AT: {
        fillName: "Geben Sie Ihren Namen ein",
        fillPhone: "Geben Sie Ihre Telefonnummer ein",
        incorrectPhone: "Eingabefehler, die Nummer ist inkorrekt",
        lessNineSymbols: "Eingabefehler, die Nummer ist inkorrekt",
      },
      MY: {
        fillName: "Masukkan Nama",
        fillPhone: "Masukkan nombor",
        incorrectPhone: "Ralat, nombor yang salah",
      },
      LT: {
        fillName: "Įveskite savo vardą",
        fillPhone: "Įveskite savo telefono numerį",
        incorrectPhone: "Klaidingas telefono numeris",
      },
      VN: {
        fillName: "Nhập họ tên",
        fillPhone: "Nhập số điện thoại",
        incorrectPhone: "Lỗi, số điện thoại không đúng",
      },
      IN: {
        fillName: "नाम भरे",
        fillPhone: "आपका नम्बर",
        incorrectPhone: "ग़लत नम्बर",
      },
      HR: {
        fillName: "Upišite Ime i Prezime",
        fillPhone: "Upišite broj telefona",
        incorrectPhone: "Pogreška, nepravilan broj",
      },
      RS: {
        fillName: "Unesite IME i PREZIME",
        fillPhone: "Unesite broj telefona",
        incorrectPhone: "Greška, nekorektan broj",
      },
      BA: {
        fillName: "Unesite IME i PREZIME",
        fillPhone: "Unesite broj telefona",
        incorrectPhone: "Greška, nekorektan broj",
      },
      ME: {
        fillName: "Unesite IME i PREZIME",
        fillPhone: "Unesite broj telefona",
        incorrectPhone: "Greška, nekorektan broj",
      },
      TH: {
        fillName: "ใส่ชื่อ",
        fillPhone: "ใส่เบอร์โทร",
        incorrectPhone: "Error, หมายเลขโทรศัพท์ไม่ถูกต้อง",
      },
      LV: {
        fillName: "Ievadiet jūsu vārdu",
        fillPhone: "Ievadiet jūsu numuru",
        incorrectPhone: "Kļūda, numurs norādīts nepareizi",
      },
      EE: {
        fillName: "Sisestage oma nimi",
        fillPhone: "Sisestage oma number",
        incorrectPhone: "Viga, vale number",
      },
      AL: {
        fillName: "Vendos emrin dhe mbiemrin",
        fillPhone: "Vendos numrin e telefonit",
        incorrectPhone: "Gabim, numri nuk është i saktë",
      },
      NL: {
        fillName: "Vul naam in",
        fillPhone: "Voer telefoonnummer in",
        incorrectPhone: "Foutmelding, nummer ongeldig",
      },
      FI: {
        fillName: "Saisimmeko nimenne",
        fillPhone: "Puhelinnumeronne",
        incorrectPhone: "Virhe, väärä numero",
      },
      KH: {
        fillName: "បញ្ចូលឈ្មោះរបស់អ្នក",
        fillPhone: "បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក",
        incorrectPhone: "លេខទូរស័ព្ទមិនត្រឹមត្រូវ",
      },
      CO: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto",
      },
      MK: {
        fillName: "Внесете ги името и презимето",
        fillPhone: "Внесете го бројот",
        incorrectPhone: "Грешка, погрешен број",
      },
      TR: {
        fillName: "Adınız ve soyadınız girin",
        fillPhone: "Numaranız girin",
        incorrectPhone: "Hata, geçersiz numara",
      },
      PE: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto",
      },
      CL: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto",
      },
      BD: {
        fillName: "আপনার পুরো নাম লিখুন",
        fillPhone: "নাম্বার লিখুন",
        incorrectPhone: "ভূল, নাম্বারটি সঠিক নয়",
      },
      AR: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto",
      },
      MX: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto",
      },
      SG: {
        fillName: "输入你的姓名",
        fillPhone: "输入你的电话",
        incorrectPhone: "号码错误",
      },
      TW: {
        fillName: "輸入你的姓名",
        fillPhone: "輸入你的電話",
        incorrectPhone: "號碼錯誤",
      },
      HK: {
        fillName: "輸入你的姓名",
        fillPhone: "輸入你的電話",
        incorrectPhone: "號碼錯誤",
      },
    },
  };
  (t.prototype.DEFAULT_SETTINGS = {
    phonesCode: "",
    isClicked: !1,
    phoneMinLength: 9,
    phoneMaxLength: 18,
    allowedBtnCodes: [
      43, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 32, 40, 41, 229, 8, 13,
    ],
    massages: {
      fillName: "Enter your name",
      fillPhone: "Enter your number",
      incorrectPhone: "Error, incorrect number",
    },
  }),
    (t.prototype._getParamsFromScriptURL = function () {
      for (
        var e = 0, t = {}, o = document.getElementsByTagName("script"), n = 0;
        n < o.length;
        n++
      ) {
        var r = o[n].getAttribute("src");
        r && -1 !== r.indexOf("tl-validator") && (e = n);
      }
      var s = o[e],
        i = s.src;
      if (-1 !== i.indexOf("?")) {
        var a = i.substring(i.indexOf("?") + 1);
        a.split("&").forEach(function (e) {
          var o = e.split("=");
          t[o[0]] = decodeURIComponent(o[1]);
        });
      }
      return t;
    }),
    (t.prototype._setCountrySettings = function (e) {
      this.noCountryCode =
        "IN" === e ||
        "PH" === e ||
        "PE" === e ||
        "AR" === e ||
        "KE" === e ||
        "LK" === e ||
        "IQ" === e ||
        "NP" === e;
    }),
    (t.prototype._getPerameterFromJSON = function (e) {
      var t = "";
      try {
        t = this._getParamsFromScriptURL()[e];
      } catch (e) {
        console.warn(e);
      }
      return t;
    }),
    (t.prototype._testCountryCode = function (e) {
      return (
        e.toUpperCase().match(/[A-Z]{2}/i)[0] in this.settings.phonesCode ||
        (console.log(
          "%cIncorrect country code! Can't get country " + e + ".",
          "color: #004ff0; font-size: 20px; font-weight: bold;"
        ),
        !1)
      );
    }),
    (t.prototype._getCountry = function () {
      window.countryKey &&
        (window.countryKey = window.countryKey.toUpperCase());
      var e = window.countryKey || this._getPerameterFromJSON("country");
      if (e && this._testCountryCode(e))
        return e.toUpperCase().match(/[A-Z]{2}/i)[0];
      if (this.forms[0].country) var t = this.forms[0].country.options;
      else t = this.forms[0].querySelector("select").options;
      var o = t.length,
        n = void 0;
      for (n = 0; n < o; n++) {
        if (t[n].selected) var r = t[n].value;
        if (r)
          return r
            .toString()
            .toUpperCase()
            .match(/[A-Z]{2}/i)[0];
      }
    }),
    (t.prototype._getProp = function (e) {
      var t = this._getCountry();
      return this.isLang && "massages" == e
        ? this.settings[e][this.isLang.toUpperCase()] ||
            this.DEFAULT_SETTINGS[e]
        : this.settings[e][t] || this.DEFAULT_SETTINGS[e];
    }),
    (t.prototype._clearPhone = function (e) {
      return e.replace(/[^\d]+/gi, "");
    }),
    (t.prototype._setStylesTooltips = function () {
      var e = document.createElement("style");
      (e.innerHTML =
        '\t\t\t.validator__tooltip { \t\t\t\tposition: absolute; \t\t\t\tz-index: 700; \t\t\t\tdisplay: block; \t\t\t\tfont-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; \t\t\t\tfont-style: normal; \t\t\t\tfont-weight: 400; \t\t\t\tletter-spacing: normal; \t\t\t\tline-break: auto; \t\t\t\tline-height: 1.5; \t\t\t\ttext-align: left; \t\t\t\ttext-align: start; \t\t\t\ttext-decoration: none; \t\t\t\ttext-shadow: none; \t\t\t\ttext-transform: none; \t\t\t\twhite-space: normal; \t\t\t\tword-break: normal; \t\t\t\tword-spacing: normal; \t\t\t\tfont-size: 14px; \t\t\t\tword-wrap: break-word; \t\t\t\topacity: 1; \t\t\t\tpadding-bottom: 5px; \t\t\t\tpointer-events: none \t\t\t} \t\t\t.input-wrapper .error+label {\t\t\t\tpointer-events: none;\t\t\t} \t\t\t.validator__tooltip-inner { \t\t\t\tmax-width: 290px; \t\t\t\tpadding: 3px 8px; \t\t\t\tcolor: #fff; \t\t\t\ttext-align: center; \t\t\t\tbackground-color: #cd5b20; \t\t\t\tborder-radius: 4px; \t\t\t} \t\t\t.validator__tooltip-inner::before { \t\t\t\tposition: absolute; \t\t\t\twidth: 0; \t\t\t\theight: 0; \t\t\t\tborder-color: transparent; \t\t\t\tborder-style: solid; \t\t\t\tbottom: 1px; \t\t\t\tleft: 50%; \t\t\t\tmargin-left: -5px; \t\t\t\tcontent: ""; \t\t\t\tborder-width: 5px 5px 0; \t\t\t\tborder-top-color: #cd5b20; \t\t\t}'),
        document.body.appendChild(e);
    }),
    (t.prototype._getCoords = function (e) {
      var t = e.getBoundingClientRect(),
        o = document.body,
        n = document.documentElement,
        r = window.pageYOffset || n.scrollTop || o.scrollTop,
        s = window.pageXOffset || n.scrollLeft || o.scrollLeft,
        i = n.clientTop || o.clientTop || 0,
        a = n.clientLeft || o.clientLeft || 0;
      return { top: t.top + r - i, left: t.left + s - a };
    }),
    (t.prototype.insertBefore = function (e, t) {
      t.parentNode.insertBefore(e, t);
    }),
    (t.prototype.setRelativeForm = function (e) {
      for (var t = 0; t < e.length; t++) {
        var o = window
          .getComputedStyle(e[t], null)
          .getPropertyValue("position");
        "static" == o && (e[t].style.position = "relative");
      }
    }),
    (t.prototype._createErrorMassage = function (e, t) {
      if (
        (this._removeState(e),
        e.classList ? e.classList.add("error") : (e.className += " error"),
        this.isLabel)
      ) {
        var o = e.id;
        if (o) var n = document.querySelector("[for=" + o + "]");
        n && (n.innerText = t);
      } else {
        var r = document.createElement("div");
        (r.className = "validator__tooltip"),
          (r.innerHTML =
            '<div class="validator__tooltip-inner">' + t + "</div>"),
          this.insertBefore(r, e),
          r.setAttribute(
            "style",
            "left:50%; margin-top: -" +
              r.clientHeight +
              "px; margin-left: -" +
              r.clientWidth / 2 +
              "px;"
          );
      }
    }),
    (t.prototype._removeState = function (e) {
      if (
        (e.classList
          ? (e.classList.remove("error"), e.classList.remove("success"))
          : (e.className = errorFields[i].className.replace(
              new RegExp("(^|\\b)(error|success)(\\b|$)", "gi"),
              " "
            )),
        !this.isLabel)
      ) {
        var t = e.parentNode.querySelector(".validator__tooltip");
        t && t.parentNode.removeChild(t);
      }
    }),
    (t.prototype._success = function (e) {
      this._removeState(e), e.classList && e.classList.add("success");
    }),
    (t.prototype._validate = function (e, t) {
      (this.massages = this._getProp("massages")),
        (this.phonesCode = this._getProp("phonesCode")),
        (this.phoneMinLength =
          this.settings.phoneMinLength || this.DEFAULT_SETTINGS.phoneMinLength),
        (this.phoneMaxLength =
          this.settings.phoneMaxLength || this.DEFAULT_SETTINGS.phoneMaxLength);
      var o = void 0;
      o = t ? t.name : "all";
      var n = !0;
      if (
        (!e.name ||
          ("name" != o && "all" != o) ||
          (null === e.name.value ||
          "" == e.name.value ||
          e.name.value.length < 3 ||
          void 0 === e.name.value
            ? (this._createErrorMassage(e.name, this.massages.fillName),
              (n = !1))
            : this._success(e.name)),
        e.phone && ("phone" == o || "all" == o))
      ) {
        var r = this._clearPhone(e.phone.value),
          s = new RegExp("^(00)?" + this.phonesCode, "i"),
          i = this._getCountry();
        if (null === r || "" == e.phone.value || void 0 === r)
          this._createErrorMassage(e.phone, this.massages.fillPhone), (n = !1);
        else if (
          ("" == r && e.phone.value.length > 0) ||
          (!this.noCountryCode && -1 == r.search(s))
        )
          this._createErrorMassage(e.phone, this.massages.incorrectPhone),
            (n = !1);
        else if ("DE" == i) {
          var a = new RegExp("^(00)?" + this.phonesCode + "0+", "i");
          r.search(a) > -1
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : r.length < this.phoneMinLength
            ? (this._createErrorMassage(e.phone, this.massages.lessNineSymbols),
              (n = !1))
            : r.length > this.phoneMaxLength
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("FR" == i || "ZA" == i || "GH" == i) {
          var l = new RegExp("^(00)?" + this.phonesCode + "\\d{9}$", "i");
          -1 == r.search(l)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("ES" == i || "IT" == i)
          r.length < 7 || r.length > this.phoneMaxLength
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("IN" == i)
          10 !== r.length
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("MD" == i)
          11 !== r.length
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("PH" == i) {
          var h = new RegExp("^(" + this.phonesCode + ")?\\d{10,15}$", "i");
          -1 == r.search(h)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("JO" == i)
          r.length < 11 || r.length > 15
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("ID" == i)
          r.length < 8 || r.length > 14
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("OM" == i || "KW" == i || "BH" == i)
          r.length < 11 || r.length > 18
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("SA" == i)
          r.length < 12 || r.length > 18
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("TR" == i)
          r.length < 11 || r.length > 13
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("MA" == i) {
          var c = new RegExp("^(" + this.phonesCode + ")?\\d{10}$", "i");
          -1 == r.search(c)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("CO" == i)
          r.length < 10 || r.length > 13
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("AR" == i) {
          var m = [];
          m.push(new RegExp("^[^0\\D]\\d{9}$", "i")),
            m.push(new RegExp("^(?!15)\\d{10}$", "i")),
            -1 == r.search(m[0]) || -1 == r.search(m[1])
              ? (this._createErrorMassage(
                  e.phone,
                  this.massages.incorrectPhone
                ),
                (n = !1))
              : this._success(e.phone);
        } else if ("HK" == i)
          r.length < 11 || r.length > 15
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("MK" == i)
          r.length < 11 || r.length > 12
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("PE" == i)
          r.length < 8 || r.length > 11
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("CL" == i)
          11 !== r.length
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        else if ("KE" == i) {
          var u = new RegExp("^(" + this.phonesCode + ")?\\d{10,15}$", "i");
          -1 == r.search(u)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("MM" == i) {
          var p = new RegExp("^(00)?" + this.phonesCode + "\\d{10,13}$", "i");
          -1 == r.search(p)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("PK" == i || "IR" == i) {
          var f = new RegExp("^(00)?" + this.phonesCode + "\\d{10}$", "i");
          -1 == r.search(f)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("LK" == i) {
          var d = new RegExp("^7\\d{8}$", "i");
          -1 == r.search(d)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("IQ" == i) {
          var g = new RegExp("^7\\d{9}$", "i");
          -1 == r.search(g)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("EC" == i) {
          var P = new RegExp("^(00)?" + this.phonesCode + "\\d{9}$", "i");
          -1 == r.search(P)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("NP" == i) {
          var v = new RegExp("^98\\d{8}$", "i");
          -1 == r.search(v)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("CH" == i) {
          var E = new RegExp("^(00)?" + this.phonesCode + "\\d{7,9}$", "i");
          -1 == r.search(E)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("CN" == i) {
          var _ = new RegExp("^(00)?" + this.phonesCode + "\\d{9,11}$", "i");
          -1 == r.search(_)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else if ("TN" == i) {
          var N = new RegExp("^(00)?" + this.phonesCode + "\\d{8}$", "i");
          -1 == r.search(N)
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
        } else
          r.length < this.phoneMinLength || r.length > this.phoneMaxLength
            ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone),
              (n = !1))
            : this._success(e.phone);
      }
      return !!n;
    }),
    (t.prototype._moveCursorToEnd = function (e) {
      if ("number" == typeof e.selectionStart)
        e.selectionStart = e.selectionEnd = e.value.length;
      else if (void 0 !== e.createTextRange) {
        e.focus();
        var t = e.createTextRange();
        t.collapse(!1), t.select();
      }
    }),
    (t.prototype._addEvents = function () {
      var e = this,
        t = this.forms.length,
        o = void 0,
        n = e._getCountry(),
        r = e._getProp("phonesCode");
      for (e._setCountrySettings(n), o = 0; o < t; o++) {
        var s,
          i = this.forms[o],
          a = i.elements.length;
        for (s = 0; s < a; s++)
          ("button" != i.elements[s].getAttribute("type") &&
            "submit" != i.elements[s].getAttribute("type") &&
            "BUTTON" != i.elements[s].tagName) ||
            i.elements[s].addEventListener("click", function (t) {
              var o = e._validate(this.form);
              if (o) {
                (n = e._getCountry()), e._setCountrySettings(n);
                var r = this.form.phone.value;
                return (
                  (r = e._clearPhone(r)),
                  "PH" === n && (r = "63" + r.replace(/^63(\d{10,15})/, "$1")),
                  "KE" === n &&
                    (r = "254" + r.replace(/^254?(\d{9,15})/, "$1")),
                  void (this.form.phone.value = r)
                );
              }
              t.preventDefault();
            });
        i.name &&
          i.name.addEventListener("blur", function () {
            e._validate(this.form, this);
          }),
          i.phone &&
            (i.phone.addEventListener("focus", function () {
              (n = e._getCountry()),
                (r = e._getProp("phonesCode")),
                e._setCountrySettings(n),
                this.value ||
                  (e.noCountryCode ||
                    (-1 === e.countriesWithoutPlus.indexOf(n) &&
                      (this.value = "+"),
                    (this.value += r)),
                  (e.isClicked = !1),
                  "LK" == n && (this.value = "7"),
                  "IQ" == n && (this.value = "7"),
                  "NP" == n && (this.value += "98"));
            }),
            i.phone.addEventListener("click", function () {
              e.isClicked || (e._moveCursorToEnd(this), (e.isClicked = !0));
            }),
            i.phone.addEventListener("blur", function () {
              e._validate(this.form, this);
            }),
            i.phone.addEventListener("keypress", function (t) {
              if (e.settings.allowedBtnCodes.indexOf(t.which) < 0)
                return t.preventDefault(), !1;
            }),
            i.phone.addEventListener("keyup", function (e) {
              /[^\+\d]+/g.test(this.value) &&
                (this.value = this.value.replace(/[^\+\d]+/, ""));
            }),
            i.phone.addEventListener("input", function (t) {
              if ("AR" == n) {
                var o = e._clearPhone(this.value),
                  s = new RegExp("^(0|15)", "i");
                -1 != o.search(s) && (this.value = "");
              } else if ("PK" == n || "IR" == n)
                this.value = this.value.replace(
                  new RegExp("^((00)?(\\+)?" + r + ")0", "gi"),
                  "$1"
                );
              else if ("LK" == n) {
                o = e._clearPhone(this.value);
                var i = new RegExp("^[^7]", "gi");
                (o && -1 == o.search(i)) || (this.value = "7");
              } else if ("IQ" == n) {
                o = e._clearPhone(this.value);
                var a = new RegExp("^[^7]", "gi");
                (o && -1 == o.search(a)) || (this.value = "7");
              } else if ("NP" == n) {
                o = e._clearPhone(this.value);
                var l = new RegExp("^98", "gi");
                (o && -1 != o.search(l)) || (this.value = "98");
              }
            })),
          i.country &&
            i.country.addEventListener("change", function () {
              for (var o = 0; o < t; o++)
                (e.forms[o].country.selectedIndex = this.selectedIndex),
                  (e.forms[o].phone.value = "");
            });
      }
    }),
    e.addEventListener("DOMContentLoaded", function () {
      new t(o);
    });
})(window);
