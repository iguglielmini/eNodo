#!/bin/bash -x

COLUMNS=12
PS3='Please enter your choice: '
options=("Run Development" "Run QA" "Run Staging" "Run Prod" "Back")
select opt in "${options[@]}"
do
    case $opt in
        "Run Development")
            npm run dev:ios
            ;;
        "Run QA")
            npm run qa:ios
            ;;
        "Run Staging")
            npm run staging:ios
            ;;
        "Run Prod")
            npm run prod:ios
            ;;
        "Back")
            sh ./start.sh
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
