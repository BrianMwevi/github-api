import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces',
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(username: string, ...args: unknown[]): unknown {
    return username.replace(/\s/g, '').trim().toLocaleLowerCase();
  }
}
