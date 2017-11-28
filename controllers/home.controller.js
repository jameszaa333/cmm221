const Thumbnails = require('../models/thumbnails')
const News = require('../models/news')

exports.index = function(req,res){
<<<<<<< HEAD
<<<<<<< HEAD
    let content = {
        highlight: {
            url: '/assets/images/home/banner/highlight.jpg',
            title: '7 For 7'
        }
//        ,
//        thumbnail: [
//            {
//                url: '/assets/images/home/banner/thumbnail-1.jpg',
//                title: 'Never Ever'
//            },
//            {
//                url: '/assets/images/home/banner/thumbnail-2.jpg',
//                title: 'Hard Carry'
//            },
//            {
//                url: '/assets/images/home/banner/thumbnail-3.jpg',
//                title: 'You Are'
//            },
//            {
//                url: '/assets/images/home/banner/thumbnail-4.jpg',
//                title: 'Fly'
//            }
//        ]
    }
        const thumbnailsPromise = new Promise(function(resolve, reject){
        Thumbnails.findAll().then(function(thumbnails){
        resolve(thumbnails)
    })
})
        const newsPromise = new Promise(function(resolve, reject){
        News.findAll().then(function(news){
        resolve(news)
    })
})
    
    Promise.all([
        thumbnailsPromise,
        newsPromise
    ]).then(function(values){
        let thumbnails = values[0]
        let news = values[1]
        
        content.thumbnails = thumbnails
        content.news = news
        
        res.render('home.twig', content)
    })
    
//    News.findAll().then(function(news){
//        content.news = news
//        res.render('home.twig', content)
//    })
    
=======
    res.render('home.twig')
>>>>>>> parent of 9e27217... Add content to twig
=======
    res.render('home.twig')
>>>>>>> parent of 9e27217... Add content to twig
//    let content = {
//        banner: [
//            {
//                id: 1,
//                url: '//image/img-1.jpg'
//            },
//            {
//                id: 2,
//                url: '//image/img-1.jpg'
//            }
//        ]
//    }
//    
//    res.json(content)
}