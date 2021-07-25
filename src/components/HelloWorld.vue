<template>
  <div>
    <!-- <h1 v-if="show">counter:{{count}}</h1>
    <h1 v-else>please click on toggle</h1>
    <p>{{name}}</p>
    <h1 v-html="message"></h1>
    <p style="white-space:pre-line">{{type}}</p>
    <textarea type="text" v-model="type"/>
    <h1 v-bind:style="{color:'blue'}">color</h1>
     <button @click="increase(5)">add</button>
     <button @click="decrease(5)">subtract</button>
     <button @click="toggleCounter()">toggle</button>
     <button @click="showCounter">hide</button>
     <button @click="changeName()">change</button>
     <input type="text" v-model="inputValue"/>
     <button @click="displayName()">submit</button>
     <h1 v-if="show">{{inputValue}}</h1>
     <h1>{{naam}}</h1> -->
     <!-- <h1 v-for="data in fruits" :key="data.id">{{data.name}}:{{data.price}}</h1> -->
     <input type="text" v-model="naam"/>
     <input type="text" v-model="price"/>
     <button @click="addItem" >submit</button>
     <div class="items" v-for="data in fruits" :key="data.id">
        <p>{{data.id}}</p>
        <p>{{data.name}}</p>
        <p>{{data.price}}</p>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      count:10,
      show:false,
      name:"alok",
      message:"<h1>html function</h1>",
      type:"kumar",
      inputValue:"",
      naam:"",price:0,

      // fruits:[
      //   "apple",
      //   "mango",
      //   "banana",
      //   "papaya",
      //   ]
       fruits:[
         {id:1,name:"apple",price:10},
         {id:2,name:"mango",price:20},
         {id:3,name:"banana",price:30},
        ]

    }
  },
   methods:{
        increase(value){
          if(this.count>=50){
            // this.count=0
            this.show=false
          }else{
            this.count=this.count+value
          }
          this.name="aaaaaa"
        },
        decrease(value){
          if(this.count<=0){
            this.count=0
          }else{
             this.count=this.count-value
          }
        },
        toggleCounter(){
          this.show=true
        },
        showCounter(){
          this.show=false
        },
        changeName(){
          this.name="amarjeet"
        },
        displayName(){
          this.show=true
          this.naam=this.inputValue
        },
        addItem(){
          this.fruits.push({id:4,name:this.naam,price:this.price})
          this.naam=""
          this.price=0
          
        }
   } 
  }

</script>


<style scoped>
.items{
  width: 40%;
  height: 50px;
  background: blue;
  display: flex;
  font-size: 20px;
  justify-content: space-around;
  margin-bottom: 5px;
}

</style>
