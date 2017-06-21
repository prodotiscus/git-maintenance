#!/bin/bash
if [ -z "$2" ];
then
	git clone "https://github.com/prodotiscus/$1"
else
	git clone "https://github.com/$2/$1"
fi

cd "$1"
git config user.name prodotiscus
git config user.email f.sizov@yandex.ru
cd ..
