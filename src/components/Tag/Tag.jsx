import React from 'react';

const Tag = (logementProps) => {
    return (
        <div className="tag_container">
			<span className="tag_text">{logementProps.tag}</span>
		</div>
    );
};

export default Tag;