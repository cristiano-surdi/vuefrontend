<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create User</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" v-model="name" name="name" id="name" aria-describedby="emailHelp" placeholder="Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="text" class="form-control" v-model="email" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label htmlFor="exampleInputPassword1">Phone</label>
                        <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="Phone" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="Password" />
                    </div>
                </div>
                <button type="button" @click='createUser()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateUser',
  data() {
    return {
      name: '',
      password: '',
      phone: '',
      email: ''
    }
  },
  methods: {
      createUser() {
          console.log(this.name)
          const payload = {
              name: this.name,
              password: this.password,
              phone: this.phone,
              email: this.email
          }
          this.$emit('createUser', payload)
          this.clearForm();
      },
      clearForm() {
          this.name = "";
          this.password = "";
          this.phone = "";
          this.email = "";
      }
  }
}
</script>