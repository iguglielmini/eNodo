import axios from 'axios';
import Api from '.';

const DEFAULT_LIMIT = 20;

class APIPaginationHelper extends Api {
  constructor(props) {
    super(props);

    this.props = props;
    this.originalUrl = null;
    this.previousUrl = null;
    this.resetFilterParam = false;
    this.filtersParam = '';
    this.filters = {};
    this.source = axios.CancelToken.source();
    this.resetPaginationOptions();
  }

  resetPaginationOptions() {
    this.hasNextPage = false;
    this.previousResponse = [];
  }

  clearFilter(toLoad) {
    this.filters = {};
    this.filtersParam = '';
    if (!toLoad) this.resetFilterParam = true;
  }

  setFilterOptions(entity, key) {
    this.filterEntity = entity;
    this.filterKey = key;
  }

  getFilterParams(...props) {
    const { entity, key, value: val } = props[0];
    const field = `${entity || this.filterEntity}.${key || this.filterKey}`;
    let values;

    if (typeof props[0] === 'string') {
      values = [props[0]];
    } else if (Array.isArray(props[0])) {
      [values] = props;
    } else if (Array.isArray(val)) {
      values = val;
    } else {
      values = [val];
    }

    return { field, values };
  }

  resetFilter() {
    this.clearFilter();
    this.loadFilters();
  }

  setFilter(...props) {
    this.resetFilterParam = true;
    const { field, values } = this.getFilterParams(...props);
    this.filters[field] = values;

    this.loadFilters();
  }

  removeFilter(...props) {
    const { field, values } = this.getFilterParams(...props);

    if (this.filters[field]) {
      values.forEach((value) => {
        this.filters[field] = this.filters[field].filter(item => item !== value);
      });
    }

    this.loadFilters();
  }

  addFilter(...props) {
    delete this.resetFilterParam;
    const { field, values } = this.getFilterParams(...props);

    if (this.filters[field]) {
      values.forEach((value) => {
        if (!this.filters[field].includes(value)) this.filters[field].push(value);
      });
    } else {
      this.filters[field] = values;
    }

    this.loadFilters();
  }

  loadFilters() {
    const { filters } = this;
    const filtersArr = [];
    const params = {};

    Object.keys(filters).forEach((key) => {
      const value = filters[key];
      if (value.length) {
        filtersArr.push(`${key}:${value.join(':')}`);
      }
    });

    if (filtersArr.length) this.filtersParam = filtersArr.join(',');
    else this.clearFilter();

    params.filters = this.filtersParam;
    params.resetFilter = this.resetFilterParam;
    this.reload(params);
  }

  async load(url, data) {
    let params = data;

    if (url) {
      this.resetPaginationOptions();

      params = params || {};
      params.limit = params.limit || DEFAULT_LIMIT;
    }

    this.originalUrl = url || this.originalUrl;
    this.previousUrl = url || this.previousUrl;

    try {
      this.source.cancel('Operation canceled due to new request.');
      // save the new request for cancellation
      this.source = axios.CancelToken.source();

      const response = await this.get(`${this.previousUrl}`, {
        params,
        cancelToken: this.source.token
      });

      const responseJson = response.data;

      const newResponse = params && (params.filters || params.resetFilter)
        ? responseJson.items : this.previousResponse.concat(responseJson.items);

      this.links = responseJson.links;
      if (this.links) this.hasNextPage = !!this.links.next;

      // if (this.props.success) this.props.success([], false);
      if (this.props.success) this.props.success(newResponse, this.hasNextPage);

      this.previousResponse = newResponse;
    } catch (error) {
      const hasCanceled = !this.source.token.reason;

      if (hasCanceled) return;
      if (this.props.error) this.props.error(error);
    }
  }

  reload(data) {
    const params = data;
    if (this.filtersParam) {
      params.filters = this.filtersParam;
    } else if (!params.filters) {
      delete params.filters;
      this.filtersParam = '';
    }
    this.load(this.originalUrl, params);
  }

  static formatURL(url) {
    return url.split('?')[0];
  }

  loadNextPage() {
    if (this.hasNextPage) {
      // this.previousUrl = APIPaginationHelper.formatURL(this.links.next);
      this.previousUrl = this.links.next;
      this.load();
    }
  }
}

export default APIPaginationHelper;
