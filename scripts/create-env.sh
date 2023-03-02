#!/bin/bash

# Prints text in bolg green color
green_bold() {
  echo -e "$(tput bold)$(tput setaf 2)$(echo "$1")$(tput sgr0)"
}

echo "Add values for env"

# Looping through the contents of .env.example to get env variable names
for var in $(grep -v '^#' .env.example | grep -o '^[^=]\+'); do
    echo -e "Enter value for $(green_bold "$var"):"
    read -r value;
    echo -e "$var = $value\n" >> .env
done
