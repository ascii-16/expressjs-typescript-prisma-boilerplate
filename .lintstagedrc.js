module.exports = {
  '**/*.{js,ts}': [
    () => 'tsc --skipLibCheck --noEmit',
    'npm run lint:fix',
    'npm run format',
  ],
};
