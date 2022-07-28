<template>
    <div class="cardCenter">
        <v-card :elevation="hover ? 24 : 6" v-model="isLoggedIn" class="card">
                   <v-card-title>
                           <h2>Reset password</h2>
                   </v-card-title>
                   <v-card-text>
                            <!-- Username -->
                            <v-text-field type="text" v-model="username"  @blur="$v.username.$touch()" required placeholder="Email address or phone number"></v-text-field>
                            <span v-if="!$v.username.required && $v.username.$dirty" class="alert alert-danger">Email or phone number is Required!</span>
                            <!-- Old Password -->
                            <v-text-field v-model="passwordOld" 
                                          name="passwordOld" 
                                          :value="myPass" 
                                          label="Enter Old password" 
                                          :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"  
                                          @click:append="() => (value = !value)" 
                                          :type="value ? 'passwordOld' : 'text'" 
                                           @blur="$v.passwordOld.$touch()" required 
                                           ></v-text-field>
                            <span v-if="!$v.passwordOld.required && $v.passwordOld.$dirty" class="alert alert-danger">Old Password is Required!</span>
                            <!-- New Password -->
                            <v-text-field v-model="passwordNew" 
                                          name="passwordNew" 
                                          :value="myPass1" 
                                          label="Enter New password" 
                                          :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"  
                                          @click:append="() => (value = !value)" 
                                          :type="value ? 'passwordNew' : 'text'" 
                                           @blur="$v.passwordNew.$touch()" required 
                                           ></v-text-field>
                            <span v-if="!$v.passwordNew.required && $v.passwordNew.$dirty" class="alert alert-danger">New Password is Required!</span>
                   </v-card-text>
                   <hr>
                   <v-card-actions class="button">
                            <v-btn @click="sendRequest" class="success" >Reset Password</v-btn>
                   </v-card-actions>
              </v-card>
    </div>
</template>

<script>
import { required,  alpha} from 'vuelidate/lib/validators'

export default {

    name: 'ForgotPassword',
    isLoggedIn:false,

    data() {
        return {
              isLoggedIn:false,
              hover:null,
              username:null,
              passwordOld:null,
              passwordNew:null,
              value: String,
              myPass:null,
              myPass1:null,
        };
    },
    validations:{
        username:{
            required,
            alpha
        },
        passwordOld:{
            required,
            alpha
        },
        passwordNew:{
            required,
            alpha
        },
    },

    mounted() {
        
    },

    methods: {
        sendRequest(){
            alert('You have successfully sent.')
            this.$router.push(`/`)
        }
        
    },
}
</script>

<style lang="scss" scoped>

   .button{
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;    
   }

    .card{
      width: 200rem;
      flex-direction: column;
      border-radius: 7px;
      width: 50rem;
      
   }

   .cardCenter{
      display: flex;
      justify-content: center;
      align-items: center;
   }

</style>