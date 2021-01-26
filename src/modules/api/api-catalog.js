import Api from '.';
import APIRturn from './utils/return';

export default new class CatalogService extends Api {
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
    return APIRturn(this.get(`/catalog/search/${query}`));
  }
}();
