<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/adminlte/index3.html" class="brand-link">
      <img src="/adminlte/dist/img/AdminLTELogo.png" 
        :alt="$store.state.app.name"
        class="brand-image img-circle elevation-3"
        style="opacity: .8">
      <span class="brand-text font-weight-light">{{ $store.state.app.name }}</span>
    </a>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="/adminlte/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" 
            data-widget="treeview" 
            role="menu" 
            data-accordion="false">
          <MainSideItem icon="fas fa-home" link="/">
            Home
          </MainSideItem>
          <MainSideItem icon="fas fa-users" link="/users">
            Users
          </MainSideItem>
          <MainSideItem icon="fas fa-about" link="/about">
            About
          </MainSideItem>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import MainSideItem from './MainSideItem.vue';
export default{
  components: {
    MainSideItem
  }
}
</script>