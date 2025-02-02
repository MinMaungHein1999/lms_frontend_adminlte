<template>
  <!-- Site wrapper -->
  <div class="wrapper">
    <mainNavBar/>
    <mainSideBar/>
  
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <router-view />
    </div>
    <!-- /.content-wrapper -->

    <footer class="main-footer">
      <div class="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->
</template>
<script>
import MainNavBar from './inc/MainNavBar.vue';
import MainSideBar from './inc/MainSideBar.vue';
export default{
  components:{
    MainNavBar, MainSideBar
  }
}
</script>