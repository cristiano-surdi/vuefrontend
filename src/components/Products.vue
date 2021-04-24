<template>
    <div class="container">
        <h2>Products</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>URL</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.description }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.imgUrl }}</td>
                  <td><button type="button" @click='deleteCategory(product)' class="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Products',
    props: ['products'],
    methods: {
      deleteCategory(data) {
          console.log(data)
          this.$emit('deleteCategory', data)
      }
  }
}
</script>