<template>
  <content-header title="User Listing"></content-header>
  <common-content>
    <div class="container">
      <form class="row g-2 align-items-center p-4" @submit.prevent="featchUsers">
        <div class="col-3">
          <input type="text" v-model="searchForm.email" class="form-control" placeholder="Enter Email">
        </div>
        <div class="col-3">
          <input type="text" v-model="searchForm.username" class="form-control" placeholder="Entrer Username">
        </div>
        <div class="col-3">
          <input type="text" v-model="searchForm.address" class="form-control" placeholder="Enter Address">
        </div>
        <div class="col-3 d-grid">
          <button type="submit" class="btn btn-primary">Search</button>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <div class="card-tools">
              <router-link to="/newUser" class="btn btn-block btn-outline-primary float-right">New User</router-link>
            </div>
          </div>
          <div class="card-body">
            <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
              <div class="row">
                <div class="col-sm-12 col-md-6"></div>
                <div class="col-sm-12 col-md-6"></div>
              </div>
              <div class="row">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>User Id</th>
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
              <div class="row">
                <div class="col-sm-12 col-md-5">
                  <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">
                    Showing {{ ((currentPage - 1) * pageSize + 1) }} to {{ Math.min(currentPage * pageSize, totalRecords)
                    }} of {{ totalRecords }}
                    entries</div>
                </div>
                <div class="col-sm-12 col-md-7">
                  <div class="dataTables_paginate paging_simple_numbers float-right" id="example2_paginate">
                    <ul class="pagination">
                      <li class="paginate_button page-item previous" :class="{ disabled: currentPage === 1 }"
                        id="example2_previous">
                        <a href="#" aria-controls="example2" data-dt-idx="0" tabindex="0"
                          @click="changePage(currentPage - 1)" class="page-link">Previous</a>
                      </li>
                      <li v-for="page in numberOfPages" :key="page" class="paginate_button page-item"
                        :class="{ active: currentPage === page }">
                        <a href="#" @click="changePage(page)" aria-controls="example2" data-dt-idx="1" tabindex="0"
                          class="page-link">{{ page }}</a>
                      </li>
                      <li class="paginate_button page-item next" :class="{ disabled: currentPage === numberOfPages }"
                        id="example2_next"><a href="#" aria-controls="example2" data-dt-idx="7" tabindex="0"
                          @click="changePage(currentPage + 1)" class="page-link">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </common-content>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const currentPage = ref(1);
const pageSize = ref(3);
const numberOfPages = ref(0);
const hasNextPage = ref(false);
const totalRecords = ref(0);
const searchForm = ref({
  email: '',
  username: '',
  address: ''
});

const users = ref([]);

const featchUsers = async () => {
  const response = await axios.post(`http://localhost:8080/api/users/search?currentPage=${currentPage.value}&pageSize=${pageSize.value}`, searchForm.value)
  numberOfPages.value = response.data.numberOfPages
  hasNextPage.value = response.data.hasNextPage
  totalRecords.value = response.data.totalRecords;
  users.value = response.data.data;
}

const changePage = (page) => {
  currentPage.value = page;
  featchUsers();
}

onMounted(featchUsers);

</script>