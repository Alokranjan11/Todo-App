<template>
    <div class="main">
      <div class="main1">
        <input type="text" v-model="naam" placeholder="enter task"/>
        <button @click="add">add</button>
      <div v-for="data in task" :key="data">
          <h4 class="main2">{{data}}</h4>
      </div>
      </div>
       <button class="remove" @click="del">Delete</button>
    </div>
</template>

<script>
export default {
  name: 'Todo',
  data(){
      return{
          naam:"",

          task:[
              "Sit at the bottom of apple tree",
              "Avoid grtting hit by falling",
              "???",
              "Explain gravity"
          ]
      }
  }, methods:{
      add(){
          this.task.push(this.naam)
          this.naam=""
      },
      del(){
          this.task.pop()
      }
  }
}
</script>
<style scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
}
.main1{
    background:#0798FF ;
    border: 3px solid black;
}
.main2{
    background:#AADCFF;
    width: 90%;
    height: 8vh;
    margin-left: 10px;
    border-radius: 3px;
    font-size: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;

}
.remove{
    height: 7vh;
    width: 10%;
    font-size: 25px;
    border-radius: 5px;
    background: #01C201;
}
button{
    background: #0267AF;
    height: 45px;
    width: 17%;
    border: none;
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 20px;
}
input{
    height: 40px;
    width: 65%;
    background: #fff;
    border: 4px solid #AADCFF;
    outline: none;
    border-radius: 3px;
    font-size: 20px;
    padding-left: 7px;
}

</style>