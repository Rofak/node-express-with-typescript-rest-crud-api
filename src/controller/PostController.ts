import {
    Context,
    ContextRequest,
    ContextResponse,
    DELETE,
    GET,
    Path,
    PathParam, POST,
    PUT,
    ServiceContext
} from "typescript-rest";
import {Tags} from 'typescript-rest-swagger';
import {Request, Response} from "express";
import PostRepository from "../repository/PostRepository";
import Post from "../model/Post";


@Path("/post")
class PostController {

    @ContextRequest
        // @ts-ignore
    request: Request
    @ContextResponse
        // @ts-ignore
    response: Response
    private repo = new PostRepository()

    @GET
    async getAll() {

        const post = await this.repo.getAll();
        this.response.json({
            message: "Found Successfully!",
            data: post
        })
    }

    @Path(":id")
    @GET
    async getById(@PathParam("id") id: number) {
        const post = await this.repo.getById(id)
        if (post.length != 0) {
            this.response.json({
                message: "Found Successfully!",
                data: post
            })
        } else {
            this.response.json({
                message: "data not found in database!",
                data: post
            })
        }

    }

    @POST
    async add(body: Post) {
        await this.repo.insert(body)
        this.response.json({
            message:"inserted successfully!"
        })
    }


    @Path(":id")
    @DELETE
    async delete(@PathParam("id")id: number) {
        const post = await this.repo.getById(id);
        if (post.length != 0) {
            await this.repo.delete(id)
            this.response.json({
                message: "deleted successfully!"
            })
        } else {
            this.response.json({
                message: "data not found in database!"
            })
        }
    }

    @Path(":id")
    @PUT
    async update(@PathParam("id")id: number, body: Post) {
        const post = await this.repo.getById(id);
        if (post.length != 0) {
            await this.repo.update(id, body)
            this.response.json({
                message: "updated successfully!"
            })
        } else {
            this.response.json({
                message: "data not found in database!"
            })
        }
    }
}

export default PostController