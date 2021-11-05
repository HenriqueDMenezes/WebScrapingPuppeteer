const puppeteer = require('puppeteer');

async function scraperProduct(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url)


  const [el] = await  page.$x('//*[@id="imgBlkFront"]');
  const src = await el.getProperty('src');
  const imgURL = await src.jsonValue();

  const [el2] = await  page.$x('//*[@id="productTitle"]');
  const txt = await el2.getProperty('textContent');
  const title = await txt.jsonValue();

  const [el3] = await  page.$x('//*[@id="price"]');
  const price = await el3.getProperty('textContent');
  const priceTxt = await price.jsonValue();

  console.log({imgURL,title,priceTxt});

  browser.close();
}

scraperProduct('https://www.amazon.com.br/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=asc_df_081297381X/?tag=googleshopp00-20&linkCode=df0&hvadid=379726347250&hvpos=&hvnetw=g&hvrand=8040545517224123234&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001767&hvtargid=pla-434346857433&psc=1')
