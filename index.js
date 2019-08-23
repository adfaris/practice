const axios= require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const url = ' https://www.blinkist.com/en/nc/library/';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    console.log(html);
  })
  .catch(function(err) {
    //handle error
  });

  
async function getWebInfo() {
  const url = 'https://www.reddit.com';
  const scrappedData = await axios.get(url);
//   console.log(scrappedData.data, 'Scrapped Data');
    console.log(cheerio(scrappedData));
    // console.log(cheerio('.bday', scrappedData).text());
//   console.log(cheerio('.firstHeader', scrappedData).text());
//   console.log(cheerio('.bday, scrappedData).text());
  return await scrappedData.data
}
getWebInfo();


// const rp = require('request-promise');

// rp(url)
//   .then(function(html){
//     //success!
//     console.log(html);
//   })
//   .catch(function(err){
//     //handle error
//   });


// module.exports = getUserInfo;

// async function getUserInfo(PSID) {
//   const url = `https://graph.facebook.com/${PSID}?fields=first_name&access_token=${
//     process.env.PAGE_ACCESS_TOKEN
//   }`;
//   const request = await axios.get(url);
//   // console.log("firing get info", request);
//   return await request.data;
// }