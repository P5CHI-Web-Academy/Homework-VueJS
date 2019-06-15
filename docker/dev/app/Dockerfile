FROM node:10.15.3-alpine

RUN yarn global add @vue/cli

WORKDIR /var/www

EXPOSE 8080

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]

CMD yarn serve --host 0.0.0.0 --port 8080
