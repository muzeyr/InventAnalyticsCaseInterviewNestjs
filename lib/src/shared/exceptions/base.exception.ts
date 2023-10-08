import {HttpException, HttpStatus} from '@nestjs/common';

export class BaseException extends HttpException {
  private readonly responseDetail: string | Record<string, any>;

  constructor(
    response: string | Record<string, any>,
    status: number,
    code?: number
  ) {
    super(response, status);
    this.responseDetail = response;
  }

  errorCode = 401;
  code = 0;

  convertToResponseModel() {
    return {
      status: this.getStatus(),
      statusCode: this.errorCode,
      code: this.code,
      message: [this.responseDetail],
    };
  }
}
