import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class PostInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();

    return next.handle().pipe(
      map((value) => {
        if (req.method === 'POST' && res.statusCode === HttpStatus.CREATED) {
          res.status(HttpStatus.OK);
        }

        return value;
      }),
    );
  }
}
