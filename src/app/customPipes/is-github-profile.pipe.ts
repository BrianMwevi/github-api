import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';

@Pipe({
  name: 'isGithubProfile',
})
export class IsGithubProfilePipe implements PipeTransform {
  transform(repoName: string, ...args: unknown[]): unknown {
    return repoName.slice(-9) === 'github.io' ? 'Github Portfolio' : repoName;
  }
}
