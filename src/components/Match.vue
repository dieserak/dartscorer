<template>
  <div class="match">
      
      {{score}}
      {{amountPlayer}}
      {{checkout}}
  </div>
</template>

<script>
export default {
    props:[
        'score',
        'amountPlayer',
        'checkout'
    ]
}
</script>

<style>

</style>