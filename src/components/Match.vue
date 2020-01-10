<template>
	<div class="scoreboard">
		<div
			v-for="player in players"
			:key="player.id"
			class="scoreboard-item"
			:class="{'scoreboard-item--disabled': turn !== player.id}"
		>
			<div class="scoreboard-item__player">
				Spieler: {{ player.id + 1 }}
			</div>
			<div class="scoreboard-item__score">
				{{ player.score }}
			</div>
			<div class="scoreboard-item__shoot">
				{{ player.roundDartsThrown }}
			</div>
			<input
				:ref="'input' + player.id"
				v-model="player.shoot"
				@keyup.enter="setNewScore(player.id)"
			>
			<Checkout :checkout="player.score" />
		</div>
		<vue-speech
			lang="de-DE"
			@onTranscriptionEnd="onSpeechEnd"
		/>
	</div>
</template>

<script>
import Checkout from './Checkout.vue';
export default {
	components: {Checkout},
	props: {
		score: {
			type: Number
		},
		amountPlayers: {
			type: Number
		},
		checkout: {
			type: String
		}
	},
	data() {
		return {
			roundDartsThrown: 0,
			players: [],
			turn: 0
		};
	},
	mounted() {
		for (let i = 0; i < this.amountPlayers; i++) {
			this.players.push({
				id: i,
				score: this.score,
				shoot: '',
				roundDartsThrown: 0
			});
		}
	},
	methods: {
		onSpeechEnd({
			lastSentence,
			transcription
		}) {
			let multiplicator = 1;
			let convertedNumber = Number(lastSentence);
			if(lastSentence.charAt(2) === 'x'){
				multiplicator = Number(lastSentence.charAt(0));
				convertedNumber = Number(lastSentence.slice(4));
				console.log(multiplicator * convertedNumber);
			}
			else if(Number.isInteger(convertedNumber)){
				console.log(Number(lastSentence));
			}
		},
		setNewScore(playerID, isFullRound) {
			const player = this.players[playerID];
			const shoot = player.shoot;

			this.checkScoreTooHigh(player.shoot);

			const oldLocalScore = player.score;

			player.score -= this.calculateMultipicator(shoot);
			player.roundDartsThrown++;
			player.shoot = '';

			this.checkScore(
				player,
				oldLocalScore
			);
			this.nextTurn(player);
		},
		checkScoreTooHigh(shoot) {
			//have to check multiplication
			if (shoot > 60) {
				alert("too high - max 60 possible");
			}
		},
		calculateMultipicator(shoot) {
			const multiplicator = shoot.charAt(0);

			if (multiplicator === "d") {
				//have to check multiplication
				const d = Number(shoot.slice(1)) * 2;
				this.checkScoreTooHigh(d);
				return d;

			} else if (multiplicator === "t") {
				//have to check multiplication
				const t = Number(shoot.slice(1)) * 3;
				this.checkScoreTooHigh(t);
				return t;
			}
			return Number(shoot);
		},
		nextTurn(player){
			if(player.roundDartsThrown === 3){
				player.roundDartsThrown = 0;
				player.shoot = '';
				if(this.players.length-1 > this.turn){
					this.turn++;
				}
				else{
					this.turn = 0;
				}
				this.setFocusOnInput();
			}
		},
		setFocusOnInput(){
			const ref = `input${this.turn}`;
			this.$refs[ref][0].focus();
		},
		// getMultipicator(shoot) {
		// 	const multiplicator = shoot.charAt(0);

		// 	if (multiplicator === "d") {
		// 		return "d";
		// 	} else if (multiplicator === "t") {
		// 		return "t";
		// 	}
		// 	return "s";
		// },

		//eslint-disable-next-line
		checkScore(player, oldScore) {
			const challengedScore = player.score;
			if (challengedScore < 0) {
				this.busted(player, oldScore);
			}
			if(this.checkout === 'd'){
				if(challengedScore < 2 && challengedScore > 0){
					this.busted(player, oldScore);
				}
			}
			if(this.checkout === 't'){
				if(challengedScore < 3 && challengedScore > 0){
					this.busted(player, oldScore);
				}
			}
			else if (challengedScore === 0) {
				alert("Winner");
			}
		},
		busted(player, oldScore) {
			alert("überowrfen");
			player.score = oldScore;
			this.nextTurn(player);
		}
	}
};
</script>

<style lang="scss">
	.scoreboard-item{
		background-color: #e8e8e8;
		padding: 20px;
		margin: 20px;
		&__player{
			font-size: 20px;
		}
		&__score{
			font-size: 40px;
		}
		&--disabled{
			pointer-events: none;
			opacity: .2;
		}
	}
	.scoreboard {
		display: flex;
    	justify-content: center;
		
	}
</style>