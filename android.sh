#!/bin/bash -x

COLUMNS=12
PS3='Please enter your choice: '
options=("Run Development" "Run QA" "Run Staging" "Run Prod" "Back")
select opt in "${options[@]}"
do
    case $opt in
        "Run Development")
            npm run dev:android
            ;;
        "Run QA")
            npm run qa:android
            ;;
        "Run Staging")
            npm run staging:android
            ;;
        "Run Prod")
            npm run prod:android
            ;;
        "Back")
            sh ./start.sh
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
