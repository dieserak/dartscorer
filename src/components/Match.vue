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
				v-model="player.shoot"
				@keyup.enter="setNewScore(player.id)"
			>
		</div>
		<vue-speech
			lang="de-DE"
			@onTranscriptionEnd="onSpeechEnd"
		/>
	</div>
</template>

<script>
export default {
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
				shoot: 0,
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
				console.log(multiplicator * convertedNumber)
			}
			else if(Number.isInteger(convertedNumber)){
				console.log(Number(lastSentence));
			}
		},
		setNewScore(playerID, isFullRound) {
			const player = this.players[playerID];
			const shoot = player.shoot;

			this.checkScoreTooHigh(player);

			const oldLocalScore = player.score;

			player.score -= this.calculateMultipicator(shoot);
			player.roundDartsThrown++;
			this.checkScore(
				player.score,
				oldLocalScore,
				this.getMultipicator(shoot)
			);
			this.nextTurn(player);
		},
		checkScoreTooHigh(player) {
			if (player.shoot > 60) {
				alert("too high - max 60 possible");
			}
		},
		calculateMultipicator(shoot) {
			const multiplicator = shoot.charAt(0);

			if (multiplicator === "d") {
				return Number(shoot.slice(1)) * 2;
			} else if (multiplicator === "t") {
				return Number(shoot.slice(1)) * 3;
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
			}
		},
		getMultipicator(shoot) {
			const multiplicator = shoot.charAt(0);

			if (multiplicator === "d") {
				return "d";
			} else if (multiplicator === "t") {
				return "t";
			}
			return "s";
		},
		checkScore(challengedScore, oldScore, multiplicator) {
			if (challengedScore < 0) {
				this.busted(oldScore);
			} else if (challengedScore === 0) {
				if (multiplicator === this.checkout) {
					alert("Winner");
				} else {
					this.busted(oldScore);
				}
			}
		},
		busted(oldScore) {
			alert("überowrfen");
			this.localScore = oldScore;
			this.roundDartsThrown = 0;
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