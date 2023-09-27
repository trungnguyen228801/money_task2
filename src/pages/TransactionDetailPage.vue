<template>
    <div v-if="transaction">
        <h1>{{ transaction.id }}</h1>
        <h1>{{ transaction.name }}</h1>
        <h1>{{ transaction.price }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            transaction:null,
        }
    },
    created() {
        fetch('http://localhost:3000/transactions/'+this.$route.params.id)
         .then((response) => response.json())
         .then((data) => (this.transaction = data))
    }
}
</script>