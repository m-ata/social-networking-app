FROM node:16
WORKDIR /social-networking-backend
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]