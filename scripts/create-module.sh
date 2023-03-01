#!/bin/bash
echo "Module name? ";
read -r module_name;

# Creating folder
mkdir -p src/modules/"$module_name";
echo "✅ Created module folder";

# Creating files
cd src/modules/"$module_name" || exit;
touch "$module_name".controller.ts "$module_name".service.ts "$module_name".route.ts;
echo "✅ Created controller, service, and routes";