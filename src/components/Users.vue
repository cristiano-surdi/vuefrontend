<template>
    <div class="container">
        <h2>Users</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td><button type="button" @click='deleteUser(item)' class="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Users',
    props: ['users'],
    methods: {
      deleteUser(data) {
          console.log(data)
          this.$emit('deleteUser', data)
      }
  }
}
</script>