export const GifItem = ({ category, title, url }) => {
    return (
        <div className="card">
            <h3>{category}</h3>
            <img src={url} alt={title} />
        </div>
    );
};
