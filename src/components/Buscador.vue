<template>
    <div class="bus">
        <div class="contenedor-bus">
            <select name="" id="" class="bus_select">
                <option value="">Nature</option>
                <option value="">Tigers</option>
                <option value="">People</option>
            </select>
            <label for="buscador">
                <input type="text" :v-bind="query" class="bus_input" id="buscador" placeholder="Buscar...">
                <button class="btn-bus" @click="probar"><span class='material-icons'>search</span></button>
            </label>
        </div>
    </div>
</template>

<script>

/*import { createClient } from 'pexels';
const client = createClient('563492ad6f917000010000016116809ae5cf43dabaf8c3336feba942');*/



export default {
    data(){
        return{
            query: '',
            datos: [],
            obj : ''
        }
    },
    methods:{
        probar(){
            alert('Hola '+this.query);
        }
    }

}
</script>

<style>
    .bus{
        width: 85%;
        background-color: white;
        opacity: 0.8;
        color: black;
        margin: 0 auto;
        border-radius: 15px;
        border: 1px gray solid;
    }

    .contenedor-bus{
        box-shadow: 1px 1px 1px gray;
    }

    .bus_input, .bus_select{
        border: 0px;
        padding: 5px;
        font-size: 25px;
    }

    .bus_input{
        margin-left: 20px;
        margin-right: 20px;
        text-align: center;
        width: 400px;
        height: 50px;
        color: #856E55;
    }

    .bus_select{
        color: #856E55;
        height: 55px;
    }

    .btn-bus{
        border: 0px;
        width: 55px;
        height: 50px;
        line-height: 30px;
        background: cornflowerblue;
        color: white;
        padding: 10px;
        border-radius: 50px;
        cursor:pointer;
    }

    .btn-bus span{
        line-height: 30px;
    }
</style>