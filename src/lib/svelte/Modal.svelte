<script>
// @ts-nocheck
import Icon from "svelte-icons-pack/Icon.svelte";

// @ts-ignore
import close from "svelte-icons-pack/io/IoClose";

	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
    
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
    
>
<!-- svelte-ignore a11y-autofocus -->
<button on:click={() => dialog.close()}> <Icon
    src={close}
    color="white"
    size="25"
/></button>
	<div on:click|stopPropagation>
		<slot name="header" />
		<slot />
		
	</div>
</dialog>

<style>
	dialog {
		max-width: 410px;
		border: none;
		padding: 0;
        border-radius: 10px;
        background: linear-gradient(180deg, rgba(43,50,58,1) 0%, rgba(23,28,33,1) 100%);
        color: white;

	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
        margin-right: 10px;
        margin-top: 10px;
        float: right;
	}
</style>
