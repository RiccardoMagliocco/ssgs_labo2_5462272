# Labo-String: CLI per Utilità su Stringhe

Labo-String è una Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe, tra cui inversione, verifica palindromi, troncamento e conteggio caratteri.

## Funzionalità

- **Inversione di una stringa**: Inverte l’ordine dei caratteri.
- **Verifica palindromo**: Controlla se una stringa è palindroma (ignora spazi e maiuscole/minuscole).
- **Troncamento**: Tronca una stringa a una lunghezza massima, aggiungendo "..." se necessario.
- **Conteggio caratteri**: Restituisce un oggetto con il conteggio di ogni carattere.

## Integrazione Continua (CI) e Code Coverage

Il progetto utilizza un workflow di **GitHub Actions** (vedi `.github/workflows/ci.yml`) che esegue automaticamente i test e genera il report di code coverage ad ogni push o pull request sul branch `main`.  
Il report di coverage viene caricato come artefatto scaricabile dalla sezione "Actions" di GitHub.

**Caratteristiche del workflow CI:**
- Trigger su `push` e `pull_request` verso `main`
- Un singolo job che:
  1. Effettua il checkout del repository
  2. Installa Node.js e le dipendenze
  3. Esegue i test con coverage (`npm test`)
  4. Carica la cartella `coverage/` come artefatto

**Come consultare il report di coverage:**
1. Vai nella tab [Actions](../../actions) del repository su GitHub
2. Seleziona il workflow eseguito
3. Scarica l’artefatto `coverage-report` per visualizzare il report HTML

## Installazione

1. Clona il repository:
   ```sh
   git clone https://github.com/RiccardoMagliocco/ssgs_labo2_5462272.git
   cd ssgs-labo-02
   ```
2. Installa le dipendenze:
   ```sh
   npm install
   ```

## Utilizzo

Esegui il programma tramite terminale:

```sh
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

**Numeri funzione disponibili:**
- `1`: Inverti Stringa
- `2`: Controlla Palindromo
- `3`: Tronca Stringa (richiede lunghezza massima)
- `4`: Conta Caratteri

**Esempi:**
```sh
node index.js 1 "ciao"
node index.js 2 "Anna"
node index.js 3 "Supercalifragilistico" 5
node index.js 4 "hello world"
```

## Test e Code Coverage

Il progetto integra test unitari tramite [Jest](https://jestjs.io/).  
I test coprono tutte le funzioni di utilità (`reverseString`, `isPalindrome`, `truncateString`, `countCharacters`) e includono casi normali e casi limite (stringhe vuote, caratteri speciali, lunghezze diverse, ecc).

Per eseguire i test e generare il report di code coverage:
```sh
npm test
```
La copertura del codice (`code coverage`) è al **100%**.

## Script disponibili

- `npm start` — Avvia l'applicazione principale (`index.js`)
- `npm test` — Esegue i test automatici con Jest e genera un report di coverage

## Struttura del progetto

- `index.js`: Entry point CLI
- `src/stringUtils.js`: Funzioni di utilità sulle stringhe
- `test/`: Test automatici

## Requisiti

- Node.js >= 18.0.0

## Autore

Magliocco Riccardo — 5462272

## Licenza

ISC