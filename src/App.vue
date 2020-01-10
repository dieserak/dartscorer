<template>
	<div id="app">
		<div
			v-if="!goNext"
			class="settings"
		>
			<div class="settings__item">
				Most used Plays:<br>
				<button
					class="button"
					@click="setAmountPlayers(1); setScore(501); setCheckout('d'); goNext = true;"
				>
					1 / 501 / Doubleout
				</button>
				<button
					class="button"
					@click="setAmountPlayers(2); setScore(501); setCheckout('d'); goNext = true;"
				>
					2 / 501 / Doubleout
				</button>
			</div>
			<small @click="moreSettingsVisible = !moreSettingsVisible"><br>Erweitert</small>
			<div v-if="moreSettingsVisible">
				<div class="settings__item">
					Players:<br>
					<!-- have to be radiobuttons -->
					<input
						type="radio"
						name="amountPlayers"
						@click="setAmountPlayers(1)"
					>
					1
					<input
						type="radio"
						name="amountPlayers"
						@click="setAmountPlayers(2)"
					>
					2
					<input
						type="radio"
						name="amountPlayers"
						@click="setAmountPlayers(3)"
					>
					3
					<input
						type="radio"
						name="amountPlayers"
						@click="setAmountPlayers(4)"
					>
					4
				</div>
				<div class="settings__item">
					X01<br>
					<input
						type="radio"
						name="x01"
						@click="setScore(301)"
					>
					301
					<input
						type="radio"
						name="x01"
						@click="setScore(501)"
					>
					501
					<input
						type="radio"
						name="x01"
						@click="setScore(701)"
					>
					701
				</div>
				<div class="settings__item">
					Checkout<br>
					<input
						type="radio"
						name="checkout"
						@click="setCheckout('s')"
					>
					Singleout
					<input
						type="radio"
						name="checkout"
						@click="setCheckout('d')"
					>
					Doubleout
					<input
						type="radio"
						name="checkout"
						@click="setCheckout('t')"
					>
					Masterout
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
}
.button{
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