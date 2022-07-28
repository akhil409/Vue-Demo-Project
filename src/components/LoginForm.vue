<template>
     <v-container>
          <v-main >
             <div class="login-page" >
                
             <img class="passportImg" :src="require('../assets/passport-login.png')" >
             
              <v-card :elevation="hover ? 24 : 6" v-model="isLoggedIn" class="card">
                   <!-- <v-card-title>
                           <h2>Login Form</h2>
                   </v-card-title> -->
                   <v-card-text>
                            <!-- Username -->
                            <v-text-field type="text" v-model="username"  @blur="$v.username.$touch()" required placeholder="Email address or phone number"></v-text-field>
                            <span v-if="!$v.username.required && $v.username.$dirty" class="alert alert-danger">Email or phone number is Required!</span>
                            <!-- Password -->
                            <v-text-field v-model="password" 
                                          name="password" 
                                          :value="myPass" 
                                          label="Enter password" 
                                          :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"  
                                          @click:append="() => (value = !value)" 
                                          :type="value ? 'password' : 'text'" 
                                           @blur="$v.password.$touch()" required 
                                          ></v-text-field>
                            <span v-if="!$v.password.required && $v.password.$dirty" class="alert alert-danger">Password is Required!</span>
                            <!-- Login Button -->
                            <v-btn color="primary" @click="loggedIn" class="form-control" :disabled="!isLoggedIn"  >Log In</v-btn>
                            <router-link color="primary" to="/forgot-password" class="log" >Forgotten password?</router-link>
                            <router-view></router-view>
                   </v-card-text>
                   <hr>
                   <v-card-actions class="button">
                            <v-btn @click="createAccount" class="success" >Create New Account</v-btn>
                   </v-card-actions>
              </v-card>
              </div>
          </v-main>
     </v-container>
</template>

<script>
import { required,  alpha} from 'vuelidate/lib/validators'

export default {
    

    name:'LoginForm',
    isLoggedIn:false,
    data(){
        return{
              isLoggedIn:false,
              hover:null,
              username:null,
              password:null,
              value: String,
              myPass:null
        }
    },
    validations:{
        username:{
            required,
            alpha
        },
        password:{
            required,
            alpha
        }

    },
    methods:{
        createAccount(){
            
            this.$router.push(`/register-form`)
        },
        loggedIn(){
            alert('You are Successfully LoggedIn',this.username,this.password);
            this.$router.push(`/post-details`)
        }
    }

}
</script>

<style scoped>
   a{
    text-decoration: none;
   }

   .card{
      width: 200rem;
      flex-direction: column;
      margin-top: 6rem;
      margin-left: 19rem;
      border-radius: 7px;
   }

   .log{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    color: blue; 
   }

   .button{
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    
   }

   .login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
   }

   .passportImg{
    width: 90rem;
    height: 22rem;
    margin-top: 6rem;
   }

</style>