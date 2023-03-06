FROM node:18-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install --only=dev
#RUN npm ci --only=production

COPY ./ /app/

EXPOSE 3000

CMD ["npm", "run", "dev"]