FROM nginx:1.23.1

RUN mkdir /hackyeah
ADD ./dist/hackyeah /hackyeah

ADD ./nginx.conf /etc/nginx/nginx.conf