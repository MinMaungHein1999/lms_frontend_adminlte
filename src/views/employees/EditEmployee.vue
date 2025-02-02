<template>
  <content-header title="Employee Update" />
  <common-content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Employee Update Form</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form>
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputFirstName">First Name</label>
                  <input type="text" class="form-control" id="firstName" placeholder="Enter First Name">
                </div>
                <div class="form-group">
                  <label for="exampleInputLastName">Last Name</label>
                  <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                  <label for="exampleInputNRC">NRC</label>
                  <input type="text" class="form-control" id="nrc" placeholder="Enter NRC">
                </div>
                <div class="form-group">
                  <label for="exampleInputNRC">Phone Number</label>
                  <input type="text" class="form-control" id="phoneNumber" placeholder="Enter Phone Number">
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <textarea class="form-control" rows="2" placeholder="Enter Address"></textarea>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
              </div>
              <!-- /.card-body -->

              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </common-content>
</template>