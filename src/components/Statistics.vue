<template>
  <section id="statistics" class="py-5 bg-white dark:bg-dark" :dir="$t('dir')">
    <div
      class="
        conatiner
        px-8
        mx-auto
        w-full
        flex flex-col
        md:flex-row
        justify-around
        items-center
      "
    >
      <!-- ----------------------------------------------------- -->
      <div class="p-5 flex justify-center flex-col">
        <span class=""
          ><p
            class="
              font-bold
              text-3xl
              sm:text-4xl
              lg:text-6xl
              text-purple-primary
              dark:text-purple
               text-center
            "
          >
            12 {{$t('statistics.first.month')}}
          </p></span>
        <span
          class="
            flex
            items-center
            justify-center
            lg:justify-start
            space-x-5
            mt-8
            text-xl
            md:text-2xl
            lg:text-3xl
            font-semibold
            w-full
           
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 md:h-10 md:w-10  text-gray-500 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          <p class="text-gray-500 ">{{$t('statistics.first.freeTrial')}}</p>
        </span>
      </div>

      <!-- ----------------------------------------------------- -->

      <div class="p-5 flex justify-center flex-col">
        <span
          ><p
            class="
              font-bold
              text-3xl
              sm:text-4xl
              lg:text-6xl
              text-purple-primary
              dark:text-purple
              text-center
            "
          >
            +80{{$t('statistics.second.countUsers')}}
          </p></span
        >

        <span
          class="
            flex
            items-center
            justify-center
            lg:justify-start
            space-x-5
            mt-8
            text-xl
            md:text-2xl
            lg:text-3xl
            font-semibold
            w-full
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 md:h-10 md:w-10 text-gray-500 dark:text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
            />
          </svg>
          <p class="text-gray-500">{{$t('statistics.second.activeUser')}}</p>
        </span>
      </div>

      <!-- ----------------------------------------------------- -->
      <div class="p-5 flex justify-center flex-col">
        <span
          ><p
            class="
              font-bold
              text-3xl
              sm:text-4xl
              lg:text-6xl
              text-purple-primary
              dark:text-purple
              text-center
            "
          >
            +180{{$t('statistics.last.countProviders')}}
          </p></span
        >

        <span
          class="
            flex
            items-center
            justify-center
            lg:justify-start
            space-x-5
            mt-8
            text-xl
            md:text-2xl
            lg:text-3xl
            font-semibold
            w-full
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 md:h-10 md:w-10 text-gray-500 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <p class="text-gray-500">{{$t('statistics.last.providers')}}</p>
        </span>
      </div>

      <!-- ---------------------------------------------------- -->
    </div>
  </section>
</template>

<script>
export default {
  name: "Statistics",
};
</script>
