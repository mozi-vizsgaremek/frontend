<script>
    //@ts-nocheck
    export let role;
    let showJobs = role != "customer";

    let isDropdownOpen = false; // default state (dropdown close)

    const handleDropdownClick = () => {
        isDropdownOpen = !isDropdownOpen; // togle state on click
    };

    // @ts-ignore
    const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
        // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
        if (
            relatedTarget instanceof HTMLElement &&
            currentTarget.contains(relatedTarget)
        )
            return; // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null)
        isDropdownOpen = false;
    };
</script>

<nav>
    <div class="logo">
        C
        <p>V</p>
    </div>
    <ul>
        <li><a href="../">Home</a></li>
        <li><a href="../Discover">Explore</a></li>
        <li><a href="../Tickets">Tickets</a></li>
        {#if showJobs}
            <li><a href="../Job">Job</a></li>
        {/if}
    </ul>
    <div class="profile" on:focusout={handleDropdownFocusLoss}>
        <button class="btn m-1" on:click={handleDropdownClick} />
        <ul
            class="dropdown-content bg-black rounded-xl menu p-2 shadow  w-52"
            style:visibility={isDropdownOpen ? "visible" : "hidden"}
        >
            <li>
                <button class="btn "><a href="../Settings">Settings</a></button>
            </li>
            <li><button class="btn"><a href="../Logout">Logout</a></button></li>
        </ul>
    </div>
</nav>

<style>
    nav {
        z-index: 99;
        background: #161616;
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        justify-content: space-between;
        color: #FAF5E9;
    }
    .logo {
        margin-left: 100px;
        display: flex;
    }
    p {
        color: rgba(249,116,0,1);
    }
    ul {
        display: flex;
        gap: 30px;
    }
    li {
        display: flex;
        transition: all 0.5s;
    }
    li:hover {
        color: rgba(249,116,0,1);
    }

    .profile {
        width: 35px;
        height: 35px;
        background-image: url("$lib/images/avatar.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        margin-right: 100px;
    }
    .profile ul {
        display: flex;
        flex-direction: column;
    }
    button {
        width: 35px;
        height: 35px;

        border-radius: 50%;
    }
    button:hover {
        cursor: pointer;
    }
    .dropdown-content {
        background-color: #161616a0;
    }
</style>
