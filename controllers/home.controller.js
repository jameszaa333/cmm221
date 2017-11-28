exports.index = function(req,res){
    let content = {
        highlight: {
            url: '/assets/images/home/banner/highlight.jpg',
            title: '7 For 7'
        },
        thumbnail: [
            {
                url: '/assets/images/home/banner/thumbnail-1.jpg',
                title: 'Never Ever'
            },
            {
                url: '/assets/images/home/banner/thumbnail-2.jpg',
                title: 'Hard Carry'
            },
            {
                url: '/assets/images/home/banner/thumbnail-3.jpg',
                title: 'You Are'
            },
            {
                url: '/assets/images/home/banner/thumbnail-4.jpg',
                title: 'Fly'
            }
        ]
    }
    
    res.render('home.twig', content)
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