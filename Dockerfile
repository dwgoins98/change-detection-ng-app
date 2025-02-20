# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI globally (optional, if not in package.json)
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Expose port 4200 for the Angular dev server
EXPOSE 4200

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]