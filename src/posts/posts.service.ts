import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>
  ) {

  }

  async find(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async create(data) {
    return this.postRepository.save(data);
  }
}
