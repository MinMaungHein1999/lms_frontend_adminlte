<template>
  <content-header title="Employee Management" />
  <common-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Employee Listing</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Nrc</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Address</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(employee, index) in employees" :key="employee.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.firstName }}</td>
                    <td>{{ employee.lastName }}</td>
                    <td>{{ employee.nrc }}</td>
                    <td>{{ employee.email }}</td>
                    <td>{{ employee.phone }}</td>
                    <td>{{ employee.role }}</td>
                    <td>{{ employee.address }}</td>
                    <td class="project-actions text-right">
                      <a class="btn btn-primary btn-sm mr-2" href="#">
                        <i class="fas fa-folder">
                        </i>
                        View
                      </a>
                      <a href="/employeeEdit" class="btn btn-info btn-sm mr-2">
                        <i class="fas fa-pencil-alt">
                        </i>
                        Edit
                      </a>
                      <a class="btn btn-danger btn-sm mr-2" href="#">
                        <i class="fas fa-trash">
                        </i>
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>No</th>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Nrc</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Address</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </common-content>
</template>
<script>
import { ref, onMounted, nextTick } from "vue";

export default {
  setup() {
    const employees = ref([]); // ✅ Corrected from computed([]) to ref([])

    // Fetch employees from API
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/employees");
        const data = await response.json();
        employees.value = data;

        // Ensure DataTables initializes only after the DOM updates
        await nextTick();
        // eslint-disable-next-line no-undef
        $("#example1").DataTable({
          responsive: true,
          lengthChange: false,
          autoWidth: false,
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
        }).buttons().container().appendTo("#example1_wrapper .col-md-6:eq(0)");
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    // Fetch employees when the component is mounted
    onMounted(fetchEmployees);

    return { employees };
  }
};
</script>
