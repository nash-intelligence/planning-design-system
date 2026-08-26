FROM node:24.15.0-bookworm-slim AS dependencies

WORKDIR /workspace

COPY package.json package-lock.json ./
RUN npm ci

FROM dependencies AS dev

COPY . .
EXPOSE 6006
CMD ["npm", "run", "storybook:native", "--", "--host", "0.0.0.0"]

FROM dependencies AS build

COPY . .
RUN npm run typecheck && npm run build-storybook:native

FROM scratch AS storybook-export
COPY --from=build /workspace/storybook-static /
