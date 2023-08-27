FROM node:20

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 8000

CMD [ "node", "/home/app/dist/main.js" ]