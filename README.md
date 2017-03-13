# kefir.scanbytype

A tiny abstraction to help use [Kefir](https://rpominov.github.io/kefir/#scan) Observables for a flux-like pattern.

## Installation

### NPM

```
npm install kefir.scanbytype
```


## Usage

```js
import Kefir from 'kefir';
import scanByType from 'kefir.scanbytype';

var libraryEvents = [
  { type: 'CHECKOUT', title: 'The Cat in the Hat' },
  { type: 'TRANSFER_IN', title: 'Green Eggs and Ham' },
  { type: 'RETURN', title: 'The Lorax' },
  { type: 'CHECKOUT', title: 'Green Eggs and Ham' },
];

var initialState = {};
var reducer = scanByType({
  CHECKOUT:     (state, data) => { /* checkout logic */ },
  RETURN:       (state, data) => { /* return logic */ },
  TRANSFER_IN:  (state, data) => { /* transfer in logic */ },
  TRANSFER_OUT: (state, data) => { /* transfer out logic */ },
});

Kefir.sequentially(1000, events)
  .scan(reducer, initialState)
  .log();
```


