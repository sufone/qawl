<script>
	import tooltip from '../tooltip';

	export let disabled = false;
	export let href;
</script>

{#if href && !disabled}
	<a use:tooltip on:click {href} {...$$restProps}>
		<slot />
	</a>
{:else}
	<button use:tooltip on:click {disabled} {...$$restProps}>
		<slot />
	</button>
{/if}

<style>
	a,
	button {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		border: none;
		border-radius: 0.25rem;
		display: flex;
		color: #000;
		cursor: pointer;
		font-size: 1.125rem;
		justify-content: center;
		min-width: 2.5rem;
		min-height: 2.5rem;
		outline: none;
		padding: 0.5rem;
		text-align: center;
		transition: all 200ms ease;
	}
	a:focus,
	button:focus {
		background-color: rgba(0, 0, 0, 0.05);
	}
	a:hover,
	button:not(:disabled):hover {
		background-color: rgba(0, 0, 0, 0.096);
	}
	button:disabled {
		color: rgb(0, 0, 0, 0.38);
		cursor: default;
	}
</style>
