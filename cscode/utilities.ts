export interface JSONList {
  lecturers: string[];
  languages: string[];
}
export class Utilities {
  public static findCommonElements(arr1: any[], arr2: any[]) {
    return arr1.some((item) => arr2.indexOf(item) >= 0);
  }
  public static createCol(value: any, appendTo: Element) {
    let col = document.createElement("div");
    col.setAttribute("class", "col");
    col.innerText = value;
    appendTo.appendChild(col);
  }
  public static compareLanguagesNames(languages: any[], languagesIds: any[]) {
    let languagesNames: any[] = [];
    languagesIds.forEach(function (languageId) {
      languagesNames.push(languages.find((x) => x.id === languageId).name);
    });
    return languagesNames;
  }
}
