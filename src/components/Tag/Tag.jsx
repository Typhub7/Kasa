import React from 'react';

const Tag = (tags) => {
    return (
        <div className="tag_container">
			<span className="tag_text">{tags.tag}</span>
		</div>
    );
};

export default Tag;