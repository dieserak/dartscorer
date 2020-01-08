<template>
  <div class="match">
    <div class="scoreboard" v-for="player in amountPlayers" :key="player">
      {{ player }}
      {{ localScore }}
      <input v-model="shoot" v-on:keyup.enter="setNewScore()" />
    </div>
    <vue-speech lang="de-DE" />
  </div>
</template>

<script>
import VueSpeech from "vue-speech";

export default {
  components: { VueSpeech },
  data() {
    return {
      shoot: "",
      localScore: this.score,
      roundDartsThrown: 0,
      players: []
    };
  },
  mounted() {
    const playerObject = {
      number: 1,
      score: this.score
    };
    for (i = 0; i > this.amountPlayers; i++) {
      this.players.push(this.playerObject);
    }
  },
  props: ["score", "amountPlayers", "checkout"],
  methods: {
    setNewScore() {
      let shoot = this.shoot;
      let multiplicator = shoot.charAt(0);

      this.checkScoreToHigh();
      this.getMultipicator(multiplicator);

      oldLocalScore = this.localScore;

      this.localScore -= Number(shoot);
      roundDartsThrown++;
      this.checkScore(this.localScore, oldLocalScore, multiplicator);
    },
    checkScoreToHigh() {
      if (this.shoot > 60) alert("too high - max 60 possible");
    },
    getMultipicator(multiplicator) {
      if (multiplicator === "d") {
        shoot = Number(shoot.slice(1)) * 2;
      } else if (multiplicator === "t") {
        shoot = Number(shoot.slice(1)) * 3;
      } else {
        multiplicator = "s";
      }
    },
    checkScore(challengedScore, oldScore, multiplicator) {
      if (challengedScored < 0) {
        this.busted(oldScore);
      } else if (challengedScored === 0) {
        if (multiplicator === checkout) alert("Winner");
        else {
          this.busted(oldScore);
        }
      }
    },
    busted() {
      alert("überowrfen");
      this.localScore = oldScore;
      roundDartsThrown = 0;
    }
  }
};
</script>

<style>
.scoreboard {
  background-color: green;
  padding: 20px;
  margin: 20px;
}
</style>
