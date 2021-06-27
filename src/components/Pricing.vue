<template>
    <section id="pricing" class="lg:mt-32 w-full py-24 lg:px-20">
        <header class="w-full mx-auto text-center p-6 mb-10">
            <div class="title text-3xl font-bold mb-16">
                <h3 class="titleSection relative">Pricing <span class="font-mono"> & </span> Plan</h3>
            </div>
            <div class="text-md font-normal text-gray-700">
                <p class="subtitle">       
                    The best value designed for your workplace, starting at just $24/user/month.
                </p>
            </div>
        </header>

        <section class="cards-area flex flex-col sm:flex-row flex-wrap md:flex-nowrap justify-center sm:justify-around  md:-space-x-3 px-5 py-5 items-center">
            <div class="card border border-transparent hover:border-green-800  overflow-hidden flex flex-col w-80 md:w-2/6 mb-10 z-20 hover:z-50" v-for="plan,index in plans" :key="index" :class="plan.title==='BEST Value'?'border border-purple-900  active':''" >
                <header class="bg-white p-4 text-center z-20 px-4 relative" :class="plan.title==='BEST Value'?'active text-white':''">
                     <p class="planTitle py-2 text-white uppercase font-semibold" :class="plan.title !=='BEST Value'?'text-green-600':''">{{plan.title}}</p> 
                     <p class="planPrice text-4xl font-semibold py-2 text-white uppercase" :class="plan.title !=='BEST Value'?'text-gray-400':''"> {{plan.priceing}}</p>
                </header>
                <div class="cardContent bg-white">
                    <ul class="flex justify-center flex-col  px-4 my-4   text-gray-400">
                        <li v-for="feature,index in plan.planfeature" :key="index"  class="p-2 border-b-2 border-dashed border-gray-400 text-center" :class="index === plan.planfeature.length-1?'border-none':''">{{feature}}</li>
                    </ul>
                </div>
                <footer class="bg-white p-4 text-center relative">
                    <p class="text-gray-500  mb-8 ">{{plan.notice}}</p>
                    <button class="bg-gradient-to-tr from-blue-500 to-purple-800 z-40 text-white font-semibold px-6 py-2 rounded-full">Chose plan</button>
                </footer>
                
            </div>
        </section>
    </section>
</template>

<script>
export default {

    name:'Pricing',
    data(){
        return{
            plans:[
                {id:0,title:'BASIC',priceing:'free',planfeature:['Nam sollicitudin dignissim','Cras convallis lacus','Quisque ut metus'],notice:'Interdum et malesuada fames ac ante ipsum primis in faucibus.'},
                {id:1,title:'BEST Value',priceing:'24',planfeature:['Nam sollicitudin dignissim','Cras convallis lacus','Quisque ut metus','Vivamus sit amet','Cras convallis lacus orci'],notice:'Interdum et malesuada fames ac ante ipsum primis in faucibus.'},
                {id:2,title:'PRO',priceing:'54',planfeature:['Nam sollicitudin dignissim','Cras convallis lacus','Nulla lobortis nunc','Vitae scelerisque','Duis sed augue'],notice:'Interdum et malesuada fames ac ante ipsum primis in faucibus.'},
                {id:3,title:'ENTERPRISE',priceing:'34',planfeature:['Nam sollicitudin dignissim','Pellentesque ac bibendum','Vestibulum consequat','Donec commodo','Duis tristique metus'],notice:'Interdum et malesuada fames ac ante ipsum primis in faucibus.'},
            ]
        }
    }
}
</script>

<style lang="css" scoped>
.titleSection::after{
    content: '';
    position: absolute;
    width: 20%;
    height: 12px;
    background-color: purple;
    left: 50%;
    transform: translate(-50%);
    bottom: -30px;
    border-radius: 15px;
}

header.active::before{
    content: '';
    position: absolute;
    z-index:-1;
    width: 160%;
    height: 360px;
    left:50%;
    top: 50%;
    transform: translate(-50%,-80%);
    border-radius: 50%;
    background-image:linear-gradient(to bottom right, rgb(85, 0, 155),rgb(92, 0, 104));
}
.card{
    z-index: 1;
    border-radius: 40px;
    filter: drop-shadow(0 0 0.3rem rgb(143, 143, 143));
}
.card:hover{
    z-index: 3;
}
.card.active{
     z-index: 40; 
}
.card:hover{
    z-index: 99;
}
footer::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    z-index: 2;
    background-color: rgb(62, 158, 86);
    opacity: .3; 
}
</style>