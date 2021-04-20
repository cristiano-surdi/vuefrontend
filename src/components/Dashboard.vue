<template>
  <div class="hello">
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <CreateUser @createUser="userCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Users v-if="users.length > 0" :users="users" />
    </div>
  </div>
</template>

<script>
import CreateUser from './CreateUser.vue'
import DisplayBoard from './DisplayBoard.vue'
import Users from './Users.vue'
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
  name: 'Dashboard',
  components: {
    CreateUser,
    DisplayBoard,
    Users
  },
  data() {
      return {
          users: [],
          numberOfUsers: 0
      }
  },
  methods: {
    getAllUsers() {
            const url = `${baseApiUrl}/users`
            
            axios.get(url).then(res => {
                console.log(res.data)
                this.users = res.data
                this.numberOfUsers = this.users.length
            })
        },
    userCreate(data) {
      const method = 'post'
      axios[method](`${baseApiUrl}/users`, data)
          .then(() => {
              this.getAllUsers();
          })
    }
  },
  mounted () {
    this.getAllUsers();
  }
}
</script>