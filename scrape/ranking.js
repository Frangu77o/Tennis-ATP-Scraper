async function getRanking(browser, endpoint) {
    try {
        const page = await browser.newPage();
        await page.goto(endpoint, { waitUntil: 'networkidle2', timeout: 30000 });
        await page.waitForSelector('body');

        const ranking = await page.evaluate(() => {
            var table = document.querySelector('table.desktop-table.mega-table');
            var rows = table.querySelectorAll('tr');

            var results = [];
            rows.forEach(row => {
                var name = row.querySelector('td.player li.name.center')?.textContent;
                name = name?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
                var age = row.querySelector('td.age')?.textContent;
                age = Number(age?.trim());
                var rank = row.querySelector('td.rank')?.textContent;
                rank = Number(rank?.replace('T', '').trim());
                var points = row.querySelector('td.points')?.textContent;
                points = Number(points?.replace(',', '').trim());

                if (!name) return;
                if (!rank) rank = length + 1;

                results.push({ name, age, rank, points });
            });

            return results;
        });

        await page.close();

        return ranking;
    } catch (e) {
        console.error('Error scraping', endpoint, e);
        return null;
    }
}

module.exports = getRanking;