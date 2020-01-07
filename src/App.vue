<template>
  <div id="app">
    <div v-if="!goNext">
      <div>
        Amount Player:
        <button @click="setAmountPlayer(1)">1</button>
        <button @click="setAmountPlayer(2)">2</button>
        <button @click="setAmountPlayer(3)">3</button>
        <button @click="setAmountPlayer(4)">4</button>
      </div>
      <div>
        <button @click="setScore(301)">301</button>
        <button @click="setScore(501)">501</button>
        <button @click="setScore(701)">701</button>
      </div>
      <div>
        Checkout:
        <button @click="setCheckout(1)">Singleout</button>
        <button @click="setCheckout(2)">Doubleout</button>
        <button @click="setCheckout(3)">Masterout</button>
      </div>
    </div>
    <Match v-else :amount-player="amountPlayer" :score="score" :checkout="checkout" />
  </div>
</template>

<script>
  import Match from './components/Match.vue';

  export default {
    name: 'app',
    components: {Match},
    data() {
      return {
        amountPlayer: 2,
        score: 501,
        checkout: 1,
        goNext: false
      }
    },
    methods: {
      setAmountPlayer(amount) {
        this.amountPlayer = amount;
      },
      setScore(score) {
        this.score = score;
      },
      setCheckout(checkout) {
        this.checkout = checkout;
        this.goNext = true;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>