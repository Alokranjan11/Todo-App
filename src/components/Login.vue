<template>
 <div>
          <div class="main">
             <div class="box4">
                 <p id="face">facebook</p>
                 <p id="face2">Facebook helps you connect and share<br>with the people in your life.</p>
             </div>
          <div class="main1">   
             <div class="box1">
                 <input type="email" placeholder="Email address and phone number" v-model="email">
                 <input type="password" placeholder="password" v-model="password">
                 <button id="log" @click="submit()">Log In</button>
                 <button id="for">Forgotten password?</button>
                 <button id="new" @click="createNewAccount()">Create New Account</button>
             </div>
             <div class="box2">
                 <h3>Create a page</h3>
                 <p id="box3">for a celebrity, and or business.</p>
             </div>
          </div> 
          </div>
    </div>    
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      password:"",
      email:"",
    }
  },
  methods:{
    submit(){
      console.log(this.password,this.email)
      this.$router.push('/khata')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
            background-color:#f0f2f5 ;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
        .box1{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            background-color:#fff;
            border-radius: 12px;
            border: 1px solid #dddfe2;

        }
        input{
            height: 7vh;
            width: 85%;
            margin: 5px;
            border: 1px solid #dddfe2;
            border-radius: 5px;
            font-size: medium;
            outline-color:#1877f2;
            
        }
        button{
            height: 7vh;
            width: 85%;
            margin: 5px;
        }
        #face{
            color:#1877f2;
            font-size: 110px;
            font-weight: 600;
            height: 2vh;
        }
        #face2{
            font-size: 35px;
        }
        #log{
            background-color: #1877f2;
            border: none;
            border-radius: 7px;
            font-size: 20px;
            color: #fff;
            cursor: pointer;
        }
        #for{
            border: none;
            border-bottom: 1px solid #dddfe2;
            background-color: #fff;
            color:#1877f2 ;
            font-size: 15px;
            text-decoration: underline;
            cursor: pointer;
        }
        #new{
            border: none;
            border-radius: 7px ;
            background-color: #42b72a;
            width: 50%;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            /* alok */
        }
        .main1{
            height: 460px;
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 50px;
            
        }
        .box2{
            display: flex;
            align-items: center;
        }
        #box3{
            margin-left: 5px;
        }
        .box4{
            margin-bottom: 160px;
        }
        @media screen and (max-width:400px) {
         .box4{
             width: 100%;
         }   
         .main1{
             width: 100%;
         }
         .main{
             display: flex;
             flex-direction: column;
             justify-content: center;
             align-items: center;
         }
        }

</style>
