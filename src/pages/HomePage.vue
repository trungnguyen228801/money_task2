<template>

    <h1>Homepage is here</h1>
    <h3>Ref, reactive</h3>
    <p>{{ firstName }}</p>
    <p>{{ car }}</p>
    <button @click="onChangeSomething">Click me</button>
    <hr>
    <h3>Computed</h3>
    <input type="text" v-model="searchText" />
    <ul>
        <li v-for="(film, index) in filmsFilled" :key="index">{{ film }}</li>
    </ul>
</template>

<script>

import { ref, reactive, computed, watch, watchEffect } from "vue";

// ref=> giá trị gốc như, string, boolean ,number
// reactive=> giá trị gốc như Object, array

export default {
    props:{
        theme:{
            type: String,
            required: true,
            default: "light",
        }
    },
    // setup(_, context) {
    // setup(props, context) {
    setup({ theme }, {emit}) {
        const firstName = ref("Sky Blue");
        const car = reactive({
            name: "Mec",
            price: 100000,
        });
        const searchText = ref('');

        const films = reactive(['something', 'hero', 'marvel', 'black tiger', 'youtube']);
        const filmsFilled = computed(() => 
            films.map((film) => {
                film = film.toLowerCase();
                return film;
            }).filter((film) => film.includes(searchText.value.toLowerCase()))
        )

        function onChangeSomething() {
            firstName.value = "Youtube";
            car.name = "T rung hero";
            car.price = 2000000000000;
        };

        //watch khi thay đổi một biến nào đấy thực hiện một công việc nào đấy.
        watch(searchText, (newValue, oldValue) =>{
            console.log(newValue, oldValue);
        })
        // computed trả về giá trị còn watchEffect làm một chức năng nào đó.
        watchEffect(()=>{
            if(searchText.value){
                console.log("run again");
            }
        })
        return {
            firstName, car, onChangeSomething, filmsFilled, searchText
        };
    }
}


</script>