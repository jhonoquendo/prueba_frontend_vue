<template>
    <div>
        <Buscador/>
        <Galeria/>
    </div>
</template>

<script>

import Buscador from './Buscador';
import Galeria from './Galeria';

export default {
    data(){
        return {

        }
    },
    components:{
        Buscador,Galeria
    }
}
</script>

<style>
    body{
        background: url(../assets/img/lampara.jpg);
        background-position: 50% 50%;
    }
</style>