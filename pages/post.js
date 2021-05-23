import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { posts } from '../profile'

const post = () => {

    const router = useRouter();

    const currentPost = posts.filter((p) => p.title === router.query.title)[0];

    return (
        <Layout>
            <div className="card mb-3">
                <img className="img-fluid" src="https://images.ctfassets.net/51xdmtqw3t2p/2w0H06U9MYaJNsonXhyD3I/0cd72a4b4e01460bcd7145e984b05c38/Portada_react.jpg?w=1280&q=50" style={{ height: '200px'}} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">React</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit tristique laoreet, convallis scelerisque turpis phasellus quam sodales vulputate curae, nisl litora at diam tempor orci id vehicula.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </Layout>
    )
}

export default post;

