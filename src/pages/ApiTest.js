import React, {useState, useEffect} from 'react';
import { Intent, Spinner, Dialog, Button } from "@blueprintjs/core";

const ApiTest = () => {

    const [loading, setLoading] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [dialogData, setDialogData] = useState({});
    const [articleInfo, setArticleInfo] = useState([]);

    const close = () => setShowInfo(false);



    const mySpinner = <Spinner intent={Intent.WARNING} />;

    const fetchInfo = (post) => {
       setShowInfo(true); 
       setDialogData(post)
    }
    
    useEffect(() => {
        setLoading(true);     
        const fetchData = async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const body = await result.json();
            setArticleInfo(body);
            setLoading(false); 
        }
        fetchData();
    }, []);

    return(
        <>
            <h1>ApiTest</h1>

            {loading && mySpinner}
            {!loading && articleInfo && 
                <table>
                    <thead>
                        <tr>
                            <th>Post ID</th>
                            <th>Post Title</th>
                            <th>Post Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articleInfo.map((post, key) => (
                            <tr key={key} onClick={() => fetchInfo(post)} >
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            }

            <Dialog isOpen={showInfo} >
                <Button text="Close" onClick={close} />
                <ul>
                    <li>PostID: {dialogData.id} </li>
                    <li>Post Title: {dialogData.title}</li>
                    <li>Post Body: {dialogData.body}</li>
                </ul>
            </Dialog>

        </>
    )
};

export default ApiTest;