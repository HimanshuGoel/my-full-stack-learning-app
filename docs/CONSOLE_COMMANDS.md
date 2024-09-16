# Console Commands

- [Firebase](#firebase)
- [Angular](#angular)
- [Regex](#regex)
- [Git](#git)
- [Node](#node)
- [Chrome](#chrome)
- [Java](#java)
- [Docker](#docker)

## Firebase

- `firebase login`
- `firebase init (hosting)`
- `firebase deploy`

## Angular

- `npx nx init --integrated`
- `npx nx test`
- `npx nx serve`
- `npx nx graph`
- `npx create-nx-workspace@latest`
- `ng g c home --standalone`
- `ng add @angular-eslint/schematics`
- `ng update @angular-eslint/schematics`

## Regex

- To search including next line - `\[[\s\S\n]+?"`

## Git

- `git tag`
- `git config --list`

## Node

- `npm outdated`, `npm update`
- `node -v`, `node --version`, `npm version`
- `nvm install 6.9.2`, `nvm alias default 6.9.2`, `nvm use 6.9.1`, `nvm ls`
- `npm list -all`, `npm list --depth 1`, `npm list --parseable`, `npm list --json`, `npm list -g`, `npm audit fix --force`
- `npm install npm@latest -g`, `npm i -h`, `npm info package-name`, `npm repo package-name`, `npm i <package-name@1.x>`, `npm i package-name">2.1 < 2.3"`
- update to trivial version package is pre-appended with `^` in package.json file - `npm update package-name`
- update all dependencies through NCU package - npm install -g npm-check-updates -> ncu -u -> npm install

## Chrome

- Angular DOM Debugging

```typescript
const component = ng.getComponent($0);
console.log(component);

const component = $0;
ng.applyChanges(component);

const context = ng.getContext($0);
console.log(context);

const metadata = ng.getDirectiveMetadata($0);
console.log(metadata);
```

## Java

- `javac -version`
- Checking java version - `java --version`
- Creating jar file - `jar cvf TitlecaseConverter.jar .`
- Start jar file by invoking java virtual machine - `java -jar TitlecaseConverter.jar`
- Creating a launchable jar file - `jar cvmf TC-MANIFEST.MF TitlecaseConverter.jar .`

## Docker

- `docker container run --rm -it -p 8080:80 nginx`
- `wsl --list -v`
- `docker version`
- `docker container ls`
- `docker container rm container_id`
- `docker container stop container_id`
- `docker compose up`
- `docker compose down`
- `docker compose ps`
- `docker image inspect nginx | jq -C '.[].Config'`
- `install the docker command auto completion module`
- `giving a name to container and deattach for not to see logs - docker container run -i -t --name web1 -d -p 8080:80 nginx`
- `docker container cp index.html web1:/usr/share/nginx/html/index.html`
- `docker container ps -a`
- `docker container commit web1 custom-nginx`
- `docker container diff web1`
- `docker image build -t custom-nginx:df .`
- `docker container ps`
- `docker container ps -a`
- `docker compose run nmap -V`
- `docker compose run --build nmap`
- `docker system df`
- `docker system prune`
- `ng build --watch --delete-output-path false`
- `docker system prune (to remove all stopped container, all network not used by at least one container, all dangling images, all build cache)`
- `docker-compose build | docker-compose up | docker-compose down | docker-compose down -d`
- `docker pull --help`
- `docker run --help`
- `docker volume ls`
- `docker logs [container_id]`
- `docker volume rm nameOfVolume`
- `docker system prune --volumes`
- removing volumes - `docker rm -v lastContainer`
- filtered images - `docker images | grep custom-node`
- to remove all images and volume - `docker compose down --rmi all --volumes`
- `docker logs '[container_id]'`
- `docker compose logs [service_name]`
- `docker compose logs --tail=5`
- `docker compose logs --follow`
- `docker compose logs --no-color`
- `docker system prune`
- `docker network ls`
