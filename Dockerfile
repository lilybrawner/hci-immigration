# === Stage 1: Build Vite frontend ===
FROM node:18 AS build-frontend
WORKDIR /app

# Copy only the package files first (faster rebuilds if only code changes)
COPY frontend/package*.json ./frontend/

# Install frontend dependencies
RUN cd frontend && npm install

# Copy the rest of the frontend code
COPY frontend ./frontend

# Build the frontend (Vite will output to `dist/`)
RUN cd frontend && npm run build

# === Stage 2: Backend and serving built frontend ===
FROM node:18
WORKDIR /usr/src/app

# Copy backend package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend code
COPY . .

# Copy built frontend from stage 1 to public directory
COPY --from=build-frontend /app/frontend/dist ./public

# Expose port
EXPOSE 8080

# Run backend server
CMD ["node", "server.js"]