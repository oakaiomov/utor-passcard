<template>
<div class="dashboard">
    <div class="logo"/>
    <div class="header">Passcard</div>
    <div class="generate" @click="onGenerate">Generate New</div>
    <div class="recovery">
        <div class="message">If you lost your passcard and have it's ID, you can recover an online copy here</div>
        <div class="restore" @click="onRestore">Restore</div>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        onGenerate () {
            window.location.assign(`?${String(new Date().valueOf() * new Date().getMilliseconds()).substr(-6,6)}`)
        },
        onRestore () {
            window.location.assign('?recover')
        }
    }

}
</script>
<style lang="less">
.dashboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
        background-image: url(../assets/logo_color_small.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        width: 161px;
        height: 70px;
    }

    .header {
        font-size: 30px;
        margin: 10px 0px;
    }

    .generate {
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

    .recovery {
        margin-top: 50px;
        max-width: 220px;
        display: flex;
        flex-direction: column;

        .restore {
            align-self: flex-end;

            @color1: #00e6e4;
            @color2: white;
            @color3: #00e3ff;

            background: @color1;
            color: black;

            border-radius: 10px;
            padding: 5px 20px;
            margin: 10px;

            box-shadow: 1px 1px 20px 0 @color3;

            cursor: pointer;

            font-family: 'os-extrabold';
            font-size: 16px;
        }
    }
}
</style>