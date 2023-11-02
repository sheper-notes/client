<template>
    <canvas id="c"></canvas>
</template>

<script>
    export default {
        data() {
            return {
                shape: {
                    square: "square",
                    triangle: "triangle",
                    circle: "circle"
                }
            }
        },
        mounted() {
            var c = document.getElementById("c");
            var ctx = c.getContext("2d");    
            ctx.canvas.width  = window.innerWidth;
            ctx.canvas.height = window.innerHeight  - 48;

            var obj = { shape: "square", posX: 100, posY: 100, width: 720, height:400, color: "red"}
            this.DrawShape(obj)
            var obj = { shape: "circle", posX: 300, posY: 300, width: 100, height:100, color: "aqua"}
            this.DrawShape(obj)
            var obj = { shape: "triangle", posX: 400, posY: 400, width: 100, height:100, color: "green"}
            this.DrawShape(obj)
            
        },
        methods:{
            DrawShape: function(object){
                var c = document.getElementById("c");
                var ctx = c.getContext("2d");
                ctx.fillStyle = object.color;
                if(object.shape == this.shape.square){
                    ctx.fillRect(object.posX, object.posY, object.width, object.height);

                } else if(object.shape == this.shape.triangle){
                    
                } else if(object.shape == this.shape.circle){
                    ctx.beginPath();
                    ctx.ellipse(object.posX, object.posY, object.width, object.height, Math.PI / 4, 0, 2 * Math.PI);
                    ctx.fill();
                }

            }
        }
    }
</script>

<style lang="css" >
    canvas{
        width: 100vw;
        position: fixed;
        left: 0px;
        top: 48px;
        height: calc(100vh - 48px);
    }
</style>