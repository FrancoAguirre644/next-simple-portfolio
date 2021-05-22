import Layout from '../components/Layout'
import { posts } from '../profile'
import Link from 'next/link';

const PostCard = ({post}) => {

    return (
        <div className="col-md-4">
            <div className="card card-body text-center border-primary h-100">
                <div className="overflow mb-2">
                    <img className="card-img-top" src={ post.imageURL } alt=""/>
                </div>
                <h1>{ post.title }</h1>
                <p>{ post.content }</p>
                <Link href={`/post?title=${post.title}`} as={`post/${post.title}`}>
                    <button className="btn btn-outline-primary" type="button">Read</button>
                </Link>
            </div>
        </div>
    )
}

const blog = () => (
    <Layout>
        <div className="row">
            {
                posts.map((post, i) => (
                    <PostCard post= {post} key={i} />
                ))
            }
        </div>
    </Layout>
) 

export default blog;