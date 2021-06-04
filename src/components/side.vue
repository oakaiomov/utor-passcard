<template>
<div class="side" :class="side">
    <chars-line top left right :data="data.big[0]" :lines="linesArray(0)"/>
    <chars-line left right :data="data.big[1]" :lines="linesArray(1)"/>
    <chars-line left right :data="data.big[2]" :lines="linesArray(2)"/>
    <div class="middle">
        <div class="left half">
            <chars-line left :data="data.small[0]" :lines="linesArray(3)"/>
            <chars-line left :data="data.small[1]" :lines="linesArray(4)"/>
            <chars-line left :data="data.small[2]" :lines="linesArray(5)"/>
            <chars-line left :data="data.small[3]" :lines="linesArray(6)"/>
        </div>
        <middle-data :side="side" :identifier="data.identifier"/>
        <div class="right half">
            <chars-line right :data="data.small[4]" :lines="linesArray(7)"/>
            <chars-line right :data="data.small[5]" :lines="linesArray(8)"/>
            <chars-line right :data="data.small[6]" :lines="linesArray(9)"/>
            <chars-line right :data="data.small[7]" :lines="linesArray(10)"/>
        </div>
    </div>
    <chars-line left right :data="data.big[3]" :lines="linesArray(11)"/>
    <chars-line left right :data="data.big[4]" :lines="linesArray(12)"/>
    <chars-line left right bottom :data="data.big[5]" :lines="linesArray(13)"/>
</div>
</template>
<script>
import charsLine from './line.vue'
import middleData from './middle.vue'

export default {
    components: {charsLine, middleData},
    props: {
        side: {
            type: String,
            required: true,
            validator: (value) => ['front', 'back'].indexOf(value) !== -1
        },
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        linesArray(line) {
            const result = []
            if(line < 3) {
                const line1 = this.$props.data.lines[0]
                const line2 = this.$props.data.lines[1]

                if(line1.direction === 'horizontal') {
                    if(line1.shift === line) { for (let i = 0; i < line1.length; i++) { if(i === line1.length - 1) { result[i] = {"r":line1.color} } else { result[i] = {"f":line1.color} } } }
                } else {
                    if(line < line1.length-1) { result[line1.shift] = {"f":line1.color} }
                    else if(line < line1.length) { result[line1.shift] = {"b":line1.color} }
                    if(line1.shift > 3 && line1.length > 2 && line === 2) { result[line1.shift] = {"b":line1.color} }
                }

                if(line2.direction === 'horizontal') {
                    if(line2.shift === line) { for (let i = 15; i > 15 - line2.length; i--) { if(i === 15 - line2.length + 1) { result[i] = {"l":line2.color} } else { result[i] = {"f":line2.color} } } }
                } else {
                    if(line < line2.length-1) { result[15 - line2.shift] = {"f":line2.color} }
                    else if(line < line2.length) { result[15 - line2.shift] = {"b":line2.color} }
                    if(15 - line2.shift < 12 && line2.length > 3 && line === 2) { result[15 - line2.shift] = {"b":line2.color} }
                }

            } else if (line > 2 && line < 7) {
                const line1 = this.$props.data.lines[0]
                const line2 = this.$props.data.lines[2]

                if(line1.direction === 'horizontal') {
                    if(line1.shift === line) {
                        for (let i = 0; i < line1.length; i++) { if(i === line1.length - 1) { result[i] = {"r":line1.color} } else { result[i] = {"f":line1.color} } }
                        if(line1.length > 3) { result[3] = {"r":line1.color}}
                    }
                } else {
                    if(line < line1.length-1 && line1.shift < 4) { result[line1.shift] = {"f":line1.color} }
                    else if(line < line1.length && line1.shift < 4) { result[line1.shift] = {"b":line1.color} }
                }

                if(line2.direction === 'horizontal') {
                    if(line2.shift === 9 - line) {
                        for (let i = 0; i < line2.length; i++) { if(i === line2.length - 1) { result[i] = {"r":line2.color} } else { result[i] = {"f":line2.color} } }
                        if(line2.length > 3) { result[3] = {"r":line2.color}}
                    }
                } else {
                    if(9-line < line2.length-1 && line2.shift < 4) { result[line2.shift] = {"f":line2.color} }
                    else if(9-line < line2.length && line2.shift < 4) { result[line2.shift] = {"t":line2.color} }
                }


            } else if (line > 6 && line < 11) {
                const line1 = this.$props.data.lines[1]
                const line2 = this.$props.data.lines[3]

                if(line1.direction === 'horizontal') {
                    if(line1.shift === line - 4) {
                        for (let i = 4; i > 4 - line1.length - 1; i--) { if(i === 4 - line1.length) { result[i] = {"l":line1.color} } else { result[i] = {"f":line1.color} } }
                        if(line1.length > 3) { result[0] = {"l":line1.color}}
                    }
                } else {
                    if(line-4 < line1.length-1 && line1.shift < 4) { result[3 - line1.shift] = {"f":line1.color} }
                    else if(line-4 < line1.length && line1.shift < 4) { result[3 - line1.shift] = {"b":line1.color} }
                }

                if(line2.direction === 'horizontal') {
                    if(13 - line2.shift === line) {
                        for (let i = 4; i > 4 - line2.length - 1; i--) { if(i === 4 - line2.length) { result[i] = {"l":line2.color} } else { result[i] = {"f":line2.color} } }
                        if(line2.length > 3) { result[0] = {"l":line2.color}}
                    }
                } else {
                    if(line > 13 - line2.length+1 && line2.shift < 4) { result[3- line2.shift] = {"f":line2.color} }
                    else if(line > 13 - line2.length && line2.shift < 4) { result[3- line2.shift] = {"t":line2.color} }
                }
            } else {
                const line1 = this.$props.data.lines[2]
                const line2 = this.$props.data.lines[3]

                if(line1.direction === 'horizontal') {
                    if(13 - line1.shift === line) { for (let i = 0; i < line1.length; i++) { if(i === line1.length - 1) { result[i] = {"r":line1.color} } else { result[i] = {"f":line1.color} } } }
                } else {
                    if(line > 13 - line1.length+1) { result[line1.shift] = {"f":line1.color} }
                    else if(line === 13 - line1.length+1) { result[line1.shift] = {"t":line1.color} }
                    if(line1.shift > 3 && line1.length > 2 && line === 11) { result[line1.shift] = {"t":line1.color} }
                }

                if(line2.direction === 'horizontal') {
                    if(13 - line2.shift === line) { for (let i = 15; i > 15 - line2.length; i--) { if(i === 15 - line2.length + 1) { result[i] = {"l":line2.color} } else { result[i] = {"f":line2.color} } } }
                } else {
                    if(line > 13 - line2.length+1) { result[15 - line2.shift] = {"f":line2.color} }
                    else if(line === 13 - line2.length+1) { result[15 - line2.shift] = {"t":line2.color} }
                    if(line2.shift > 3 && line2.length > 2 && line === 11) { result[15 - line2.shift] = {"t":line2.color} }
                }
            }

            return result
        }
    }
}
</script>

<style lang="less">
.side {
    flex-direction: column;

    // padding: 22px;
    margin: 5px;

    border: 1px solid gray;

    border-radius: 10px;

    &.back {
        background-color: black;
        color: white;
        font-family: 'os-regular';
    }

    &.front {
        background-color: white;
        color: black;
        font-family: 'os-extrabold';
    }

    .middle {
        .half {
            flex-direction: column;
        }
    }


}
</style>