<script>
// @ts-nocheck

    import { flip } from "svelte/animate";
    import { fly } from "svelte/transition";
    import {notifications} from "$lib/notifications";

    import Icon from "svelte-icons-pack/Icon.svelte";

    // @ts-ignore
    import IoAlert from "svelte-icons-pack/io/IoAlertCircle";

    export let themes = {
        danger: "#D2042D",
        success: "#84C991",
        warning: "#f0ad4e",
        info: "#5bc0de",
        default: "#aaaaaa",
    };
</script>

<div class="notifications">
    {#each $notifications as notification (notification.id)}
        <div
            animate:flip
            class="toast"
            style="background: {themes[notification.type]};"
            transition:fly={{ y: 30 }}
        >
        
            <div class="content"><Icon
                src={IoAlert}
                color="white"
                size="20"
            />
            {notification.message}</div>
            {#if notification.icon}<i class={notification.icon} />{/if}
        </div>
    {/each}
</div>

<style>
    .notifications {
        position: fixed;
        top: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 10px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        pointer-events: none;
        
        
    }

    .toast {
        flex: 0 0 auto;
        margin-bottom: 10px;
        width: 400px;
        height: 100%;
        border-radius: 10px;
        
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    }

    .content {
        padding: 20px;
        text-align: center;
        justify-content: center;
        display: flex;
        gap: 5px;
        color: white;
        font-weight: 500;
        font-size: 13px;
    }
</style>
