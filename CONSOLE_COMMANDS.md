# Console Commands

Essential console commands for commonly used tools.

## Table of Contents

1. [Firebase](#firebase)
1. [Angular](#angular)
1. [Git](#git)
1. [Node](#node)
1. [Chrome](#chrome)
1. [Java](#java)
1. [Docker](#docker)
1. [Linux](#linux)
1. [Devbox Shell](#devbox-shell)
1. [Pulumi](#pulumi)
1. [AWS Console](#aws-console)
1. [IntelliJ Idea](#intellij-idea)

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

## Git

- `git tag`
- `git config --list`
- `git commit -m "DWB-343: Pulumi stack file"`

## Node

- Clear cache: `npm cache clean --force`
- Check outdated packages: `npm outdated`
- Update packages: `npm update`
- Install packages by ignoring peer dependencies - `npm i --legacy-peer-deps`
- Node.js and npm versions: `node -v`, `node --version`, `npm version`
- Using `nvm`:
  - Install: `nvm install 6.9.2`
  - Set default: `nvm alias default 6.9.2`
  - Use specific version: `nvm use 6.9.1`
  - List versions: `nvm ls`
- Listing npm packages:
  - `npm list --all`
  - `npm list --depth 1`
  - `npm list --parseable`
  - `npm list --json`
  - `npm list -g`
- Install/update npm:
  - `npm install npm@latest -g`
  - `npm audit fix --force`
- Update packages with `npm-check-updates` (ncu):
  1. Install: `npm install -g npm-check-updates`
  1. Update: `ncu -u`
  1. Install: `npm install`

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

- Running class file: javac HelloWorld.java
- Running compiled file: java HelloWorld
- Check Java version: `java --version`
- Check compiler version: `javac -version`
- Create a JAR file: `jar cvf TitlecaseConverter.jar .`
- Run a JAR file: `java -jar TitlecaseConverter.jar`
- Create a launchable JAR file: `jar cvmf TC-MANIFEST.MF TitlecaseConverter.jar .`
- Check Maven version: `mvn -version`
- Run Maven with profile: `mvn clean compile -P dev`

## Docker

- Start a container with Nginx: `docker container run --rm -it -p 8080:80 nginx`
- General commands:
  - List containers: `docker container ls`
  - Remove a container: `docker container rm <container_id>`
  - Stop a container: `docker container stop <container_id>`
- Docker Compose:
  - Start: `docker compose up`
  - Stop: `docker compose down`
  - View services: `docker compose ps`
  - Logs:
    - `docker compose logs [service_name]`
    - Tail: `docker compose logs --tail=5`
    - Follow: `docker compose logs --follow`
- System cleanup:
  - Remove unused data: `docker system prune`
  - Remove volumes: `docker system prune --volumes`
- Container management:
  - Rename: `docker container commit web1 custom-nginx`
  - Inspect image: `docker image inspect nginx | jq -C '.[].Config'`
  - Copy files: `docker container cp index.html web1:/usr/share/nginx/html/index.html`
- Other:
  - View networks: `docker network ls`, `docker inspect platform_default`
  - View volumes: `docker volume ls`
  - Remove volume: `docker volume rm <name>`
  - `docker pc`
  - `docker exec -it mss-api-gateway sh` then `curl -vvv fop-authentication-ldap:2389`

## Linux

- Navigation and Directory Management
  - `pwd` (present working directory)
  - `cd /usr/share/doc/wget/`
  - `cd` (with no argument will take you to the home directory)
  - `ls`
  - `ls -a`
  - `ls -all`
  - `ls -l` (long form)
  - `ls -lh` (with file size)
  - `ls -lht` (logical order)
  - `ls -l /etc`
  - `mkdir data`
  - `rmdir newData/` (remove directory)
- File Management
  - `touch file-name` (create a new empty file)
  - `nano file-name` (open nano text editor)
  - `ctrl + x + y` (close nano text editor)
  - `cp file1 newData/`
  - `cp file* newdata/` (copy all files starting with 'file' name)
  - `mv ../file* .` (move files to the current directory)
  - `rm file?` (delete all files named 'file' followed by a single digit)
  - `rm *` (delete all data in the current directory)
  - `sudo rm -rf *` (forcefully delete all files and directories)
- File Viewing and Searching
  - `cat /etc/passwd`
  - `less .bashrc`
  - `locate adduser` (search files through the file system)
- Package Management
  - `sudo apt update`
  - `sudo apt install`
  - `sudo apt install man-db`
- Networking and Downloads
  - `wget wordpress.org/latest.tar.gz`
  - `wget --help | less`
  - `man wget`
  - `info wget examples simple`
  - `tar xzf nmap-7.70.tar.gz`
- System Information
  - `ip addr` or `ip a`
  - `type wget`
- Command Help and History
  - `man ls`
  - `man wget`
  - `info`
  - `history` (recent 1000 previous commands)
  - `up arrow / down arrow` (cycle through command history)
- Miscellaneous
  - `clear` (twice in the list, kept once)
  - cat /var/log/syslog
  - sudo updatedb
  - cat /etc/group | grep ubuntu (search into file)
  - cat /etc/group | grep ubuntu >> newfile (search into file and move search results to a new file)
  - head /etc/group (print first 10 lines of a file)
  - head /etc/group (print last 10 lines of a file)
  - wc /etc/group (print total words count in a file)
  - echo "hello"
  - chmod +x myscript.sh (to make the script file executable)
- Networking
  - wget pluralsight.com
  - ip route show
  - sudo dhclient
  - ip addr
  - ifconfig
  - netstat -i
  - ss -i
  - host bootstrap-it.com (to check ip address of a website)
  - ping 8.8.8.8 (to repeatedly get response back)
  - ssh ubuntu@10.0.31.131 (remote connetion using ssh)
  - exit (logout from ssh session)
- Archive Files
  - tar xzf latest.tar.gz (extract an archive)
  - tar czf newarchive.tar.gz wordpress (create an archive)
  - tar cf newarchive.tar wordpress (create an archive without gzip compression)
  - gzip newarchive.tar (adding gzip compression)
  - unzip akismet.4.1.zip
  - zip newname.zip *

## Devbox Shell

- devbox shell

## Pulumi

- Deployment & Execution
  - `pulumi up`
  - `pulumi up --yes`
  - `pulumi up --debug`
  - `pulumi down`
  - `pulumi cancel`
  - `pulumi destroy`
  - `pulumi refresh`
- Authentication & Login
  - `pulumi login --local`
  - `pulumi login s3://287278485187-infrastructure-state`
- Stack Management
  - `pulumi stack new`
  - `pulumi stack init`
  - `pulumi stack init test`
  - `pulumi stack ls`
  - `pulumi stack rm`
  - `pulumi stack select`
- Configuration Management
  - `pulumi config set gcp:project ps-pulumi-getting-started`

## AWS Console

- `pf-` (then double tab for suggestions)
- `pf-admin`
- `ss`
- `aws s3 ls`

## IntelliJ Idea

- alt + enter - add import statement
- shift + shift - search pane
