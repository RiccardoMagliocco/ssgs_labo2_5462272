# Labo-String: CLI per Utilità su Stringhe

Labo-String è una Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe, tra cui inversione, verifica palindromi, troncamento e conteggio caratteri.

## Funzionalità

- **Inversione di una stringa**: Inverte l’ordine dei caratteri.
- **Verifica palindromo**: Controlla se una stringa è palindroma (ignora spazi e maiuscole/minuscole).
- **Troncamento**: Tronca una stringa a una lunghezza massima, aggiungendo "..." se necessario.
- **Conteggio caratteri**: Restituisce un oggetto con il conteggio di ogni carattere.

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

## Script disponibili

- `npm start` — Avvia l'applicazione principale (`index.js`)
- `npm test` — Esegue i test automatici con Jest e genera un report di coverage

## Struttura del progetto

- `index.js`: Entry point CLI
- `src/stringUtils.js`: Funzioni di utilità sulle stringhe
- `test/`: Test automatici (se presenti)

## Requisiti

- Node.js >= 18.0.0

## Autore

Magliocco Riccardo — 5462272

## Licenza

ISC