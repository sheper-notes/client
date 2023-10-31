<script>
    import { HubConnectionBuilder } from '@microsoft/signalr';

    import SideBar from '../components/SideBar.vue';
    import OptionsBar from '../components/OptionsBar.vue';
    import CanvasObject from '../components/CanvasObject.vue';
    export default {
        components: {
            SideBar,
            OptionsBar,
            CanvasObject
        },
        data() {
            return {
                connection: null
            }
        },
        created() {
                const connection = new HubConnectionBuilder()
                .withUrl('https://localhost:7055/updateHub')
                .build();

                connection.start().then(() => {
                    connection.send('ReceiveUpdates', "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJFZGl0b3IiLCJCb2FyZCI6IjEiLCJVc2VyIjoiZGF3ZGF3ZCIsImV4cCI6MTY5ODc2MTA1N30.8jwjHemNhyW8Qr5a6rDjKCUsFYRojgxwZNbrVBkYnURP_Dhhrrz9n8sQ0VoVADWduqxJxidGU8VWyZfpsekkrQ")
    
                }).catch(err => {
                    console.error(err.toString())
                })
                connection.on('AddedClient', () => {
                    console.log("AddedClient")
                })        

        },

    }
</script>

<template lang="">
    <div class="EditorView">
        <SideBar />
        <OptionsBar />
        <CanvasObject/>

    </div>
</template>

<style scoped lang="css">
    .EditorView {
        background-color: #ebebeb;
    }


</style>