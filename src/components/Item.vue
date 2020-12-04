<template>
        <div class="tarjeta">
            <div class="tarjeta_img">
                <img :src="video.picture" width="350" height="200" alt="">
            </div>
            <div class="tarjeta_titulo">
                <a href="">Ver más ...</a>
            </div>
        </div>
</template>

<script>
export default {
    props: ['video'],
    created(){
        
    }
}
</script>

<style>
    .tarjeta{
        width: 400px;
        height: auto;
        margin-bottom: 10px;
        margin-top: 10px;
        cursor:pointer;
    }

    .tarjeta_titulo{
        background: lightgreen;
        box-shadow: 1px 1px 2px gray;
        border-radius: 20px;
        color:black;
        font-size: 15px;
        padding: 15px 0px;
    }

    .tarjeta_titulo a{
        text-decoration: none;
        font-style: italic;
        font-weight: bold;
        color:gray;
    }

    .tarjeta_img{
        width: 100%;
    }

    .tarjeta_img img{
        border-radius: 20px;
    }
</style>