# build
# FROM node:12.7-alpine AS build-step
FROM node:12.16.2-alpine3.9 AS build-step

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ /app/

RUN npm install -g @angular/cli@7.3.9

ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# run
FROM nginx:1.16.1-alpine
COPY --from=build-step /app/dist/out/ /usr/share/nginx/html/
#Copy default nginx configuration
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
# COPY --from=build-step /app/dist/SWE645_Frontend /usr/share/nginx/html/

# COPY --from=build-step /app/nginx.conf /etc/nginx/conf.d/default.conf


# CMD ng serve --host 0.0.0.0 --disableHostCheck true 
# EXPOSE 53812



# COPY nginx.conf /etc/nginx/nginx.conf


# FROM node:12.16.2-alpine3.9 AS build-step
# WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json ./
# RUN npm install
# RUN npm install -g @angular/cli@7.3.9

# COPY . .
# RUN npm run build
# CMD ng serve --host 0.0.0.0 --disableHostCheck true 
# EXPOSE 4200

# # base image
# FROM node:12.2.0

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install
# RUN npm install -g @angular/cli@7.3.9

# # add app
# COPY . /app

# # start app
# CMD ng serve --host 0.0.0.0 --disableHostCheck true 
# EXPOSE 4200

