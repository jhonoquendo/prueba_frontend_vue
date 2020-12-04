<template>
        <div class="tarjeta">
            <div class="tarjeta_img">
                <img :src="video.picture" width="350" height="200" alt="">
            </div>
            <div class="tarjeta_titulo">
                <a href="">{{video.nr+1}}. Ver más ...</a>
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
        margin-bottom: 20px;
        margin-top: 15px;
        cursor:pointer;
    }

    .tarjeta_titulo{
        background: #6F8BE8;
        box-shadow: 1px 1px 2px gray;
        border-radius: 20px;
        font-size: 15px;
        padding: 15px 0px;
        margin: 15px 25px;
    }

    .tarjeta_titulo a{
        text-decoration: none;
        font-style: italic;
        font-weight: bold;
        color:#f4f4f4;
    }

    .tarjeta_titulo:hover{
        background: cadetblue;
        transition: all .1s initial;
    }

    .tarjeta_img{
        width: 100%;
    }

    .tarjeta_img img{
        border-radius: 20px;
        box-shadow: 3px 3px 4px gray;
    }

    .tarjeta_img img:hover{
        transform: scale(1.1,1.1);
        transition: all .5s ease-in-out;
        opacity: .9;
    }
</style>