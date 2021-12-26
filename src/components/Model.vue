<template>
    <div class="overly h-screen w-screen bg-black bg-opacity-90 fixed top-0 left-0" v-if="modelIsOpen" @click="closeModel">
        <div class="relative w-full h-full">
            <div class="model absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 backdrop-filter backdrop-blur-xl overflow-hidden border  w-full lg:w-2/4  h-5/6  lg:h-4/6  rounded-lg shadow-inner text-center" v-if="modelIsOpen" >
        
                <div class="w-full h-1/5 p-8 pb-2">
                    <div class="flex justify-between items-center">
                            <span class="title text-3xl font-semibold text-white">Amazing company deserve</span>
                            <span class="closeBtn rounded-full h-6 w-6 border border-black  ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 z-20 text-white transform hover:scale-125 "  @click="closeModel" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                    </div>
                </div>
                <div class=" w-full  h-4/5 p-8 pt-2">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OtLRQdjmFvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'Model',
    computed:{
        modelIsOpen(){
            return this.$store.state.modelIsOpen;
        }
    },
    methods:{
        closeModel(){
            this.$store.commit('toggleModel');
        }
    }
}
</script>

<style lang="css" scoped>
.overly{
    z-index: 90000;
}
.model{
    position: absolute;
    top:40%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 80;
}
</style>