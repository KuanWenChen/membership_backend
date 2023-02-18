import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('HttpExceptionFilter');
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const isDevelop = process.env.NODE_ENV === 'development';
    const isInternalServerError = status === HttpStatus.INTERNAL_SERVER_ERROR;
    if (isInternalServerError) {
      this.logger.error(exception, exception.stack);
    }

    const exceptionRes = exception.getResponse();
    let message = exceptionRes;
    if ((exceptionRes as any)?.message !== undefined) {
      message = (exceptionRes as any)?.message;
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      name: exception.name,
      message: message,
      stack: isDevelop && isInternalServerError ? exception.stack : undefined,
    });
  }
}
