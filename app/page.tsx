export default function Home(){
    return (
        <div>
            <div className = "bg-slate-800 p-4">
                <h1 className="text-4xl text-green-400 text-center ">Brandon Tang</h1>
                <div className="text-center text-green-400">Computer Science Student at Simon Fraser University</div>
            </div>
            <div className="mx-4 my-2">
                Welcome to my website! It is still under development, but click
                <a href = "/terminal" className="text-green-400"> here</a> to learn more about me.
            </div>
        </div>
    )
}