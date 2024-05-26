import express from 'express';

export const getPosts = (req, res, next) => {
    console.log(req)
    res.json([{name:'jack' , who:'Owner of  2000cc devid putra bike' ,nickname: 'duniya ks papa'}])
}
export const postPost = (req, res) => {
    console.log(req.body)
    const { content, title } = req.body;
    res.status(201).json({
        message: 'success',
        posts: {
            title: title,
            content:content
        }
    })
}