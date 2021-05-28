FROM redis:latest

RUN ["mkdir", "/dockerdemo"]

WORKDIR "/dockerdemo"

RUN ["touch", "hi.txt"]

#RUN ["echo Hello world > hi.txt"]

CMD ["ls", "-lrt"]

ENTRYPOINT ["date"]