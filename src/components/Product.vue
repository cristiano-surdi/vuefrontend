<template>
  <div class="hello">
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-8">
          <CreateProduct @createProduct="productCreate($event)" />
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
      <Products
        v-if="products.length > 0"
        :products="products"
        @deleteProduct="productDelete($event)"
      />
    </div>
  </div>
</template>

<script>
import CreateProduct from "./CreateProduct.vue";
import Products from "./Products.vue";
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
  name: "Product",
  components: {
    CreateProduct,
    Products,
  },
  data() {
    return {
      products: [],
      numberOfProducts: 0,
    };
  },
  methods: {
    getAllProducts() {
      const url = `${baseApiUrl}/products`;

      axios.get(url).then((res) => {
        console.log(res.data);
        this.products = res.data;
        this.numberOfProducts = this.products.length;
      });
    },
    productCreate(data) {
      const method = "post";
      axios[method](`${baseApiUrl}/products`, data).then(() => {
        this.getAllProducts();
      });
    },
    productDelete(data) {
      const id = data.id;
      axios
        .delete(`${baseApiUrl}/products/${id}`)
        .then(() => {
          this.getAllProducts();
        })
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>