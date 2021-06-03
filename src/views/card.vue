<template>
<div class="card-view">
    <card-side side="back" :data="cardData[1]"/>
    <card-side side="front" :data="cardData[0]"/>
</div>
</template>
<script>
import cardSide from '../components/side'

export default {
    components: {cardSide},
    props: {
        cardData: {
            required: true
        }
    }
}
</script>

<style lang="less">
.card-view {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
}
</style>