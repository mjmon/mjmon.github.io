npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

npx tailwindcss init --full

npm run build
git subtree push --prefix dist origin gh-pages

subtree reference
https://gist.github.com/cobyism/4730490