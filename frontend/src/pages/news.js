const NewsPage = () => {
    const [news, setNews] = React.useState([]);

    // Fetch news on component mount
    React.useEffect(() => {
        fetch('/news')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error fetching news:', error));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Music News</h1>
            {news.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4"
                        >
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="rounded-lg mb-4"
                                />
                                <h3 className="font-bold text-lg">{article.title}</h3>
                                <p className="text-sm text-gray-600">{article.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading news...</p>
            )}
        </div>
    );
};

export default NewsPage;
