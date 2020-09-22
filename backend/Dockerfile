FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# WORKDIR /code
WORKDIR /app/backend

COPY Pipfile Pipfile.lock /app/backend/
RUN pip install pipenv && pipenv install --system

COPY . /app/backend

EXPOSE 8000