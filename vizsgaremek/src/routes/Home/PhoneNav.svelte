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
        <a href="/Home" class="active text-gray-400"
            ><Icon src={IoAccessibilityOutline} color="white" size="25" /></a
        >
    </li>
    <li>
        <a href="/Discover" class="text-gray-400"
            ><Icon src={compass} color="white" size="25" /></a
        >
    </li>
    <li>
        <a href="/Tickets" class="text-gray-400"
            ><Icon src={ticket} color="white" size="25" /></a
        >
    </li>
    <li>
        <a href="/Settings" class="text-gray-400"
            ><Icon src={settings} color="white" size="25" /></a
        >
    </li>
</ul>

<style>
    li {
        width: 200px;
        transition: all 0.5s;
    }
    li:hover {
        cursor: pointer;
        background-color: rgba(232, 232, 232, 0.218);
    }

    .active {
        color: white;
    }

    @media (max-width: 670px) {
        ul {
            display: flex;
            justify-content: center;
            gap: 30px;
        }
        .resp-hamburger ul li {
            width: fit-content;
            color: white;
        }
    }
</style>
