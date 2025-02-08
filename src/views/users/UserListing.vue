<template>
  <content-header title="User Listing"></content-header>
  <common-content>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-tools">
              <router-link to="/newUser" class="btn btn-block btn-outline-primary float-right">New User</router-link>
            </div>
          </div>
          <div class="card-body p-0">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Id</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Role</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ user.id }}</td>
                  <td>{{ user.userName }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.address }}</td>
                  <td>{{ user?.userRole?.name || '-' }}</td>
                  <td>
                    <div class="btn-group btn-group-sm">
                      <router-link :to="`/users/${user.id}`" class="btn btn-info"><i class="fas fa-eye"></i>
                      </router-link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </common-content>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  setup() {
    const users = ref([]);
    const featchUsers = async () => {
      const response = await axios.get("http://localhost:8080/api/users?currentPage=1&pageSize=10&username=");
      users.value = response.data.data;
    }

    onMounted(featchUsers);
    return { users };
  }
};
</script>