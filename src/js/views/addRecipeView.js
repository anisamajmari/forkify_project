import View from "./view.js";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpenWindow = document.querySelector(".nav__btn--add-recipe");
  _btnCloseWindow = document.querySelector(".btn--close-modal");

  constructor() {
    super();
    this._addHandlerHideWindow();
    this._addHandlerShowWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpenWindow.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnCloseWindow.addEventListener(
      "click",
      this.toggleWindow.bind(this)
    );
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }
}

export default new AddRecipeView();
