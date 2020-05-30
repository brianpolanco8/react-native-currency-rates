import axios from 'axios'

export default class CurrencyService {
    static getRates() {
        const graphqlQuery = {
            query: `{
                getUsdRates {
                  _id
                  
                  buy {
                    popularDollarBuy
                  }
                  sell {
                    popularDollarSell
                  }
                  updatedAt
                }
              }`
        }
        return axios.post('http://localhost:5000/graphql', graphqlQuery)
    }
}