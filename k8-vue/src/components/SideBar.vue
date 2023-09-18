<template lang="">
    <div class="SideBar">
        <div style="margin-top: 8px">
            <button class="button orange"></button>
            <button class="button turquoise"></button>
            <button class="button blue"></button>
            <button class="button yellow"></button>
            <button class="button purple"></button>
            <button class="button light-green"></button>
            <button class="button light-red"></button>
            <button class="button green"></button>
        </div>

        <div>
            <button class="button light-blue"></button>
            <button class="button"></button>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "SideBar"
}
</script>
<style lang="css">
.SideBar {
        width: 64px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #ffffff;
        border-right: 1px solid #d4d4d4;
}


.button {
    width: 48px;
    height: 48px;
    border-width: 0px;
    border-radius: 5px;
    margin-bottom: 8px;
    margin-left: 8px;
}

.blue {
    background-color: #5081FF;
}

.orange {
    background-color: #F58C0F;
}

.turquoise{
    background-color: #00FFD1
}

.yellow {
    background-color: #FCFF7E;
}

.purple{
    background-color: #F80CEE;
}

.light-green {
    background-color: #8AFF80;
}

.light-red {
    background-color: #FF8080;
}

.green {
    background-color: #039200;
}

.light-blue{
    background-color: #00D1FF;
}

.white{
    background-color: #ffffff;
}
</style>