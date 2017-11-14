const commercialOffersService = require('../../services/commercial-offers/commercial-offers.service');

class CommercialOffersController {
  constructor(service = commercialOffersService) {
    this.service = service;
  }

  initRoutes(router) {
    router.get('/books/:ids/commercialOffers', this._getByIds.bind(this))
  }

  _getByIds(request, response) {
    let ids = request.params.ids.split(',').map((id) => id.trim());
    response.json({
      offers: this.service.getByIds(ids)
    });
  }
}

module.exports = new CommercialOffersController();