<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create Product</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" v-model="name" name="name" id="name" aria-describedby="emailHelp" placeholder="Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <input type="text" class="form-control" v-model="description" name="description" id="description" aria-describedby="emailHelp" placeholder="Descrition" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Price</label>
                        <input type="number" class="form-control" v-model="price" name="price" id="price" aria-describedby="emailHelp" placeholder="Price" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">Img URL</label>
                        <input type="text" class="form-control" v-model="imgUrl" name="imgUrl" id="imgUrl" aria-describedby="emailHelp" placeholder="Img URL" />
                    </div>
                </div>
                <button type="button" @click='createProduct()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateProduct',
  data() {
    return {
      name: '',
      description: '',
      price: '',
      imgUrl: ''
    }
  },
  methods: {
      createProduct() {
          console.log(this.name)
          const payload = {
              name: this.name,
              description: this.description,
              price: this.price,
              imgUrl: this.imgUrl,
          }
          this.$emit('createProduct', payload)
          this.clearForm();
      },
      clearForm() {
          this.name = "";
          this.description = "";
          this.price = "";
          this.imgUrl = "";
      }
  }
}
</script>