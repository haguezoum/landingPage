<template>
  <header class="bg-purple-900 bg-opacity-50 lg:px-2  top-0 left-0 w-full fixed z-50">
    <div class="header-area flex w-full h-full justify-between my-auto mx-auto  ">
      <!--left-->
      
       <div class="logo nav-links flex w-1/3 md:flex-1 justify-start md:justify-between items-center p-4  my-auto">
      
        <div class="lg:hidden relative m-3">
          <nav x-data="{ open: false }">
              <button class="text-white w-10 h-10 relative focus:outline-none" @click="open = !open">
                  <span class="sr-only">Open menu</span>
                  <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                      <span aria-hidden="true" class="block absolute h-1 w-7 rounded-full bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                      <span aria-hidden="true" class="block absolute  h-1 w-7 rounded-full bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                      <span aria-hidden="true" class="block absolute  h-1 w-7 rounded-full bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
                  </div>
              </button>
          </nav>
        </div>  
        
        <div class="logo-img h-full mx-8 ">
          <img src="/img/logo.png" alt="" srcset="" class="w-full">
        </div>
        <div class="nav-links hidden lg:flex-1 md:flex ">
          <ul
            class="
              flex 
              w-3/4
              justify-between
              space-x-4
              font-bold
              text-md text-white
            "
          >
            <li   v-for="navLink,index in navLinks " :key="index" class="navLink relative hover:border-b-4 rounded-full hover:border-white cursor-pointer p-2 px-3 transition-all ease-in-out duration-100 delay-100	hover:opacity-40 hover:bg-purple-900 bg-opacity-30">{{navLink.name}}</li>
          </ul>
        </div>
      </div> 

      <!--right-->
       <div class="menu w-2/3 md:flex-1  my-auto">
        <div class="flex justify-end md:justify-between items-center">
          <div class="hidden btn-area p-4 sm:flex justify-end space-x-4 w-3/4 uperrcase">
            <div><Button text="Log in" classes="bg-transparent" /></div>
            <div>
              <Button
                text="Register"
                classes="bg-green-300 hover:bg-green-400 rounded-full"
              />
            </div>
          </div>
          <div class="setting-btn w-1/5 flex justify-start items-center">
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 hover:transform  hover:rotate-180 hover:scale-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div> 

    </div>
  </header>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Header",
  components: {
    Button,
  },
  data(){
      return{
        open:false,
        navLinks:[
          {
            name:'Feature'
          },
          {
            name:'Testimonials'
          },
          {
            name:'Pricing'
          },
          {
            name:'FAQ'
          },
          {
            name:'Contact'
          },
        ],
        
      }
    }
};
</script>

<style lang="css" scoped>
.navLink::after{
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0%;
  height: 5px;
  margin-top: 1rem;
  background-color: aliceblue;
  border-radius: 10px;
  transition: all .5s ease-in-out;
}
.navLink:hover::after{
  width: 100%;
  left:0%
}
</style>
