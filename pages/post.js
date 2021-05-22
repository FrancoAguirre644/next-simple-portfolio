import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { posts } from '../profile'

const post = () => {

    const router = useRouter();

    const currentPost = posts.filter((p) => p.title === router.query.title)[0];

    console.log(currentPost);

    return (
        <Layout>
            <div className="card mb-3">
                <img className="img-fluid" src={ currentPost.imageURL } style={{ height: '200px'}} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{ currentPost.title }</h5>
                    <p className="card-text">{ currentPost.content }</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </Layout>
    )
}

export default post;

