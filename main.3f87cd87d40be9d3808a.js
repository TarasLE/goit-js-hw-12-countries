(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(e,n,t){"use strict";t.r(n);t("JBxO"),t("FdtR");({searchForm:document.querySelector(".js-search-form"),countriesContainer:document.querySelector(".js-countries-container")}).searchForm.addEventListener("input",debounce((function(e){e.preventDefault();var n=e.currentTarget.elements.query.value;console.log(n),fetch("https://restcountries.eu/rest/v2/name/"+n,{headers:{}}).then((function(e){return e.json()})).then(console.log)}),500))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.3f87cd87d40be9d3808a.js.map