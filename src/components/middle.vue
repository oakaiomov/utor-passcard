<template>
<div class="plato" :class="side">
    <div class="logo logo-color" v-if="side === 'back'" @click="gotoUTOR"></div>
    <div class="info" v-if="side === 'front'">
        <div class="visitus" @click="gotoUTOR">Visit us: u-tor.com</div>
        <div class="identifier" @click="gotoHome">PassCard ID: {{formatedID}}</div>
    </div>
</div>
</template>
<script>
export default {
    props: {
        side: {
            type: String,
            required: true,
            validator: (value) => ['front', 'back'].indexOf(value) !== -1
        },
        identifier: {
            type: Number,
            required: true
        }
    }, 
    computed: {
        formatedID() {
            if(String(this.$props.identifier).length < 6) {
                return ("000000"+this.$props.identifier).substr(-6,6)
            } else {
                return String(this.$props.identifier)
            }
        }
    },
    methods: {
        gotoUTOR() {
            window.location.assign('http://u-tor.com')
        },
        gotoHome() {
            window.location.assign(window.location.href.split("?")[0])
        }
    }
}
</script>

<style lang="less">
.plato {
    width: 176px;
    height: 80px;
    overflow: hidden;

    flex-direction: column;

    align-items: stretch;
    justify-content: center;


    .logo {
        align-self: center;
        background-image: url(../assets/logo_color_small.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        width: 161px;
        height: 70px;

        margin-bottom: 6px;
        margin-right: 6px;

        cursor: pointer;
    }

    .info {
        flex-grow: 1;

        margin: 2px 2px 4px 2px;
        border: 2px solid black;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .visitus {
            margin-bottom: 10px;
            cursor: pointer;
        }

        .identifier {
            border-top: 2px dashed black ;
            font-family: 'os-regular';
            font-size: 14px;
            cursor: pointer;
        }
    }
}
</style>