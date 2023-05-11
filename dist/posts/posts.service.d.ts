import { Repository } from 'typeorm';
import { Post } from './posts.entity';
export declare class PostsService {
    private readonly postRepository;
    constructor(postRepository: Repository<Post>);
    find(): Promise<Post[]>;
    create(data: any): Promise<any>;
}
