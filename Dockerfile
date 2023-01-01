# Dockerfile 
FROM node:11.13.0-alpine 

# create a destination directory 
RUN mkdir -p /usr/src/nuxt-app 
WORKDIR /usr/src/nuxt-app 

COPY . /usr/src/nuxt-app/
RUN npm install 
RUN npm run build 

EXPOSE 3000 

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm" , "start"]

