<template>
    <section id="FAQ" class="w-full lg:px-20">
       <div class="w-full h-full flex items-center justify-center">
           <div class="w-full  flex flex-col  lg:flex-row lg:justify-between lg:items-start  ">

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
                    <article class="rounded-xl overflow-hidden text-xl bg-white shadow-lg mb-10 transform duration-300 " v-for="article,index in 4" :key="index" >
                        <button class=" bg-green-400 text-white w-full p-4 focus:outline-none flex justify-between items-center" :class="!show?'py-5':''" @click="show = !show" >
                            <p>Pellentesque ac bibendum tortor?</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <div class="lorem" v-show="show">
                            <p class="p-4">Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.</p>
                        </div>
                    </article>

                </div>
           </div><!--first part content-->
         
       </div>
    </section>
</template>
<script>

export default {
    name:'FAQ',
    data(){
        return{
            show:false,
        }
    },
    mounted:{
        activeArticle:function() {
            console.log('active');
            // console.log(this.classList);
            // console.log(this.classLists);
            // return 'active';
        }
    },
    computed:{
    
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
</style>