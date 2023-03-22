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
</script>

<ul>
    <li>
        <a href="/Home" class=" text-gray-400"
            >
            <div class="icons">
                <Icon
                src={IoAccessibilityOutline}
                color="white"
                size="25"
            />Home
        </div></a>
    </li>
    <li>
        <a href="./Discover" class="text-gray-400"
            ><div class="icons"><Icon src={compass} color="white" size="25" />
            Discover</div>
            </a>
    </li>
    <li>
        <a href="./Tickets" class="active text-gray-400"
        ><div class="icons"><Icon src={ticket} color="white" size="25" />
        Tickets</div>
        </a>
    </li>
    <li>
        <a href="./Settings" class="text-gray-400"
        ><div class="icons"><Icon src={settings} color="white" size="25" />
        Settings</div>
        </a>
    </li>
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
    }
    .active {
        color: white;
    }

    @media (max-width: 670px) {
       
       
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
</style>
