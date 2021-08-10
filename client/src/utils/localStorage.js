export const getSavedBlogIds = () => {
    const savedBlogIds = localStorage.getItem('saved_blogs')
        ? JSON.parse(localStorage.getItem('saved_blogs'))
        : [];

    return savedBlogIds;
    };

    export const saveBlogIds = (blogIdArr) => {
    if (blogIdArr.length) {
        localStorage.setItem('saved_blogs', JSON.stringify(blogIdArr));
    } else {
        localStorage.removeItem('saved_blogs');
    }
    };

    export const removeBlogId = (blogId) => {
    const savedBlogIds = localStorage.getItem('saved_blogs')
        ? JSON.parse(localStorage.getItem('saved_blogs'))
        : null;

    if (!savedBlogIds) {
        return false;
    }

    const updatedSavedBlogIds = savedBlogIds?.filter((savedBlogId) => savedBlogId !== blogId);
    localStorage.setItem('saved_blogs', JSON.stringify(updatedSavedBlogIds));

    return true;
    };