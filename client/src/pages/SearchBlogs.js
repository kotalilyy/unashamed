import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { searchBlogs } from '../../server/utils/localStorage';
import { saveBlogIds, getSavedBlogIds } from '';
import { SAVE_BLOG } from '../mutations';

const SearchBlogs = () => {
  // create state for holding returned google api data
    const [searchedBlogs, setSearchedBlogs] = useState([]);
  // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
    const [savedBlogIds, setSavedBlogIds] = useState(getSavedBlogIds());
    const [saveBlog, {error}] = useMutation(SAVE_BLOG);
  // set up useEffect hook to save `savedBlogIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
    return () => saveBlogIds(savedBlogIds);
    });

  // create method to search for blogs and set state on form submit
    const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
        return false;
    }

    try {
        const response = await SearchBlogs(searchInput);

        if (!response.ok) {
        throw new Error('something went wrong!');
        }

        const { items } = await response.json();

        const blogData = items.map((blog) => ({
        blogId: blog.id,
        authors: blog.volumeInfo.authors || ['No author to display'],
        title: blog.volumeInfo.title,
        description: blog.volumeInfo.description,
        image: blog.volumeInfo.imageLinks?.thumbnail || '',
        }));

        setSearchedBlogs(blogData);
        setSearchInput('');
    } catch (err) {
        console.error(err);
    }
    };

  // create function to handle saving a blog to our database
    const handleSaveBlog = async (blogId) => {
    // find the book in `searchedBooks` state by the matching id
    const blogToSave = searchedBlogs.find((blog) => blog.blogId === blogId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        return false;
    }

    try {
        const response = await saveBlog({
        variables: {book: {...blogToSave}}
        });

      // if blog successfully saves to user's account, save book id to state
        setSavedBlogIds([...savedBlogIds, blogToSave.blogId]);
    } catch (err) {
        console.error(err);
    }
    };

    return (
    <>
        <Jumbotron fluid className='text-light bg-dark'>
        <Container>
            <h1>Search for Blogs!</h1>
            <Form onSubmit={handleFormSubmit}>
            <Form.Row>
                <Col xs={12} md={8}>
                <Form.Control
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    size='lg'
                    placeholder='Search for a blog'
                />
                </Col>
                <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                    Submit Search
                </Button>
                </Col>
            </Form.Row>
            </Form>
        </Container>
        </Jumbotron>

        <Container>
        <h2>
            {searchedBlogs.length
            ? `Viewing ${searchedBlogs.length} results:`
            : 'Search for a blog to begin'}
        </h2>
        <CardColumns>
            {searchedBlogs.map((blog) => {
            return (
                <Card key={blog.blogId} border='dark'>
                {blog.image ? (
                    <Card.Img src={blog.image} alt={`The cover for ${blog.title}`} variant='top' />
                ) : null}
                <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <p className='small'>Authors: {blog.authors}</p>
                    <Card.Text>{blog.description}</Card.Text>
                    {Auth.loggedIn() && (
                    <Button
                        disabled={savedBlogIds?.some((savedBlogId) => savedBookId === book.bookId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveBlog(blog.blogId)}>
                        {savedBlogIds?.some((savedBlogId) => savedBlogId === book.bookId)
                        ? 'This blog has already been saved!'
                        : 'Save this Blog!'}
                    </Button>
                    )}
                </Card.Body>
                </Card>
            );
            })}
        </CardColumns>
        </Container>
    </>
    );
};

export default SearchBlogs;
