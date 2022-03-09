import { Utilities } from "./utilities.js";
var renderView = /** @class */ (function () {
    function renderView() {
    }
    renderView.renderTable = function () {
        var app = document.getElementsByClassName("lecturersTableWrapper")[0];
        app.textContent = "";
        var lecturersWrapper = document.createElement("div");
        lecturersWrapper.textContent = "";
        lecturersWrapper.setAttribute("class", "lecturerWrapper");
        app.appendChild(lecturersWrapper);
    };
    renderView.renderRows = function (lecturersWrapper, value, languagesArray) {
        var lecturer = document.createElement("div");
        lecturer.setAttribute("class", "lecturer");
        var languagesList = Utilities.compareLanguagesNames(languagesArray, value.languages);
        Utilities.createCol(value.id.toString(), lecturer);
        Utilities.createCol(value.name, lecturer);
        Utilities.createCol(value.email, lecturer);
        Utilities.createCol(languagesList, lecturer);
        lecturersWrapper.appendChild(lecturer);
    };
    renderView.renderLanugageSelector = function (languages, appendTo) {
        languages.forEach(function (language) {
            var optionWrapper = document.createElement("div");
            optionWrapper.setAttribute("class", "optionWrapper");
            var checkboxName = document.createElement("label");
            checkboxName.setAttribute("for", language.name);
            checkboxName.innerText = language.name;
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("value", language.id);
            checkbox.setAttribute("id", language.name);
            checkbox.setAttribute("class", "languageOption");
            checkbox.setAttribute("name", language.name);
            optionWrapper.appendChild(checkboxName);
            optionWrapper.appendChild(checkbox);
            appendTo.appendChild(optionWrapper);
        });
    };
    return renderView;
}());
export { renderView };
