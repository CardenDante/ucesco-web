#!/bin/bash

# UCESCO Strapi Setup Script
echo "🚀 Setting up Strapi CMS for UCESCO..."

# Check if strapi directory exists
if [ -d "strapi" ]; then
  echo "⚠️  Strapi directory already exists. Skipping initialization."
  exit 0
fi

# Create strapi directory
mkdir -p strapi
cd strapi

# Initialize Strapi
echo "📦 Creating new Strapi project..."
npx create-strapi-app@latest . \
  --quickstart \
  --no-run \
  --skip-cloud

# Create .env file
echo "📝 Creating Strapi .env file..."
cat > .env << 'EOF'
HOST=0.0.0.0
PORT=1337

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_NAME=ucesco_strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi123
DATABASE_SSL=false

# Secrets (CHANGE THESE IN PRODUCTION!)
APP_KEYS=toBeModified1,toBeModified2,toBeModified3,toBeModified4
API_TOKEN_SALT=toBeModified
ADMIN_JWT_SECRET=toBeModified
JWT_SECRET=toBeModified
TRANSFER_TOKEN_SALT=toBeModified

# Admin
ADMIN_EMAIL=admin@ucesco.org
ADMIN_PASSWORD=Admin123!

# URLs
URL=http://localhost:1337
NEXTJS_URL=http://localhost:3000
EOF

cd ..

echo "✅ Strapi setup complete!"
echo ""
echo "To start Strapi:"
echo "  docker-compose up -d"
echo ""
echo "Strapi will be available at: http://localhost:1337/admin"
echo "Default credentials: admin@ucesco.org / Admin123!"
