import Repository from "./Repository";
import Post from "../model/Post"
import con from "../config/db";

class PostRepository extends Repository {
    async insert(post: Post): Promise<any> {
       return  await this.query(con(), `INSERT INTO tbl_post (title,content) VALUES('${post.title}','${post.content}')`)
    }

    async getAll(): Promise<any> {
        return await this.query(con(), "SELECT* FROM tbl_post")
    }

    async getById(id: number): Promise<any> {
        return await this.query(con(), "SELECT* FROM tbl_post WHERE id=" + id)
    }
    async delete(id:number):Promise<any>{
        return await this.query(con(),"DELETE FROM tbl_post WHERE id="+id)
    }
   async update(id:number,post:Post):Promise<any>{
         await this.query(con(),`UPDATE tbl_post SET title='${post.title}',content='${post.content}' WHERE id=${id}`)
    }
}

export default PostRepository