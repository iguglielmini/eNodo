#!/bin/bash -x

COLUMNS=12
PS3='Please enter your choice: '
options=("Build Development" "Build QA" "Build Staging" "Build Prod" "Back")
options2=("Bundle" "APK")
select opt in "${options[@]}"
do
    case $opt in
        "Build Development")
            npm run build:dev:android
            ;;
        "Build QA")
            npm run build:qa:android
            ;;
        "Build Staging")
            npm run build:staging:android
            ;;
        "Build Prod")
            select opt2 in "${options2[@]}"
            do
                case $opt2 in
                  "Bundle")
                    npm run bundle:prod:android
                    ;;
                  "APK")
                    npm run build:prod:android
                    ;;
                esac
            done
            ;;
        "Back")
            sh ./start.sh
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
