import axios from 'axios';

// Add Content
export const addContent = ({ userId, title, content }) => {
    return axios.post('http://127.0.0.1:3000/add/content', {
        userId, 
        title, 
        content
    });
};

// Modify Content
export const modifyContent = ({ contentId, title, content }) => {
    return axios.post('http://127.0.0.1:3000/modify/content', {
        contentId, 
        title, 
        content
    });
};

// Delete Content
export const deleteContent = ({ contentId }) => {
    return axios.post('http://127.0.0.1:3000/delete/content', {
        contentId
    });
};

// Find Content
export const findContent = ({ contentId }) => {
    return axios.get('http://127.0.0.1:3000/find/content', {
        params: { contentId }
    });
};

// Find Content List
export const findContentList = () => {
    return axios.get('http://127.0.0.1:3000/find/content/list');
};

// Add Comment
export const addComment = ({ userId, contentId, comment }) => {
    return axios.post('http://127.0.0.1:3000/add/comment', {
        userId, 
        contentId, 
        comment
    });
};

// Find Comment
export const findComment = ({ contentId }) => {
    return axios.get('http://127.0.0.1:3000/find/comment', {
        params: { contentId }
    });
};

// Add Sub Comment
export const addSubComment = ({ commentId, userId, subcomment }) => {
    return axios.post('http://127.0.0.1:3000/add/sub-comment', {
        commentId, 
        userId, 
        subcomment
    });
};

// Find Sub Comment
export const findSubComment = ({ commentId }) => {
    return axios.get('http://127.0.0.1:3000/find/sub-comment', {
        params: { commentId }
    });
};