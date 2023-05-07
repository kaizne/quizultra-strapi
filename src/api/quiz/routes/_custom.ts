module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/quizzes/:slug',
            handler: 'quiz.findOne',
            config: {
                auth: false
            },
        }
    ]
}
