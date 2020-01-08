<template>
  <div id="app">
    <div v-if="!goNext">
      <div>
        Amount Player:
        <button @click="setAmountPlayers(1)">1</button>
        <button @click="setAmountPlayers(2)">2</button>
        <button @click="setAmountPlayers(3)">3</button>
        <button @click="setAmountPlayers(4)">4</button>
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
    <Match
      v-else
      :amount-players="amountPlayers"
      :score="score"
      :checkout="checkout"
    />
  </div>
</template>

<script>
import Match from "./components/Match.vue";

export default {
  name: "app",
  components: { Match },
  data() {
    return {
      amountPlayers: 2,
      score: 501,
      checkout: "d",
      goNext: false
    };
  },
  methods: {
    setAmountPlayers(amount) {
      this.amountPlayers = amount;
    },
    setScore(score) {
      this.score = score;
    },
    setCheckout(checkout) {
      this.checkout = checkout;
      this.goNext = true;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
