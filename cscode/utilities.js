var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    Utilities.findCommonElements = function (arr1, arr2) {
        return arr1.some(function (item) { return arr2.indexOf(item) >= 0; });
    };
    Utilities.createCol = function (value, appendTo) {
        var col = document.createElement("div");
        col.setAttribute("class", "col");
        col.innerText = value;
        appendTo.appendChild(col);
    };
    Utilities.compareLanguagesNames = function (languages, languagesIds) {
        var languagesNames = [];
        languagesIds.forEach(function (languageId) {
            languagesNames.push(languages.find(function (x) { return x.id === languageId; }).name);
        });
        return languagesNames;
    };
    return Utilities;
}());
export { Utilities };
