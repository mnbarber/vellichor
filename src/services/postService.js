const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/posts`;

const create = async (postData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error('Failed to create post');
        }

        return response.json();
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};

const index = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export default {
    create,
    index,
};