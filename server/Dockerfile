FROM node:16.17.0-bullseye-slim
WORKDIR /server/
COPY ./package.json /server/
RUN yarn
COPY . .

CMD ["yarn", "dev"]
# ====== production ===========
# CMD ["yarn", "start"]
# ====== testing =========
# CMD ["yarn", "test", "--colors"]