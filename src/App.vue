<template>
	<div id="app">
		<div
			v-if="!goNext"
			class="settings"
		>
			<div class="settings__item">
				Most used Plays:<br>
				<button @click="setAmountPlayers(1); setScore(501); setCheckout('d'); goNext = true;">
					1 / 501 / Doubleout
				</button>
				<button @click="setAmountPlayers(2); setScore(501); setCheckout('d'); goNext = true;">
					2 / 501 / Doubleout
				</button>
			</div>
			<small @click="moreSettingsVisible = !moreSettingsVisible"><br>Erweitert</small>
			<div v-if="moreSettingsVisible">
				<div class="settings__item">
					Players:<br>
					<!-- have to be radiobuttons -->
					<button @click="setAmountPlayers(1)">
						1
					</button>
					<button @click="setAmountPlayers(2)">
						2
					</button>
					<button @click="setAmountPlayers(3)">
						3
					</button>
					<button @click="setAmountPlayers(4)">
						4
					</button>
				</div>
				<div class="settings__item">
					X01<br>
					<button @click="setScore(301)">
						301
					</button>
					<button @click="setScore(501)">
						501
					</button>
					<button @click="setScore(701)">
						701
					</button>
				</div>
				<div class="settings__item">
					Checkout<br>
					<button @click="setCheckout('s')">
						Singleout
					</button>
					<button @click="setCheckout('d')">
						Doubleout
					</button>
					<button @click="setCheckout('t')">
						Masterout
					</button>
				</div>
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
	name: "App",
	components: {
		Match
	},
	data() {
		return {
			moreSettingsVisible: false,
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

<style lang="scss">
.settings{
	&__item{
		padding-top: 20px;
	}
	button{
		-webkit-appearance: none;
		border: 0;
		min-width: 60px;
		min-height: 40px;
		border-radius: 2px;
		margin: 6px;
		cursor: pointer;
		-webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
	}
}

html,body,#app{
	height: 100%;
}
html,body{ margin: 0;}
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>