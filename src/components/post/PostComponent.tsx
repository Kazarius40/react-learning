import {FC} from "react";
import {IPost} from "../../models/posts/IPost.ts";

type PostTypeProps = {
    item: IPost;
}

export const PostComponent: FC<PostTypeProps> = ({item}) => {
    return (
        <div>
            {item.id} {item.title}
        </div>
    );
};