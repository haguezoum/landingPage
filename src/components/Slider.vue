<template>
  <section>
      <div class="w-full h-screen border-2 border-red-500 relative flex flex-col">
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
                
        </div> 

  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>