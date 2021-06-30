<template>
    <footer class="w-full  bg-gradient-to-br from-purple-900 to-pink-400 border-2 border-red-400 ">
        <div class="decoration relative w-full pt-28 md:pt-52">
            <!-- wave decoration :) -->
        </div>

        <div class="content flex flex-col justify-center items-center border-2 border-yellow-300">
            <!-- part 1 -->
            <div class="header w-full titile border text-center">
                <h3 class="text-3xl text-white font-bold py-6">What are you waiting for?</h3>
                    <button class="py-2  mt-6 px-6 uppercase text-white bg-green-300 bg-opacity-60 text-lg rounded-full hover:bg-green-700">Get started</button>
            </div>

            <!-- part 2 -->
            <div class="content w-full">
                <div class="img">
                    <img src="/img/icone-3.png" alt="" srcset="">
                </div>
                <div class="">
                    <!-- sm:dropdown   lg:columns -->
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                            <el-dropdown-item disabled>Action 4</el-dropdown-item>
                            <el-dropdown-item divided>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div>
                    <div class="social-media">
                        <ul>
                          <li><a href="">fb</a></li>
                          <li><a href="">tw</a></li>
                          <li><a href="">ig</a></li>
                          <li><a href="">gg</a></li>
                        </ul>
                    </div>
                    <div class="languages">
                        <!-- dropdown -->
                    </div>
                </div>
            </div>


        </div> 
    </footer>
</template>

<script>
export default {
    name:'Footer',
}
</script>
<style lang="css" scoped>
.decoration::before{
    content: '';
    width: 100%;
    height: 720px;
    position: absolute;
    left: 0;
    top: -3px;
    background-image: url(/img/footer-deco.svg);
    background-size: 100% auto;
    background-position: 0 0;
    background-repeat: no-repeat;
}
</style>