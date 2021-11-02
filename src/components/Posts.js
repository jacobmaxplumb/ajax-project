const Posts = (props) => {
    const doSomething = () => {
        console.log('hello');
    }

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={doSomething}>Click Me</button>
        </div>
    )
}

