<template>
  <div class="deleteDiag">
    <v-sheet
      class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
      color="blue-grey darken-3"
      dark
    >
      <div class="grey--text text--lighten-1 text-body-2 mb-4">
        Are you sure you want to delete this user Data?
      </div>

      <v-btn :disabled="loading" class="ma-1" color="grey" plain @click="cancel" >  Cancel </v-btn>

      <v-btn :loading="loading" class="ma-1" color="error" plain @click="remove" >  Delete </v-btn>
    </v-sheet>
  </div>
</template>

<script>

export default{
    name:'DeleteDialog',
    data(){
      return{
           loading:null,
      }
    },
    methods:{
        remove(){
            alert('User Data deleted successfully')
            this.$router.push(`/post-details`)
        },

        cancel(){
          this.$router.push(`/post-details`)
        }
    }


}

</script>

<style scoped>

  .deleteDiag{
    text-align: center;
    margin-top: 10rem;
  }

</style>