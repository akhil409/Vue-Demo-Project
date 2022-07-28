<template>
      <div class="overflow-hidden">
          <v-app-bar  dark dense height="100px" width="300rem" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80" >
          <v-app-bar-nav-icon class="black--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-tooltip bottom>
           <template v-slot:activator="{ on, attrs }">
          <v-toolbar-title class="text-h6 black--text" dark v-bind="attrs" v-on="on"> <router-link to="/" class="passport">Passport Registration App</router-link> </v-toolbar-title>
                </template>
           <span>Home Page</span>
        </v-tooltip>

          <v-spacer></v-spacer>
          <!-- <div class="routesCenter">
          <router-link to="/" class="routes" >
                   <v-toolbar-title class="validations" > 
                             <v-btn>Vuelidate Validations</v-btn> 
                    </v-toolbar-title>
          </router-link> 
          <router-link to="/add" class="routes">
                   <v-toolbar-title class="validations" > 
                             <v-btn>Custom Validations</v-btn> 
                    </v-toolbar-title>
          </router-link>
          <router-link to="/" class="routes">
                    <v-toolbar-title class="validations" >
                            <v-btn>Login Form</v-btn>
                    </v-toolbar-title>
          </router-link>
          <router-link to="/post-details" class="routes">
                   <v-toolbar-title class="validations" > 
                             <v-btn>Post Details</v-btn> 
                    </v-toolbar-title>
          </router-link>
          </div>
          -->
          <v-spacer></v-spacer>
        
        <v-tooltip bottom>
           <template v-slot:activator="{ on, attrs }">
             <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
              <v-icon class=" white--text">mdi-heart</v-icon>
             </v-btn>
            </template>
           <span>Favourites</span>
        </v-tooltip>

        <v-tooltip bottom>
           <template v-slot:activator="{ on, attrs }">
          <v-btn icon dark v-bind="attrs" v-on="on">
              <v-icon class=" white--text"  >mdi-magnify</v-icon>
          </v-btn>
                    </template>
           <span>Search here..</span>
        </v-tooltip>  
          
        <v-tooltip bottom>
           <template v-slot:activator="{ on, attrs }">  
          <template >
              <v-btn icon class="white--text" dark v-bind="attrs" v-on="on">
                 <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
          </template> 
                      </template>
           <span>Links</span>
        </v-tooltip>      

          </v-app-bar>
          
          <v-navigation-drawer v-model="drawer" absolute bottom temporary class="listGroup" >      <v-list nav dense>
          <v-list-item-group v-model="group"  active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Contact Us</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

      </div>
</template>

<script>
export default {
    name:'NavbarComponent',
    data(){
        return{
        group:null,
        drawer:null
        }
    }

}
</script>

<style scoped>
   
    .routes{
        text-decoration: none;
    }


    .validations{
        margin-left: 10px;
        margin-right: 10px;
        color: aliceblue;
        
    }

    .passport{
        font-weight: bold;
        color: black;
    }

    .routesCenter{
        display: flex;
        justify-content: center;
        margin-right: 10rem;
    }

    a{
        text-decoration: none;
    }

    .listGroup{
        background-color: whitesmoke;
    }

</style>