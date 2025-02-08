<template>
  <content-header title="Employee Update" />
  <common-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <!-- General form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Employee Update Form</h3>
            </div>

            <!-- Form Start -->
            <form @submit.prevent="updateEmployee">
              <div class="card-body">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" class="form-control" id="firstName" v-model="employee.firstName" placeholder="Enter First Name">
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" class="form-control" id="lastName" v-model="employee.lastName" placeholder="Enter Last Name">
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" v-model="employee.email" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" v-model="employee.password" placeholder="Enter Password">
                </div>
                <div class="form-group">
                  <label for="nrc">NRC</label>
                  <input type="text" class="form-control" id="nrc" v-model="employee.nrc" placeholder="Enter NRC">
                </div>
                <div class="form-group">
                  <label for="phoneNumber">Phone Number</label>
                  <input type="text" class="form-control" id="phoneNumber" v-model="employee.phoneNumber" placeholder="Enter Phone Number">
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <textarea class="form-control" rows="2" v-model="employee.address" placeholder="Enter Address"></textarea>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Update Employee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </common-content>
</template>

<script>
import { ref, 
 } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const employee = ref({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      nrc: "",
      phoneNumber: "",
      address: ""
    });

    // Fetch employee details when component is mounted
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/employees/${route.params.id}`);
        if (!response.ok) throw new Error("Failed to fetch employee");
        const data = await response.json();
        employee.value = data;
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    // Update employee details
    const updateEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/employees/${route.params.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(employee.value),
        });

        if (!response.ok) throw new Error("Failed to update employee");

        alert("Employee updated successfully!");
        router.push("/employee"); // Redirect after successful update
      } catch (error) {
        console.error("Error updating employee:", error);
      }
    };

    // Load employee data when mounted
    onMounted(fetchEmployee);

    return { employee, updateEmployee };
  },
};
</script>
