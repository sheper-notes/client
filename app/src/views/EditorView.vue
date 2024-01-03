<script>
    import { HubConnectionBuilder } from '@microsoft/signalr';

    export default {
        methods: {
            handleStageMouseDown(e) {

                if (e.target === e.target.getStage()) {
                    this.currentElement = '';
                    return;
                }

                const name = e.target.name();
                console.log(e.target);
                const rect = this.shapes.square.findIndex((r) => r.Id === name);
                const circle = this.shapes.circle.findIndex((r) => r.Id === name);
                const text = this.shapes.text.findIndex((r) => r.Id === name);

                if (rect != -1) {
                    this.shapes.square[rect].X = e.target.x()
                    this.shapes.square[rect].Y = e.target.y()

                    this.$refs.name.value = this.shapes.square[rect].Name;
                    this.$refs.x.value = this.shapes.square[rect].X;
                    this.$refs.y.value = this.shapes.square[rect].Y;
                    this.$refs.width.value = this.shapes.square[rect].Width;
                    this.$refs.height.value = this.shapes.square[rect].Height;
                    this.$refs.color.value = this.shapes.square[rect].Color;

                    this.currentElement = name;
                } else if(circle != -1) {
                    this.shapes.circle[circle].X = e.target.x()
                    this.shapes.circle[circle].Y = e.target.y()

                    this.$refs.name.value = this.shapes.circle[circle].Name;
                    this.$refs.x.value = this.shapes.circle[circle].X;
                    this.$refs.y.value = this.shapes.circle[circle].Y;
                    this.$refs.width.value = this.shapes.circle[circle].Width;
                    this.$refs.height.value = this.shapes.circle[circle].Height;
                    this.$refs.color.value = this.shapes.circle[circle].Color;

                    this.currentElement = name;
                } else if(text != -1) {
                    this.shapes.text[text].X = e.target.x()
                    this.shapes.text[text].Y = e.target.y()

                    this.$refs.name.value = this.shapes.text[text].Name;
                    this.$refs.x.value = this.shapes.text[text].X;
                    this.$refs.y.value = this.shapes.text[text].Y;
                    this.$refs.width.value = this.shapes.text[text].Width;
                    this.$refs.height.value = this.shapes.text[text].Height;
                    this.$refs.color.value = this.shapes.text[text].Color;

                    this.currentElement = name;
                } 
                else {
                    this.currentElement = '';
                }
            },
            addSquare(){
                this.shapes.square.push({Id: 1, BoardId: 1, Name: "test square", X: 20, Y: 20, Width: 200, Height: 200, Color: "#000000"})
            },
            addCircle(){
                this.shapes.circle.push({Id: 2, BoardId: 1, Name: "test circle", X: 180, Y: 180, Width: 200, Height: 200, Color: "#000000"})
                
            },
            addText(){
                this.shapes.text.push({Id: 3, BoardId: 1, Name: "text", X: 20, Y: 20, Width: 200, Height: 40, Color: "#000000"})                   
            },
            nameChange(event){
                const rect = this.shapes.square.findIndex((r) => r.Id === this.currentElement);
                const circle = this.shapes.circle.findIndex((r) => r.Id === this.currentElement);
                const text = this.shapes.text.findIndex((r) => r.Id === this.currentElement);

                if (rect != -1) {
                    this.shapes.square[rect].Name = event.target.value
                }
                if (circle != -1) {
                    this.shapes.circle[circle].Name = event.target.value
                }
                if (text != -1) {
                    this.shapes.text[text].Name = event.target.value
                }
            },
            widthChange(event){
                const rect = this.shapes.square.findIndex((r) => r.Id === this.currentElement);
                const circle = this.shapes.circle.findIndex((r) => r.Id === this.currentElement);
                const text = this.shapes.text.findIndex((r) => r.Id === this.currentElement);

                if (rect != -1) {
                    this.shapes.square[rect].Width = event.target.value
                }
                if (circle != -1) {
                    this.shapes.circle[circle].Width = event.target.value
                }
                if (text != -1) {
                    this.shapes.text[text].Width = event.target.value
                }
            },
            heightChange(event){
                const rect = this.shapes.square.findIndex((r) => r.Id === this.currentElement);
                const circle = this.shapes.circle.findIndex((r) => r.Id === this.currentElement);
                const text = this.shapes.text.findIndex((r) => r.Id === this.currentElement);

                if (rect != -1) {
                    this.shapes.square[rect].Height = event.target.value
                }
                if (circle != -1) {
                    this.shapes.circle[circle].Height = event.target.value
                }
                if (text != -1) {
                    this.shapes.text[text].Height = event.target.value
                }
            },
            colorChange(event){
                const rect = this.shapes.square.findIndex((r) => r.Id === this.currentElement);
                const circle = this.shapes.circle.findIndex((r) => r.Id === this.currentElement);
                const text = this.shapes.text.findIndex((r) => r.Id === this.currentElement);

                if (rect != -1) {
                    this.shapes.square[rect].Color = event.target.value
                }
                if (circle != -1) {
                    this.shapes.circle[circle].Color = event.target.value
                }
                if (text != -1) {
                    this.shapes.text[text].Color = event.target.value
                }
            },
            handleDragStart() {
                this.isDragging = true;
            },
            handleDragEnd(e) {
                console.log(e);
                this.isDragging = false;
            }
        },
        data() {
            return {
                currentElement: "",
                currentElementType: null,
                shapes: {
                    circle: [],
                    square: [],
                    text: []
                },
                connection: null,
                configKonva: {
                    width: window.innerWidth,
                    height: window.innerHeight - 60,
                    
                },
                configCircle: {
                    x: 1800,
                    y: 100,
                    radius: 70,
                    fill: "blue",
                    stroke: "black",
                    strokeWidth: 1
                }
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
        <div class="TopBar">
            <button @click="addSquare()">Add Square</button>
            <button @click="addCircle()">Add Circle</button>
            <button @click="addText()">Add Text</button>
            <label for="">Name</label>
            <input ref="name" type="text" @blur="nameChange($event)">
            <label for="">X</label>
            <input readonly ref="x" type="number" @blur="xChange($event)">
            <label for="">Y</label>
            <input readonly ref="y" type="number" @blur="yChange($event)">
            <label for="">Width</label>
            <input ref="width" type="number" @blur="widthChange($event)">
            <label for="">Height</label>
            <input ref="height" type="number" @blur="heightChange($event)">
            <label for="">Color</label>
            <input ref="color" type="color" @blur="colorChange($event)">
            <button>Export</button>
        </div>
        <v-stage 
        ref="stage" 
        :config="configKonva"
        @dragend="handleStageMouseDown"
        @click="handleStageMouseDown"
        @dragstart="handleStageMouseDown"
        >
            <v-layer ref="layer">
                <v-ellipse
                v-for="item in shapes.circle"
                :key="item.Id"
                :config="{
                    x: item.X,
                    y: item.Y,
                    fill: item.Color,
                    width: item.Width,
                    height: item.Height,
                    name: item.Id,
                    draggable: true,
                }"></v-ellipse>
                <v-rect
                v-for="item in shapes.square"
                :key="item.Id"
                :config="{
                    x: item.X,
                    y: item.Y,
                    fill: item.Color,
                    width: item.Width,
                    height: item.Height,
                    name: item.Id,
                    draggable: true,
                }"
                ></v-rect>
                <v-text
                v-for="item in shapes.text"
                :key="item.Id"
                :config="{
                    x: item.X,
                    y: item.Y,
                    fill: item.Color,
                    width: item.Width,
                    fontSize: item.Height,
                    name: item.Id,
                    text: item.Name,
                    draggable: true,
                }"
                ></v-text>
                <v-transformer ref="transformer" />
            </v-layer>
        </v-stage>
    </div>
</template>

<style scoped lang="css">
    .TopBar {
        width: 100%;
        height: 60px;
        background-color: #2f3033;
    }

    .EditorView {
        background-color: #ebebeb;
    }


</style>