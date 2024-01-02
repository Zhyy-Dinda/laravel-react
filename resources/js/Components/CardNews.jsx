const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i}className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                    <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}!</h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{data.category}</button>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return (
        <div className="px-10 text-4xl items-center text-center mt-1">
            saat ini belum ada berita{" "}
        </div>
    );
};

const CardNews = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default CardNews;
