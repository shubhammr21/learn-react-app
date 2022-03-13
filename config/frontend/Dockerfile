FROM node:16 AS base
WORKDIR /app
# RUN addgroup --system react \
#     && adduser --system --ingroup react react
COPY frontend/package.json frontend/package-lock.json ./
RUN yarn install && yarn cache clean
# RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

#####################################
#       FRONTEND ENVIRONMENT        #
#####################################

FROM base AS frontend-base
CMD ["yarn", "start"]

FROM frontend-base AS frontend-final
COPY frontend/public ./public
COPY frontend/src ./src
RUN yarn build
