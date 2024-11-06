# Keyboard Shortcuts

- [Pluralsight Video Player](#pluralsight-video-player)
- [Notepad++](#notepad)
- [MS Teams](#ms-teams)
- [VS Code](#vs-code)
- [Chrome](#chrome)
- [DaVinci Resolve](#davinci-resolve)
- [Copilot](#copilot)
- [Windows](#windows)
- [Github Copilot](#github-copilot)

## Pluralsight Video Player

- `k`, `spacebar` (play, pause), `f` (full screen), `c` (toggle closed captions)

## Docker

- `docker pc`
- `docker network ls`
- inspecting network command - `docker inspect platform_default`
- `docker exec -it mss-api-gateway sh` then `curl -vvv fop-authentication-ldap:2389`

## Notepad++

- `ctrl + numpad` - navigate to the n-th document
- `ctrl + shift + t` - copy the current line to the clipboard
- `shift + delete` - cut
- `ctrl + d` - duplicate the current line
- `ctrl + t` - switch the current line position with the previous line position
- `ctrl + shift + up` - move the current line
- `ctrl + shift + backspace` - delete to the start of the line
- `ctrl + shift + delete` - delete to the end of the line
- `ctrl + alt + enter` - insert new unindent line above the current one
- `ctrl + alt + shift + enter` - insert new unindent line below the current one

## MS Teams

- use `spacebar` to mute/unmute during a call
- in search pane type `/call + tab` to call someone quickly
- use `/available` or `/away` in the search pane to change your status

## VS Code

- find the symbols - `ctrl + shift + o`

- categorize the symbols - `ctrl + shift + o + :`

- change the user preferences - `ctrl + ,`

- preview of markdown file - `ctrl + shift + v`

- go to matched bracket - `ctrl + shift + [`

- side by side editing by split mode - `ctrl + \`

- move line up and down - `alt + down / up`

- copy and paste line up and down - `alt + shift + down/up`

- select all occurrences to find match - `ctrl + d`

- run/pause/run to cursor - `f5`, stop - `shift + f5`, step over - `f10`

- step into - `f11`, step out - `shift + f11`, toggle breakpoint - `f9`

## Chrome

- launch developer tools – `ctrl + shift + i` or `F12`

- launch and open the elements panel - `ctrl + shift + c`

- launch and open console window – `ctrl + shift + j`

- open the command menu - `ctrl + shift + p`

- select mode on/off - `f7`

## DaVinci Resolve

- `ctrl + i` - open media

- `shift + i` - go to beginning to play video

- `ctrl + i` - mark in, `ctrl + o` - mark out

- `j, k, l, shift + z` (zoom to fit), `spacebar` (start/stop play), `b` (blade tool), `alt + click` (adding key frames)

- `ctrl + shift + w` - show video scopes

- `alt + x` - clear out in and out points

- `q` - toggle between source and timeline view

- `hold k + j/l` - move one frame forward/backward

- `up arrow/down arrow` - next or previous shot

- `;/'` - end or beginning of shot, `,/.` - nudge one frame left or right

- `shift + [/]` - trim/shuffle keys

- `ctrl + 9` - open up the inspector pane

- `shift + f` - full view

- `alt + d` - turning node off/on, `alt + f` - hide all except color codes and view, `alt + s` - add a serial node

## Copilot

- see next/previous suggestion - `Alt + ], Alt + [`

- partially accepting suggestions - `Control + →`

## Windows

- capture screenshot - `window + print screen`

## Github Copilot

- `esc` - dismiss suggestion
- `tab` - accept suggestion
- `alt + ]` - next suggestion
- `ctrl + enter` - see 10 suggestions
- `alt + \` - trigger suggestion
- `ctrl + i` - ask copilot

## Console Commands

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
