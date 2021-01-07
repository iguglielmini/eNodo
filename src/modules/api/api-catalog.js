import Api from '.';
import APIErrorHandler from './api-error-handler';

export default class CatalogService extends Api {
  getCatalogSearch(queryParams) {
    const query = new URLSearchParams(queryParams).toString();
    /*
      PARAMS:
      terms: array[string] | Example: List [ "produto", "branco" ]
      sort: string | Available values: mais-relevantes,
                                        mais-vendidos,
                                        mais-baratos,
                                        mais-caros,
                                        mais-acessados

      filter: array[string] | Example: List [ "cores-vermelho", "marca-padrao" ]
      pageNumber: number | Example: 1
      pageSize: number | Example: 5
    */
    return this.get(`/catalog/search/${query}`)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }
}
