<template>
  <div class="match">
    {{ localScore }}
    {{ amountPlayer }}
    {{ checkout }}
    <input v-model="shoot" v-on:keyup.enter="setNewScore()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoot: "",
      localScore: this.score
    };
  },
  props: ["score", "amountPlayer", "checkout"],
  methods: {
    setNewScore() {
      if (this.shoot > 60) alert("too high - max 60 possible");
      let shoot = this.shoot;
      let multiplicator = shoot.charAt(0);
      if (multiplicator === "d") {
        shoot = Number(shoot.slice(1)) * 2;
      } else if (multiplicator === "t") {
        shoot = Number(shoot.slice(1)) * 3;
      }
      this.localScore -= Number(shoot);
      console.log(this.localScore);
    }
  }
};
</script>

<style></style>
