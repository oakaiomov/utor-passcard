<template>
<div class="line">
    <char-symbol 
        v-for="char, idx of data" 
        :char="char" 
        :key="idx" 
        :top="top" 
        :bottom="bottom" 
        :left="left && idx === 0" 
        :right="right && idx === data.length-1"
        :line="lines[idx]"
    />
</div>
</template>
<script>
import charSymbol from './char';

export default {
    components: { charSymbol },
    props: {
        data: {
            type: Array,
            required: true
        },
        lines: {
            type: Array,
            required: true
        },
        top: {
            type: Boolean
        },
        bottom: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        }
    },
    computed: {
        lineData: function () {
            return new Array(this.$props.chars)
        }
    }
}
</script>

<style lang="less">
.line {
    flex-direction: row;


}
</style>