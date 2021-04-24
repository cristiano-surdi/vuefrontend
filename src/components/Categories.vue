<template>
    <div class="container">
        <h2>Categories</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Category Id</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="category in categories" :key="category.id">
                  <td>{{ category.id }}</td>
                  <td>{{ category.name }}</td>
                  <td><button type="button" @click='deleteCategory(category)' class="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Categories',
    props: ['categories'],
    methods: {
      deleteCategory(data) {
          console.log(data)
          this.$emit('deleteCategory', data)
      }
  }
}
</script>