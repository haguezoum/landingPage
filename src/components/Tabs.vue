<template>
    <div class="border-2 border-red-600">
       <div>
           <ul class="flex justify-center items-center my-4">
               <span v-for="(tab,index) in tabContent" :key="index">
                   <li class="cursor-pointer py-2 px-4 border-purple-200 border-b-2 transition-all delay-200 ease-in-out" v-text="tab.title" @click="activeTab = index"
                   :class="activeTab===index ? 'text-purple-600 border-purple-500 border-b-4' : ''"></li>
               </span>
           </ul>
           {{activeTab}}
            <div class="w-80 bg-white p-16 text-center mx-auto border">
                    <div v-show="activeTab===0">Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).</div>
                    <div v-show="activeTab===1">Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).</div>
                    <div v-show="activeTab===2">Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).</div>
            </div>
       </div>
    </div>
</template>
q134zv8b

<script>
	export default {
        name:'tabs',
        data(){
            return{
                activeTab:0,
                tabContent:[
                    {
                        title:'tab 1',
                        content:'',
                        img:''
                    },
                     {
                        title:'tab 2',
                        content:'Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).',
                        img:''
                    },
                     {
                        title:'tab 3',
                        content:'Our audience dashboard shows you pre-built segments like top  locations, recent sources of growth, and even customer lifetime value (CLV).',
                        img:''
                    },
                ]
            }
        }
    }
</script>

<!--
# Changelog:

## [1.1] - 2021-05-01
### Added
 - Back/Next buttons

## [1.0] - 2021-05-01
### Added
 - Nav bar with two styles
 - Set tabs title dynamically and render on page
-->