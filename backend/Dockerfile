FROM python:3.10

RUN apt-get update && apt-get install -y locales

RUN locale-gen ko_KR.UTF-8

ENV LANG ko_KR.UTF-8
ENV LANGUAGE ko_KR:ko
ENV LC_ALL ko_KR.UTF-8

WORKDIR /app/

COPY . /app/

RUN pip install -r requirements.txt

EXPOSE 80

CMD python main.py