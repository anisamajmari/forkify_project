class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    return query;
  }
}

export default new SearchView();
