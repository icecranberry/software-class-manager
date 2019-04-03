<template>
  <button @click="getAdminList">2323232</button>
</template>

<script>
  // import axios from 'axios'
export default {
    mounted(){
      this.getAdminList()
    },
  methods: {
    getAdminList(){
      // var vm=this;
      this.axios.get('/api/student')
              .then(function(response){
                console.log(response.data)
                /*vm.devdata=response.data.data
                console.log('11111',response.data.data)*/
              })
              .catch(error => {
                console.log(error)
                this.errored = true
              })
              .finally(() => this.loading = false)
    }
  }
};
</script>
