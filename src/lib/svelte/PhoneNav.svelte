<script>
    import Icon from "svelte-icons-pack/Icon.svelte";

    // @ts-ignore
    import IoAccessibilityOutline from "svelte-icons-pack/io/IoPlanet";

    // @ts-ignore
    import compass from "svelte-icons-pack/io/IoCompass";

    // @ts-ignore
    import ticket from "svelte-icons-pack/io/IoTicket";

    // @ts-ignore
    import settings from "svelte-icons-pack/io/IoSettings";

    
    import wallet from "svelte-icons-pack/io/IoWallet";

    
    export let role;
    let showJobs = role != "customer";
</script>

<ul>
    <li>
        <a href="./" class="active text-gray-400"
            >
            <div class="icons">
                <Icon
                src={IoAccessibilityOutline}
                color="white"
                size="25"
            /><p>Home</p>
        </div></a>
    </li>
    <li>
        <a href="./Discover" class="text-gray-400"
            ><div class="icons"><Icon src={compass} color="white" size="25" />
                <p>Discover</p></div>
            </a>
    </li>
    <li>
        <a href="./Tickets" class="text-gray-400"
        ><div class="icons"><Icon src={ticket} color="white" size="25" />
            <p>Tickets</p></div>
        </a>
    </li>
    <li>
        <a href="./Settings" class="text-gray-400"
        ><div class="icons"><Icon src={settings} color="white" size="25" />
            <p>Settings</p></div>
        </a>
    </li>
    {#if showJobs}
    <a href="./Job" class="text-gray-400"
    ><div class="icons"><Icon src={wallet} color="white" size="25" />
        <p>Settings</p></div>
    </a>
        {/if}
</ul>

<style>
    ul{
        width: 100%;
        
    }
    li {
        
        width: 100px;
        transition: all 0.5s;
    }
    li:hover {
        cursor: pointer;
        background-color: rgba(232, 232, 232, 0.218);
    }
    .icons{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 12px;
    }
    .active {
        color: white;
    }

    @media (max-width: 700px) {
       
       
         ul {
            display: flex;
            justify-content: center;
            gap: 25px;
        }
        ul li {
            width: fit-content;
            color: white;
        }
    }
    @media (max-width: 450px){
        p{
            display: none;
        }
        ul {
            display: flex;
            justify-content: center;
            gap: 60px;
        }
    }
</style>
