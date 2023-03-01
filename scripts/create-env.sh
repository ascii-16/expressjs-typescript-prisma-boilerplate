#!/bin/bash

echo "Add values for env"

# Looping through the contents of .env.example to get env variable names
for var in $(grep -v '^#' .env.example | grep -o '^[^=]\+'); do
    echo "Enter value for $var:"
    read -r value;
    echo -e "$var = $value\n" >> .env
done
