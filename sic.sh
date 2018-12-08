#!/bin/sh
echo "# stockincloset" >> README.md
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/gmartins97/stockincloset.git
git push -u origin master
