const db = require('../database');

const self = {};

// Add User
self.addUser = async ({userName}) => {
    const query = `
        INSERT INTO USER
        values (null, ?, now(), null)
    `;
    await db.raw(query, [userName]);
};

// Find User
self.findUser = async ({userId}) => {
    const query = `
        SELECT * FROM USER
        WHERE user_id = ?
    `;
    const ret = await db.raw(query, [userId]);
    return ret[0];
};

// Add Content
self.addContent = async ({userId, title, content}) => {
    const query = `
        INSERT INTO CONTENT
        values (null, ?, ?, ?, now(), null)
    `;
    await db.raw(query, [userId, title, content]);
};

// Modify Content
self.modifyContent = async ({contentId, title, content}) => {
    const query = `
        UPDATE CONTENT
        SET title = ?, content = ?
        WHERE content_id = ?
    `;
    await db.raw(query, [title, content, contentId]);
};

// Delete Content
self.deleteContent = async ({contentId}) => {
    const query = `
        DELETE FROM CONTENT
        WHERE content_id = ?
    `;
    await db.raw(query, [contentId]);
};

// Find Content
self.findContent = async ({contentId}) => {
    const query = `
        SELECT * FROM CONTENT CT
        INNER JOIN USER U on U.user_id = CT.user_id
        WHERE CT.content_id = ?
    `;
    const ret = await db.raw(query, [contentId]);
    return ret[0][0];
};

// Find Content List
self.findContentList = async () => {
    const query = `
        SELECT * FROM CONTENT CT
        INNER JOIN USER U on U.user_id = CT.user_id
        ORDER BY CT.created_at DESC
    `;
    const ret = await db.raw(query);
    return ret[0];
};

// Add Comment
self.addComment = async ({userId, contentId, comment}) => {
    const query = `
        INSERT INTO COMMENT
        values (null, ?, ?, ?, now(), null)
    `;
    await db.raw(query, [userId, contentId, comment]);
};

// Find Comment
self.findComment = async ({contentId}) => {
    const query = `
        SELECT * FROM COMMENT CM
        INNER JOIN USER U on U.user_id = CM.user_id
        WHERE CM.content_id = ?
    `;
    const ret = await db.raw(query, [contentId]);
    return ret[0];
};

// Add Sub Comment
self.addSubComment = async ({commentId, userId, subcomment}) => {
    const query = `
        INSERT INTO SUB_COMMENT
        values (null, ?, ?, ?, now(), null)
    `;
    await db.raw(query, [userId, commentId, subcomment]);
};

// Find Sub Comment
self.findSubComment = async ({commentId}) => {
    const query = `
        SELECT * FROM SUB_COMMENT SCM
        INNER JOIN USER U on U.user_id = SCM.user_id
        WHERE SCM.comment_id = ?
    `;
    const ret = await db.raw(query, [commentId]);
    return ret[0];
}


module.exports = self;