var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { renderView } from "./renderView.js";
import { Utilities } from "./utilities.js";
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Controller.initApp = function (data) {
        /*Create a wrapper for the lecturesrs table.*/
        this.displayTable();
        /*Init varubles for searchInput and languages checkboxes input.*/
        var searchInput = "";
        var checkedLanguages = [];
        /*Init all lecturers from the server to display.*/
        var lecturerWrapper = document.getElementsByClassName("lecturerWrapper")[0];
        this.displayLecturersRows(checkedLanguages, data.lecturers, searchInput, lecturerWrapper, data.languages);
        /*Init event listener for searchInput.*/
        document
            .getElementById("searchInput")
            .addEventListener("keyup", function (e) {
            searchInput = e.target.value;
            Controller.displayLecturersRows(checkedLanguages, data.lecturers, searchInput, lecturerWrapper, data.languages);
        });
        /*Init languages from server to display.*/
        var languageSelector = document.getElementsByClassName("languageSelector")[0];
        renderView.renderLanugageSelector(data.languages, languageSelector);
        /*Init event listeners for language filtering.*/
        var checkboxes = document.querySelectorAll("input[type=checkbox]");
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener("click", function (e) {
                checkedLanguages = [];
                var checkboxesChecked = document.querySelectorAll("input[type=checkbox]:checked");
                checkboxesChecked.forEach(function (checkbox) {
                    var languageId = checkbox.value;
                    checkedLanguages.push(parseInt(languageId));
                });
                console.log(checkedLanguages);
                var searchInput = (document.getElementById("searchInput")).value;
                Controller.displayLecturersRows(checkedLanguages, data.lecturers, searchInput, lecturerWrapper, data.languages);
            });
        }
    };
    Controller.displayLecturersRows = function (filterLecturersId, listOfLecturers, nameToSearch, appendTo, languages) {
        appendTo.innerHTML = "";
        listOfLecturers.forEach(function (value) {
            if (value.name.includes(nameToSearch) || nameToSearch == null) {
                if (filterLecturersId.length !== 0) {
                    if (Utilities.findCommonElements(value.languages, filterLecturersId)) {
                        renderView.renderRows(appendTo, value, languages);
                    }
                }
                else {
                    renderView.renderRows(appendTo, value, languages);
                }
            }
        });
    };
    Controller.displayTable = function () {
        renderView.renderTable();
    };
    return Controller;
}(renderView));
export { Controller };
