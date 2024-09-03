const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const getRanking = require('./scrape/ranking');
const getTournaments = require('./scrape/tournaments');
const saveData = require('./utils/saveData');

puppeteer.use(StealthPlugin());

const endpoints = [
    ['https://www.atptour.com/en/rankings/singles?rankRange=0-5000', getRanking, 'atp-singles-ranking'],
    ['https://www.atptour.com/en/rankings/doubles?rankRange=0-5000', getRanking, 'atp-doubles-ranking'],
    ['https://www.atptour.com/en/rankings/singles-race-to-turin?rankRange=0-5000', getRanking, 'race-to-turin-singles-ranking'],
    ['https://www.atptour.com/en/rankings/next-gen-race?rankRange=0-5000', getRanking, 'race-to-jeddah-singles-ranking'],
    ['https://www.atptour.com/en/tournaments', getTournaments, 'atp-tournaments'],
    ['https://www.atptour.com/en/atp-challenger-tour/calendar', getTournaments, 'atp-challenger-tour'],
    ['https://www.atptour.com/en/atp-challenger-tour/itf-calendar', getTournaments, 'itf-tournaments'],
];

(async () => {
    const browser = await puppeteer.launch();

    for (const [url, scraper, fileName] of endpoints) {
        const data = await scraper(browser, url);
        if (!data) continue;
        saveData(data, fileName);
    }

    await browser.close();
})();