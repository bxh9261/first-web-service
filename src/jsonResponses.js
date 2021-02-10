// 6 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here
const randomNumberJSON = (max = 1) => {
  const nummax = Number(max);
  const checkmax = !nummax ? 1 : nummax;
  const confirmmax = checkmax < 1 ? 1 : checkmax;
  const number = Math.random() * confirmmax;
  const responseObj = {
    timestamp: new Date(),
    number,
  };
  return JSON.stringify(responseObj);
};

const getRandomNumberResponse = (request,response,params) => {
  response.writeHead(200, { 'Content-Type': 'application/json'});
  response.write(randomNumberJSON(params.max));
  response.end();
};

//module.exports = {
//  getRandomNumberResponse;  
//};

module.exports.getRandomNumberResponse = getRandomNumberResponse;