FROM alpine

RUN ["apk", "add", "nodejs", "npm"]

WORKDIR "/app"

ADD "./package.json" "/app"
ADD "./index.js" "/app" 

RUN ["npm", "install"]

EXPOSE 6060

CMD ["npm", "run", "start"]