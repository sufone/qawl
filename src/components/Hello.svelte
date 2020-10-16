<script>
	function handleSayHelloClick(e){
		e.preventDefault();

		alert('Hello!!');
	}
</script>


<button type="button" class="btn" on:click|preventDefault={handleSayHelloClick}>Say Hello</button>


<style lang="scss">
	button{
		margin-top: 20px;
		border: 1px solid #aaa;
		border-radius: 4px;
		background: #eee;
		padding: 7px 15px;
	}
</style>
