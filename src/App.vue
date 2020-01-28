<template>
	<div id="app">
		<div
			v-if="!goNext"
			class="settings"
		>
			<div class="settings__item">
				<h2 class="h2">
					Most used Plays:
				</h2>
				<div class="settings__actions">
					<button
						class="button button--full"
						@click="setAmountPlayers(1); setScore(501); setCheckout('d'); goNext = true;"
					>
						1 Spieler – 501 – Doubleout
					</button>
					<button
						class="button button--full"
						@click="setAmountPlayers(2); setScore(501); setCheckout('d'); goNext = true;"
					>
						2 Spieler – 501 – Doubleout
					</button>
				</div>
			</div>
			<div
				class="accordion"
				@click="moreSettingsVisible = !moreSettingsVisible"
			>
				Erweitert <IconArrow
					class="accordion__icon"
					:class="{'accordion__icon--active': moreSettingsVisible}"
				/>
			</div>
			<div
				v-if="moreSettingsVisible"
				class="accordion__item"
			>
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
import IconArrow from './assets/arrow_drop_down-24px.svg';

export default {
	name: "App",
	components: {
		Match, IconArrow
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
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Lora|Nunito|PT+Sans|Playfair+Display&display=swap');

html,body,#app{
	height: 100%;
}
html,body{ margin: 0;}
#app, button {
font-family: "Nunito", Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
font-size: 16px;
}

h1, h2, h3{
	font-family: "Playfair Display";
}

h2{
	font-size: 32px;
}

$xs: 4px;
$s: 8px;
$m: 16px;

$color-primary: #455A64;
$color-primary-hover:#607D8B;
$primary-color-light:  #CFD8DC;
$primary-color-text:   #FFFFFF;
$accent-color:         #03A9F4;
$primary-text-color:   #212121;
$secondary-text-color: #757575;
$divider-color:        #BDBDBD;

.settings__actions{
	@media screen and (min-width: 768px){
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
}

.u-v-centered{
	display: flex;
	align-items: center;
}

.settings{
	margin: $m;
	text-align: center;

	&__item{
		padding-bottom: $m;
	}
}
.button{
	-webkit-appearance: none;
	border: 0;
	min-width: 60px;
	min-height: 40px;
	border-radius: 2px;
	padding: 0 $m;
	margin: $s 0;
	cursor: pointer;
	-webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
	background-color: $color-primary;
	transition: background-color .2s ease;
	color:#fff;

	&:hover{
		background-color: $color-primary-hover;
	}

	&--remove{
		color: #fff;
	}
	&--full{
		width: calc(100% - 16px);
	}
}

.input{
	height: 40px;
	border-radius: 2px;
	border: 1px solid #ccc;
	font-size: 24px;
	&--full-width{
		width: 100%;
	}	
}

.accordion{
	display: flex;
	align-items: center;
	margin: $m 0;
	cursor: pointer;
	justify-content: center;
	&__icon{
		// transition: transform .25s ease;
		&--active{
			transform: rotate(180deg);
		}
	}
}

</style>