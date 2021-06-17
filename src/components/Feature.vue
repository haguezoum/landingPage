<template>
    <section id="feature" class="py-20 bg-wave bg-cover bg-opacity-60 ">
        <div class="left-0 top-0 w-full h-full feature-blogs flex space-y-32 flex-col container mx-auto z-20">
            <div v-for="(blog,index) in featureBlogs" :key="index" class="w-full flex justify-between items-center">
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
                        <!-- <section>
                            <figure>
                                <img :src="blog.imgPath" alt="" srcset="" class="w-full">
                            </figure>
                        </section> -->
                    </div>
                </div>

            </div>
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