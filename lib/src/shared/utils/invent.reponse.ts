import { ResponseStatus } from "../enums";

export class DefaultReponse<T> {
  status: ResponseStatus;
  item: T;
  items: T[];
  message?: string;
  rowCount: number;

  static toResponse<T>(result: T, message?: string): DefaultReponse<T> {
    const defaultResponse = new DefaultReponse<T>();
    defaultResponse.status = ResponseStatus.SUCCESS;
    defaultResponse.message = message;
    defaultResponse.item = result;
    return defaultResponse;
  }
  static toResponseArray<T>(
    result: T[],
    message?: string,
  ): DefaultReponse<T> {
    const defaultResponse = new DefaultReponse<T>();
    defaultResponse.status = ResponseStatus.SUCCESS;
    defaultResponse.message = message;
    defaultResponse.items = result;
    defaultResponse.rowCount = result.length;

    return defaultResponse;
  }
}
