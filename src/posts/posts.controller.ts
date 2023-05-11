import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { HttpService } from '@nestjs/axios';

@Controller('posts')
export class PostsController {

  constructor(
    private postService: PostsService,
    private httpService: HttpService,
  ) {

  }

  @Get()
  async all()  {
    let posts = await this.postService.find();
    for (let i = 0; i < posts.length; i++ ) {
      const post = posts[i];

      const response = await this.httpService.axiosRef.get(`http://localhost:8001/api/posts/${post.id}/comments`);

      posts[i] = {
        ...post,
        comments: response.data,
      }
    }

    return posts;
  }

  @Post()
  async create(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.postService.create({
      title,
      description,
    })
  }
}
