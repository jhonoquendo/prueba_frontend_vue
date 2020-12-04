<template>
    <div class="contenedor">
        <div v-for="video in videos" :key="video.id">
            <Item :video="video"/>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import Item from './Item';

export default {
    data(){
        return {
            videos:[],
            Urlbase: 'https://api.pexels.com',
            apiKey: '563492ad6f917000010000016116809ae5cf43dabaf8c3336feba942',
            pagina:1,
            perPagina:10,
            paginas:[]
        }
    },
    created(){
        this.obtenerVideos();
    },
    methods:{
        async obtenerVideos(){
            const res = await axios.get(`${this.Urlbase}/videos/popular?per_page=${this.pagina}`,{
                headers:{
                  Authorization: `${this.apiKey}`
                }
            });
            console.log(res.data.videos[0].video_pictures);
            this.videos = res.data.videos[0].video_pictures;
        }
    },
    components:{
        Item
    }
}
</script>

<style>
    .contenedor{
        margin-top: 50px;
        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 0.8;
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>