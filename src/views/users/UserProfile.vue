<template>
  <content-header title="User Profile"></content-header>
  <common-content>
    <div class="col-md-6">
      <!-- Profile Image -->
      <div class="card card-primary card-outline">
        <div class="card-body box-profile">
          <div class="text-center">
            <img class="profile-user-img img-fluid img-circle" src="/adminlte/dist/img/user4-128x128.jpg"
              alt="User profile picture">
          </div>

          <h3 class="profile-username text-center">{{ user?.username }}</h3>

          <p class="text-muted text-center">{{ user?.userRole?.name }}</p>

          <ul class="list-group list-group-unbordered mb-3">
            <li class="list-group-item">
              <b>id</b> <a class="float-right">{{ user?.id }}</a>
            </li>
            <li class="list-group-item">
              <b>Email</b> <a class="float-right">{{ user?.email }}</a>
            </li>
            <li class="list-group-item">
              <b>Address</b> <a class="float-right">{{ user?.address }}</a>
            </li>
          </ul>
          <router-link :to="`/users/edit/${user?.id}`" class="btn btn-primary btn-block"><b>Edit</b>
          </router-link>
          <button type="button" @click="deleteUserAction" class="btn btn-block btn-danger">Delete</button>
        </div>
        <!-- /.card-body -->
      </div>
    </div>
  </common-content>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const user = ref({
  id: '',
  username: '',
  email: '',
  address: '',
  userRole: null
});

const fetchUserById = async () => {
  const userId = route.params.id;
  const response = await axios.get(`http://localhost:8080/api/users/${userId}`)
  user.value = response.data;
};

const deleteUserAction = async () => {
  if (confirm("Are you sure you want to delete this user?")) {
    await axios.delete(`http://localhost:8080/api/users/${user.value.id}`)
    alert("User deleted successfully!")
    router.push("/users");
  }
}

onMounted(() => {
  fetchUserById();
});
</script>