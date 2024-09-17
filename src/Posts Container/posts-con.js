import './posts-con.css'

export default function PostsContainer() {
    const postsData = [
        {inner: (<h2>20<br />أكاديمية ترميز</h2>), title: "أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها" },
        {inner: (<h2>hello world</h2>), title: "this is the hello world article" },
        {inner: (<h2>post 3</h2>), title: "this is the body of post 3" },
        {inner: (<h2>post 4</h2>), title: "this is the body of post 4" },
    ];
    const posts = postsData.map((data, index) => {
        return (
            <Bost key={index} desc={data.title}>
                {data.inner}
            </Bost>);
    });
    return (
        <div className='posts-con'>
            {posts}
        </div>
    );
}

function Bost({ desc, children }) {
    return (
        <div className='post'>
            {children}
            <hr />
            <p className='desc'>{desc}</p>
        </div>
    );
}
