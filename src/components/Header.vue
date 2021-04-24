<template>
    <div class="header">
        <router-link to="/">Home</router-link>
        <span> / </span>
        <router-link to="/dashboard">Dashboard</router-link>
        <span> / </span>
        <router-link to="/products">Produtos</router-link>
        <span> / </span>
        <router-link to="/categories">Categorias</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>