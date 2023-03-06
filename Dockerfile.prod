FROM node:18-alpine as build

WORKDIR /app

COPY package*.json /app/

RUN npm install 
# RUN npm ci --only=production

COPY ./ /app/

RUN npm run build


#create nginx server
FROM nginx:1.23.3-alpine

COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]