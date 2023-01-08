export default {
    User: [
        {
            userId: 1,
            name: '신짱구',
            createdAt: '2023-01-08 11:30:30'
        },
        {
            userId: 2,
            name: '신짱아',
            createdAt: '2023-01-08 11:30:30'
        },
        {
            userId: 3,
            name: '봉미선',
            createdAt: '2023-01-08 11:30:30'
        },
        {
            userId: 4,
            name: '신형만',
            createdAt: '2023-01-08 11:30:30'
        }
    ],
    Content: [
        {
            contentId: 1,
            userId: 1,
            title: '신짱구의 게시글',
            content: '이 글은 신짱구의 첫번째 게시글 입니다.',
            createdAt: '2023-01-08 13:11:20',
            updatedAt: null
        },
        {
            contentId: 2,
            userId: 3,
            title: '봉미선의 게시글',
            content: '봉미선의 하루 계획은 미정입니다.',
            createdAt: '2023-01-08 13:11:20',
            updatedAt: null
        },
        {
            contentId: 3,
            userId: 4,
            title: '신형만의 게시글',
            content: '아빠의 하루는 만원 지하철로부터 시작됩니다. 화이팅',
            createdAt: '2023-01-08 13:11:20',
            updatedAt: null
        }
    ],
    Comment: [
        {
            commentId: 1,
            userId: 1,
            contentId: 3,
            comment: '아빠 힘내세요!',
            createdAt: '2023-01-08 15:11:20',
            updatedAt: null
        },
        {
            commentId: 2,
            userId: 3,
            contentId: 3,
            comment: '여보 힘내세요!',
            createdAt: '2023-01-08 15:11:20',
            updatedAt: null
        },
        {
            commentId: 3,
            userId: 2,
            contentId: 1,
            comment: '오빠 재미있는 글 좀 써줘.',
            createdAt: '2023-01-08 15:11:20',
            updatedAt: null
        }
    ],
    SubComment: [
        {
            subcommentId: 1,
            commentId: 1,
            userId: 3,
            subcomment: '짱구도 화이팅~',
            createdAt: '2023-01-08 17:11:20',
            updatedAt: null
        }
    ]
}