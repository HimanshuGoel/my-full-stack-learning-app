import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private logger: LoggerService, private isAuthorized: boolean) {}

  getHeroes() {
    const auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter((hero) => this.isAuthorized || !hero.isSecret);
  }
}

const heroServiceFactory = (logger: LoggerService, userService: UserService) =>
  new HeroService(logger, userService.user.isAuthorized);

export const heroServiceProvider = {
  provide: HeroService,
  useFactory: heroServiceFactory,
  deps: [LoggerService, UserService]
};
