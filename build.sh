#!/bin/bash

# Step 1: Compile TypeScript files according to tsconfig.json
tsc

# Step 2: Ensure all import statements have the right format in JavaScript files
find . -type f -name "*.js" -print0 | while IFS= read -r -d $'\0' file; do
    # Ensure all imports are converted to relative paths and append '.js' if missing
    sed -i '' -E "s|from '([^']*)';$|from './\1.js';|g" "$file"
    sed -i '' -E "s|from \"([^\"]*)\";$|from \"./\1.js\";|g" "$file"

    # Correcting imports that should not have './' prepended (e.g., URLs or absolute paths remain unchanged)
    sed -i '' -E "s|from './(http[s]?://[^']*)\.js';$|from '\1';|g" "$file"
    sed -i '' -E "s|from \"./(http[s]?://[^\"]*)\.js\";$|from \"\1\";|g" "$file"
done

echo "Build and modification complete!"
