<script setup>
var guesses = ['test1', 'test2', 'test4', 'test6']

function insertGuess(guess) {
    guesses.push(guess)
}
</script>

<template>
  <div class="background w-screen h-screen flex flex-col items-center justify-center">
    <div class="grid grid-rows-6 gap-2">
        <!--Then we divide each row into cols for each letter and apply the background there-->
        <!-- DO an if to check if there are any guesses if there are not any guesses. OR add placeholder invis letters to hold it down-->
        <div v-for="row in guesses" class="flex gap-2">
            "TEST"
        </div>
    </div>
  </div>
  <!--Text box down here to enter the word you want to guess-->
</template>

<style scoped>
.background {
  background-image: url('../assets/imgs/wordlebg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
