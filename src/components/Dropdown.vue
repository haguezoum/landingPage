<template>
    <div class="content p-4 px-7 w-full flex flex-col ">
        <article class="rounded-xl overflow-hidden text-xl bg-white shadow-lg mb-10 transform duration-300 " v-for="article,index in data" :key="index"  >
            <button class=" bg-green-400 text-white  w-full p-4 focus:outline-none flex justify-between items-center" :class="!article.isOpen?'py-5':''" @click="SayHello(article)">
                <p>{{article.title}}</p>

                <span :class="article.isOpen?'transform rotate-180':'transform rotate-0'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div class="lorem transition-all ease-in-out delay-300" v-show="article.isOpen">
                <p class="p-4" >{{article.text}}</p>                
            </div>
        </article>
   
     </div>
</template>

<script>

export default {
    name:'Dropdown',
    data(){
        return{
            
        }
    },
    props:{
        data:Array,
        
    },
     computed:{
        
    },
    methods:{
         closeDropdown(e){
            return e = !e;
         },
         SayHello(article){
            this.$emit('openden',article)
         }
    }
    
}
</script>

<style>

</style>