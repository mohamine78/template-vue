<template>
  <div class="nav glass">
    <div class="nav-card glass-card glass-blur">
      <div class="nav-logo">
        <div>
          <!--              logo white ubisoft png  -->
          <img
            src="https://assets-global.website-files.com/5fb51d3a1de68d0b45e4216b/6400a41bac896c6eae558051_Ubisoft-logo.png"
            width="100%"
            alt=""
          />
        </div>
      </div>

      <div class="nav-search">
        <input type="search" class="form-control" placeholder="Search" />
      </div>

      <div class="nav-list-container">
        <div class="nav-item">
          <i class="fas fa-chart-line fa-xl"></i>
          <div>Dashboard</div>
        </div>

        <div class="nav-item">
          <div>
            <router-link to="/login">Deconnexion</router-link>
          </div>
        </div>
        <div class="nav-item">
          <i class="fas fa-headset fa-xl"></i>
          <div>Gestion des RDV</div>
        </div>
        <div class="nav-item">
          <i class="fas fa-headset fa-xl"></i>
          <div>Calendrier</div>
        </div>
        <div class="nav-item">
          <i class="fas fa-headset fa-xl"></i>
          <div>Liste d'Appels</div>
        </div>
        <div class="nav-item">
          <i class="fas fa-headset fa-xl"></i>
          <div>Feuille de Présence</div>
        </div>
        <div class="nav-item">
          <i class="fas fa-headset fa-xl"></i>
          <div>Ajout Client/Admin</div>
        </div>
        <div class="nav-item">
          <i class="fas fa-headset fa-xl"></i>
          <router-link to="/login">Deconnexion</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SidebarPage",
};
</script>

<style scoped>
body {
  background-color: rgb(181, 36, 36);
}
a {
  color: white;
}
/*STYLE GLOBAL*/
</style>
