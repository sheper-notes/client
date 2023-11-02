<template lang="">
    <div class="SideBar">
        <div style="margin-top: 8px">
            <button class="button">Shape</button>
            <button class="button">Test</button>
            <button class="button">Test</button>
            <button class="button">Test</button>
            <button class="button">Test</button>
            <button class="button">Test</button>
            <button class="button">Test</button>
            <button class="button">Test</button>
        </div>

        <div>
            <button @click="OpenSettings" class="button">Test</button>
            <button class="button">Test</button>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "SideBar",
    methods: {
        OpenSettings: function() {
            this.$router.push({ path: "/settings" })
        }
    }
}
</script>
<style lang="css">
.SideBar {
        z-index: 2;
        height: 48px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #ffffff;
        border-bottom: 1px solid #d4d4d4;
}

</style>