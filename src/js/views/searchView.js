class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this._clearSearchField();
    return query;
  }

  _clearSearchField() {
    this._parentElement.querySelector(".search__field").value = "";
  }
}

export default new SearchView();
