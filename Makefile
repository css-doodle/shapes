build:
	@npm run build

ship:
	@git subtree push --prefix dist origin gh-pages
