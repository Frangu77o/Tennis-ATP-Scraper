async function getTournaments(browser, endpoint) {
    try{
        const page = await browser.newPage();
        await page.goto(endpoint);
        await page.waitForSelector('body');
        await page.setDefaultNavigationTimeout(1000)

        const tournaments = await page.evaluate(() => {
            var table = document.querySelector('div.tournament-list');
            var tournaments = table.querySelectorAll('ul li');

            var results = [];
            tournaments.forEach(tournament => {
                var name = tournament.querySelector('span.name')?.textContent.trim();

                var venue = tournament.querySelector('span.venue')?.textContent.replace('|', '').trim();

                var dateInterval = tournament.querySelector('span.date')?.textContent.trim();
                dateInterval = dateInterval?.replace(",", "").trim();
                const [startStr, endStr] = dateInterval?.split(" - ") ?? [];
                const year = endStr?.split(" ").pop();
                const startDate = new Date(`${startStr} ${year}`);
                const endDate = new Date(`${endStr}`);

                var type = tournament.querySelector('div.mid-section span:nth-of-type(3)')?.textContent.trim();

                if(!name) return;

                results.push({name, venue, startDate, endDate, type});
            });

            return results;
        });
    
        await page.close();

        return tournaments;
    } catch(e) {
        console.error('error scraping', endpoint, e);
        return null;
    }
    
}


module.exports = getTournaments;