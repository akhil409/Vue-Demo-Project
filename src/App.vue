<template>
  <v-app class="main">
    <v-main>
      <!-- <LoginForm /> -->
        <NavbarComponent /> 
        <v-container> 
        
        <!-- <div class="app text-center">
            <router-link to="/">Vuetify Vuelidate Register Form</router-link>
           <router-link to="/add">Vuelidate Submit Form</router-link> 
            <router-link to="/form" >VForm</router-link>
        </div>  -->

      <router-view></router-view>

       </v-container>
       <v-bottom-navigation class="navbt" color="teal" white grow>
        <v-btn>
          <span class="black--text">Recents</span>
          <v-icon class="black--text">mdi-history</v-icon>
        </v-btn>
        <v-btn>
          <span class="black--text">Favourites</span>
          <v-icon class="black--text">mdi-heart</v-icon>
        </v-btn>
        <v-btn>
          <span class="black--text">Nearby</span>
          <v-icon class="black--text">mdi-map-marker</v-icon>
        </v-btn>
       </v-bottom-navigation> 
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
// import LoginForm from './components/LoginForm.vue';
// import VVFormValidate from './components/VVFormValidate.vue';
// import FormValidations from './components/FormValidations.vue';

export default {
  name: 'App',

  components: {
     NavbarComponent,
    // LoginForm,
},

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .main{
      background-color:#f2f3f4;
   }

   .app{
    display: flex;
    justify-content: space-between;
    text-decoration: none;
   }

   .navbt{
    background-color: aliceblue;
   }

</style>
