import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  findComment(id: String) {
    return 'Comment found!';
  }
}
