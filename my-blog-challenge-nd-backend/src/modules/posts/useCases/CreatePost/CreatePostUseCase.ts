import { Request, Response } from 'express';
import { PostsRepository } from '../../infra/typeorm/repositories/PostsRepository';

export class CreatePostUseCase {
	async handle(request: Request, response: Response): Promise<void | Response> {
		const postsRepository = new PostsRepository();

		const createPostUseCase = new CreatePostUseCase();

		console.log(createPostUseCase)

		return response.sendStatus(204);
	}
}