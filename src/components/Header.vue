<template>
    <div class="header">
        <div> Vue.js With Java</div>
        <router-link to="/">Home</router-link>
        <span> / </span>
        <router-link to="/dashboard">Dashboard</router-link>
        <span> / </span>
        <router-link to="/products">Produtos</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>