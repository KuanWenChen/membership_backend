FROM node:18

RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app/member-backend
RUN mkdir -p $HOME
WORKDIR $HOME
COPY . .

RUN npm install -g npm@latest
RUN npm install -g typescript @nestjs/cli dotenv-cli nodemon
RUN npm install
RUN npx prisma generate

RUN mkdir -p $HOME/dist 
RUN chown app:app $HOME
RUN chown -R app:app $HOME/dist
RUN touch .restart
USER app