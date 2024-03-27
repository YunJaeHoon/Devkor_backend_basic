import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller() : 해당 클래스를 컨트롤러로 사용하겠다는 것을 명시하는 데코레이터
@Controller()
export class AppController
{

  // 싱글톤 패턴 : 매번 새로운 클래스를 생성하지 않고, 하나의 클래스만 생성해서 사용하는 것
  constructor(private readonly appService: AppService) {}

  // @Get() : GET 요청이 들어오면 처리한다는 것을 명시하는 데코레이터
  // 컨트롤러의 getHello()가 서비스의 getHello()를 사용. 두 함수는 서로 다른 것이다.
  @Post('/hello')
  getHello(): string
  {
    return this.appService.getHello();
  }
  
}
