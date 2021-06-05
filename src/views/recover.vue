<template>
<div class="recover">
    <div class="header">PassCard Recovery</div>
    <div class="message">
        <p>Please type your PassCard ID into the field to get it's online copy.</p>
        <p>You can save the url, page will be cached and you'll have an access to it even when you are offline.</p>
    </div>
    <input type="text" class="identifier" @change="handleID" :value="currentID"/>

    <div :class="isMobile ? 'mobile' : 'desktop'">
        <div v-if="idStatus === 'good' && !isMobile" class="action">
            <div class = "qr-code" @click="handleClick"><qr-code :value="recoverUrl" :scale="5" :color="{dark: '#FFFFFF00', light: '#000000FF'}" :margin="1"/></div>
            <div class = "message">
                <p>Click it to get your PassCard here.</p>
                <p>Scan QR with device's camera to get it there.</p>
            </div>
        </div>
        <div v-else-if="idStatus === 'good' && isMobile" class="action" @click="handleClick">Get PassCard</div>
        <div v-else-if="idStatus === 'error'" class="error">Incorrect ID!</div>
        <div v-else class="empty">Type an ID</div>
    </div>
</div>
</template>
<script>
import qrCode from 'vue-qrcode';

export default {
    components: { qrCode },
    props: {
        identifier: {}
    },
    data () {
        return {
            currentID: this.$props.identifier
        }
    },
    methods: {
        handleID (event) {
            this.$data.currentID = event.target.value
        },
        handleClick () {
            window.location.assign(this.recoverUrl)
        }
    },
    computed: {
        recoverUrl() {
            return `${window.location.href.split('?')[0]}?${this.currentID}`
        },
        isMobile() {
            return [/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some( os => navigator.userAgent.match(os) )
        },
        idStatus() {
            if(this.$data.currentID) {
                if(String(this.$data.currentID).length > 10) return 'error';
                if(!Number.isInteger(Number(this.$data.currentID))) return 'error';
                return 'good'
            }
            return 'empty'
        }
    }
}
</script>
<style lang="less">
.recover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
        font-size: 30px;
        margin: 10px 0px;
    }

    .message {
        flex-direction: column;
        max-width: 250px;
        font-family: 'os-light';

        p {
            margin: 5px 0px;
        }
    }

    .identifier {
        width: 100%;
        text-align: center;
        margin: 20px 0px;
        border: none;
        background-color: black;
        color: #00e3ff;
        border-bottom: 1px solid #00e3ff;
        font-family: 'os-regular';
        font-size: 20px;
    }

    .action {
        flex-direction: column;
        align-items: center;
        .qr-code {
            background: linear-gradient(90deg, yellow 0%, #00e3ff 100%);
            cursor: pointer;
        }
    }

    .desktop {
        height: 241px;
        div.error, div.empty {
            width: 155px;
            height: 155px;

            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }

    .mobile {

        div {
            border-radius: 15px;
            padding: 10px 30px;
            margin: 10px;
        }

        .action {
            @color1: #b9f900;
            @color2: white;
            @color3: #9df725;

            background: @color1;
            color: black;

            border-radius: 15px;
            padding: 10px 30px;
            margin: 10px;

            box-shadow: 1px 1px 20px 0 @color3;

            cursor: pointer;

            font-family: 'os-extrabold';
            font-size: 20px;
        }
    }

    .error {
        border: 2px dashed #ff692f;
        color: #ff692f;
    }

    .empty {
        border: 2px dashed yellow;
        color: yellow;
    }
}
</style>