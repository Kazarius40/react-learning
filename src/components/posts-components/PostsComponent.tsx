import {useEffect, useState} from "react";
import {IPost} from "../../models/posts/IPost.ts";
import {PostComponent} from "./PostComponent.tsx";
// import {IPostsResponse} from "../../models/posts/IPostsResponse.ts";
// import {getAll, postService} from "../../services/api.services.ts";
import {getAll} from "../../services/api.services.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    // useEffect(() => {
    //     postService.getPosts().then(({posts}: IPostsResponse)=> setPosts(posts));
    // }, [])

    useEffect(() => {
        getAll<IBaseResponseModel & { posts: IPost[] }>('posts').then(({posts}) => setPosts(posts));
    }, [])

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    );
};