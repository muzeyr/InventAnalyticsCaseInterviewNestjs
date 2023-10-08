# Base image
FROM node:18.16.1

# Çalışma dizinini ayarla
WORKDIR /apps
COPY ["package.json","package-lock.json"]
# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update --fix-missing
RUN apt-get install -y curl
RUN apt-get install -y build-essential libssl-dev

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 4.2.4

# Install nvm with node and npm
#RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash \
#    && source $NVM_DIR/nvm.sh \
#    && nvm install $NODE_VERSION \
#    && nvm alias default $NODE_VERSION \
#    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# nvm use
#RUN nvm use 16.4.1

# Gerekli dosyaları kopyala
COPY . .

# nx ve @nrwl/cli yükle
RUN echo "Installing nx and @nrwl/cli" \
    npm install -g nx && \
    npm install -g @nrwl/cli

# bcrypt
RUN echo "Installing bcrypt" \
    npm install bcrypt

    # pm2 yükle
RUN echo "Installing pm2" \
    npm install -g pm2


# Nest.js bağımlılıklarını yükle
RUN echo "Installing NestJs" \
    npm install -g @nestjs/cli


RUN echo "Installing Dev env." \
    ./env_dev.sh


RUN echo "Users Api Server" \
    nx serve user \

RUN echo "Books Api Server" \
    nx serve book \
 \
    # Çalıştırma komutlarını belirle
RUN echo "pm2  server added" \
CMD bash -c 'pm2 start pm2.yaml --no-daemon'




