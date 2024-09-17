import Header from './Header/header';
import PostsContainer from './Posts Container/posts-con';
import './App.css';

export default function App() {
    return (
        <>
            <Header />
            <div className='container'>
                <PostsContainer />
            </div>
        </>
    );
}