<script>
	export let page = 1;
	let odd = page % 2 != 0;
</script>

<div class="quran-page {odd ? 'odd' : 'even'}">
	<img
		class="page-image"
		alt="Page {page} of the Madina mushaf"
		src="../public/mushaf/{page}.png"
	/>
	<svg viewBox="0 0 300 13" class="page-footer">
		<text
			x="50%"
			y="50%"
			fill="#333"
			font-size="13"
			dominant-baseline="middle"
			text-anchor="middle">{page}</text
		>
	</svg>
</div>

<style>
	.quran-page {
		border: 1px solid #ccb;
		padding: 0.75rem;
		position: relative;
		width: 50%;
	}
	.quran-page::before,
	.quran-page::after {
		background: #f2f2d2;
		border: 1px solid #ccb;
		content: '';
		bottom: 0;
		position: absolute;
		width: 100%;
	}
	.quran-page::before {
		z-index: -1;
		top: 3px;
	}
	.quran-page::after {
		z-index: -2;
		top: 6px;
	}
	.quran-page.odd {
		background: linear-gradient(
			90deg,
			#ddc 0%,
			#f2f2e2 10%,
			#fff 50%,
			#f2f2e2 95%,
			#eed 100%
		);
		border-left: 1px solid #998;
	}
	.quran-page.odd::before {
		left: 3px;
	}
	.quran-page.odd::after {
		left: 6px;
	}
	.quran-page.even {
		background: linear-gradient(
			270deg,
			#ddc 0%,
			#f2f2e2 10%,
			#fff 50%,
			#f2f2e2 95%,
			#eed 100%
		);
		border-right: 1px solid #998;
	}
	.quran-page.even::before {
		right: 3px;
	}
	.quran-page.even::after {
		right: 6px;
	}

	.quran-page .page-image {
		width: 100%;
		height: auto;
	}

	.quran-page .page-footer {
		width: 100%;
		height: auto;
	}
</style>
