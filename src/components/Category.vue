<template>
  <div class="hello">
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-8">
          <CreateCategory @createCategory="categoryCreate($event)" />
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
      <Categories
        v-if="categories.length > 0"
        :categories="categories"
        @deleteCategory="categoryDelete($event)"
      />
    </div>
  </div>
</template>

<script>
import CreateCategory from "./CreateCategory.vue";
import Categories from "./Categories";
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
  name: "Category",
  components: {
    CreateCategory,
    Categories,
  },
  data() {
    return {
      categories: [],
      numberOfCategories: 0,
    };
  },
  methods: {
    getAllCategories() {
      const url = `${baseApiUrl}/categories`;

      axios.get(url).then((res) => {
        console.log(res.data);
        this.categories = res.data;
        this.numberOfCategories = this.categories.length;
      });
    },
    categoryCreate(data) {
      const method = "post";
      axios[method](`${baseApiUrl}/categories`, data).then(() => {
        this.getAllCategories();
      });
    },
    categoryDelete(data) {
      const id = data.id;
      axios
        .delete(`${baseApiUrl}/categories/${id}`)
        .then(() => {
          this.getAllCategories();
        })
    },
  },
  mounted() {
    this.getAllCategories();
  },
};
</script>