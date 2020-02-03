/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudCutreService } from './crud-cutre.service';

describe('Service: CrudCutre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudCutreService]
    });
  });

  it('should ...', inject([CrudCutreService], (service: CrudCutreService) => {
    expect(service).toBeTruthy();
  }));
});
