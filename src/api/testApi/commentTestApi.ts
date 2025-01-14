//make testapi for comment
import { CommentApi } from "../interfaces/commentApi.interface";
import comment_list from "../mocks/commentApi.mocks";
import { CommentContent } from "../interfaces/commentApi.interface";
import { UserId } from "../interfaces/userApi.interface";
import { PostCommentParams, UpdateCommentParams, DeleteCommentParams } from "../interfaces/commentApi.interface";
const commentTestApi: CommentApi = {
    get_user_comments: async ({ user_id }: UserId): Promise<CommentContent[]> => {
        let comments: CommentContent[] = [];
        for (const k in comment_list) {
            if (comment_list[k].user_id === user_id) comments.push(comment_list[k]);
        }
        return comments;
    },
    post_comment: async ({ user_id, comment }: PostCommentParams): Promise<UserId> => {
        const comment_id = Object.keys(comment_list).length + 1;
        comment_list[comment_id] = { ...comment, comment_id };
        return { user_id };
    },
    update_comment: async ({ user_id, comment_id, comment }: UpdateCommentParams): Promise<UserId> => {
        comment_list[comment_id] = { ...comment_list[comment_id], ...comment };
        return { user_id };
    },
    delete_comment: async ({ user_id, comment_id }: DeleteCommentParams): Promise<UserId> => {
        delete comment_list[comment_id];
        return { user_id };
    },
    get_rep_comments: function (rep_id: number): Promise<CommentContent[]> {
        let comments: CommentContent[] = [];
        for (const k in comment_list) {
            if (comment_list[k].rep_id === rep_id) comments.push(comment_list[k]);
        }
        return Promise.resolve(comments);
    }
};
export default commentTestApi;
