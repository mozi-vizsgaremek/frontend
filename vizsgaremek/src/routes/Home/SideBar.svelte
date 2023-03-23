<script>
    // @ts-nocheck

    export let username;

    

</script>

<div class="menu">
    <ul class="p-2">
        <p class="menuTitle text-gray-400 pb-2.5">Menu</p>
        <li class="p-2.5 rounded-xl">
            <a href="./Home" class="active text-gray-400">Home</a>
        </li>
        <li class="p-2.5 rounded-xl">
            <a href="./Discover" class="text-gray-400">Discovery</a>
        </li>
        <li class="p-2.5 rounded-xl">
            <a href="./Tickets" class="text-gray-400">Tickets</a>
        </li>
        <li class="p-2.5 rounded-xl">
            <a href="./ManagerShifts" class="text-gray-400">Job</a>
        </li>
    </ul>
    <hr />
    <ul class="p-2">
        <li class="p-2.5 rounded-xl">
            <a href="./Settings" class="text-gray-400">Settings</a>
        </li>
        <li class="p-2.5 rounded-xl">
            <a href="./" class="text-gray-400">Logout</a>
        </li>
    </ul>
</div>
<div class="profile flex items-center">
    <div class="circle" />
    <h3>{username}</h3>
</div>

<style>
    .menuTitle {
        font-size: 13px;
    }
    .active{
        color: white;
    }
    .circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: white;
        margin-right: 10px;
    }
    .profile {
        position: absolute;
        bottom: 20px;
    }
    .profile:hover {
        cursor: pointer;
    }
   
    li {
        width: 200px;
        transition: all 0.5s;
        
    }
    li:hover {
        cursor: pointer;
        background-color: rgba(232, 232, 232, 0.218);
    }
</style>
