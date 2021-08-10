import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { removeBlogId } from '../../server/utils/localStorage';
import { QUERY_ME } from '../queries';
import { REMOVE_BLOG } from '../mutations';

const SavedBlogs = () => {
const { loading, data } = useQuery(QUERY_ME);
const [ removeBlog, { error}] = useMutation(REMOVE_BLOG);

const userData = data?.me || {};

  // use this to determine if `useEffect()` hook needs to run again
    const userDataLength = Object.keys(userData).length;

  // create function that accepts the blog's mongo _id value as param and deletes the book from the database
    const handleDeleteBlog = async (blogId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        return false;
    }

    try {
        const response = await removeBlog({
        variables: { blogId},
        });

      // upon success, remove book's id from localStorage
        removeBookId(blogId);
    } catch (err) {
        console.error(err);
    }
    };

  // if data isn't here yet, say so
    if (!userDataLength) {
    return <h2>LOADING...</h2>;
    }

    return (
    <>
        <Jumbotron fluid className='text-light bg-dark'>
        <Container>
            <h1>Viewing saved blogs!</h1>
        </Container>
        </Jumbotron>
        <Container>
        <h2>
            {userData.savedBlogs.length
            ? `Viewing ${userData.savedBlogs.length} saved ${userData.savedBlogs.length === 1 ? 'blog' : 'blogs'}:`
            : 'You have no saved blogs!'}
        </h2>
        <CardColumns>
            {userData.savedBlogs.map((blog) => {
            return (
                <Card key={blog.blogId} border='dark'>
                {blog.image ? <Card.Img src={blog.image} alt={`The cover for ${blog.title}`} variant='top' /> : null}
                <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <p className='small'>Authors: {blog.authors}</p>
                    <Card.Text>{blog.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBlog(blog.blogId)}>
                    Delete this Blog!
                    </Button>
                </Card.Body>
                </Card>
            );
            })}
        </CardColumns>
        </Container>
    </>
    );
};

export default SavedBlogs;
