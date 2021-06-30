<template>
    <section id="FAQ" class="w-full lg:px-20">
       <div class="w-full h-full flex items-center flex-col justify-center">

           <!-- strt content -->
           <div class="w-full  flex flex-col  lg:flex-row lg:justify-between lg:items-start">
                <div class="w-full mx-auto text-center p-6 mb-10">
                    <div class="heading">
                        <div class="title text-3xl font-bold mb-16 lg:text-left">
                            <h3 class="titleSection relative"> FAQ <span class="font-mono"> & </span> Plan</h3>
                        </div>
                        <div class="text-2xl font-normal text-gray-700 lg:text-left">
                            <p class="subtitle">       
                                Have a question? Check out our frequently asked questions to find your answer.
                            </p>
                        </div>
                    </div>
                      <div class="w-full hidden lg:block mt-6 ">
                        <div class=" flex justify-start items-center">
                            <img src="/img/FAQ2.svg" alt="faq" srcset="" class="w-3/4">
                        </div>
                      </div>
                </div>

                <div class="content p-4 px-7 w-full flex flex-col ">
                    <article class="rounded-xl overflow-hidden text-xl bg-white shadow-lg mb-10 transform duration-300 " v-for="article,index in articles" :key="index" >
                        <button class=" bg-green-400 text-white w-full p-4 focus:outline-none flex justify-between items-center" :class="!article.isOpen?'py-5':''"  @click="article.isOpen = !article.isOpen">
                            <p v-text="article.title"></p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <div class="lorem" v-show="article.isOpen">
                            <p class="p-4" v-text="article.text"></p>
                        </div>
                    </article>

                </div>
           </div><!--first part content-->

           <!-- start carusol -->

          <!-- <div class="w-full h-screen border-2 border-red-500 relative flex flex-col">
              <div class="content  flex flex-row flex-nowrap w-full h-full border  mx-auto border-green-500 ">
                  <article class="flex justify-between items-center mx-4 flex-col w-full sm:w-1/2 absolute  border-2 border-gray-500" v-for="article,index in 4" :key="index">

                    <div class="border w-full h-48 content-center overflow-hidden object-cover rounded-lg">
                        <img src="/img/homer.png" alt="" srcset="" class="h-full w-full object-cover h-">
                    </div> 

                    <div class="w-full p-5 h-1/2">
                        <span class="text-left text-gray-400">Title</span>
                        <p class="text-gray-500 p-4 pl-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, doloremque!</p>
                        <button class="text-pink-700 px-4 py-1  hover:bg-pink-200 rounded-full">Red More</button>
                    </div>
                  </article>
                 
              </div> 
               <div>
                   <ul class="mt-10 flex justify-between items-center w-1/2 mx-auto border border-purple-600 p-6">
                      <li v-for="article,index in 4" :key="index" class="h-5 w-5 rounded-full bg-purple-400"></li>
                  </ul>
               </div>
                
          </div> -->
          <!-- end carusol -->
         
       </div>
    </section>
</template>
<script>

export default {
    name:'FAQ',
    data(){
        return{
            show:false,
            articles:[
                {id:0,title:'Pellentesque ac bibendum tortor?',text:'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.',isOpen:false},
                {id:1,title:'Pellentesque ac bibendum tortor?',text:'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.',isOpen:true},
                {id:2,title:'Pellentesque ac bibendum tortor?',text:'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.',isOpen:false},
                {id:3,title:'Pellentesque ac bibendum tortor?',text:'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.',isOpen:false}
            ]
        }
    },
    methods:{

        activeArticle(){
            this.articles.isOpen = ! this.articles.isOpen
           return 'active hola';
        }
    },
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

/* ********************************************** */
.active{
    @apply bg-pink-600 
    }
.hola{
    background-color: tomato;
}
     
</style>