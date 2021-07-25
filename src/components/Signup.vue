<template>
        <div class="main">
             <div class="main1">
                 <div class="header1">
                    <h1 id="header">Sing Up</h1>
                     <p>It's quick and easy.</p>
                  </div>   
                   <div class="box1">
                        <input type="name" placeholder="First Name">
                        <input type="last name" placeholder="Surname">
                   </div>
                   <div class="box2">
                       <input type="email" placeholder="Mobile number or email address">
                       <input type="password" placeholder="New password">
                   </div>
                       <p id="object">Date of birth ?</p>
                    <div class="box3">
                        <select>
                            <option value="date">Select Date</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                             <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select>
                            <option value="month">Select Month</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select>
                            <option value="year">Select Years</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                        </select>
                    </div>
                    <p>Gender ?</p>
                    <div class="box4">
                        <label id="label1"> Female <input type="radio" name="status"></label>
                        <label id="label2"> Male <input type="radio" name="status"></label>
                        <label id="label3"> Custom <input type="radio" name="status"></label>
                    </div>
                    <div class="box5">
                        <p>By clicking sign up , you agree to our Term , Data policy and Cookie Policy. you<br> may receive SMS notifications from us and can not opt out at any time.</p>
                    </div>
                    <div class="box6">
                        <button>Sign Up</button>
                    </div>
             </div>
        </div>
</template>
<script>
export default{
    name:"Signup",
    data(){
        return{

        }
    },
    methods:{

    }
}


</script>
<style scoped>
     .main{
            display: flex;
            justify-content: center; 
     }
        .main1{
            width: 30%;
            border: 1px solid #ccd0d5;
            border-radius: 8px;
            background-color: #fff;
        }
     .box1{
         display: flex;
         margin: 4px;
         border-top: 2px solid #ccd0d5;
     }   
     input{
         height: 6vh;
         width: 93%;
         margin: 5px;
         background-color: #f5f6f7 ;
         border: 1px solid #ccd0d5 ;
         border-radius: 4px;
         outline: none;
         font-size: 15px;
     }
     label{
         height: 1vh;
         width: 1%;
     }
     .box3{
         display: flex;
     }
     select{
         height: 6vh;
         width: 30%;
         margin: 5px;
         outline: none;
         border-radius: 3px;
     }
     button{
         height: 5vh;
         width: 40%;
         color: white;
         font-size: 18px;
         background-color: #00a400;
         border: none;
         border-radius: 3px;
         margin-bottom: 10px;
     }
     .box6{
         display: flex;
         justify-content: center;

     }
     #header{
         margin-bottom: 0px;
         height: 4vh;
     }
     .header1{
         text-align: left;
     }
     #object{
         margin-bottom:0px;
         text-align: left;
     }
     .box4{
         display: flex;
         border: 2px solid blue;
         height: 5vh;
     }
     .box5{
         display: flex;
         justify-content: center;
         font-size: 12px;
     }
</style>