FROM alpine

RUN ["apk", "add", "nodejs", "npm"]

WORKDIR "/app"

ADD "./package.json" "/app"
ADD "./index.js" "/app" 

RUN ["npm", "install"]

EXPOSE 9090

CMD ["npm", "run", "start"]