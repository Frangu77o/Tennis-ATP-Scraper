# Tennis ATP Scraper

Questo progetto è uno scraper sviluppato in Node.js che utilizza la libreria Puppeteer per raccogliere dati dal sito ufficiale dell'ATP di tennis. Lo scraper raccoglie dati relativi ai principali ranking come l'ATP, il Race to Turin e altri. Inoltre, raccoglie dati sui principali tornei che si giocheranno durante l'anno, inclusi quelli già giocati. Tutti i dati vengono salvati in file Excel grazie alla libreria xlsx.

## Dipendenze

- [Node.js](https://nodejs.org/)
- [Puppeteer](https://github.com/puppeteer/puppeteer)
- [puppeteer-extra](https://github.com/berstend/puppeteer-extra)
- [puppeteer-extra-plugin-stealth](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth)
- [xlsx](https://github.com/SheetJS/sheetjs)

## Installazione

1. Clona il repository:

   ```bash
   git clone https://github.com/Frangu77o/Tennis-ATP-Scraper.git
   cd tennis-atp-scraper
   ```

2. Installa le dipendenze

   ```bash
   npm install
   ```

3. Avvia lo scraper

   ```bash
   node main.js
   ```

## Licenza

Questo progetto è concesso in licenza sotto la MIT License.

## Contributi

I contributi sono benvenuti! Sentiti libero di aprire issue e pull request per migliorare il progetto.
