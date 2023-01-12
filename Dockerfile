FROM node:18

WORKDIR /home/app/member-backend
COPY . .

RUN npm install -g npm@latest
RUN npm install -g typescript @nestjs/cli dotenv-cli
RUN npm install