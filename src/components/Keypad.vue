<template>
	<div class="keypad">
		<span @click="addNum('1')">1</span>
		<span @click="addNum('2')">2</span>
		<span @click="addNum('3')">3</span>
		<span @click="addNum('4')">4</span>
		<span @click="addNum('5')">5</span>
		<span @click="addNum('6')">6</span>
		<span @click="addNum('7')">7</span>
		<span @click="addNum('8')">8</span>
		<span @click="addNum('9')">9</span>
		<span @click="removeLast()">del</span>
		<span @click="addNum('0')">0</span>
		<span @click="enter()">-></span>
	</div>
</template>

<script>
export default {
	name: 'Keypad',
	data() {
		return{
			input: ""
		};
	},
	methods:{
		enter(){
			this.$emit('KeypadEnter', this.input);
			this.input = "";
		},
		addNum(num){
			this.input += num;
			this.$emit('KeypadClicked', this.input);
		},
		removeLast(){
			this.input = this.input.slice(0, -1);
			this.$emit('KeypadClicked', this.input);
		}
	}
};
</script>

<style lang="scss" scoped>
    .keypad{
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        border-bottom: 1px solid var(--divider-color);
        border-left: 1px solid var(--divider-color);

        span{
            cursor: pointer;
            border-top: 1px solid var(--divider-color);
            border-right: 1px solid var(--divider-color);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>