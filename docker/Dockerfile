FROM nginx:1.20

WORKDIR /www/public

RUN apt-get update && apt-get install -y curl gnupg

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
