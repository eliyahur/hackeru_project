import { renderView } from "./renderView.js";
import { Utilities } from "./utilities.js";

export class Controller extends renderView {
  protected static initApp(data: { lecturers: any[]; languages: any[] }) {
    /*Create a wrapper for the lecturesrs table.*/
    this.displayTable();

    /*Init varubles for searchInput and languages checkboxes input.*/
    let searchInput = "";
    let checkedLanguages: any = [];

    /*Init all lecturers from the server to display.*/
    let lecturerWrapper = document.getElementsByClassName("lecturerWrapper")[0];
    this.displayLecturersRows(
      checkedLanguages,
      data.lecturers,
      searchInput,
      lecturerWrapper,
      data.languages
    );

    /*Init event listener for searchInput.*/
    document
      .getElementById("searchInput")
      .addEventListener("keyup", function (e) {
        searchInput = (e.target as HTMLInputElement).value;
        Controller.displayLecturersRows(
          checkedLanguages,
          data.lecturers,
          searchInput,
          lecturerWrapper,
          data.languages
        );
      });

    /*Init languages from server to display.*/
    let languageSelector =
      document.getElementsByClassName("languageSelector")[0];
    renderView.renderLanugageSelector(data.languages, languageSelector);

    /*Init event listeners for language filtering.*/
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener("click", function (e) {
        checkedLanguages = [];
        let checkboxesChecked = document.querySelectorAll(
          "input[type=checkbox]:checked"
        );

        checkboxesChecked.forEach(function (checkbox) {
          let languageId = (<HTMLInputElement>checkbox).value;
          checkedLanguages.push(parseInt(languageId));
        });
        console.log(checkedLanguages);
        let searchInput = (<HTMLInputElement>(
          document.getElementById("searchInput")
        )).value;

        Controller.displayLecturersRows(
          checkedLanguages,
          data.lecturers,
          searchInput,
          lecturerWrapper,
          data.languages
        );
      });
    }
  }
  private static displayLecturersRows(
    filterLecturersId?: number[],
    listOfLecturers?: any[],
    nameToSearch?: string,
    appendTo?: Element,
    languages?: any[]
  ): void {
    appendTo.innerHTML = "";
    listOfLecturers.forEach(function (value) {
      if (value.name.includes(nameToSearch) || nameToSearch == null) {
        if (filterLecturersId.length !== 0) {
          if (
            Utilities.findCommonElements(value.languages, filterLecturersId)
          ) {
            renderView.renderRows(appendTo, value, languages);
          }
        } else {
          renderView.renderRows(appendTo, value, languages);
        }
      }
    });
  }
  protected static displayTable() {
    renderView.renderTable();
  }
}
