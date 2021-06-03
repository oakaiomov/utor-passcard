<template>
<div class="char" :class="{top, left, right, bottom}" :lineColor="lineColor" :lineBorder="lineBorder">{{char}}</div>
</template>
<script>
export default {
    props: {
        char: {
            type: String,
            required: true
        },
        line: {},
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
        lineColor() {
            if(this.$props.line) { return Object.values(this.$props.line)[0] }
            else { return "normal" }
        },
        lineBorder() {
            if(this.$props.line) { return Object.keys(this.$props.line)[0] }
            else { return "f" }
        }
    }
}
</script>

<style lang="less">
.char {
    width: 22px;
    height: 20px;

    overflow: hidden;
    align-items: flex-end;
    justify-content: center;

    font-size: 18px;

    &.left { padding-left: 22px; }
    &.right { padding-right: 22px; }
    &.top { padding-top: 22px; }
    &.bottom { padding-bottom: 22px; }

    &[lineColor="0"] { background-color: #ffff00; color: black; font-family: 'os-extrabold'; }
    &[lineColor="1"] { background-color: #b9f900; color: black; font-family: 'os-extrabold'; }
    &[lineColor="2"] { background-color: #00ebb7; color: black; font-family: 'os-extrabold'; }
    &[lineColor="3"] { background-color: #00e3ff; color: black; font-family: 'os-extrabold'; }

    &[lineBorder="l"] { border-radius: 10px 0px 0px 10px; }
    &[lineBorder="r"] { border-radius: 0px 10px 10px 0px; }
    &[lineBorder="t"] { border-radius: 10px 10px 0px 0px; }
    &[lineBorder="b"] { border-radius: 0px 0px 10px 10px; }
}
</style>