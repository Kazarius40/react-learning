import {useEffect, useState} from "react";
import {IPost} from "../../models/posts/IPost.ts";
import {IPostsResponse} from "../../models/posts/IPostsResponse.ts";
import {postService} from "../../services/api.services.ts";
import {PostComponent} from "../post/PostComponent.tsx";

export const PostsComponent = () => {

const [posts, setPosts] = useState<IPost[]>([]);

useEffect(() => {
    postService.getPosts().then(({posts}: IPostsResponse)=> setPosts(posts));
}, [])

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    );
};