import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';

const now = new Date();

class TokenApi {
  getTokens(request) {
    const customers = [
      {
        id: '5e887ac47eed253091be10cb',
        avatar: '/static/token/image 2.png',
        name:"Chainlink",
        price:100000,
        percentIncr:90,
        ats:0.24,
        rsi:74,
        rsiStatus:"Overbuy",
        fearIndex:12,
        cexRatio:0.54,
        cexInflow:"+34M",
        cexInflowMoney:10000,
        cexOutflow:"-34M",
        cexOutflowMoney:10000,
        
      },
    ];

    return Promise.resolve(customers);
  }}

  export const tokenApi = new TokenApi();