import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlerService {

  // private error: any; May need this later for more dynamic handling
  constructor() { }

  /**
   * Displays and handles errors to the browser console
   * @param { Object } JSON response
   * @returns { Boolean }
   */
  public catchError(error: any = null) { // Should find a cleaner way to track response services for more general usage
    return (error) ? `ErrorHandlerService: ${error.message}` : error;
  }
}
