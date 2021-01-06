#!/bin/bash -x

COLUMNS=12
PS3='Please enter your choice: '
options=("Build Development" "Build QA" "Build Staging" "Build Prod" "Back")
select opt in "${options[@]}"
do
    case $opt in
        "Build Development")
            npm run build:dev:ios
            ;;
        "Build QA")
            npm run build:qa:ios
            ;;
        "Build Staging")
            npm run build:staging:ios
            ;;
        "Build Prod")
            npm run build:prod:ios
            ;;
        "Back")
            sh ./start.sh
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
