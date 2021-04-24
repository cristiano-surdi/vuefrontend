<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create Category</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" v-model="name" name="name" id="name" aria-describedby="emailHelp" placeholder="Name" />
                    </div>
                </div>
                <button type="button" @click='createCategory()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateCategory',
  data() {
    return {
      name: ''
    }
  },
  methods: {
      createCategory() {
          console.log(this.name)
          const payload = {
              name: this.name
          }
          this.$emit('createCategory', payload)
          this.clearForm();
      },
      clearForm() {
          this.name = "";
      }
  }
}
</script>