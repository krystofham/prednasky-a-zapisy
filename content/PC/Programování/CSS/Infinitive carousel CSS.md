```html
<style>
	.upper{
	display:flex;
	overflow-x:auto
	}
	.upper::-webkit-scrollbar {
		display:none;
	}
	.uperrseconddiv{
		display:flex;
			animation: spin 5s infinitive linear;
	}
	@keyframes spin {
		from{translate:0;}
		to {translate:-100%}
		
	}
</style>
```