import { Controller } from "./controller.js";
import { JSONList } from "./utilities.js";

class Execute extends Controller {
  public static async run() {
    let data: JSONList = { lecturers: [], languages: [] };
    await fetch("server/restAPI.php")
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        data = jsonData;
        return true;
      });
    Controller.initApp(data);
  }
}

Execute.run();
