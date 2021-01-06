#!/bin/bash -x

COLUMNS=12
PS3='Please enter your choice: '
options=("Run Metro Bundler" "Run iOS" "Run Android" "Build iOS" "Build Android")
select opt in "${options[@]}"
do
    case $opt in
        "Run Metro Bundler")
            npm run start-react
            ;;
        "Run iOS")
            sh ./ios.sh
            ;;
        "Run Android")
            sh ./android.sh
            ;;
        "Build iOS")
            sh ./build-ios.sh
            ;;
        "Build Android")
            sh ./build-android.sh
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
