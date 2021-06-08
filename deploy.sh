#!/usr/bin/env sh

if [ "$1" == "newpics" ]; then
    rm ./external-assets/assets/projects/.DS_Store;
    rm ./external-assets/assets/projects/*/.DS_Store;
    rm ./external-assets/assets/thumbnails/.DS_Store;
    rm ./external-assets/assets/thumbnails/*/.DS_Store;

    node src/assets/script/imageRename.js
    node src/assets/script/imageConfig.js
fi

# build
npm run build

# Deploy project
cd dist
cp index.html 404.html
echo 'www.celest.in' > CNAME

git add -A
git commit -m 'deploy'
git push -f git@github.com:backslash-zero/backslash-zero.github.io.git main

# Git vue project
cd ..
echo "push portfolio repo"
git add *;
git commit -m "git commit on deployment"; 
git push;
