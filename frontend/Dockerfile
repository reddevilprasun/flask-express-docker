# Build stage
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Final stage
FROM node:18-alpine

WORKDIR /app
# Copy the build output from the first stage
COPY --from=build /app/dist ./dist
# Copy the public folder from the first stage
COPY --from=build /app/public ./public
# Copy package.json for production install
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
