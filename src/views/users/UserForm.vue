<template>
  <content-header :title="headerTitle"></content-header>
  <common-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">{{ headerTitle }} Form</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form @submit.prevent="handleSubmit">
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">UserName</label>
                  <input type="text" class="form-control" v-model="user.username" id="exampleInputUserName"
                    placeholder="Enter UserName">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" v-model="user.email" id="exampleInputEmail1"
                    placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label>Select UserRole</label>
                  <select class="form-control" v-model="user.userRole.id">
                    <option v-for="role in userRoles" :key="role.id" :value="role.id">
                      {{ role.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleInputAddress">Address</label>
                  <input type="address" class="form-control" v-model="user.address" id="exampleInputAddress"
                    placeholder="Enter Address">
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
              </div>
              <!-- /.card-body -->

              <div class="card-footer">
                <button type="submit" class="btn btn-primary">{{buttonTitle}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </common-content>
</template>
<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from "vue-router"
const route = useRoute();
const router = useRouter();
const userRoles = ref([]);

const isEditing = computed(()=>{
  return !!route.params.id;
});

const user = ref({
  id: '',
  username: '',
  email: '',
  address: '',
  userRole:
  {
    id: '',
    name: '',
    description: ''
  }
});
const buttonTitle = computed(()=>{
  return isEditing.value ? 'Update' : 'Create';
});
const headerTitle = computed(()=>{
  return isEditing.value ? 'Edit User' : 'Create User';
});
onMounted(() => {
  if (isEditing.value) {
    fetchUserById();
  }
  fetchUserRoles();
});

const fetchUserRoles = async () => {
  const response = await axios.get("http://localhost:8080/api/roles");
  userRoles.value = response.data;
}

const fetchUserById = async () => {
  const userId = route.params.id;
  const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
  user.value = response.data;
}

const handleSubmit = () =>{
  if(isEditing.value){
    updateUserAction();
  }else{
    createUserAction();
  }
}

const createUserAction = async () => {
  const response = await axios.post(`http://localhost:8080/api/users`, user.value);
  user.value = response.data
  router.push(`/users/${user.value.id}`)
}

const updateUserAction = async () => {
  await axios.put(`http://localhost:8080/api/users/${user.value.id}`, user.value);
  router.push(`/users/${user.value.id}`)
}
</script>