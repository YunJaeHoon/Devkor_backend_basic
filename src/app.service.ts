import { Injectable } from '@nestjs/common';

// export : 해당 클래스를 다른 코드에서 사용할 수 있도록 한다
// @Injectable() : 다른 클래스에서 해당 클래스를 사용할 때, DI(의존성 주입)가 필요할 때 명시하는 데코레이터
@Injectable()
export class AppService
{
  getHello(): string    // 반환 타입 안써도 되긴하는데, 쓰는게 좋다
  {
    return 'Hello World!';
  }
}
