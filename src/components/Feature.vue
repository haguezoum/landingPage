<template>
    <section id="feature" class="py-32 bg-wave bg-cover bg-scroll bg-no-repeat bg-top bg-opacity-50 ">
        <div class="left-0 top-0 w-full h-full feature-blogs flex flex-wrap items-center justify-between  container mx-auto z-20">
            <div class="item w-full h-screen">
                <section class="flex items-start justify-between">
                    <div class="img  flex-1">
                       <figure class="transform skew-y-12 scale-50 overflow-hidden rounded-md shadow-md " style=" transform: perspective(718px) rotateY(19deg) translateX(4rem)">
                           <img src="/img/app-screen-2.jpg" alt="" srcset="" class="">
                       </figure> 
                    </div>
                    <div class="text  flex-1">
                        <section>
                            <strong>
                                <p class="title text-3xl">
                                    Act on it-all in one dashboard
                                </p>
                            </strong>
                            <p class="text text-2xl text-gray-800 py-20">
                                Our audience dashboard shows you pre-built segments like top locations, recent sources of growth, and even customer lifetime value (CLV).
                            </p>
                        </section>
                         <div class="btn">
                        <Button text="Hello World" classes="px-6 py-2 rounded-full bg-purple-800"/>
                        </div>
                    </div>
                   
                </section>
            </div>
            <!-- ---------------------- -->
            <div class="item w-full  h-screen">
                <section class="flex items-start justify-between flex-row-reverse">
                    <div class="img flex-1">
                       <figure class="transform skew-y-12 overflow-hidden rounded-md shadow-md " style="transform:perspective(718px) rotateY(-19deg) translateX(-4rem)">
                           <img src="/img/app-screen-2.jpg" alt="" srcset="" class="w-full"> 
                       </figure> 
                    </div>
                    <div class="text  flex-1">
                        <section class="">
                            <strong>
                                <p class="title text-3xl">
                                    Act on it-all in one dashboard
                                </p>
                            </strong>
                            <p class="text text-2xl text-gray-800 py-20">
                                Our audience dashboard shows you pre-built segments like top locations, recent sources of growth, and even customer lifetime value (CLV).
                            </p>
                        </section>
                        <div class="btn">
                          <Button text="Hello World" classes="px-6 py-2 rounded-full bg-green-800"/>
                         </div>
                    </div>
                    
                </section>
            </div>
            <!-- ---------------------- -->
            <div class="item last w-full  h-screen">
                <section class="flex justify-center flex-col-reverse w-full mx-auto">
                    <div class="img w-1/2 mx-auto">
                       <figure class="transform skew-y-12 overflow-hidden rounded-md shadow-md " style="transform:perspective(718px) rotateX(19deg) translateX(0rem)">
                           <img src="/img/app-screen-2.jpg" alt="" srcset=""  class="w-full">
                       </figure> 
                    </div>

                    <div class="text w-full">
                        <section class="">
                            <strong class="text-center">
                                <p class="title  text-3xl">
                                    Accelerating to Intelligent Enterprise
                                </p>
                            </strong>
                            <div class="w-2/6 mx-auto my-7">
                                <ul class="flex items-center justify-between text-white font-semibold">
                                    <li class="hover:border-4 hover:border-yellow-50 cursor-pointer">Pellentesque</li>
                                    <li class="hover:border-4 hover:border-yellow-50 cursor-pointer">Donec</li>
                                    <li class="hover:border-4 hover:border-yellow-50 cursor-pointer">Vestibulum</li>
                                </ul>
                            </div>
                            <p class="text text text-2xl text-gray-800 pb-20 w-2/3 block mx-auto text-center font-semibold">
                                Our audience dashboard shows you pre-built segments like top locations, recent sources of growth, and even customer lifetime value (CLV).
                            </p>
                        </section>
                    </div>
                    
                </section>
            </div>

            <!-- <div v-for="(blog,index) in featureBlogs" :key="index" class="w-full flex justify-between items-center">
                <div class="blocContent flex-1 flex justify-start flex-col p-10 text-right">
                    <strong class="text-3xl mb-8">{{blog.title}}</strong>
                    <p class="text-xl text-gray-400  my-10">{{blog.text}}</p>

                     <Button :text="blog.btnContent" class="px-5 py-2 rounded-full bg-purple-700 font-semibold w-1/4"/>
                </div>

                <div class="imgContent flex-1 h-full flex justify-center relative">
                    <div class="absolute left-0 top-0 w-full h-full">
                         <section class=" transform  skew-y-6 -skew-x-2 -translate-y-36 border rounded-md shadow-md overflow-hidden">
                            <img :src="blog.imgPath" alt="" srcset="" class="w-full">
                        </section> 
                        <section>
                            <figure>
                                <img :src="blog.imgPath" alt="" srcset="" class="w-full">
                            </figure>
                        </section>
                    </div>
                </div>

            </div> -->
        </div>
    </section>
</template>

<script>
import Button from '@/components/Button'
export default {
    name:'Feature',
    components:{
        Button
    },
    data(){
        return{
            featureBlogs:[
                {
                    title:'Act on it-all in one dashboard',
                    text:'Our audience dashboard shows you pre-built segments like top locations, recent sources of growth, and even customer lifetime value (CLV).',
                    imgPath:'/img/app-screen-2.jpg',
                    btnContent:'see ditail'
                },
                {
                    title:'Act on it-all unique value proposition',
                    text:'With strong technical foundations, has allowed us to leverage business experts to build hundreds of improvements.',
                    imgPath:'/img/app-screen-1.jpg',
                    btnContent:'see ditail'
                }
            ]
        }
    }
}
</script>


<style scoped>
#feature{
    
}
</style>