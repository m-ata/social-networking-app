FROM node:16
WORKDIR /social-networking-frontend
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]