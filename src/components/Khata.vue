<template>
<div class="main">
    <div class="main1">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="price" placeholder="Enter Paisa"/>
        <button @click="addName">add</button>
        <div class="main2" v-for="data in udari" :key="data">
            <h3 :class="data.completed==true ? 'complete' : 'main3'" @click="deleteItem(data)" >{{data.name}}</h3>
            <h3 class="main3">{{data.price}}</h3>
        </div>
        <h3>Total:{{total}}</h3>
    </div>
    <div class="main1">
        <input type="text" v-model="naam" placeholder="Enter Name"/>
        <input type="text" v-model="paisa" placeholder="Enter Paisa"/>
        <button @click="addName2">add</button>
        <div class="main2" v-for="data in udari2" :key="data">
            <h3 :class="data.class==true ? 'complete2' : 'main3'" @click="delItem(data)" >{{data.naam}}</h3>
            <h3 class="main3" @click="delItem(data)">{{data.paisa}}</h3>
        </div>
        <h3>Total:{{Total}}</h3>
    </div>
</div>    
</template>
<script>
export default{
    name: 'Khata',
    data(){
        return{
            name:"",
            price:"",
            naam:"",
            paisa:"",
            total:0,
            Total:0,

            udari:[
                {name:"Alok",price:100,completed:false},
                {name:"Amarjeet",price:5000,completed:false},
                {name:"Rohit",price:4000,completed:false}
            ],
            udari2:[
                {naam:"Amarjeet",paisa:500,class:false},
                {naam:"Alok",paisa:600,class:false},
                {naam:"Dhananjay",paisa:5000,class:false}
            ]

 
        }
    },
    methods:{
        addName(){
            this.udari.push({name:this.name,price:this.price,completed:false})
            this.name=""
            this.price=""
            this.total=0
            this.udari.forEach((data)=>{
                this.total=this.total+parseInt(data.price)
            })
        },
        addName2(){
            this.udari2.push({naam:this.naam,paisa:this.paisa,class:false})
            this.naam=""
            this.paisa=""
            this.Total=0
            this.udari2.forEach((data)=>{
                this.Total=this.Total+parseInt(data.paisa)
            })
        },
        deleteItem(data){
            data.completed=true
            this.udari=this.udari.filter((item)=>{
                console.log(item)
                return item.price !=data.price
            })
        },
        delItem(data){
            data.class=true
            this.udari2=this.udari2.filter((box)=>{
                console.log(box)
                return box.paisa!=data.paisa
            })
        }
    },
    mounted(){
        this.udari.forEach((data)=>{
            this.total=this.total+data.price
           
        }),
          this.udari2.forEach((data)=>{
           this.Total=this.Total+data.paisa
          })
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
    margin: 7px;
}
.main2{
    display: flex;

}
.main3{
    background:#AADCFF;
    width: 50%;
    height: 8vh;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 3px;
    font-size: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;

}
.complete{
    background:#AADCFF;
    width: 50%;
    height: 8vh;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 3px;
    font-size: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    text-decoration:line-through ;
}
button{
    background: #0267AF;
    height: 45px;
    width: 27%;
    border: none;
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 20px;
}
input{
    height: 40px;
    width: 40%;
    background: #fff;
    border: 4px solid #AADCFF;
    outline: none;
    border-radius: 3px;
    font-size: 20px;
    padding-left: 7px;
    margin-top: 10px;
    margin: 7px;
}

</style>