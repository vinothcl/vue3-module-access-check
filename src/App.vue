<script setup>
import { ref } from 'vue'

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
</script>
<template>
  <div class="centered-container" style="padding-bottom: 0;">
    <div class="content-box">
      <h1><b>A very simple Vue.js 3 module access check for users by custom directive</b></h1>
      <br/>
      <ul>
        <li><h2><b>User have Access for below Modules</b></h2></li>
        <li v-for="moduleList in moduleLists" v-haveAccess="moduleList.key">{{moduleList.value}}</li>
      </ul>
      <ul>
        <li><h2><b>User don't have Access for below Modules</b></h2></li>
        <li v-for="moduleList in moduleLists" v-noAccess="moduleList.key">{{moduleList.value}}</li>
      </ul>
      <ul>
        <li><h2><b>All Modules</b></h2></li>
        <li v-for="moduleList in moduleLists">{{moduleList.value}}</li>
      </ul>
    </div>    
  </div> 
  <div class="centered-container" style="padding-top: 0;">
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