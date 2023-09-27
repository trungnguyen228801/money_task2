<template>
    <h1>Transactions is here</h1>
    <div v-if="transactions">
        <div class="item"  v-for="transaction in transactions" :key="transaction.id">
            <router-link :to="{ name: 'transacion-detail-route', params: { id: transaction.id } }" >{{ transaction.name }} - price: {{ transaction.id }}</router-link>
        </div>
    </div>
    </template>

<script>
export default {
    data(){
        return {
            transactions: [],
        }
    },
    created() {
        fetch('http://localhost:3000/transactions')
         .then((response) => response.json())
         .then((data) => (this.transactions = data))
    },  
}
</script>