#!/bin/bash

# Prints text in bolg green color
green_bold() {
  echo -e "$(tput bold)$(tput setaf 2)$(echo "$1")$(tput sgr0)"
}

# Reading module name
echo "Module name:"
read -r module_name

# Creating folder
mkdir -p src/modules/"$module_name"
echo "Created folder:
   $(green_bold "src/modules/"$module_name"")
"

# Creating files
cd src/modules/"$module_name" || exit
touch "$module_name".controller.ts "$module_name".service.ts "$module_name".route.ts
echo -e "Created:
  $(green_bold ""$module_name".controller.ts")
  $(green_bold ""$module_name".controller.ts")
  $(green_bold ""$module_name".service.ts")
  $(green_bold ""$module_name".route.ts")
"