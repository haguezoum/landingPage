<template>
  <header class="mx-auto bg-transparent px-2 py-3  top-0 left-0 w-full fixed z-50">
    <div class="header-area flex justify-between">
      <!--left-->
      <div
        class="
          logo
          nav-links
          flex
          justify-between
          items-center
          flex-1
          p-4
        "
      >
        <div class="logo-img w-1/5">
          <!-- <img src="" alt="LOGO" /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
            />
          </svg>
        </div>
        <div class="nav-links flex flex-1">
          <ul class="flex flex-1 justify-between space-x-4 font-bold text-md text-white">
            <li>Feature</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <!--right-->
      <div class="menu flex-1">
        <div class="flex justify-between">
          <div
            class="
              btn-area
              p-4
              flex
              justify-end
              space-x-4
              w-3/4
              uperrcase
            "
          >
            <div><Button text="Log in" classes="bg-transparent" /></div>
            <div><Button text="Register" classes="bg-green-300 hover:bg-green-400 rounded-full"/></div>
          </div>
          <div
            class="
              setting-btn
              w-1/5
              flex
              justify-start
              items-center
            "
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
};
</script>
