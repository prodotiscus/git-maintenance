#!/bin/bash
git clone "https://github.com/prodotiscus/$1"
cd "$1"
git config user.name prodotiscus
git config user.email f.sizov@yandex.ru
cd ..
