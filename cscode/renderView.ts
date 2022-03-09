import { Utilities } from "./utilities.js";

export class renderView {
  protected static renderTable() {
    let app = document.getElementsByClassName("lecturersTableWrapper")[0];
    app.textContent = "";

    let lecturersWrapper = document.createElement("div");
    lecturersWrapper.textContent = "";
    lecturersWrapper.setAttribute("class", "lecturerWrapper");

    app.appendChild(lecturersWrapper);
  }
  protected static renderRows(
    lecturersWrapper: Element,
    value: any,
    languagesArray: any[]
  ) {
    let lecturer = document.createElement("div");
    lecturer.setAttribute("class", "lecturer");

    let languagesList = Utilities.compareLanguagesNames(
      languagesArray,
      value.languages
    );

    Utilities.createCol(value.id.toString(), lecturer);
    Utilities.createCol(value.name, lecturer);
    Utilities.createCol(value.email, lecturer);
    Utilities.createCol(languagesList, lecturer);

    lecturersWrapper.appendChild(lecturer);
  }
  protected static renderLanugageSelector(languages: any, appendTo: Element) {
    languages.forEach(function (language: { id: string; name: string }) {
      let optionWrapper = document.createElement("div");
      optionWrapper.setAttribute("class", "optionWrapper");

      let checkboxName = document.createElement("label");
      checkboxName.setAttribute("for", language.name);
      checkboxName.innerText = language.name;

      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("value", language.id);
      checkbox.setAttribute("id", language.name);
      checkbox.setAttribute("class", "languageOption");
      checkbox.setAttribute("name", language.name);

      optionWrapper.appendChild(checkboxName);
      optionWrapper.appendChild(checkbox);

      appendTo.appendChild(optionWrapper);
    });
  }
}
