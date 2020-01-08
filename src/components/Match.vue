<template>
	<div class="match">
		<div
			v-for="player in amountPlayers"
			:key="player"
			class="scoreboard"
		>
			{{ player }}
			{{ localScore }}
			<input
				v-model="shoot"
				@keyup.enter="setNewScore()"
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
		score: {type: Number},
		amountPlayers: {type: Number},
		checkout: {type: String}
	},
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
		for (let i = 0; i < this.amountPlayers; i++) {
			this.players.push(playerObject);
		}
	},
	methods: {
		onSpeechEnd({ lastSentence, transcription }) {
			console.log(lastSentence);
			console.log(transcription);
		},
		setNewScore() {
			const shoot = this.shoot;

			this.checkScoreTooHigh();

			const oldLocalScore = this.localScore;

			this.localScore -= Number(shoot);
			this.roundDartsThrown++;
			this.checkScore(
				this.localScore,
				oldLocalScore,
				this.getMultipicator(shoot)
			);
		},
		checkScoreTooHigh() {
			if (this.shoot > 60) {alert("too high - max 60 possible");}
		},
		getMultipicator(shoot) {
			const multiplicator = shoot.charAt(0);

			if (multiplicator === "d") {
				return Number(shoot.slice(1)) * 2;
			} else if (multiplicator === "t") {
				return Number(shoot.slice(1)) * 3;
			} 
			return "s";
      
		},
		checkScore(challengedScore, oldScore, multiplicator) {
			if (challengedScore < 0) {
				this.busted(oldScore);
			} else if (challengedScore === 0) {
				if (multiplicator === this.checkout) {alert("Winner");}
				else {
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

<style>
.scoreboard {
  background-color: green;
  padding: 20px;
  margin: 20px;
}
</style>
