<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores';
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const moduleLists = ref([
  { key : "module1", value : "Module 1" },
  { key : "module2", value : "Module 2" },
  { key : "module3", value : "Module 3" },
  { key : "module4", value : "Module 4" },
  { key : "module5", value : "Module 5" },
  { key : "module6", value : "Module 6" },
  { key : "module7", value : "Module 7" },
  { key : "module8", value : "Module 8" },
  { key : "module9", value : "Module 9" },
  { key : "module10", value : "Module 10" },
]);
function updateAccess(moduleval, accessValue) {
  authStore.updateAccess(moduleval, !accessValue);
}

</script>
<template>
  <div class="centered-container centered-container1">
    <div class="content-box">
      <h1><b>A very simple Vue.js 3 module access check for users by custom directives(v-haveAccess, v-noAccess)</b></h1>
      <br/>
      <ul>
        <li><h3><b>User Access check by <span class="cdir">v-haveAccess</span> directive</b></h3></li>
        <li v-for="moduleList in moduleLists" v-haveAccess="moduleList.key">{{moduleList.value}}</li>
      </ul>
      <ul>
        <li><h3><b>User Access check by <span class="cdir">v-noAccess</span> directive</b></h3></li>
        <li v-for="moduleList in moduleLists" v-noAccess="moduleList.key">{{moduleList.value}}</li>
      </ul>
      <ul>
        <li><h3><b>All Modules From User Store</b></h3></li>
        <li v-for="(access, moduleval) in user.user_role_action_access"><input type="checkbox" @click="updateAccess(moduleval, access)" :checked="access">{{moduleval}}</li>
      </ul>
    </div>    
  </div> 
  <div class="centered-container centered-container2">
    <div class="content-box">
      <p>
        <h1>Files Lists:</h1>
        a. App.vue<br>
        b. main.js<br>
        c. helpers/index.js<br>
        d. stores/index.js<br>
      </p>
    </div>
  </div>
</template>